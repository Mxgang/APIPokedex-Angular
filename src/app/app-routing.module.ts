import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemondetailsComponent } from './components/pokemondetails/pokemondetails.component';

const routes: Routes = [
  {path: '', component: PokemonComponent},
  {path: 'pokemondetails/:name', component: PokemondetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
