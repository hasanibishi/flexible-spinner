import { Component } from '@angular/core';
import { TmpSpinnerService } from './tmp-spinner/tmp-spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flexible-spinner-demo';

  constructor(
    private spinnerService: TmpSpinnerService
  ) { }

  showS1() {
    this.spinnerService.showSpinner(1);
  }

  hideS1() {
    this.spinnerService.hideSpinner(1);
  }

  showS2() {
    this.spinnerService.showSpinner(2);
  }

  hideS2() {
    this.spinnerService.hideSpinner(2);
  }
}
