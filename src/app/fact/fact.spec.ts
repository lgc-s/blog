import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fact } from './fact';

describe('Fact', () => {
  let component: Fact;
  let fixture: ComponentFixture<Fact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
