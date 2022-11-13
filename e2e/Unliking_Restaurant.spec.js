/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.seeElement('#card-section');
  I.see('Tidak ada restaurant dalam daftar favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('.card-name', 4);

  I.amOnPage('');
  I.waitForElement('.card-name', 4);

  const firstResto = locate('.card-name').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 5);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card', 2);
  I.seeElement('.card');

  const unlikeThisResto = await I.grabTextFrom(firstResto);
  assert.strictEqual(firstRestoName, unlikeThisResto);

  I.seeElement('.card-name');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
});
