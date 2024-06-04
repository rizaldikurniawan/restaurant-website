/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import RestaurantFavorite from '../src/scripts/data/favorite-restaurant';

describe('Favorite Restaurant Dicoding Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantFavorite.getAllRestaurants()).forEach(async (restaurant) => {
      await RestaurantFavorite.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(RestaurantFavorite);
});
