import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAndReviewComponent } from './result-and-review.component';

describe('ResultAndReviewComponent', () => {
  let component: ResultAndReviewComponent;
  let fixture: ComponentFixture<ResultAndReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultAndReviewComponent]
    });
    fixture = TestBed.createComponent(ResultAndReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
