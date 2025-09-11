import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Text } from './text/text';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Text],
  templateUrl: './app.html',
})
export class App {

}
