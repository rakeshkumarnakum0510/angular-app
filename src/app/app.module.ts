import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCaseComponent } from './add-case/add-case.component';
import { HomeComponent } from './home/home.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaseData } from './mock-cases';
import { EditComponent } from './edit/edit.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCaseComponent,
    HomeComponent,
    CaseDetailComponent,
    DashboardComponent,
    EditComponent, 
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(CaseData),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
