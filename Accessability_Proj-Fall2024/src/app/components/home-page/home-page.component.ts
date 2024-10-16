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
    name: "John Johnson",
    createdate: "15 October 2024",
    content: "This is a test",
    likes: 0,
  },{
    name: "Bill",
    createdate: "1 October 2024",
    lastUpdated: "15 October 2024",
    content: "This is also a test",
    likes: 5
  }];

}
