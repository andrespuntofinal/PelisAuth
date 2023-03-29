import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  peliculassearch: any[] = [];

  constructor(private peliculas: PeliculasService) { }

  buscar(termino: string){

    console.log(termino); 

    this.peliculas.getPeliculas( termino )
        .subscribe( (data: any)  =>{

          console.log( data.peliculas );
          this.peliculassearch = data.peliculas;

        }); 

  }

  ngOnInit() {
  }

}
