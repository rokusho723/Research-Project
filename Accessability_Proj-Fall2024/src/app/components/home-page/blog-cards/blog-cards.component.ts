import { Component, Input } from '@angular/core';
import { BlogData } from "../../../models/blog-data.model";

@Component({
  selector: 'blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrl: './blog-cards.component.scss'
})
export class BlogCardsComponent {
  @Input() cardInfo!: BlogData;
}
