import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public version: string;

  constructor() {
    this.version = 'v.0.3.0';
  }

  ngOnInit(): void {
  }

}
