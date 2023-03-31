import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme: boolean;
  uidtok: string;
  estadouser: boolean = true;


  constructor( private auth: AuthService,
               private usuariosService: UsuariosService,
               private router: Router ) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

   
   }

   guardarUsuarios(){

    const usuarios: UsuarioModel = {

      nombre: this.usuario.nombre,
      email:  this.usuario.email,
      rol:    "USER_ROLE",
      uid:    this.uidtok,
      estado: this.estadouser,
      
    };

    console.log ("usuarios model" , usuarios);

    this.usuariosService.guardarUsuarios(usuarios).subscribe( data => {
    console.log("dataaa", data );
      
    });

   


   }

   

   onSubmit( form: NgForm ) {

    if (form.invalid) { return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor'
    });

    Swal.showLoading();

    this.auth.nuevoUsuario( this.usuario )
    .subscribe( resp => {

      console.log(resp);
      Swal.close();

      if (this.recordarme) {
        localStorage.setItem('email', this.usuario.email);
      }
      localStorage.setItem('uid', resp['localId']);
      localStorage.setItem('email', resp['email']);

      this.uidtok = localStorage.getItem('uid');

      this.guardarUsuarios();

      this.router.navigateByUrl('/home');
    }, (err) => {
      console.log(err.error.error.message);

      Swal.fire({
        
        icon: 'error',
        title: 'Error al crear cuenta',
        text: err.error.error.message
      });

    });
   }


}