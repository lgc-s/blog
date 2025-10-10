import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Text } from './text/text';
import { PostList } from './post-list/post-list';
import { Post, PostService } from './post-service/post-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Fact } from './fact/fact';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterOutlet, PostList, Text, Fact],
  templateUrl: './app.html',
})

export class App {
  posts$!: Observable<Post[]>;
  postCount$!: Observable<number>;
  currentYear: number;

  constructor(private postService: PostService) {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
  }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
    this.postCount$ = this.postService.getPostCount();
  }
}
