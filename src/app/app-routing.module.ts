import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCaseComponent } from './add-case/add-case.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { EditComponent } from './edit/edit.component';
import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'edit/:id', component: EditComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-case', component: AddCaseComponent },
  { path: 'detail/:id', component: CaseDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
