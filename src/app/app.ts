import { Button } from './button/button';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Text } from './text/text';

@Component({
  selector: 'app-root',
  imports: [Button, RouterOutlet, Text],
  templateUrl: './app.html',
})
export class App {

}
