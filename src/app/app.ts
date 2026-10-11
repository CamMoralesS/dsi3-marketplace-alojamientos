import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Carrousel } from './components/carrousel/carrousel';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Carrousel, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cards = signal([
    { id: 1, title: 'Card 1', description: 'Description for Card 1', imagen: 'assets/img1.jpg' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2', imagen: 'assets/img2.jpg' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3', imagen: 'assets/img3.jpg' },
    { id: 4, title: 'Card 4', description: 'Description for Card 4', imagen: 'assets/img4.jpg' },
    { id: 5, title: 'Card 5', description: 'Description for Card 5', imagen: 'assets/img5.jpg' },
    { id: 6, title: 'Card 6', description: 'Description for Card 6', imagen: 'assets/img6.jpg' },
    { id: 7, title: 'Card 7', description: 'Description for Card 7', imagen: 'assets/img7.jpg' },
    { id: 8, title: 'Card 8', description: 'Description for Card 8', imagen: 'assets/img8.jpg' },
    { id: 9, title: 'Card 9', description: 'Description for Card 9', imagen: 'assets/img9.jpg' },
    { id: 10, title: 'Card 10', description: 'Description for Card 10', imagen: 'assets/img10.jpg' }
  ]);
}
