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

  @Input() value: String | number = 0;
  @Output() valueChange = new EventEmitter<String|number>;

  onHandleChange(value: String | number) {
    console.log("value", value);
    this.value = value;
    this.valueChange.emit(value);
  }
}
