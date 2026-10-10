import { Component } from '@angular/core';
import { Button } from '../button/button';
import { CustomInput } from '../custom-input/custom-input';

@Component({
  selector: 'app-search-bar',
  imports: [Button, CustomInput],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  searchValue!: string;
  
  onSearchChange($event: Event) {
  throw new Error('Method not implemented.');
  }
}
