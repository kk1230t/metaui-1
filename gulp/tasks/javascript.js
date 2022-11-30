import { src, dest } from 'gulp';
import {config, sourceDir, buildDir} from "./../config";
import plugins from "./plugins";
import browserSync from 'browser-sync';
import sourcemaps from "gulp-sourcemaps";
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import resolve from "@rollup/plugin-node-resolve"
import { rollup } from 'rollup';


const javascriptBuild = () => {
  // console.log(plugins)  
  return (
    rollup({
      input: config.source.js,
      format: "umd",
      plugins: [
        resolve.nodeResolve(),
        babel.babel({
          exclude: ["node_modules/**"],
          babelHelpers: "bundled",
          presets: ["@babel/preset-env"],
        }),
        alias({
          entries: [
            {
              find: "Framework-util",
              replacement: `${sourceDir}js/util/index.js`,
            },
          ],
        }),
      ],
    })
    .then((bundle) => {
      // setTimeout(() => {
      //   gulp.src(src_js2_folder + "index.js").pipe(gulpConnect.reload());
      // }, 0);
      return bundle.write({
        file: buildDir + "js/index.js",
        format: "umd",
        name: "Framework",
        sourcemap: true,
      });
    })
  )

}

export default javascriptBuild;