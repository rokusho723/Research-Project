import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./nav-bar.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports:[NavBarComponent]
})
export class NavBarModule { }
