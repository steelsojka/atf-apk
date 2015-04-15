'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

export default gulp.task('default', done => {
  runSequence(
    'clean:build',
    ['scripts', 'pages', 'styles'],
    'connect',
    done
  );
});
