import { Component, Input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-card',
  imports: [Button],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() cardTitle = "Card Title";
  @Input() cardDescription = "Card description goes here. It provides a brief overview of the content or purpose of the card.";
}
