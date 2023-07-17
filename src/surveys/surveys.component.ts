import { Component, OnInit } from '@angular/core';
import { SurveyModule } from 'survey-angular-ui';
import { Model } from 'survey-core';
import { surveyJson, surveyJsonWithPages } from './constants';

@Component({
  selector: 'app-surveys',
  standalone: true,
  imports: [SurveyModule],
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css'],
})
export class SurveysComponent implements OnInit {

  surveyModel!: Model;

  constructor() {}

  ngOnInit() {
    // const survey = new Model(surveyJson);
    const survey = new Model(surveyJsonWithPages);
    this.surveyModel = survey;
    survey.onComplete.add(this.alertResults);
  }

  alertResults (sender: any) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }
}
