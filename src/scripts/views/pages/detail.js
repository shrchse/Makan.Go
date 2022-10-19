import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurants-source';
import { createRestaurantDetail, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-btn-init';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
          <div id="restaurantDetail"></div>
          <div id="likeButtonContainer"></div>
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
      restaurants: {
        id: url.id,
        name: rest.restaurant.name,
        city: rest.restaurant.city,
        address: rest.restaurant.address,
        description: rest.restaurant.description,
        pictureId: rest.restaurant.pictureId,
        rating: rest.restaurant.rating,
      },
    });
  },
};

export default Detail;
