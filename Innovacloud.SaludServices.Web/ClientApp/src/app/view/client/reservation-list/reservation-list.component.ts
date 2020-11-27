import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  datosUsuario: any = {
    nombre: ""
  };

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.datosUsuario.nombre = this.router.snapshot.params.data;
  }

}
