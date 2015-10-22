'use strict';
let generator = require('yeoman-generator');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {
    this.fs.copyTpl(
        this.templatePath(`foobar.txt`),
        this.destinationPath(`src/foobar/${this.name}.txt`)
    );
  }
});
