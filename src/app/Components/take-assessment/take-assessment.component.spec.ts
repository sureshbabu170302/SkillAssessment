import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAssessmentComponent } from './take-assessment.component';

describe('TakeAssessmentComponent', () => {
  let component: TakeAssessmentComponent;
  let fixture: ComponentFixture<TakeAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeAssessmentComponent]
    });
    fixture = TestBed.createComponent(TakeAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
