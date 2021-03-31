const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");

gulp.task('default', function() {
  gulp.watch('css/*scss', function() {
    return gulp
      .src('css/*scss')
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(rename('style.css'))
      .pipe(gulp.dest('css'))
  });
});
