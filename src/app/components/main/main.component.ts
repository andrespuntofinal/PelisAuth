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




  constructor( private peliculas: PeliculasService ) {
      this.peliculas.getNewPeliculas()
          .subscribe( (data: any) => {
          console.log( data.peliculas );
          this.nuevasPeliculas = data.peliculas;


          });
  
   }

   ngOnInit() {
  }

}
