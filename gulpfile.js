var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/style.sass')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
   gulp.watch('./sass/style.sass', ['sass']); 
});

gulp.task('default', ['sass', 'watch']);