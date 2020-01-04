import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';


const routes: Routes = [{
    path: "home",
    component: HomeComponent,
  }, {
    path: "question/:language/:setNumber/:questionNumber",
    component: QuestionComponent
  }, {
    path: "question/:language/:setNumber",
    component: QuestionComponent
  }, {
    path: "question/:language",
    component: QuestionComponent
  }, {
    path: "question",
    component: QuestionComponent
  }, {
    path: "**",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
