import { Component, OnInit } from '@angular/core';
import { FlexibleSpinnerService } from 'flexible-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  spinnerId: number = 1;
  centerPosition: boolean = false;
  speed: number = 2;
  size: number = 50;
  thickness: number = 10;
  filledWidth: number = 1;
  filledColor: string = 'red';
  unFilledColor: string = '#eee';
  showText: boolean = false;
  text: string = 'Loading...';
  textSize: number = 16;
  textColor: string = 'red';

  constructor(private spinnerService: FlexibleSpinnerService) { }

  ngOnInit() { }

  showSpinner() {
    this.spinnerService.showSpinner(this.spinnerId);
  }

  hideSpinner() {
    this.spinnerService.hideSpinner(this.spinnerId);
  }
}
