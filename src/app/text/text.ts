import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.html',
})
export class Text {
  @Input() image: string | undefined;
}
