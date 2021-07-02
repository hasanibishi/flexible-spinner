import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FlexibleSpinnerService } from './flexible-spinner.service';

@Component({
  selector: 'flexible-spinner',
  templateUrl: './flexible-spinner.component.html',
  styleUrls: ['./flexible-spinner.component.scss']
})
export class FlexibleSpinnerComponent implements OnChanges {

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

  constructor(fs: FlexibleSpinnerService) {
    fs.spinner$.subscribe(resp => {
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
      fontSize: `${changes['textSize']?.currentValue + 20}px`,
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
}
