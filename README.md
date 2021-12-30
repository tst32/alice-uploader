[![view on npm](http://img.shields.io/npm/v/example.svg)](https://www.npmjs.org/package/example)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/tst32/alice-uploader/coverage.svg?style=flat-square)](https://codecov.io/gh/tst32/alice-uploader/)

Documentation

## Classes

<dl>
<dt><a href="#без аргументов">без аргументов</a></dt>
<dd></dd>
<dt><a href="#Timestampo">Timestampo</a></dt>
<dd></dd>
<dt><a href="#без аргументов">без аргументов</a></dt>
<dd></dd>
<dt><a href="#Timestampo">Timestampo</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#DoUpload">DoUpload</a> ⇒ <code>string</code></dt>
<dd><p>DoUpload</p>
</dd>
<dt><a href="#DoUpload">DoUpload</a> ⇒ <code>string</code></dt>
<dd><p>DoUpload</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#Downloader">Downloader(url, buffsize, headers)</a> ⇒ <code>Response</code></dt>
<dd><p>запрос на url, возвращает Response (BufferArray)</p>
</dd>
<dt><a href="#ResponseFilewriter">ResponseFilewriter(response, path, ext)</a> ⇒ <code>boolean</code> | <code>string</code></dt>
<dd><p>сохраняет объект Response по переданному пути или под именем timestamp.ext в текущей директории,  возвращает отчет false при ошибке 
или строку с именем файла при успехе</p>
</dd>
<dt><a href="#DoDownload">DoDownload(urlimg, urlsnd)</a> ⇒ <code>Array.&lt;string&gt;</code> | <code>Array.&lt;boolean&gt;</code></dt>
<dd><p>DoDownload(urlimg, urlsnd) batch downloader method
принимает аргументы массив ссылок картинки, массив ссылок звуки скачивает в локальную ФС, 
возвращает отчет о результате как объект с массивами имен файлов|false при ошибке</p>
</dd>
<dt><a href="#Uploader">Uploader(url, buffsize, headers)</a> ⇒ <code>Response</code></dt>
<dd><p>Uploader
делает реквест в API dialogs  yandex загружает файл из файловой системы 
принимает url_ya путь yandex API  endpoint различает  два типа images и sounds
принимает имя(путь) файла для upload</p>
</dd>
<dt><a href="#Downloader">Downloader(url, buffsize, headers)</a> ⇒ <code>Response</code></dt>
<dd><p>запрос на url, возвращает Response (BufferArray)</p>
</dd>
<dt><a href="#ResponseFilewriter">ResponseFilewriter(response, path, ext)</a> ⇒ <code>boolean</code> | <code>string</code></dt>
<dd><p>сохраняет объект Response по переданному пути или под именем timestamp.ext в текущей директории,  возвращает отчет false при ошибке 
или строку с именем файла при успехе</p>
</dd>
<dt><a href="#DoDownload">DoDownload(urlimg, urlsnd)</a> ⇒ <code>Array.&lt;string&gt;</code> | <code>Array.&lt;boolean&gt;</code></dt>
<dd><p>DoDownload(urlimg, urlsnd) batch downloader method
принимает аргументы массив ссылок картинки, массив ссылок звуки скачивает в локальную ФС, 
возвращает отчет о результате как объект с массивами имен файлов|false при ошибке</p>
</dd>
<dt><a href="#Uploader">Uploader(url, buffsize, headers)</a> ⇒ <code>Response</code></dt>
<dd><p>Uploader
делает реквест в API dialogs  yandex загружает файл из файловой системы 
принимает url_ya путь yandex API  endpoint различает  два типа images и sounds
принимает имя(путь) файла для upload</p>
</dd>
</dl>

<a name="без аргументов"></a>

## без аргументов
**Kind**: global class  
<a name="без аргументов"></a>

## без аргументов
**Kind**: global class  
<a name="DoUpload"></a>

## DoUpload ⇒ <code>string</code>
DoUpload

**Kind**: global constant  
**Returns**: <code>string</code> - status  

| Param | Type |
| --- | --- |
| filesarray | <code>\*</code> | 

<a name="DoUpload"></a>

## DoUpload ⇒ <code>string</code>
DoUpload

**Kind**: global constant  
**Returns**: <code>string</code> - status  

| Param | Type |
| --- | --- |
| filesarray | <code>\*</code> | 

<a name="Downloader"></a>

## Downloader(url, buffsize, headers) ⇒ <code>Response</code>
запрос на url, возвращает Response (BufferArray)

**Kind**: global function  
**Returns**: <code>Response</code> - resp  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| buffsize | <code>number</code> | 
| headers | <code>Dict</code> | 

<a name="ResponseFilewriter"></a>

## ResponseFilewriter(response, path, ext) ⇒ <code>boolean</code> \| <code>string</code>
сохраняет объект Response по переданному пути или под именем timestamp.ext в текущей директории,  возвращает отчет false при ошибке 
или строку с именем файла при успехе

**Kind**: global function  
**Returns**: <code>boolean</code> \| <code>string</code> - path of created file or false if fails  

| Param | Type |
| --- | --- |
| response | <code>Response</code> | 
| path | <code>string</code> | 
| ext | <code>string</code> | 

<a name="DoDownload"></a>

## DoDownload(urlimg, urlsnd) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
DoDownload(urlimg, urlsnd) batch downloader method
принимает аргументы массив ссылок картинки, массив ссылок звуки скачивает в локальную ФС, 
возвращает отчет о результате как объект с массивами имен файлов|false при ошибке

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;boolean&gt;</code> - obj of arrays of uploaded filenames || falses  

| Param | Type |
| --- | --- |
| urlimg | <code>Array.&lt;string&gt;</code> | 
| urlsnd | <code>Array.&lt;string&gt;</code> | 

<a name="Uploader"></a>

## Uploader(url, buffsize, headers) ⇒ <code>Response</code>
Uploader
делает реквест в API dialogs  yandex загружает файл из файловой системы 
принимает url_ya путь yandex API  endpoint различает  два типа images и sounds
принимает имя(путь) файла для upload

**Kind**: global function  
**Returns**: <code>Response</code> - resp  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| buffsize | <code>number</code> | 
| headers | <code>Dict</code> | 

<a name="Downloader"></a>

## Downloader(url, buffsize, headers) ⇒ <code>Response</code>
запрос на url, возвращает Response (BufferArray)

**Kind**: global function  
**Returns**: <code>Response</code> - resp  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| buffsize | <code>number</code> | 
| headers | <code>Dict</code> | 

<a name="ResponseFilewriter"></a>

## ResponseFilewriter(response, path, ext) ⇒ <code>boolean</code> \| <code>string</code>
сохраняет объект Response по переданному пути или под именем timestamp.ext в текущей директории,  возвращает отчет false при ошибке 
или строку с именем файла при успехе

**Kind**: global function  
**Returns**: <code>boolean</code> \| <code>string</code> - path of created file or false if fails  

| Param | Type |
| --- | --- |
| response | <code>Response</code> | 
| path | <code>string</code> | 
| ext | <code>string</code> | 

<a name="DoDownload"></a>

## DoDownload(urlimg, urlsnd) ⇒ <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;boolean&gt;</code>
DoDownload(urlimg, urlsnd) batch downloader method
принимает аргументы массив ссылок картинки, массив ссылок звуки скачивает в локальную ФС, 
возвращает отчет о результате как объект с массивами имен файлов|false при ошибке

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;boolean&gt;</code> - obj of arrays of uploaded filenames || falses  

| Param | Type |
| --- | --- |
| urlimg | <code>Array.&lt;string&gt;</code> | 
| urlsnd | <code>Array.&lt;string&gt;</code> | 

<a name="Uploader"></a>

## Uploader(url, buffsize, headers) ⇒ <code>Response</code>
Uploader
делает реквест в API dialogs  yandex загружает файл из файловой системы 
принимает url_ya путь yandex API  endpoint различает  два типа images и sounds
принимает имя(путь) файла для upload

**Kind**: global function  
**Returns**: <code>Response</code> - resp  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| buffsize | <code>number</code> | 
| headers | <code>Dict</code> | 


#License

MIT License  (en)
Copyright (c) 2021 tst32

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

MIT License (ru)
Автор лицензии: Массачуссецкий технологический институт
Copyright (c) 2021 tst32

Данная лицензия разрешает, безвозмездно, лицам, получившим копию данного программного обеспечения 
и сопутствующей документации (в дальнейшем именуемыми &quot;Программное Обеспечение&quot;), использовать 
Программное Обеспечение без ограничений, включая неограниченное право на использование, копирование, 
изменение, объединение, публикацию, распространение, сублицензирование и/или продажу копий Программного Обеспечения, 
также как и лицам, которым предоставляется данное Программное Обеспечение, при соблюдении следующих условий:

Вышеупомянутый копирайт и данные условия должны быть включены во все копии или значимые части данного Программного Обеспечения.

ДАННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК ЕСТЬ», БЕЗ ЛЮБОГО ВИДА ГАРАНТИЙ,
ЯВНО ВЫРАЖЕННЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ГАРАНТИЯМИ ТОВАРНОЙ ПРИГОДНОСТИ,
СООТВЕТСТВИЯ ПО ЕГО КОНКРЕТНОМУ НАЗНАЧЕНИЮ И НЕНАРУШЕНИЯ ПРАВ. НИ В КАКОМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ 
НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ПО ИСКАМ О ВОЗМЕЩЕНИИ УЩЕРБА, УБЫТКОВ ИЛИ ДРУГИХ ТРЕБОВАНИЙ ПО ДЕЙСТВУЮЩИМ КОНТРАКТАМ, 
ДЕЛИКТАМ ИЛИ ИНОМУ, ВОЗНИКШИМ ИЗ, ИМЕЮЩИМ ПРИЧИНОЙ ИЛИ СВЯЗАННЫМ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ ИЛИ ИСПОЛЬЗОВАНИЕМ 
ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ ИЛИ ИНЫМИ ДЕЙСТВИЯМИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ. 

* * *
&copy; 2021 - tst32