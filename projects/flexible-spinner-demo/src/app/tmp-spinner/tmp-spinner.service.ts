import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ISpinner {
  spinnerId: number;
  visibility: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TmpSpinnerService {

  private spinner = new BehaviorSubject<ISpinner>({ spinnerId: 0, visibility: false });
  spinner$ = this.spinner.asObservable();

  showSpinner(spinnerId: number) {
    this.spinner.next({ spinnerId: spinnerId, visibility: true });
  }

  hideSpinner(spinnerId: number) {
    this.spinner.next({ spinnerId: spinnerId, visibility: false });
  }
}
