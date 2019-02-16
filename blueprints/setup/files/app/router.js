import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';
import { getOwner } from '@ember/application';
import { get, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,
  metrics: service(),

  fastboot: computed(function() {
    return getOwner(this).lookup('service:fastboot');
  }),

  didTransition() {
    this._super(...arguments);
    if (! this.get('fastboot.isFastBoot')) {
      this._trackPage();
    }
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');
      get(this, 'metrics').trackPage({ page, title });
    });
  }
});

Router.map(function() {
  this.route('not-found', { path: '/*path' });
});

export default Router;
