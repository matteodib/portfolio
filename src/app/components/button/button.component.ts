import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {

  @Input("text") text: string = ""
  @Input("style") style : "primary" | "secondary" = "primary"
  @Output("action") action = new EventEmitter()

  runMethod(e: any) {
    this.action.emit(e)
  }
}