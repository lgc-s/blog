import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Box } from './box/box';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Box],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = 'lgc-s.blog';
}
