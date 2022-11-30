
# Flexible Spinner

flexible-spinner is a library which can be generated dynamically using Input properties. It can be used in many different places e.g. inside buttons, paragraphs etc, or on center position for whole current application. Fully wrote with TypeScript.

## Demo
👉 Live Demo: http://flexible-spinner.atwebpages.com/


## Getting started
```
npm install --save flexible-spinner
```

## Setup
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexibleSpinnerModule } from 'flexible-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexibleSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Using the component
### .html
```
<flexible-spinner [spinnerId]="1"
                  [centerPosition]="true"
                  [speed]="2"
                  [size]="50"
                  [thickness]="10"
                  [filledWidth]="1"
                  [filledColor]="'red'"
                  [unFilledColor]="'#eee'"
                  [showText]="true"
                  [text]="'Loading...'"
                  [textSize]="16"
                  [textColor]="'red'"></flexible-spinner>
```

### .ts
```
import { FlexibleSpinnerService } from 'flexible-spinner';
...

constructor(
  private spinnerService: FlexibleSpinnerService
) { }

ngOnInit() {
  this.showSpinner();
}

showSpinner() {
  this.spinnerService.showSpinner(1);
}

hideSpinner() {
  this.spinnerService.hideSpinner(1);
}
```

## Input properties

| @Input        	    | Type     	    |  Description    |
|---------------------|---------------|-----------------
| **spinnerId**       | number        | In the same it can be used in multiple places adding **spinnerId** |
| **centerPosition**  | boolean       | It can be used on center position or in other places adding **centerPosition** |
| **speed**           | number        | Rotation speed in **seconds**
| **size**            | number        | Size in **px**
| **thickness**       | number        | Thickness in **px**
| **filledWidth**     | number        | Value must be 1, 2 or 3. It means the spinner can be filled 25%, 50% or 75%
| **filledColor**     | string        | Color that is filled
| **unFilledColor**   | string        | Color that is not filled
| **showText**        | boolean       | Is possible to show text or message below the spinner
| **text**            | string        | The text e.g. **Loading...**
| **textSize**        | number        | The size of text in **px**
| **textColor**       | string        | The color of text

## License
MIT


## Author
Hasan Ibishi
