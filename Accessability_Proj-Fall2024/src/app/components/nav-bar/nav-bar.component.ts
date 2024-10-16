import { Component } from '@angular/core';

@Component({
  selector: 'navBar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  tags:string[] = [
    "webdev","JavaScript","HTML","CSS",
    "accessibility","trends","ES6","Grid",
    "Flexbox","tips","beginner","semantic",
    "design","responsive","front-end","user-experience",
    "development","coding","tutorials","modern-web",
  ];
}
