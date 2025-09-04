import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box } from './box';

describe('Box', () => {
  let component: Box;
  let fixture: ComponentFixture<Box>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Box]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Box);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
