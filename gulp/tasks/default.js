'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

export default gulp.task('default', done => {
  runSequence(
    ['scripts', 'index', 'pages'],
    'connect',
    done
  );
});
