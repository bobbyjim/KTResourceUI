import { Component, OnInit   } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Avd } from '../avd';
import { KtModelService } from '../kt-model.service';

@Component({
  selector: 'app-model-search',
  templateUrl: './avd-search.component.html',
  styleUrls: [ './avd-search.component.css' ]
})
export class AvdSearchComponent implements OnInit {
  avd$: Observable<Avd[]>;
  private searchTerms = new Subject<string>();

  constructor(private modelService: KtModelService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.avd$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.modelService.searchAvds(term)),
    );
  }
}
