import { NgModule             } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvdsComponent        } from './avds/avds.component';
import { DashboardComponent   } from './dashboard/dashboard.component';
import { AvdDetailComponent   } from './avd-detail/avd-detail.component';
import { CapturesComponent    } from './captures/captures.component';
import {CaptureDetailComponent} from './capture-detail/capture-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // default route
  { path: 'avddetail/:id', component: AvdDetailComponent }, // parameterized route
  { path: 'capturedetail/:id', component: CaptureDetailComponent },
  { path: 'avds', component: AvdsComponent },
  { path: 'captures', component: CapturesComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
