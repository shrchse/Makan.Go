/* eslint-disable no-underscore-dangle */
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteResto, rest }) {
    this.likeButtonContainer = likeButtonContainer;
    this._restaurant = favoriteResto;
    this.resto = rest;
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
    const restaurant = await this._restaurant.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._restaurant.putRestaurant(this.resto);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._restaurant.deleteRestaurant(this.resto.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
