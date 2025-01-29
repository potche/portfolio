import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(){
    const element: HTMLElement = document.body as HTMLElement;
    console.log(element);

    if ( element.style.overflowY === 'hidden' ) {
      element.style.removeProperty('overflow-y');
    }else{
      element.style.overflowY = 'hidden';
    }
  }

}
