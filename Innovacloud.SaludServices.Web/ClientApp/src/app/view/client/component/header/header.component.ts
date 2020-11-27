import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() datosUsuario: any = {
    nombre: ""
  };

  constructor() { }

  ngOnInit() {
    console.log(this.datosUsuario)
  }

}
