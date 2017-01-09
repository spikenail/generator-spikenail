var Generator = require('yeoman-generator');
var upperFirst = require('lodash.upperfirst');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.vars = {};

    this.argument('name', { type: String, required: true });
  }

  writing() {
    let name = this.options.name.replace(/\s+/g, '');
    this.vars.modelClassName = upperFirst(name);
    this.vars.modelName = name;

    this.fs.copyTpl(
      this.templatePath('Model.js'),
      this.destinationPath('models/' + this.vars.modelClassName + '.js'),
      this.vars
    );
  }

  end() {
    this.log('Model has been created');
  }
};