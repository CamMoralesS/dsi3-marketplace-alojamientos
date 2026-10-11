import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { Button } from '../button/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SearchBar, Button, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
