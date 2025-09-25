// fact.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FactService } from '../../app/fact-service/fact-service';

@Component({
  selector: 'app-fact',
  imports: [CommonModule],
  templateUrl: './fact.html',
})
export class Fact implements OnInit {
  randomFact: string | null = null;

  constructor(private factsService: FactService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.factsService.getRandomFact().subscribe(fact => {
      this.randomFact = fact;
      this.cdr.detectChanges();
    });
  }
}