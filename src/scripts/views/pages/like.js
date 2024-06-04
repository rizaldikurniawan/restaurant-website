/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import RestaurantFavorite from '../../data/favorite-restaurant';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantView from './liked-restaurants/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantView();

const Like = {
  async render() {
    return view.getTemplate();
  },
  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: RestaurantFavorite });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: RestaurantFavorite });
  },
};

export default Like;
