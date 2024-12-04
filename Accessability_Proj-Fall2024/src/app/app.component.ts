import { Component } from '@angular/core';

import { RouterOutlet, Router } from '@angular/router';

import { NavBarModule } from "./components/nav-bar/nav-bar.module";
import { MatSidenavModule } from "@angular/material/sidenav";


import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    NavBarModule,
    A11yModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Accessability_Proj-Fall2024';

  blogFilter:String = "";

  constructor(private router: Router) { }

  onroutingParent(route:string){
    this.router.navigate([route]);
  }
}
