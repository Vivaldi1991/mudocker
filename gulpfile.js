'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'));
};

exports.buildStyles = buildStyles;
