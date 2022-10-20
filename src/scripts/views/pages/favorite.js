import favoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';
import { createRestaurantCard } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section id="pages-section">Favorite</section>
          <div id="card-section" class="card-section"></div>
      `;
  },

  async afterRender() {
    const restaurant = await favoriteRestaurantsIdb.getAllRestaurant();
    const container = document.querySelector('#card-section');
    if (restaurant.length < 1) {
      container.innerHTML = 'Tidak ada restaurant dalam daftar favorite';
    }
    restaurant.forEach((element) => {
      container.innerHTML += createRestaurantCard(element);
    });
  },
};

export default Favorite;
