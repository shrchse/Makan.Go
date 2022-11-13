/* eslint-disable no-undef */
import favoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(() => {
    addLikeButtonContainer();
  });
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurantsIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    favoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should not add a movie again when its already like', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await favoriteRestaurantsIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurantsIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
    favoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurantsIdb.getAllRestaurant()).toEqual([]);
  });
});
