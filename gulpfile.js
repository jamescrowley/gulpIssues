var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('scripts', function() {
   return gulp.src('./scripts/rapptr.js', { base: './' })
                .pipe(sourcemaps.init({loadMaps: true}))
                .pipe(uglify())
                .pipe(concat('rapptr.min.js', {'newLine' : '\r\n'}))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('./Scripts/'))
                .on('end', function() { gutil.log('Minified rapptr.min.js'); })
                .on('error', handleError);
});


gulp.task('default', ['scripts']);


function handleError(err) {
  gutil.log(err.toString());
  this.emit('end');
}