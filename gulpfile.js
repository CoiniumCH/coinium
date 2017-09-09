'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');

var paths = {
    scripts: [
        './node_modules/jquery/dist/jquery.js',
        './node_modules/popper.js/dist/umd/popper.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './assets/js/*.js'
    ],
    sass: './assets/scss/*.scss'
};

gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del([
        './_assets/js',
        './_assets/css'
    ]);
});

gulp.task('scripts', ['clean'], function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./_assets/js'));
});

gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sass({
            includePaths: [ 'node_modules/bootstrap/scss/']
        }).on('error', sass.logError))
        .pipe(gulp.dest('./_assets/css'));
});

gulp.task('watch', ['scripts','sass'], function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.sass, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'sass']);