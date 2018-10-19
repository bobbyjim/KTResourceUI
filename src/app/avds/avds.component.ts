import { Component, OnInit } from '@angular/core';
import { KtModelService    } from '../kt-model.service';
import { Avd               } from '../avd';

@Component({
  selector: 'app-models',
  templateUrl: './avds.component.html',
  styleUrls: ['./avds.component.css']
})
export class AvdsComponent implements OnInit {

  models: Avd[];

  constructor(private modelService: KtModelService) { }

  ngOnInit() {
    this.getModels();
  }

  getModels(): void {
    this.modelService.getAvds()
      .subscribe(models => this.models = models);
  }

  noModels():boolean {
    return this.models.length == 0;
  }
  delete(avd: Avd): void {
    this.models = this.models.filter(h => h !== avd);
    this.modelService.deleteAvd(avd).subscribe();
  }
}
