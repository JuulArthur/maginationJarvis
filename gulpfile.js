var gulp        = require('gulp');
var server      = require('gulp-express');
var runSequence = require('run-sequence');
var mocha       = require('gulp-mocha');
var jscs        = require('gulp-jscs');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglifyjs');

var srcDir = [
    '**/*.js',
    '**/*.html',
    '**/*.css',
];

gulp.task('uglify', function() {
  gulp.src(['public/js/*.js', 'public/js/controllers/*.js', 'public/js/services/*.js'])
    .pipe(uglify('app.min.js', {
      outSourceMap: true
    }))
    .pipe(gulp.dest('public/js'))
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

gulp.task('jscs', function () {
    gulp.src(['public/js/*.js', 'public/js/controllers/*.js', 'public/js/services/*.js', 'app/**/*.js'])
        .pipe(jscs());
});