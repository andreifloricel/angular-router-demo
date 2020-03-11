import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DialogService } from '../dialog.service';


/**
 * Base class for all editable(changeable) components.
 */
export interface EditableComponent {
  /**
   * Checks if component has unsaved changes.
   * This can be achieved for example by:
   *  - checking if form is dirty
   *  - in case of editable tables if there is a row/cell in edit mode
   *
   *
   * @returns TRUE if component has unsaved changes, FALSE otherwise.
   */
  hasUnsavedChanges(): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesService {
  constructor(private dialogService: DialogService) {}

  discardUnsavedChanges(hasUnsavedChanges: boolean): Observable<boolean> {
    return hasUnsavedChanges ? this.dialogService.confirm('Discard changes?') : of(true);
  }
}
