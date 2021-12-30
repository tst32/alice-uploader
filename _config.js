/**
 * @description конфигурационный файл
 *
 */

/**  
*@typedef {import('./src/timestampo.js')} Timestampo
*
*/

import { Timestampo } from "./src/timestampo.js";

/**  
* @type {string[]} headers_defaults Заголовки запроса для скачивания звука mp3
*/
export const headers_defaults = [
  ['User-Agent', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0'],
  ['Accept', '*/*'],
  ['Accept-Language', 'en-US,en;q=0.5'],
  ['Sec-Fetch-Dest', 'empty'],
  ['Sec-Fetch-Mode', 'cors'],
  ['Sec-Fetch-Site', 'cross-site'],
  ['Range', 'bytes=0-10485759'],
  ['accept-ranges', 'byte'],
  ['referrer', 'https://example.com/'],
  ['method', 'GET'],
  ['mode', 'cors'],
  ['credentials', 'omit'],
  ['Cookie', ''],
];
/**  
* @type {string[]} headers_getimg Заголовки запроса для скачивания  png
*/
export const headers_getimg = [
  ['User-Agent', 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0'],
  ['Accept', '*/*'],
  ['Accept-Language', 'en-US,en;q=0.5'],
  ['Sec-Fetch-Dest', 'empty'],
  ['Sec-Fetch-Mode', 'cors'],
  ['Sec-Fetch-Site', 'cross-site'],
  ['Range', 'bytes=0-10485759'],
  ['accept-ranges', 'byte'],
  ['referrer', ''],
  ['method', 'GET'],
  ['mode', 'cors'],
  ['credentials', 'omit'],
  ['Cookie', ''],
];
/**  
* @type {number} buffsize для изменения параметра HighWaterMark что необязательно, если есть Range в заголовк запроса
*/
export const buffsize = 1024;

/**  
* @type {string[]} urlsnd список адресов url mp3
*/
export const urlsnd = [
'https://www.mboxdrive.com/1.mp3', 
'https://www.mboxdrive.com/2.mp3',
];

/**
*
* @type  {string[]} urlimg список адресов url png  для скачивания, а также для загрузки в dialogs (путем передачи url)
* 
*/
export const urlimg = [

`https://robohash.org/_${(new Timestampo).hex}?set=set4`,
'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
];

/**  
* @param {string[]} filesarray список локальных путей файлов для upload в dialogs
*/
export const filesarray = [
  'example.mp3', 
  'octo.png',
]