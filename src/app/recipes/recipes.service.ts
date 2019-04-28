import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [
    {
      id : 'r1',
      title: 'Food 1',
      imageUrl: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
      ingredients: ['Vegetables','Peanuts']
    },
    {
      id : 'r2',
      title: 'Food 2',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      ingredients: ['Egg','Bringal']
    },
    {
      id : 'r3',
      title: 'Food 3',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/delish-taco-lime-shrimp-still006-1527253576.jpeg',
      ingredients: ['Prawns','Leafs']
    }
  ];

  constructor() { }

  getAllRecipes() {
      return [...this.recipes];
  }

  getRecipeById(recipeId: string){
      return {
        ...this.recipes.find(
          recipe => {
              return recipe.id === recipeId;
          })
        };
  }

  deleteRecipeById(recipeId: string){
    this.recipes = this.recipes.filter(
      recipe => {
          return recipe.id !== recipeId;
      });
  }
}
