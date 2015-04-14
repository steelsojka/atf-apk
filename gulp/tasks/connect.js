'use strict';

import connect from 'gulp-connect';
import gulp from 'gulp';
import path from 'path';

export default gulp.task('connect', () => {
  connect.server({
    root: path.resolve(__dirname, '../../build')
  });
});
