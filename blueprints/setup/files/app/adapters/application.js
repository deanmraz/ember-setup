import DS from 'ember-data';
import { getOwner } from '@ember/application';
import { get, computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  environment: computed(function() {
    return getOwner(this).resolveRegistration(`config:environment`);
  }),
  host: computed('environment.APP.ApiHost', function() {
    return get(this, 'environment.APP.ApiHost');
  }),
  namespace: computed('environment.APP.ApiNamespace', function() {
    return get(this, 'environment.APP.ApiNamespace');
  }),
  coalesceFindRequests: true,
});
