import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: String = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private http: HttpClient) {
    
  } 

  getPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');
  }

  getPokemon2(name:String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getMoreData(name:String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getMoreData_Ability(ability:String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${ability}`);
  }

  getMoreData_id(id:String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getMoreData_move(move:String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${move}`);
  }




}
