import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import {MatTabsModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, FormsModule, CrisisCenterRoutingModule, MatTabsModule],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ]
})
export class CrisisCenterModule {}
