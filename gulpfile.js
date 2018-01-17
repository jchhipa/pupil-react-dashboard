'use strict'

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    log = console.log;

const plugins = [
    autoprefixer()
];

const cssFilePath = './src/styles/styles.scss';
const cssOutputPath = './public/css/';

gulp.task('sass', function () {
    log('**** generating css **** ');
    log('');
 
    gulp.src(cssFilePath)
        .pipe(sass({ style: 'expanded' }))
        .pipe(postcss(plugins))
        .pipe(cssnano())
        .pipe(cleanCSS({ compatibility: 'ie10' }))
        .pipe(gulp.dest(cssOutputPath));

    log('');
    log('finished generating css file');

});

const assetsDir = './src/styles/assets/**/*';
const assetsOutputPath = './public/assets/';

gulp.task('assets', function() {
    log('');
    log('**** executing assets copy to build task *** ');
    log('');
    
    gulp.src(assetsDir)
        .pipe(gulp.dest(assetsOutputPath));
    
    log('');
    console.log('finished copying assets files.');
    log('');
});

gulp.task('cleanAssets', function() {
    console.log('Cleaning assets directory');
    del('./public/assets/**/*');
});

// Watching static files
gulp.task('watch', () => {
    gulp.watch('./src/styles/**/*.scss', ['sass']);
    gulp.watch('./src/styles/assets/**/*', ['cleanAssets','assets']);
});

gulp.task('default', ['cleanAssets', 'assets', 'sass']);
