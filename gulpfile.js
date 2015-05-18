var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('scripts', function() {
   return gulp.src('./scripts/myApp.js', { base: './' })
                .pipe(sourcemaps.init())
                .pipe(concat('myApp.min.js', {'newLine' : '\r\n'}))
                // comment out the line below, and all works fine
                .pipe(uglify())
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('./Scripts/'))
                .on('end', function() { gutil.log('Minified myApp.min.js'); })
                .on('error', handleError);
});

gulp.task('watch', function() {
  return gulp.watch('./scripts/*', ['scripts']);
});

gulp.task('default', ['scripts','watch']);

function handleError(err) {
  gutil.log(err.toString());
  this.emit('end');
}