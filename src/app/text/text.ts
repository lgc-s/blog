import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [CommonModule],
  templateUrl: './text.html',
})
export class Text {
  @Input() image: string | undefined;
  @Input() link: boolean | undefined;
  @Input() width: string | undefined;
}
