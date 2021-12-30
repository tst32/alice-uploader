/**
 * alice-uploader-fetch for node.js
 *
 * @example
 * ```
  import * as fetcher from 'alice-uploader-fetch'
  let urls_images = [
'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
]
let urls_sounds = ['https://www.mboxdrive.com/1.mp3']
 const res = fetcher.DoDownload(urls_images, urls_sounds)  //default headers from _config
```
 */

import fetch from 'node-fetch';
import * as fsPromises from 'fs/promises';
import * as TOML from '@iarna/toml'
import { urlimg, urlsnd, headers_defaults, headers_getimg, filesarray, buffsize } from '../_config.js'
import { Headers, Response, Request } from 'node-fetch';
// import { FormData } from 'formdata-polyfill/esm.min.js' //doesnot rocks
import { default as FormData } from 'form-data'
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util'
import { Timestampo } from './timestampo.js';
import { env } from 'process';
import { stringify } from 'querystring';
let envvars = (await fsPromises.readFile('.env', { encoding: 'utf8' })) || null
export const ID = process.env.ID || (TOML.parse(envvars)).ID || null
export const OA = process.env.OA || (TOML.parse(envvars)).OA || null
console.log(ID, OA)
if (!!!ID && !!!OA) {
  console.log('err, no config, exit');
  process.exitCode = 1;
  process.exit(1);
}
/**
 * запрос на url, возвращает Response (BufferArray) 
 * @function
 * @param {string} url
 * @param {number} buffsize
 * @param {Dict} headers
 * @returns {Response} resp 
 */
export const Downloader = async (url, buffsize, headers) => {
  let heads = new Headers()
  headers.forEach(pair => heads.append(...pair))
  headers = heads || headers_def
  const resp = await fetch(url, {
    highWaterMark: buffsize * buffsize,
    headers
  });
  if (!resp.ok) throw new Error(`unexpected response ${resp.statusText}`);
  return resp
}

/**
 * сохраняет объект Response по переданному пути или под именем timestamp.ext в текущей директории,  возвращает отчет false при ошибке 
 * или строку с именем файла при успехе 
 * @function
 * @param {Response} response
 * @param {string} path
 * @param {string} ext
 * @returns {(boolean|string)}  path of created file or false if fails 
 */
export const ResponseFilewriter = async (response, path, ext) => {
  path = path || `${(new Timestampo).hex}${ext}`
  try {
    const streamPipeline = promisify(pipeline);
    await streamPipeline(response.body, createWriteStream(path));
    return path
  } catch (err) {
    console.error('When a request is error ', err);
    return false
  }
}

/**
 * DoDownload(urlimg, urlsnd) batch downloader method
 * принимает аргументы массив ссылок картинки, массив ссылок звуки скачивает в локальную ФС, 
 * возвращает отчет о результате как объект с массивами имен файлов|false при ошибке
 * @function
 * @param {string[]} urlimg
 * @param {string[]} urlsnd
 * @returns {string[]|boolean[]} obj of arrays of uploaded filenames || falses 
 **/
export const DoDownload = async (urlimg = urlimg || [], urlsnd = urlsnd || []) => {
  let Downloadresult = {
    images: Array,
    sounds: Array
  };
  Downloadresult = { images: [], sounds: [] };

  for (let value of urlimg) {
    let respimg = await Downloader(value, 10256, headers_getimg)
    if (!respimg) continue
    let _a = (await ResponseFilewriter(respimg, null, '.png'))
    Downloadresult.images.push(_a)
    console.log(Downloadresult.images)
  }
  for (let value of urlsnd) {
    let respsnd = await Downloader(value, 1024, headers_defaults)
    if (!respsnd) continue
    let _a = await ResponseFilewriter(respsnd, null, '.mp3')
    Downloadresult.sounds.push(_a)
    console.log(Downloadresult.sounds)
  }
  return Downloadresult
}

/**
 * Uploader
 * делает реквест в API dialogs  yandex загружает файл из файловой системы 
 * принимает url_ya путь yandex API  endpoint различает  два типа images и sounds
 * принимает имя(путь) файла для upload
 *
 * @function
 * @param {string} url
 * @param {number} buffsize
 * @param {Dict} headers
 * @returns {Response} resp 
 */
export const Uploader = async (url_ya, headers, fileName) => {
  if (fileName=='' || fileName===undefined || fileName === null) throw new TypeError(`node-fetch cannot find ${fileName} for ${url_ya}.Abort`)
  const form = new FormData();
  let buffer;
  buffer = await fsPromises.readFile(fileName);
  if (/.*sounds$/.test(url_ya)) { 
    // sounds  API endpoint
    form.append('file', buffer, {
      contentType: 'audio/mp3',
      name: 'file',
      filename: fileName,
    });
  }
  if (/.*images$/.test(url_ya)) { 
    // images API endpoint
    form.append('file', buffer, {
      contentType: 'image/png',
      name: 'file',
      filename: fileName,
    });
  }
  headers = new Headers()
  headers.append('Authorization', `OAuth ${OA}`)
  const resp = await fetch(url_ya, {
    method: 'POST',
    headers: headers,
    body: form
  }
  );
  if (!resp.ok) throw new Error(`unexpected response ${resp.statusText}`);
  return resp
}

/**
 * DoUpload
 * @param {*} filesarray 
  * @returns {string} status
 **/
export const DoUpload = async (filesarray) => {
  let Uploadresult = {
    status:Array
  };
  Uploadresult = { status: [] };
  let images=filesarray.filter(el => /.*png$/.test(el));
  let sounds=filesarray.filter(el => /.*mp3$/.test(el));
  
  for (let value of images) {
    let url_ya = `https://dialogs.yandex.net/api/v1/skills/${ID}/images`
    let _a = (await Uploader(url_ya,{},value))
    Uploadresult.status.push(_a)
  }
  for (let value of sounds) {
    let url_ya = `https://dialogs.yandex.net/api/v1/skills/${ID}/sounds`
    let _a = (await Uploader(url_ya,{},value))
    Uploadresult.status.push(_a)
  }
return Uploadresult.status
}

console.log(DoDownload(urlimg, urlsnd))
console.log(` ya -- ${DoUpload(filesarray)} `)