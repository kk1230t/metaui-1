import {
  $, 
  findAll, 
  isDate, 
  each, 
  mergeOptions, 
  addLeadingZero, 
  isString, 
  hasClass, 
  toggleClass, 
  dimensions, 
  height, 
  isVisible, 
  width, 
  toNodes, 
  queryAll, 
  trigger, 
  isNumber, 
  $$, 
  append, 
  fragment, 
  toNode, 
  addClass,
  removeClass,
  find, 
  empty, 
  data,
  css,
  isAndroid,
  parseOptions,
} from '../../util/index';
import {cssPrefix} from 'GC-data'

export default {

  props: {
    numeric: Boolean,
    prefix: String,
    uppercase: Boolean,
    lowercase: Boolean,
    tailPrefix: Boolean,
    delimiter: String,
    blocks: String,
    dateForm: Boolean,
  },

  data: {
    numeric:false,
    dateForm:false,
    prefix:"",
    uppercase:false,
    lowercase:false,
    tailPrefix:false,
    delimiter:null,
    delimiters:[],
    isBackward:null,
    lastInputValue:"",
    blocks:[]
  },
  computed: {

  },
  connected() {
    const { numeric, dateForm } = this;
    this.$el.rawValue = this.$el.value;
    this.lastValue = "";
    // console.log(numeric && delimiter === null)
    if (dateForm) {
      this.blocks = [4, 2, 2]
    }
    if (numeric && this.delimiter === null) {
      this.delimiter = ","
    }

    this.maxlength = this.maxlength();
    console.log("connected")
    this.formatter(this.$el.rawValue)
  },
  destory() {
    console.log('destory');
  },

  events: [
    {
      name: 'input',
      handler(e) {
        e.preventDefault();
        this.formatter(e);
      }
    },
    {
      name: 'change',
      handler(e) {
        e.preventDefault();
        console.log('change')
      }
    },
    {
      name: 'focus',
      handler(e) {
        e.preventDefault();
        console.log('focus')
      }
    },
    {
      name: 'focusout',
      handler(e) {
        e.preventDefault();
        console.log('focusout')
      }
    },
    {
      name: 'keydown',
      handler(e) {
        const charCode = e.which || e.keyCode;
        this.lastInputValue = this.$el.value;
        this.isBackward = charCode === 8;
      }
    },
  ],

  methods: {
    formatter() {
      const { $el, numeric, uppercase, lowercase, dateForm } = this;
      $el.rawValue = this.getRawValue($el.value);
      if ( !numeric && !uppercase && !lowercase && !dateForm ) return;

      if(numeric){
        this.numerFormat($el.rawValue)
      }
      
      
      if(dateForm){
        this.dateFormat($el.rawValue)
      }

      this.updateValueState();
    },
    numerFormat(val) { 
      this.lastValue = this.numberOnly(val).replace(/(\d)(?=(\d{3})+$)/g, '$1' + this.delimiter);
    },
    numberOnly(val) {
      return val
        .replace(/[A-Za-z]/g, '')
        .replace(/[^\dM-]/g, '')
        .replace(/\-/g, '')
    },
    dateFormat(val) {
      // this.lastValue = 
      console.log(val)
    },
    updateValueState() {
      const self = this;
      const { $el, lastValue, delimiter, delimiters } = self;
      let cursorPos = $el.selectionEnd;


      cursorPos = this.getNextCursorPosition(cursorPos, $el.value, lastValue, delimiter, delimiters);
      // fix Android browser type="text" input field
      // cursor not jumping issue
      if (!isAndroid) {
        window.setTimeout(function () {
          $el.value = lastValue;
          self.setSelection($el, cursorPos, document);
        }, 1);

        return;
      }

      $el.value = lastValue;
      this.setSelection($el, cursorPos, document);
    },
		/**
		 * value 에서 re를 검사하여 제거한 후 반환
		 * @param {string} value 검사할 값
		 * @param {RegExp} re 정규식
		 * @returns 치횐된 값
		 */
    strip (value, re) {
      return value.replace(re, '');
    },
		/**
		 * [ . ? * + ^ $ [ \ ] \ \ ( ) { } | - ] 
		 * 구분자를 받아 구분자를 검색하는 정규식문자를 만들어 반환
		 * @param {string} delimiter 구분자
		 * @returns 구분자를 찾는 정규식
		 */
    getDelimiterREByDelimiter (delimiter) {
      return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
    },
		/**
		 * 입력값 중 delimiter, delimiters 와 일치하는 문자가 있으면 삭제 후 반환
		 * @param {String} value 입력 값
		 * @param {string} delimiter 구분자 문자열
		 * @param {array} delimiters 구분자 배열
		 * @returns 구분자를 삭제한 값
		 */
    getRawValue(value) {
      const { delimiter, delimiters } = this;

      // single delimiter
      if (delimiters.length === 0) {
          var delimiterRE = delimiter ? this.getDelimiterREByDelimiter(delimiter) : '';

          return value.replace(delimiterRE, '');
      }

      // multiple delimiters
      delimiters.forEach(function (current) {
          current.split('').forEach(function (letter) {
              value = value.replace(this.getDelimiterREByDelimiter(letter), '');
          });
      });

      return value;
    },
    

		/**
		 * 입력값을 받아 가공하여 반환
		 * @param {string} value 입력값
		 * @param {array} blocks 구분 배열
		 * @param {number} blocksLength 구분배열 길이
		 * @param {string} delimiter 구분자
		 * @param {array} delimiters 구분자 배열
		 * @param {boolean} delimiterLazyShow 값이 입력된 후에 구분자를 붙일 것인가?
		 * @returns 가공된 값
		 */
    getFormattedValue: function (value, blocks, delimiter, delimiters) {
      var result = '',
          multipleDelimiters = delimiters.length > 0,
          currentDelimiter = '';

      // no options, normal input
      if (blocksLength === 0) {
          return value;
      }

      blocks.forEach(function (length, index) {
        if (value.length > 0) {
          var sub = value.slice(0, length),
            rest = value.slice(length);

          if (multipleDelimiters) {
            currentDelimiter = delimiters[index] || currentDelimiter;
          } else {
            currentDelimiter = delimiter;
          }

          if (delimiterLazyShow) {
            if (index > 0) {
                result += currentDelimiter;
            }

            result += sub;
          } else {
            result += sub;

            if (sub.length === length && index < blocksLength - 1) {
              result += currentDelimiter;
            }
          }

          // update remaining string
          value = rest;
        }
      });

      return result;
    },






		/**
		 * 커서가 값의 끝에 위치할 경우 새 값의 길이 반환,
		 * 
		 * @param {number} prevPos 입력박스 커서 위치 값 selectionEnd
		 * @param {string} oldValue 입력박스 값
		 * @param {string} newValue pps.result 값
		 * @param {string} delimiter 구분자
		 * @param {array} delimiters 구분자 배열
		 * @returns 계산된 커서 인덱스
		 */
     getNextCursorPosition: function (prevPos, oldValue, newValue, delimiter, delimiters) {
      // If cursor was at the end of value, just place it back.
      // Because new value could contain additional chars.
      if (oldValue.length === prevPos) {
          return newValue.length;
      }

      return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter ,delimiters);
    },

    getPositionOffset: function (prevPos, oldValue, newValue, delimiter, delimiters) {
      var oldRawValue, newRawValue, lengthOffset;

      oldRawValue = this.getRawValue(oldValue.slice(0, prevPos), delimiter, delimiters);
      newRawValue = this.getRawValue(newValue.slice(0, prevPos), delimiter, delimiters);
      lengthOffset = oldRawValue.length - newRawValue.length;

      return (lengthOffset !== 0) ? (lengthOffset / Math.abs(lengthOffset)) : 0;
    },    

		/**
		 * 입력박스 내 값의 선택영역을 설정한다. 
		 * start, end 두 값으로 지정하는데 시작과 끝의 값은 같다.
		 * @param {element} element 엘리먼트
		 * @param {number} position 커서 마지막 위치
		 * @param {document} doc 	
		 */
    setSelection: function (element, position, doc) {
      if (element !== this.getActiveElement(doc)) {
        return;
      }

      // cursor is already in the end
      if (element && element.value.length <= position) {
        return;
      }

      if (element.createTextRange) {
        var range = element.createTextRange();

        range.move('character', position);
        range.select();
      } else {
        try {
          element.setSelectionRange(position, position);
        } catch (e) {
          // eslint-disable-next-line
          console.warn('The input element type does not support selection');
        }
      }
    },

		/**
		 * document.actoveElement 반환
		 * shadowRoot가 랜더랑 되었다면 shadowRoot에서 포커싱된 엘리먼드 재 검사
		 * @param {element} parent 엘리먼트
		 * @returns 포커싱 된 엘리먼트 반환
		 */
    getActiveElement: function(parent) {
      var activeElement = parent.activeElement;
      if (activeElement && activeElement.shadowRoot) {
        return this.getActiveElement(activeElement.shadowRoot);
      }
      return activeElement;
    },

    maxlength() {
      const { blocks } = this;
      return blocks.reduce(function (previous, current) {
        return previous + current;
      }, 0);
    }


  },
  update: {
    write() {

    },

    events: ['scroll', 'resize'],
  }
};