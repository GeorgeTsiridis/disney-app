import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: 'movie/:id',
    // resolve: {
    //   movie: MovieResolver,
    // },
    component: CharacterInfoComponent
  },
  // { path: 'error', 
  //   component: ErrorComponent 
  // },
  // { path: 'favorites', 
  //   component: FavoritesComponent 
  // },
  // { path: 'watched-list', 
  //   component: WatchedListComponent 
  // },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
