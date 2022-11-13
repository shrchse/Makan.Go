/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import favoriteRestaurantsIdb from '../../src/scripts/data/favorite-restaurants-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-presenter-button';

const createLikeButtonPresenterWithRestaurant = async (rest) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: favoriteRestaurantsIdb,
    rest,
  });
};

export { createLikeButtonPresenterWithRestaurant };
