import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [FormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
})
export class CustomInput {
  @Input() inputLabel: String = '';
  @Input() inputType: String = 'text';

  @Input() value: string | number = '';
  @Output() valueChange = new EventEmitter<string | number>();

  onHandleChange(value: string | number) {
    this.value = value;
    this.valueChange.emit(value);
  }
}
