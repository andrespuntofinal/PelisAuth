import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  peliculassearch: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private peliculas: PeliculasService) { }

  buscar(termino: string){

    console.log(termino); 

    this.loading = true;
    this.error = false;


    this.peliculas.getPeliculas( termino )
        .subscribe( (data: any)  =>{
          this.peliculassearch = data;
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
