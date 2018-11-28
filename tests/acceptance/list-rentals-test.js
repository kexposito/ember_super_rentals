import { module, test } from 'qunit';
import { visit, currentURL,click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

test('should show rentals as the home page', async function (assert){
  await visit('/');
  //await click(".menu-about");
  assert.equals(currentURL(), '/rentals', 'should redirect automatically');
});
test('should link to information about the company.', async function (assert){
  await visit('/');
  await click(".menu-about");
  assert.equals(currentURL(), '/rentals', 'should navigate to about');
});
test('should link to contact information.', async function (assert){
  await visit('/');
  await click(".menu-contact");
  assert.equals(currentURL(), '/rentals', 'should navigate to contact');
});
test('should list avaliable rentals.', async function (assert) {
  await visit('/');
  assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
});
test('should filter the list of rentals by city.', async function (assert){
});/*
test('should showdetails for a selected rental', async function (assert) {
});
*/

});
