import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Post {
  id?: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
  content: string[];
}

@Injectable({
  providedIn: 'root',
})

export class PostService {
  constructor(private firestore: Firestore) {}

  getPosts(): Observable<Post[]> {
    const postsCollection = collection(this.firestore, 'posts');
    return collectionData(postsCollection, { idField: 'id' }) as Observable<Post[]>;
  }

  getPostCount(): Observable<number> {
    return this.getPosts().pipe(map((posts) => posts.length));
  }
}