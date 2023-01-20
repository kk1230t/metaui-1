import del from 'del';
import {buildDir, config} from "./../config";

const clean = () => {
  return del([buildDir]);
}

export default clean;
