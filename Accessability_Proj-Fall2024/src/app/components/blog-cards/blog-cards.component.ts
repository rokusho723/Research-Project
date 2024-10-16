import { Component, Input } from '@angular/core';
import { BlogCard } from "./../../models/blog-card.model";

@Component({
  selector: 'blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrl: './blog-cards.component.scss'
})
export class BlogCardsComponent {
  @Input() cardInfo!: BlogCard;
}
