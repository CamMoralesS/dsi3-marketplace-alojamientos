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
  
}
