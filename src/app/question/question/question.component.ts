import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'question-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() data?: Question;
  @Input() showAnswers: boolean = true;
  @Input() showCorrect: boolean = true;

  constructor() { }

  ngOnInit() {
    console.log("QuestionComponent.data", this.data)
  }

}
