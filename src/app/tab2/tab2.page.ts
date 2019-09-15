import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  paises: any[] = [];
  mensajeError = '';

  constructor(private countryService: CountryService ) {}
ngOnInit() {
  this.countryService.obtenerPaises().subscribe(data => {
    this.paises = data;
  },
  error => this.mensajeError = error);
  
                        // this utiliza vaeriable de la clase 
}
}
