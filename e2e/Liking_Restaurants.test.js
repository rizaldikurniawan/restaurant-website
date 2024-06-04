const assert = require('assert');

/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});
// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('#linkdetail', 10);

  I.seeElement('#linkdetail');
  const firstRestaurant = locate('#linkdetail').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurants');
  const likedRestaurantTitle = await I.grabTextFrom('.judul');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('#linkdetail', 10);

  I.seeElement('#linkdetail');
  const firstRestaurant = locate('#linkdetail').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurants');
  const likedRestaurantTitle = await I.grabTextFrom('.judul');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(locate('#linkdetail').first());

  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
