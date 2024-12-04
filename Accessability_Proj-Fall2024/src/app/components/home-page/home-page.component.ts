import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

import { BlogData } from "../../models/blog-data.model";

import { DataService } from "../../services/sharedData/data.service";
import { DatabasePullService as firebaseService } from "../../services/firebase/database-requests.service";

import { Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit, OnDestroy {

  displayInfo!:BlogData[];
  filterTag:string='';

  constructor(
    private sharedData:DataService,
    private router:Router,
    private dataBase:firebaseService
  ){}
  ngOnInit(): void {
    //this.displayInfo = this.sharedData.getDummyData();
    this.initializeData();
    this.sharedData.filterTag.subscribe(newValue =>{
      this.filterTag = newValue;
    });
  }
  ngOnDestroy(): void {
      this.dataBase.blogs$.subscribe().unsubscribe();
      this.sharedData.filterTag.subscribe().unsubscribe();
  }

  ifFilter(tags:string[]):boolean{
    if(tags.includes(this.filterTag)||this.filterTag===''){
      return true;
    }else {
      return false;
    }
  }

  initializeData(){
    this.dataBase.blogs$.subscribe(data => {
      this.displayInfo = data;
    });
  }

  navigateToViewPage(selectedBlogData:BlogData){
    this.sharedData.setSelectedBlog(selectedBlogData);

    this.router.navigate([`/view_blog/${selectedBlogData.name}`]);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    const keyPressed = event.key;
    if(keyPressed === 'Tab'){

    }else if(keyPressed === 'Enter'){

    }else if(
      keyPressed === 'ArrowUp' ||
      keyPressed === 'ArrowDown'){

    }
    console.log("Event caught, key pressed: "+keyPressed);
  }

}
