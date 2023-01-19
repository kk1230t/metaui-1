import del from 'del';
import {buildDir, config} from "./../config";

const clean = () => {
  return del([buildDir, `${config.build.docs}**/**.(html|css|js)`]);
}

export default clean;
