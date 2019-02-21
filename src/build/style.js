const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// css
gulp.task('css', function () {
    return gulp.src('../styles/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('vui.css'))
        .pipe(gulp.dest('../dist/styles'));
});

// 字体
gulp.task('fonts', function () {
    return gulp.src('../styles/components/icon/fonts/*.*')
        .pipe(gulp.dest('../dist/styles'));
});

gulp.task('default', gulp.series('css', 'fonts'))