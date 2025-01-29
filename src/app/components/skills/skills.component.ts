import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const skillMain = document.getElementsByClassName('skill_main')[0] as HTMLElement;

    const rogressBar: any = document.querySelectorAll('.progress-bar');
    rogressBar.forEach((element: HTMLElement)=>{
      const max: string|null = element.getAttribute('aria-valuenow');

      if(max){
        const maxWidth: number = Number(max);
        this.progress(element, maxWidth);
        element.style.backgroundImage= '-moz-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)';
        element.style.backgroundImage= '-webkit-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)';
        element.style.backgroundImage= '-ms-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)';
      }
    });
    console.log(skillMain);
  }

  progress(element: HTMLElement, max: number){
    let i = 0;
    if (i === 0) {
      i = 1;
      let width = 1;
      const id = setInterval(() => {
        if (width >= max) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          element.style.width  = max + '%';
        }
      }, 10);

    }
  }
}
