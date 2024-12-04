import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { CreatePostComponent } from "./create-post.component";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule } from '@angular/forms';

import { DatabasePullService } from "../../services/firebase/database-requests.service";

const routes:Routes = [
  {path: '', component: CreatePostComponent}
];

@NgModule({
  declarations: [ CreatePostComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  providers: [ DatabasePullService ]
})
export class CreatePostModule { }
