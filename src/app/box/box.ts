import { Component } from '@angular/core';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [Logo],
  templateUrl: './box.html',
})
export class Box {

}
