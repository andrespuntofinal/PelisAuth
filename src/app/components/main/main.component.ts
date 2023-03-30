import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 nuevasPeliculas: any[] = [];
 loading: boolean;
 error: boolean;
 mensajeError: string;



  constructor( private peliculas: PeliculasService ) {

    this.loading = true;

      this.peliculas.getNewPeliculas()
          .subscribe( (data: any) => {
          this.nuevasPeliculas = data;
          this.loading = false;

          }, ( errorServicio ) => {  

            this.loading = false;
            this.error= true;
            console.log(errorServicio);
            this.mensajeError = "Temporalmente fuera de servicio";
          });
  
   }

   ngOnInit() {
  }

}
