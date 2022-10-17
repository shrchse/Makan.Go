import restaurantSource from '../../data/restaurants-source';
import { createRestaurantCard } from '../templates/template-creator';

const Recommended = {
  async render() {
    return `
          <h2>Restaurants</h2>
            <div id="card-section" class="card-section"></div>
        `;
  },

  async afterRender() {
    const restaurant = await restaurantSource.list();
    const restaurantContainer = document.querySelector('#card-section');
    restaurant.forEach((element) => {
      restaurantContainer.innerHTML += createRestaurantCard(element);
    });
  },
};

export default Recommended;
