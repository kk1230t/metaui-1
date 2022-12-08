import {
  getCssVar,
  isString,
  toFloat
} from '../../util';

export default {

  props: {
    media: Boolean,
  },

  data: {
    media: false,
  },

  compute: {
    mathMedia() {
      const media = toMedia(this.media);
    }
  }

};

function toMedia(value) {
  
  if (isString(value)) {
    const name = `breakepoint-${value.substr(1)}`;
    value = toFloat(getCssVar(name));
  } else if (isNaN(value)) {
    return value;
  }
  return value && !isNaN(value) ? `(min-width: ${value}px)` : false;
  
}