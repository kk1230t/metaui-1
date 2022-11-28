import del from 'del';
import {buildDir} from "./../config";

const clean = () => {
  return del(buildDir);
}

export default clean;
