'use strict';

import { readdirSync } from 'fs';

readdirSync('./gulp/tasks/').forEach(task => {
  require(`./tasks/${task}`);
});
