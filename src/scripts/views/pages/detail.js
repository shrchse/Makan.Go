import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurants-source';
import { createRestaurantCard } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
          <div id="this"> </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithCombiner();
    const restaurant = await restaurantSource.Detail(url.id);
    const movieContainer = document.querySelector('#this');

    movieContainer.innerHTML = createRestaurantCard(restaurant);
  },
};

export default Detail;
