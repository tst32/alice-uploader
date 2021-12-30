/**
 * @description все тесты здесь
 * alice-uploader-fetch
 * 
 * @example
 * ```js
 * NODE_OPTIONS=--experimental-vm-modules jest --config jest.config.mjs
 * 
 * ```
 */

import * as Uploader from './index';

describe('DownloaderImg', () => {
  test("returns the correct filepath for IMG... if null args given", async () => {
    const data = await Uploader.DownloaderImg() 
    expect(data).not.toBe(false);
  });
  test('should take given path to save... ', async () => {

    const fileurl = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png'  // 
    const filepath = 'octo2.png'
    const response =  await Uploader.DownloaderImg(fileurl,'')
    const response_saved = Uploader.ResponseFilewriter(response, filepath, 'png')
    expect(response).not.toBe(false)
    expect(response_saved).toEqual(filepath)
  });
}
);

//test other
describe('DownloaderSnd', () => {
  test("returns the correct filepath for SND...", async () => {
    const data = await Uploader.DownloaderSnd()
    expect(data.status).not.toBe(false);
  })
}
);

describe('FormData', () => {
it('FormData-node works with files', async () => {
  const form = new FormDataNode();
  form.append('file', new Blob(['abc'], {type: 'text/html'}));
  const res = new Response(form);
  const fd = await res.formData();

  expect(await fd.get('file').text()).to.equal('abc');
  expect(fd.get('file').type).to.equal('text/html');
});
}
);
