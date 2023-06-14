import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedAssessmentComponent } from './allocated-assessment.component';

describe('AllocatedAssessmentComponent', () => {
  let component: AllocatedAssessmentComponent;
  let fixture: ComponentFixture<AllocatedAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllocatedAssessmentComponent]
    });
    fixture = TestBed.createComponent(AllocatedAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
