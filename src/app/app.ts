import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button],
  templateUrl: './app.html',
})
export class App {

}
