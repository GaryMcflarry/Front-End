import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {
  @Input() text!: string;
  
  [x: string]: any;

  @Output() btnClick = new EventEmitter();

  onClick() {
  this.btnClick.emit();
  }
}
