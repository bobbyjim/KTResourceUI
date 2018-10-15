import { Component, OnInit, Input } from '@angular/core';
import { Avd                      } from '../avd';
import { ActivatedRoute           } from '@angular/router';
import { Location                 } from '@angular/common';
import { KtModelService           } from '../kt-model.service';

@Component({
  selector: 'app-avd-detail',
  templateUrl: './avd-detail.component.html',
  styleUrls: ['./avd-detail.component.css']
})
export class AvdDetailComponent implements OnInit {
  @Input() avd: Avd;

  constructor(
    private route: ActivatedRoute,
    private modelService: KtModelService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAvd();
  }

  getAvd(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.modelService.getAvd(id)
      .subscribe(avd => this.avd = avd);
  }

  goBack(): void {
    this.location.back();
  }
}
