import browserSync from "browser-sync";
import { buildDir } from "../config";

const watch = () => {
  browserSync.init({
    server: buildDir,
    notify: false,
    plugins: ['bs-eslint-message'],
  })
}


export default watch;