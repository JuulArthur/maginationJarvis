var gulp        = require('gulp');
var server      = require('gulp-express');
var runSequence = require('run-sequence');
var mocha       = require('gulp-mocha');
var jscs = require('gulp-jscs');


var srcDir = [
    'src/config/**/*.js',
    'src/models/**/*.js',
    'src/public/js/**/*.js',
    'src/routes/**/*.js',
    'src/test/**/*.js',
    'src/modules/**/*.js',
    'src/*.js',
    'src/**/*.html',
    'src/**/*.css',
    'src/public/libs/**/*.js'
];

gulp.task('server', function () {
    server.run({
        file: 'app.js'
    });
});

gulp.task('watch', function() {
    gulp.watch(srcDir, runSequence('server'));

});

gulp.task('test', function () {
    gulp.src('test/**/*.js')
        .pipe(mocha({
            reporter: 'spec'
        }));
});

gulp.task('jscs', function () {
    return gulp.src('app,js')
        .pipe(jscs());
});