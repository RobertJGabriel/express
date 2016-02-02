var gulp = require('gulp');
var debug = require('gulp-debug');
var flatten = require('gulp-flatten');

gulp.task('third-party-scripts', function(){
	return gulp.src(['node_modules/**/knockout-latest.js','node_modules/**/jquery.min.js'])
	.pipe(debug())
	.pipe(flatten())
	.pipe(gulp.dest('./public/scripts'));
});

gulp.task('scripts', ['third-party-scripts'], function(){
	return gulp.src('src/scripts/**js')
	.pipe(gulp.dest('./public/scripts'));
})

gulp.task('style', function(){	
	return gulp.src('src/styles/*.css')
	.pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('default', ['style', 'scripts']);