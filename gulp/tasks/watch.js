import browserSync from "browser-sync";
import { buildDir, config } from "../config";
import { watch, series } from "gulp";
import pug from './pug'
import scss from './scss'

const watch11 = () => {
  browserSync.init({
    server: buildDir,
    notify: false,
    plugins: ['bs-eslint-message'],
  })

  watch(
    [
      config.source.pug,
      config.source.template,
    ],
    pug
  );
  watch(
    [
      config.source.scss,
    ],
    scss
  );
}


export default watch11;