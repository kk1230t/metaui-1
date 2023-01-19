
const buildDir = "./dist/";
const sourceDir = "./src/";


const config = {
  source: {
    data: `${sourceDir}_data/`,
    scss: `${sourceDir}asset/scss/**/*.scss`,
    jsIndex: `${sourceDir}asset/js/index.js`,
    jsAll: `${sourceDir}asset/js/**/*.js`,
    pug: `${sourceDir}pages/**/*.pug`,
    template: `${sourceDir}components/**/*.pug`,
    templateScss: `${sourceDir}components/**/*.scss`,
    components: `${sourceDir}components`,
    pages: `${sourceDir}pages`,
  },
  doc_source:{
    scss: `${sourceDir}docs/**/*.scss`,
    pug: `${sourceDir}docs/**/*.pug`,
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