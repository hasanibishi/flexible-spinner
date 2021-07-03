import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISpinner } from './models/spinner.model';

@Injectable({
  providedIn: 'root'
})
export class FlexibleSpinnerService {

  private spinner = new BehaviorSubject<ISpinner>({ spinnerId: 0, visibility: false });
  spinner$ = this.spinner.asObservable();

  showSpinner(spinnerId: number) {
    this.spinner.next({ spinnerId: spinnerId, visibility: true });
  }

  hideSpinner(spinnerId: number) {
    this.spinner.next({ spinnerId: spinnerId, visibility: false });
  }
}
