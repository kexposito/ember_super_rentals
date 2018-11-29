import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

import {
  click,
  currentURL,
  visit,
  fillIn,
  triggerKeyEvent
} from '@ember/test-helpers'
import { resolve } from 'rsvp';

let StubMapsService = Service.extend({
  getMapElement() {
    return resolve(document.createElement('div'));
  }
});

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:map-element', StubMapsService);
    this.mapsService = this.owner.lookup('service:map-element');
  });


  test('should append map element to container element', async function(assert) {
  this.set('myLocation', 'New York');
  await render(hbs`{{location-map location=myLocation}}`);
  assert.ok(this.element.querySelector('.map-container > .map'), 'container should have map child');
  assert.equal(this.get('mapsService.calledWithLocation'), 'New York', 'should call service with New York');
});
});