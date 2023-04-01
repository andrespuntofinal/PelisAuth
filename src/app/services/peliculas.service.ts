import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) { }


  getQuery( query: string ) {

    const url = environment.domainpeliculas + query;

    return this.http.get( url );
  }


  getNewPeliculas(){

    return this.getQuery('?limite=20')
               .pipe(map( data => data['peliculas']));
             
  }

  getPeliculas(termino: string ){

    return this.getQuery( `/${ termino }` )
              .pipe(map( data =>  data['peliculas']));

  }


}
