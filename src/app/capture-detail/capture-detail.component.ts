import { Component, Input, OnInit } from '@angular/core';
import { Capture                  } from '../capture';
import { ActivatedRoute           } from '@angular/router';
import { Location                 } from '@angular/common';
import { KtCaptureService         } from '../kt-capture.service';

@Component({
  selector: 'app-capture-detail',
  templateUrl: './capture-detail.component.html',
  styleUrls: ['./capture-detail.component.css']
})
export class CaptureDetailComponent implements OnInit {
  @Input() capture: Capture;

  constructor(
    private route: ActivatedRoute,
    private captureService: KtCaptureService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCapture();
  }

  getCapture(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.captureService.getCapture(id)
      .subscribe(capture => this.capture = capture);
  }

  goBack(): void {
    this.location.back();
  }

}
