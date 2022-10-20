import favoriteRestaurantsIdb from '../data/favorite-restaurants-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, rest }) {
    this.likeButtonContainer = likeButtonContainer;
    this.resto = rest.restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.resto;

    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await favoriteRestaurantsIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantsIdb.putRestaurant(this.resto);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantsIdb.deleteRestaurant(this.resto.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
