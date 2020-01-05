
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { QuestionService } from './question.service';

/**
 * data source at:
 * https://gist.github.com/valen214/66eafdef48f4507f6509b86a86c01f8e
 */

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  language;
  setNumber;
  questionNumber;

  data = {};

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.language = this.route.snapshot.paramMap.get("urlParam");
    this.route.paramMap.subscribe(params => {
      this.language = params.get("language")
      this.setNumber = params.get("setNumber")
      this.questionNumber = params.get("questionNumber")
    })

    this.data = this.questionService.getQuestionData();
  }

  isNumber(val){
    return typeof val === "number";
  }
}
