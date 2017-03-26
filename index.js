/* global hexo */

'use strict';

var assign = require('object-assign');

hexo.config.auto_dir_categorize = assign({
  enable: true,
  force: false
}, hexo.config.auto_dir_categorize);

var post_processor = require('./lib/processor')(hexo);

hexo.extend.processor.register(post_processor.pattern, post_processor.process);