// eslint-disable-next-line import/no-unresolved, import/extensions
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import RestaurantFavorite from '../../src/scripts/data/favorite-restaurant';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: RestaurantFavorite,
    restaurant,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
