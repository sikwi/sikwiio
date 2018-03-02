var gulp = require("gulp");
var del = require('del');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
//var svgToJsx = require('gulp-svg-to-jsx');

gulp.task('clean', function(cb) {
  return del('bin/**', cb);
});

gulp.task('build-css', function() {
  return gulp.src('src/stylus/*.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('build-jade', function() {
  return gulp.src('src/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('.'));
});

gulp.task( "restart", ["build-jade", "build-css"], function(){
});

gulp.task('build', ["restart"]);

gulp.task( "watch", function() {
  gulp.watch( "src/**/*.styl", [ "build" ] );
  gulp.watch( "src/**/*.jade", [ "build" ] );
} );

gulp.task( "default", [ "build" ] );
gulp.task( "work", [ "build", "watch" ] );
