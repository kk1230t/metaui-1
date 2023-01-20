
const buildDir = "./dist/";
const sourceDir = "./src/";


const config = {
  source: {
    data: `${sourceDir}_data/`,
    scss: `${sourceDir}asset/scss/**/*.scss`,
    jsIndex: `${sourceDir}asset/js/index.js`,
    jsAll: `${sourceDir}asset/js/**/*.js`,
    pug: [`${sourceDir}*.pug`, `${sourceDir}!(components)**/**/*.pug`],
    pugWather:[`${sourceDir}pages/**/*.pug`, `${sourceDir}components/**/*.pug`],
    template: `${sourceDir}components/**/*.pug`,
    templateScss: `${sourceDir}components/**/*.scss`,
    components: `${sourceDir}components`,
    pages: `${sourceDir}pages`,
  },
  doc:{
    source:{
      scss: `${sourceDir}docs/scss/**/*.scss`,
      js: `${sourceDir}docs/js/**/*.js`,
      pug: [`${sourceDir}docs/**/*.pug`, `${sourceDir}*.pug`],
    },
    build:{
      scss: `${buildDir}docs/css/`,
      js: `${buildDir}docs/js/`,
      pug: `${buildDir}`,
    }
  },
  build: {
    scss: `${buildDir}css/`,
    js: `${buildDir}js/`,
    pug: `${buildDir}html/`,
    docs:`${sourceDir}docs/`,
  },
  args: {
    production: false,
  }
}

export {
  buildDir,
  sourceDir,
  config,
}