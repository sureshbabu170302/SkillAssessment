import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { EmployeeDashboardComponent } from './Components/employee-dashboard/employee-dashboard.component';
import { AllocatedAssessmentComponent } from './Components/allocated-assessment/allocated-assessment.component';
import { ResultAndReviewComponent } from './Components/result-and-review/result-and-review.component';
import { TeamMembersComponent } from './Components/team-members/team-members.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { TakeAssessmentComponent } from './Components/take-assessment/take-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    EmployeeDashboardComponent,
    AllocatedAssessmentComponent,
    ResultAndReviewComponent,
    TeamMembersComponent,
    SettingsComponent,
    TakeAssessmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
