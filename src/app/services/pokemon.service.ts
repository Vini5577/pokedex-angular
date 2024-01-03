import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: any[] = []

  constructor(private httpClient: HttpClient) {
  }

  getPokemons(): Observable<any> {
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1010');
  }
}
