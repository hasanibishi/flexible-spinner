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
  @Input() filledWidth!: number;
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

  ngOnChanges() {
    this.style = {
      animation: `spin ${this.speed}s linear infinite`,
      height: `${this.size}px`,
      width: `${this.size}px`,
      border: `${this.thickness}px solid ${this.unFilledColor}`
    };

    switch (this.filledWidth) {
      case 1:
        this.style = {
          ...this.style,
          borderTop: `${this.thickness}px solid ${this.filledColor}`
        }
        break;
      case 2:
        this.style = {
          ...this.style,
          borderTop: `${this.thickness}px solid ${this.filledColor}`,
          borderRight: `${this.thickness}px solid ${this.filledColor}`,
        }
        break;
      case 3:
        this.style = {
          ...this.style,
          borderTop: `${this.thickness}px solid ${this.filledColor}`,
          borderRight: `${this.thickness}px solid ${this.filledColor}`,
          borderBottom: `${this.thickness}px solid ${this.filledColor}`
        }
        break;
      default:
        this.style = {
          ...this.style,
          borderTop: `${this.thickness}px solid ${this.filledColor}`
        }
        break;
    }

    this.textStyle = {
      display: 'grid',
      alignItems: 'center',
      textAlign: 'center',
      height: '20px',
      paddingTop: `${this.centerPosition ? this.size + (this.thickness * 2) + 30 : 5}px`,
      color: `${this.textColor}`,
      fontSize: `${this.textSize}px`,
    };

    if (this.centerPosition) {
      const center = {
        position: 'absolute',
        margin: 'auto',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0'
      };

      this.style = { ...this.style, ...center };

      this.textStyle = { ...this.textStyle, ...center };
    }
  }

  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }
}
