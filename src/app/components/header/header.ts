import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  imports: [SearchBar, Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
