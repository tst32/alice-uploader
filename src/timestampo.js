/**
 * @description helper класс
 * возвращает текущее время в HEX 
 * @example
 * console.log(`${(new Timestampo).hex}.png`) //17df2d17f05.png 
 */
export class Timestampo {
    /**
    * @constructor без аргументов
    */
    constructor() {
      this.description = 'return current timestamp in hex'
      /**
      * @param  {string} hex шестнадцатеричн. штамп времени
      */
      this.hex=(Number(+new Date())).toString(16)
      return this.hex
    }
  }
  