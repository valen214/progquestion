
import { Component, OnInit, ElementRef } from '@angular/core';
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

  data;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private elemRef: ElementRef
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.language = params.get("language")
      this.setNumber = params.get("setNumber")
      this.questionNumber = params.get("questionNumber")
    })

    this.data = this.questionService.getQuestionData();
  }

  ngAfterViewChecked(){
    let code_blocks: HTMLElement[] = this.elemRef.nativeElement.querySelectorAll("pre");
    
    if(code_blocks){
      let first = true;
      let addLineNumsAfterFirst = !this.route.snapshot.paramMap.get("questionNumber")
      for(let pre of code_blocks){
        let wrapper = document.createElement("div");
        pre.parentNode.insertBefore(wrapper, pre);
        pre.style.display = 'inline-block';
        pre.classList.add("prettyprint", (first || addLineNumsAfterFirst) && "linenums")
        wrapper.appendChild(pre);
        first = false;
      }
      PR.prettyPrint()
    }
  }

  isNumber(val){
    return typeof val === "number";
  }
}
