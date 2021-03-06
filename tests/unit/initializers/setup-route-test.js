import Application from '@ember/application';
import { initialize } from 'website/initializers/setup-route';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | setup route', function(hooks) {
  hooks.beforeEach(function() {
    run(() => {
      this.application = Application.create();
      this.application.deferReadiness();
    });
  });

  // Replace this with your real tests.
  test('it works', function(assert) {
    initialize(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
