import browserSync from "browser-sync";
import { buildDir, config } from "../config";
import { watch, series } from "gulp";
import pug from './pug'

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
}


export default watch11;