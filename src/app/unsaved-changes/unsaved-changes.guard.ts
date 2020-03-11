import { Injectable } from '@angular/core';
import { UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditableComponent, UnsavedChangesService } from './unsaved-changes.service';

/**
 * Guard checking if the de-activated route contains unsaved changes.
 */
@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<EditableComponent> {
  constructor(private unsavedChangesService: UnsavedChangesService) {}

  canDeactivate(
    component: EditableComponent
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.unsavedChangesService
      .discardUnsavedChanges(component.hasUnsavedChanges());
  }
}
