import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { HomePageComponent } from './home-page.component';
import { BlogCardsComponent } from "../blog-cards/blog-cards.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

const routes:Routes = [
  {path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [
    HomePageComponent,
    BlogCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
  ]
})
export class HomePageModule { }
