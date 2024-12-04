import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DataService } from "../../services/sharedData/data.service";


import { LiveAnnouncer } from "@angular/cdk/a11y";

@Component({
  selector: 'navBar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Output() routeParent = new EventEmitter<string>();
  filterTag:string='';
  tags:string[]=[];

  announcer = inject(LiveAnnouncer);

  constructor(private tagService:DataService){
    this.tags = tagService.getTags();
  }

  triggerParentRouting(newRoute:string){
    this.filterTag = '';
    this.tagService.setFilterTag(this.filterTag);
    this.routeParent.emit(newRoute);
  }
  filterByTag(tagFilter:string){
    this.filterTag = tagFilter;
    this.tagService.setFilterTag(tagFilter);

    if(tagFilter == ''){
      this.announcer.announce('Blog filter removed');
    }else{
      this.announcer.announce('Filtering blogs by '+tagFilter);
    }

    this.routeParent.emit("")
  }
}
