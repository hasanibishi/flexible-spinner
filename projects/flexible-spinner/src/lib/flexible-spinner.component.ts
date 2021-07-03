import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlexibleSpinnerService } from './flexible-spinner.service';
import { IStyle, ITextStyle } from './models/style.model'

@Component({
  selector: 'flexible-spinner',
  templateUrl: './flexible-spinner.component.html',
  styleUrls: ['./flexible-spinner.component.scss']
})
export class FlexibleSpinnerComponent implements OnInit, OnChanges, OnDestroy {

  style!: IStyle;
  textStyle!: ITextStyle;
  isVisible: boolean = false;

  @Input() spinnerId!: number;
  @Input() centerPosition!: boolean;
  @Input() speed!: number;
  @Input() size!: number;
  @Input() thickness!: number;
  @Input() filledColor!: string;
  @Input() unFilledColor!: string;
  @Input() showText!: boolean;
  @Input() text!: string;
  @Input() textColor!: string;
  @Input() textSize!: number;

  spinnerSubscription!: Subscription;

  constructor(private fs: FlexibleSpinnerService) { }

  ngOnInit() {
    this.spinnerSubscription = this.fs.spinner$.subscribe(resp => {
      if (this.spinnerId === resp.spinnerId)
        this.isVisible = resp.visibility;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.style = {
      animation: `spin ${changes['speed']?.currentValue}s linear infinite`,
      height: `${changes['size']?.currentValue}px`,
      width: `${changes['size']?.currentValue}px`,
      border: `${changes['thickness']?.currentValue}px solid ${changes['unFilledColor']?.currentValue}`,
      borderTop: `${changes['thickness']?.currentValue}px solid ${changes['filledColor']?.currentValue}`
    };

    this.textStyle = {
      display: 'grid',
      alignItems: 'center',
      textAlign: 'center',
      height: '20px',
      width: `${changes['size']?.currentValue + 20}px`,
      color: `${changes['textColor']?.currentValue}`,
      fontSize: `${changes['textSize']?.currentValue}px`,
    };

    if (changes['centerPosition']?.currentValue) {
      const center = {
        position: 'absolute',
        margin: 'auto',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0'
      }

      this.style = { ...this.style, ...center };

      this.textStyle = {
        ...this.textStyle,
        width: '200px',
        paddingTop: `${changes['size']?.currentValue + 50}px`,
        ...center
      };
    }
  }

  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }
}
