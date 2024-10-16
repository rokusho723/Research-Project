import { Component } from '@angular/core';
import { BlogCard } from "./../../models/blog-card.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  testingInfo:BlogCard[]= [
    {
      name: "Anna",
      createDate: "2 October 2024",
      imgLink: "",
      content: "The importance of semantic HTML in modern web design.",
      likes: 22,
      tags: ["HTML", "semantic", "webdev"]
  },{
    name: "Michael",
    createDate: "25 July 2024",
    lastUpdated: "15 August 2024",
    imgLink: "",
    content: "10 tips for improving website accessibility.",
    likes: 16,
    tags: ["accessibility", "tips", "webdev"]
  },{
    name: "Emily",
    createDate: "19 September 2024",
    lastUpdated: "30 September 2024",
    imgLink: "",
    content: "Understanding CSS Grid and Flexbox layout systems.",
    likes: 8,
    tags: ["CSS", "layout", "Grid", "Flexbox"]
  },{
    name: "Jake",
    createDate: "12 August 2024",
    imgLink: "",
    content: "A beginner's guide to JavaScript ES6 features.",
    likes: 20,
    tags: ["JavaScript", "ES6", "beginner"]
  },{
    name: "Sarah",
    createDate: "5 September 2024",
    lastUpdated: "10 October 2024",
    imgLink: "",
    content: "Exploring web development trends for 2024 and beyond.",
    likes: 12,
    tags: ["webdev", "trends", "2024"]
  }];

}
