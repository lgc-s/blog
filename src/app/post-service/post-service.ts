import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, orderBy, Timestamp } from '@angular/fire/firestore';
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
  time: Timestamp;
}

@Injectable({
  providedIn: 'root',
})

export class PostService {
  constructor(private firestore: Firestore) {}

  getPosts(): Observable<Post[]> {
    const postsCollection = collection(this.firestore, 'posts');
    const orderedQuery = query(postsCollection, orderBy('time', 'desc'));
    return collectionData(orderedQuery, { idField: 'id' }) as Observable<Post[]>;
  }

  getPostCount(): Observable<number> {
    return this.getPosts().pipe(map((posts) => posts.length));
  }
}