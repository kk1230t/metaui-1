import browserSync from "browser-sync";
import { buildDir, config } from "../config";
import { watch, series } from "gulp";
import pug from './pug'
import scss from './scss'
import javascript from './javascript'

const watch11 = () => {
  browserSync.init({
    server: buildDir,
    notify: false,
    plugins: ['bs-eslint-message'],
  })
  const pugWather = watch(
    [
      config.source.pug,
      config.source.template,
    ]
  );

  pugWather.on('change', (path, state) => {
    // console.log(path)
    // console.log(state);
    pug(path);
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
      config.source.templateScss,
    ],
    scss
  );
  watch(
    [
      config.source.jsAll,
    ],
    javascript
  );
}


export default watch11;