import { moduleFor, test } from 'ember-qunit';

moduleFor('route:ember-consulting', 'Unit | Route | ember consulting', {
  needs: ['service:router-scroll']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});