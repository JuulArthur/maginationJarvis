var gulp        = require('gulp');
var server      = require('gulp-express');
var runSequence = require('run-sequence');
var mocha       = require('gulp-mocha');
var jscs        = require('gulp-jscs');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');

var srcDir = [
    '**/*.js',
    '**/*.html',
    '**/*.css',
];

gulp.task('compress', function() {
    gulp.src('public/js/all.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js/all.min.js'))
});

gulp.task('server', function () {
    server.run({
        file: 'server.js'
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

gulp.task('concat', function() {
    gulp.src('**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('jscs', function () {
    return gulp.src('app,js')
        .pipe(jscs());
});