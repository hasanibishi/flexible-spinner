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

  ngOnChanges(changes: SimpleChanges) {
    const speed = changes['speed']?.currentValue;
    const size = changes['size']?.currentValue;
    const thickness = changes['thickness']?.currentValue;
    const filledWidth = changes['filledWidth']?.currentValue;
    const unFilledColor = changes['unFilledColor']?.currentValue;
    const filledColor = changes['filledColor']?.currentValue;
    const textColor = changes['textColor']?.currentValue;
    const textSize = changes['textSize']?.currentValue;
    const centerPosition = changes['centerPosition']?.currentValue;

    this.style = {
      animation: `spin ${speed}s linear infinite`,
      height: `${size}px`,
      width: `${size}px`,
      border: `${thickness}px solid ${unFilledColor}`
    };

    switch (filledWidth) {
      case 1:
        this.style = {
          ...this.style,
          borderTop: `${thickness}px solid ${filledColor}`
        }
        break;
      case 2:
        this.style = {
          ...this.style,
          borderTop: `${thickness}px solid ${filledColor}`,
          borderRight: `${thickness}px solid ${filledColor}`,
        }
        break;
      case 3:
        this.style = {
          ...this.style,
          borderTop: `${thickness}px solid ${filledColor}`,
          borderRight: `${thickness}px solid ${filledColor}`,
          borderBottom: `${thickness}px solid ${filledColor}`
        }
        break;
      default:
        this.style = {
          ...this.style,
          borderTop: `${thickness}px solid ${filledColor}`
        }
        break;
    }

    this.textStyle = {
      display: 'grid',
      alignItems: 'center',
      textAlign: 'center',
      height: '20px',
      width: `${size + 20}px`,
      color: `${textColor}`,
      fontSize: `${textSize}px`,
    };

    if (centerPosition) {
      const center = {
        position: 'absolute',
        margin: 'auto',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0'
      };

      this.style = { ...this.style, ...center };

      this.textStyle = {
        ...this.textStyle,
        width: '200px',
        paddingTop: `${size + (thickness * 2) + 50}px`,
        ...center
      };
    }
  }

  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }
}
