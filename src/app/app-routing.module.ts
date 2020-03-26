import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCaseComponent } from './add-case/add-case.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewCaseComponent } from './view-case/view-case.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-case', component: AddCaseComponent },
  { path: 'view-case', component: ViewCaseComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'detail/:id', component: CaseDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
