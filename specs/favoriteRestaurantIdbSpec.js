/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import favoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteRestaurantsIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await favoriteRestaurantsIdb.deleteRestaurant(restaurant.id);
    });
  });
  itActsAsFavoriteRestaurantModel(favoriteRestaurantsIdb);
});
