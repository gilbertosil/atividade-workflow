var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var connect = require('gulp-connect')

gulp.task('sass',function(){
    gulp.src('./source/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload())
})

gulp.task('htmlmin',function(){
    gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload())
})

gulp.task('watch', function(){
    gulp.watch(['./source/*.html'],['htmlmin'])
    gulp.watch(['./source/scss/*.scss'],['sass'])
})

gulp.task('server',function(){
    connect.server({
        root : './dist',
        livereload : true
    })
})

gulp.task('dev',['server','watch'])