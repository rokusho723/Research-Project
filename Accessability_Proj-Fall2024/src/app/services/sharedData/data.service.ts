import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { BlogData } from "../../models/blog-data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tags:string[] = [
    "webdev","JavaScript","HTML","CSS",
    "accessibility","trends","ES6","Grid",
    "Flexbox","tips","beginner","semantic",
    "design","responsive","front-end","user-experience",
    "development","coding","tutorials","modern-web",
  ];

  private dummbyData:BlogData[] = [
    {
      name: "Anna",
      createDate: "02 October 2024",
      imgLink: "",
      title: "The importance of semantic HTML in modern web design.",
      content: "",
      likes: 22,
      tags: [
        "HTML",
        "semantic",
        "webdev"
      ]
  },{
    name: "Michael",
    createDate: "25 July 2024",
    lastUpdated: "15 August 2024",
    imgLink: "",
    title: "10 tips for improving website accessibility.",
    content: "",
    likes: 16,
    tags: [
      "accessibility",
      "tips",
      "webdev"
    ]
  },{
    name: "Emily",
    createDate: "19 September 2024",
    lastUpdated: "30 September 2024",
    imgLink: "",
    title: "Understanding CSS Grid and Flexbox layout systems.",
    content: "",
    likes: 8,
    tags: [
      "CSS",
      "layout",
      "Grid",
      "Flexbox"
    ]
  },{
    name: "Josh",
    createDate: "12 August 2024",
    imgLink: "",
    title: "A beginner's guide to JavaScript ES6 features.",
    content: "",
    likes: 20,
    tags: [
      "JavaScript",
      "ES6",
      "beginner"
    ]
  },{
    name: "Sarah",
    createDate: "05 September 2024",
    lastUpdated: "10 October 2024",
    imgLink: "",
    title: "Exploring web development trends for 2024 and beyond.",
    content: "",
    likes: 12,
    tags: [
      "webdev",
      "trends",
      "2024"
    ]
  }];

  private selectedBlog?: BlogData;
  private filterSubject = new BehaviorSubject<string>('');
  filterTag = this.filterSubject.asObservable();

  constructor() { }

  setSelectedBlog(currentSelection:BlogData){
    this.selectedBlog = currentSelection;
  }
  getSelectedBlog():BlogData{ return this.selectedBlog!; }

  setFilterTag(_filter:string){
    this.filterSubject.next(_filter);
  }
  getFilterTag(){ return this.filterTag; }

  getTags():string[]{
    return this.tags;
  }

  getDummyData():BlogData[]{
    return this.dummbyData;
  }
}
