import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public io: any;

  constructor() {
    this.io = {
      nombre: 'Israel Reyes G.',
      fechaNacimiento: new Date('1983-06-16'),
      edad() {
        return new Date().getFullYear() - this.fechaNacimiento.getFullYear();
      },
      domicilio: '09910, Iztapalapa',
      estado: 'CDMX',
      grado: 'Ingeniería en computación',
      perfil: 'Full Stack Developer',
      email: 'israelreyg@hotmail.com',
      celular: '55 2511 1865',
      sobreMi: {
        presentacion:'¡Hola! Mi nombre es Israel y disfruto creando aplicaciones web. Mi interés por '+
      'la computación comenzó desde pequeño cuando vi <strong>Juegos de guerra</strong> y como David Lightman '+
      'interactuaba con la computador y todo lo que podía hacer, posteriormente con ayuda de los discos de AOL '+
      'comenzó mi interés por el <strong>desarrollo web.',
        quienSoy:
      '<p class="lead">Soy un ingeniero en computación con sede en la CDMX que se especializa en crear '+
      '(y ocasionalmente diseña) Aplicaiones Web. Actualmente, soy Sr. MEAN stack developer en AXA y me enfoco '+
      'en crear productos que ayuden a las personas hacer mas facil su trabajo y a los clientes queden mas satisfechos '+
      'con la empresa.</p>'
      }
    };

  }

  ngOnInit(): void {
  }


}
