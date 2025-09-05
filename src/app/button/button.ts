import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
})

export class Button {
  @Input() href: string | undefined;
  @Input() text: string | undefined;
}
