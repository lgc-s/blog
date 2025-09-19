import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, PostService } from '../post-service/post-service';
import { Observable } from 'rxjs';
import { PostDetailComponent } from '../post-detail/post-detail';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostDetailComponent],
  templateUrl: './post-list.html',
})

export class PostList implements OnInit {
  posts$!: Observable<Post[]>;
  postCount$!: Observable<number>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
    this.postCount$ = this.postService.getPostCount();
  }
}