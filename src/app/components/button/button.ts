import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() textButton!: String;
  @Input() labelMessage!: String;
  @Output() buttonClick = new EventEmitter<boolean>();

  onClickButton() {
    this.buttonClick.emit(true);
  }
}
