// services/fact-service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FactService {
  constructor(private firestore: Firestore) { }

  getRandomFact(): Observable<string> {
    const factsCollection = collection(this.firestore, 'facts');

    return from(getDocs(factsCollection)).pipe(
      map(snapshot => {
        const docs = snapshot.docs.map(doc => doc.data());

        if (docs.length === 0) {
          return 'No facts available.';
        }
        const randomIndex = Math.floor(Math.random() * docs.length);
        return docs[randomIndex]['fact'];
      })
    );
  }
}