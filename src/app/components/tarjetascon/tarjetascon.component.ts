import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetascon',
  templateUrl: './tarjetascon.component.html',
  styleUrls: ['./tarjetascon.component.css']
})
export class TarjetasconComponent implements OnInit {

  @Input() peliculassearch: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
