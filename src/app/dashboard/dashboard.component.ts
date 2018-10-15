import { Component, OnInit } from '@angular/core';
import { KtModelService    } from '../kt-model.service';
import { Avd               } from '../avd';
import {KtCaptureService} from '../kt-capture.service';
import {Capture} from '../capture';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  models: Avd[] = [];
  captures: Capture[] = [];

  constructor(private modelService: KtModelService,
              private captureService: KtCaptureService) { }

  ngOnInit() {
    this.getAvds();
    this.getCaptures();
  }

  getAvds(): void {
    this.modelService.getAvds()
      .subscribe(models => this.models = models.slice(1, 5));
  }

  getCaptures(): void {
    this.captureService.getCaptures()
      .subscribe(captures => this.captures = captures.slice(1, 5));
  }
}
