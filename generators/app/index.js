var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.vars = {};
  }

  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname.replace(/\s+/g, '-')
    }]).then((answers) => {
      this.vars.name = answers.name;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { name: this.vars.name  }
    );

    this.fs.copyTpl(
      this.templatePath('app.js'),
      this.destinationPath('app.js')
    );

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    );

    this.fs.copyTpl(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );

    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    mkdirp.sync('models');
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }

  end() {
    this.log('finished');
  }
};