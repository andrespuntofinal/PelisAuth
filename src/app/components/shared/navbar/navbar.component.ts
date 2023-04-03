import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombreusu: any;

  constructor( private auth: AuthService,
    private router: Router) { }

  ngOnInit() {

    this.nombreusu = localStorage.getItem('nombreusr');
    
  }


  salirApp(){

    
    this.auth.loguot();
    this.router.navigateByUrl('/login');


  }

}
