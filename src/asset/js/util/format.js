import {toNumber} from './lang'


export function toNumeric(el, ) {
    
}

/**
 * length 길이만큼 str길이를 잘라서 반환
 * @param {string} str 입력값
 * @param {number} length maxlength 길이
 * @returns str 길이 중 length길이만큼 자른 값
 */
export function headStr(str, length) {
  return str.slice(0, length);
}

export function numberOnly(val) {
  return val
    .replace(/[A-Za-z]/g, '')
    .replace(/[^\dM-]/g, '')
    .replace(/\-/g, '')
}

export function dateFormat(value, pattern, blocks) {
  let valArr;
  let newVal = '';
  value = numberOnly(value);
  valArr = value.split("");
  for (let i = 0; i < blocks.length; i++) {
    let str = valArr.splice(0, blocks[i]).join("");
    switch (pattern[i]) {
      case "yyyy": {

        break;
      }
      case "yy": {

        break;
      }
      case "mm": {
        if (str === '00') {
          str = '01';
        } else if ( toNumber(str.slice(0,1)) > 1 ) {
          str = `0${toNumber(str)}`;
        } else if ( toNumber(str) > 12 ) {
          str = '12';
        }
        break;
      }
      case "dd": {
        if (str === '00') {
          str = '01';
        } else if (toNumber(str.slice(0,1)) > 3) {
          str = `0${toNumber(str)}`
        } else if (toNumber(str) > 31) {
          str = '31';
        }
        break;
      }
    }

    newVal += str;
  }
  return newVal;
}

export function numerFormat(value, delimiter) { 
  return numberOnly(value).replace(/(\d)(?=(\d{3})+$)/g, `$1${delimiter}`);
}

export function maxlength(blocks) {
  return blocks.reduce(function (previous, current) {
    return previous + current;
  }, 0);
}
/**
 * [ . ? * + ^ $ [ \ ] \ \ ( ) { } | - ] 
 * 구분자를 받아 구분자를 검색하는 정규식문자를 만들어 반환
 * @param {string} delimiter 구분자
 * @returns 구분자를 찾는 정규식
 */
export function getDelimiterREByDelimiter(delimiter) {
  return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
}

/**
 * 입력값 중 delimiter, delimiters 와 일치하는 문자가 있으면 삭제 후 반환
 * @param {String} value 입력 값
 * @param {string} delimiter 구분자 문자열
 * @param {array} delimiters 구분자 배열
 * @returns 구분자를 삭제한 값
 */
 export function getRawValue(value, delimiter, delimiters, maxlength) {

  // single delimiter
  if (delimiters.length === 0) {
      var delimiterRE = delimiter ? getDelimiterREByDelimiter(delimiter) : '';

      return value.replace(delimiterRE, '');
  }

  // multiple delimiters
  delimiters.forEach(function (current) {
      current.split('').forEach(function (letter) {
          value = value.replace(getDelimiterREByDelimiter(letter), '');
      });
  });
  value = headStr(value, maxlength);
  return value;
}