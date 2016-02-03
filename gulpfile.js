var gulp = require('gulp');
var debug = require('gulp-debug');
var flatten = require('gulp-flatten');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


gulp.task('third-party-scripts', function() {
    return gulp.src(['node_modules/**/jquery.min.js',
        'node_modules/**/material.js',
        'node_modules/**/bootstrap.js',
        'node_modules/**/ripples.js'
    ]).pipe(debug()).pipe(flatten()).pipe(gulp.dest('./public/js'));
});


gulp.task('third-party-less', function() {
    gulp.src(['node_modules/robin-less/less/**/*']).pipe(gulp.dest(
        './src/styles/less'));
    gulp.src([
        'node_modules/bootstrap-material-design/dist/css/ripples.min.css'
    ]).pipe(gulp.dest('./public/css'));
});


gulp.task('scripts', ['third-party-scripts'], function() {
    return gulp.src('src/scripts/*.js').pipe(gulp.dest('./public/js'));
});


gulp.task('less', function() {
    gulp.src('./src/styles/less/style.less') // path to your file
        .pipe(less()).pipe(gulp.dest('./public/css/'));
});


gulp.task('img', function() {
    return gulp.src('./src/img/*').pipe(imagemin({
        progressive: true,
        svgoPlugins: [{
            removeViewBox: false
        }],
        use: [pngquant()]
    })).pipe(gulp.dest('./public/img/'));
});


gulp.task('default', ['scripts', 'less', 'img']);
gulp.task('move', ['third-party-scripts', 'third-party-less']);