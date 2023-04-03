import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  myAppUrl= environment.domainusuarios;
  
  httpOptions={

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }


  getQuery( query: string ) {

    const url = environment.domainusuarios + query;

    return this.http.get( url );
  }

  getNewUsuarios(){

    return this.getQuery('?limite=20')
               .pipe(map( data => data['usuarios']));
             
  }
 
 
  guardarUsuarios(usuarios: UsuarioModel):Observable<any>  {

    console.log("ANTES DE POST" , usuarios);

   return this.http.post(this.myAppUrl, usuarios, this.httpOptions ).pipe(map((data: any) => {

   }))
  
  }
}
