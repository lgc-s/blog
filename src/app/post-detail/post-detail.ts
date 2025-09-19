import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';
import { Text } from '../text/text';
import { Post } from '../post-service/post-service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, Button, Text],
  templateUrl: './post-detail.html',
})
export class PostDetailComponent {
  @Input() post!: Post;
}