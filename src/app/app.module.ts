import { BrowserModule      } from '@angular/platform-browser';
import { NgModule           } from '@angular/core';
import { FormsModule        } from '@angular/forms';
import { HttpClientModule   } from '@angular/common/http';

import { AppComponent       } from './app.component';

import { MessagesComponent  } from './messages/messages.component';
import { AppRoutingModule   } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AvdsComponent      } from './avds/avds.component';
import { AvdDetailComponent } from './avd-detail/avd-detail.component';
import { AvdSearchComponent } from './avd-search/avd-search.component';
import { CapturesComponent } from './captures/captures.component';
import { CaptureDetailComponent } from './capture-detail/capture-detail.component';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AvdsComponent,
    CapturesComponent,
    AvdDetailComponent,
    AvdSearchComponent,
    MessagesComponent,
    DashboardComponent,
    CapturesComponent,
    CaptureDetailComponent,
    BetterHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
//    HttpClientInMemoryWebApiModule.forRoot(
//      InMemoryDataService, { dataEncapsulation: false }
//    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
