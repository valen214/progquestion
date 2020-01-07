import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from '../app-routing.module';

import { NgVarModule } from '../ng-var/ng-var.module';
import { QuestionComponent } from './question/question.component';
import { QuestionMenuComponent } from './question-menu/question-menu.component';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionMenuComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgVarModule,
    MatCheckboxModule,
  ],
  exports: [
    QuestionComponent,
    QuestionMenuComponent,
  ]
})
export class QuestionModule { }
