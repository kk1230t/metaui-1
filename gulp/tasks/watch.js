'use strict';

const watch = ({gulp, plugins, args, config, browserSync, taskTarget}) => {
    const dir = config.directory;
    // console.log(dir)

    console.log(taskTarget)

    gulp.task('watch', () => {
        // console.clear();
        console.log('watch')

        browserSync.init({
            server: taskTarget,
            notify: false,
            plugins: ['bs-eslint-message'],
            open: config.autoLaunchBrowser
        })
    })
}


export default watch;