import browserSync from "browser-sync"

const watch = () => {
  browserSync.init({
    server: taskTarget,
    notify: false,
    plugins: ['bs-eslint-message'],
    open: config.autoLaunchBrowser
  })
}


export default watch;