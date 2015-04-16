'use strict';

import gulp from 'gulp';
import jade from 'gulp-jade';
import replace from 'gulp-replace';
import pkg from '../../package.json';
import through from 'through2';
import fs from 'fs';
import path from 'path';

export default gulp.task('pages', () => {
  gulp.src('./src/pages/*.jade')
    .pipe(page('./src/wrapper.jade'))
    .pipe(jade({ pretty: true }))
    .pipe(replace('<!--scripts-->', `<script src='bundle.js?v=${pkg.version}'></script>`))
    .pipe(replace('<!--styles-->', `<link href='bundle.css?v=${pkg.version}' rel='stylesheet'>`))
    .pipe(gulp.dest('./build'));
});

function page(wrapper) {
  const wrapperContent = fs.readFileSync(wrapper, { encoding: 'utf8' });

  function write(file, enc, cb) {
    file.contents = new Buffer(wrapperContent.replace('//content-include', `include ${path.relative('./src/pages', file.path)}`));
    this.push(file);

    cb();
  }

  return through.obj(write);
}
