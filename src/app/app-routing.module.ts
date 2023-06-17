import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { EmployeeDashboardComponent } from './Components/employee-dashboard/employee-dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ResultAndReviewComponent } from './Components/result-and-review/result-and-review.component';
import { TeamMembersComponent } from './Components/team-members/team-members.component';
import { AllocatedAssessmentComponent } from './Components/allocated-assessment/allocated-assessment.component';
import { TakeAssessmentComponent } from './Components/take-assessment/take-assessment.component';

const routes: Routes = [

  { path: '', redirectTo: 'Result', pathMatch: 'full' },
  { path: 'SignIn', component: SignInComponent },
  { path: 'EmployeeDashboard', component: EmployeeDashboardComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: 'Result', component: ResultAndReviewComponent },
  { path: 'TeamMembers', component: TeamMembersComponent },
  { path: 'AllocatedAssessment', component: AllocatedAssessmentComponent },
  { path: 'TakeAssessment', component: TakeAssessmentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
