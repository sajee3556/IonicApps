import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router,
    private alertController : AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        if(!paramMap.has('recipeId')){
          return;
        }
        const recipeId = paramMap.get('recipeId');
        this.loadedRecipe = this.recipesService.getRecipeById(recipeId);
    });
  }

  deleteRecipeById(){
     this.alertController.create({
       header: 'Are you sure?',
       message: 'Do you really want to delete the Recipe ?',
       buttons: [
         {
           text: 'Cancel',
           role: 'cancel'
         },{
           text: 'Delete',
           handler: () => {
            this.recipesService.deleteRecipeById(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
           }
         }
       ]
     }).then(
       alertEl => {
         alertEl.present();
     });
  }

}
