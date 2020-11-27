import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  public lstTipoViaje: Array<string> = ['Aéreo', 'Terrestre'];
  public lstHospedaje: Array<string> = ['Sí', 'No'];
  public lstCapacitacion: Array<string> = ['Sí', 'No'];
  public lstNoches: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() {
  }

}
