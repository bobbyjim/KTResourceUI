import { Component, OnInit } from '@angular/core';
import { KtCaptureService } from '../kt-capture.service';
import {Capture} from '../capture';

@Component({
  selector: 'app-captures',
  templateUrl: './captures.component.html',
  styleUrls: ['./captures.component.css']
})
export class CapturesComponent implements OnInit {

  captures: Capture[];

  constructor(private captureService: KtCaptureService) { }

  ngOnInit() {
    this.getCaptures();
  }

  getCaptures(): void {
    this.captureService.getCaptures()
      .subscribe(captures => this.captures = captures);
  }

  delete(capture: Capture): void {
    this.captures = this.captures.filter( h => h !== capture );
    this.captureService.deleteCapture(capture).subscribe();
  }

}
