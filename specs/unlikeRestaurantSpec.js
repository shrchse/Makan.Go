/* eslint-disable no-undef */
import favoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking a Restaurants', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestaurantsIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurants has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurants from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurantsIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await favoriteRestaurantsIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurantsIdb.getAllRestaurant()).toEqual([]);
  });
});
