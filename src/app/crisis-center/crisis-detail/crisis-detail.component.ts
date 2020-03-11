import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { DialogService } from '../../dialog.service';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material';
import {
  EditableComponent,
  UnsavedChangesService
} from '../../unsaved-changes/unsaved-changes.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit, EditableComponent {
  crisis: Crisis;
  editName: string;

  // default: first tab
  previouslySelectedTabIndex = 0;
  revertInProgress = false;

  @ViewChild('tabGroup', { static: false }) tabGroup: MatTabGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unsavedChangesService: UnsavedChangesService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  hasUnsavedChanges(): boolean {
    return this.crisis && this.crisis.name !== this.editName;
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

  onSelectedTabChange(tabChangeEvent: MatTabChangeEvent) {
    /*if (this.revertInProgress) {
      this.revertInProgress = false;
    } else {
      // check for unsaved changes
      this.unsavedChangesService
        .discardUnsavedChanges(this.hasUnsavedChanges())
        .subscribe(discardChanges => {
          // prevent or allow tab change
          if (discardChanges) {
            // update the selected tab index
            this.previouslySelectedTabIndex = tabChangeEvent.index;
          } else {
            this.revertInProgress = true;
            this.tabGroup.selectedIndex = this.previouslySelectedTabIndex;
          }
        });
    }*/
  }
}
