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
  ) {
    this.showS1();
  }

  showS1() {
    this.spinnerService.showSpinner(1);
  }
}
