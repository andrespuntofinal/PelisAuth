import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombreusu: any;
  nuevosUsuarios: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private auth: AuthService,
               private router: Router,
               private usuarios: UsuariosService ) {

                this.loading = true;
                
                this.usuarios.getNewUsuarios()
                .subscribe( (data: any) => {
                this.nuevosUsuarios = data;
                this.loading = false;
      
                }, ( errorServicio ) => {  
      
                  this.loading = false;
                  this.error= true;
                  console.log(errorServicio);
                  this.mensajeError = "Temporalmente fuera de servicio";
                });

               }

  ngOnInit() {
   this.nombreusu = localStorage.getItem('nombreusr');

  }

  salirApp(){

    
    this.auth.loguot();
    this.router.navigateByUrl('/login');


  }

}
