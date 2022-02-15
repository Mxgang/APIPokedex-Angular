import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name: any;
  pokemons: any [] =[]
  urlImage: any;

  constructor(private pokemonservice:PokemonService) { 
    
  }

  ngOnInit(): void {
    this.pokemonservice.getPokemon()
    .subscribe((respuesta: any)=>{ 
      respuesta.results.forEach((result: { name: string; }) => { 
      this.pokemonservice.getMoreData (result.name).
      subscribe((uniqueResponse:any)=>{
        this.pokemons.push(uniqueResponse);
        console.log(this.pokemons);
      });
      
    });
      
    }); 
      

  }

  
  search(){
    this.pokemonservice.getPokemon2(this.name).subscribe((data: any) =>{
      this.urlImage = data.sprites.front_default
    })
    
  }
  
  

}


