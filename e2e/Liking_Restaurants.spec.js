/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked movies', ({ I }) => {
  I.seeElement('#card-section');
  I.see('Tidak ada restaurant dalam daftar favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant dalam daftar favorite');

  I.amOnPage('');
  I.waitForElement('.card-name', 2);

  I.seeElement('.card-name');

  const firtsResto = locate('.card-name').first();
  const firstRestoName = await I.grabTextFrom(firtsResto);
  I.click(firtsResto);

  I.waitForElement('#likeButton', 4);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card', 4);
  I.seeElement('.card');
  const likedRestaurant = await I.grabTextFrom('.card-name');

  assert.strictEqual(firstRestoName, likedRestaurant);
});
