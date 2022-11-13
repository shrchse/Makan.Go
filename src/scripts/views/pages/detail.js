import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurants-source';
import { createRestaurantDetail, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-presenter-button';
import favoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';

const Detail = {
  async render() {
    return `
      <section id="pages-section">Detail</section>
      <div id="maincontent" tabindex="0">
        <div id="restaurantDetail"></div>
        <div id="likeButtonContainer"></div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const rest = await restaurantSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#restaurantDetail');
    restaurantsContainer.innerHTML = createRestaurantDetail(rest.restaurant);
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: favoriteRestaurantsIdb,
      rest: {
        id: url.id,
        name: rest.restaurant.name,
        description: rest.restaurant.description,
        city: rest.restaurant.city,
        adress: rest.restaurant.adress,
        rating: rest.restaurant.rating,
        pictureId: rest.restaurant.pictureId,
      },
    });
  },
};

export default Detail;
