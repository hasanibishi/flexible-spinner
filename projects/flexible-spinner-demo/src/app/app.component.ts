import { Component, OnInit } from '@angular/core';
import { FlexibleSpinnerService } from 'flexible-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flexible-spinner-demo';

  constructor(
    private spinnerService: FlexibleSpinnerService
  ) { }

  ngOnInit() {
    this.spinnerService.showSpinner(1);
  }
}
