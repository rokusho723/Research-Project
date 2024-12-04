import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from './home-page.component';
import { BlogCardsComponent } from "./blog-cards/blog-cards.component";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

import { DatabasePullService as firebaseService } from "../../services/firebase/database-requests.service";


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
    MatChipsModule,
    MatIconModule,
  ],
  providers: [firebaseService]
})
export class HomePageModule { }
