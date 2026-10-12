import { Component, EventEmitter, Output } from '@angular/core';
import { Button } from '../button/button';
import { CustomInput } from '../custom-input/custom-input';

@Component({
  selector: 'app-search-bar',
  imports: [Button, CustomInput],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output() search = new EventEmitter<string>();

  searchValue = '';

  onSearchChange(valor: string | number): void {
    this.searchValue = String(valor);
  }

  onBuscar(): void {
    this.search.emit(this.searchValue.trim());
  }
}
