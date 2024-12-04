import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";

import { Router } from "@angular/router";
import { BlogData } from '../../models/blog-data.model';
import { DataService } from "../../services/sharedData/data.service";

@Component({
  selector: 'app-view-blog',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [],
  templateUrl: './view-blog.component.html',
  styleUrl: './view-blog.component.scss'
})
export class ViewBlogComponent implements OnInit {

  _blog?:BlogData;

  constructor(
    private sharedData:DataService,
    private router:Router
  ){  }

  ngOnInit(): void {
    this._blog = this.sharedData.getSelectedBlog();
    if(this._blog == undefined){
      this.router.navigate([''])
    }
  }
  likesClicked(): void{
    this._blog!.likes=this._blog!.likes+1;
  }
}
