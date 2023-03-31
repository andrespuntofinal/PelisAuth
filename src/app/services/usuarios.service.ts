import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  myAppUrl="http://localhost:9000/";
  myAppUrlApi="api/usuarios";
  prueba= "";
 

  httpOptions={

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }
 
 
  guardarUsuarios(usuarios: UsuarioModel):Observable<any>  {

    console.log("ANTES DE POST" , usuarios);

   return this.http.post(this.myAppUrl + this.myAppUrlApi, usuarios, this.httpOptions ).pipe(map((data: any) => {

   }))
  
  }
}
