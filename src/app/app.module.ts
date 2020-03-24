import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCaseComponent } from './add-case/add-case.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewCaseComponent } from './view-case/view-case.component';
import { FormsModule } from '@angular/forms';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCaseComponent,
    HomeComponent,
    ReportsComponent,
    ViewCaseComponent,
    CaseDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
