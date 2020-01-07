import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionMenuComponent } from './question/question-menu/question-menu.component';


const routes: Routes = [{
    path: "home",
    component: HomeComponent,
  }, {
    path: "question/:language/:setNumber/:questionNumber",
    component: QuestionMenuComponent
  }, {
    path: "question/:language/:setNumber",
    component: QuestionMenuComponent
  }, {
    path: "question/:language",
    component: QuestionMenuComponent
  }, {
    path: "question",
    component: QuestionMenuComponent
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
