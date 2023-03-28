import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) { }


  getNewPeliculas(){

    return this.http.get('http://localhost:9001/api/peliculas?limite=20');
  

  }
}
