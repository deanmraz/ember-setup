'use strict';

module.exports = {
  description: 'Setup basic ember requirements',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(/*options*/) {
    this.ui.writeLine('Adding packages...')
    return this.addPackagesToProject([
        {name: 'babel-plugin-transform-object-rest-spread'},
        {name: 'ember-cli-postcss'}, // loading custom options so don't want to pull theirs
        {name: 'tailwindcss'},
        {name: '@fortawesome/free-solid-svg-icons'},
    ]).then(() => {
      this.ui.writeLine('Adding ember addons...')
      return this.addAddonsToProject({
        packages: [
          {name: 'ember-concurrency'},
          {name: 'ember-hammertime'},
          {name: 'ember-moment'},
          {name: 'ember-truth-helpers'},
          {name: 'ember-composable-helpers'},
          {name: 'ember-cli-deploy'},
          {name: 'ember-cli-deploy-build'},
          {name: 'ember-cli-deploy-gzip'},
          {name: 'ember-cli-deploy-revision-data'},
          {name: 'ember-cli-deploy-s3'},
          {name: 'ember-cli-deploy-s3-index'},
          {name: 'ember-metrics'},
          {name: '@fortawesome/ember-fontawesome'},
        ]
      })
    });
  },
};
