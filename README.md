# Date Range Picker Angular Library

The **ngx-angular-date-range-picker** library provides a customizable date range picker component for Angular applications.

## Installation

To use this library in your Angular project, you need to install it using npm:

```bash
npm install ngx-angular-date-range-picker
```

## Usage

1. Import the `DateRangePickerModule` into your application module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateRangePickerModule } from 'ngx-angular-date-range-picker';

@NgModule({
  declarations: [/* ... */],
  imports: [
    BrowserModule,
    DateRangePickerModule, // Add this line
  ],
  bootstrap: [/* ... */],
})
export class AppModule {}
```

2. In your component template, use the `ngx-angular-date-range-picker` component:

```html
<date-range-picker [props]="calendar" [control]="date"></date-range-picker>
```

3. In your component TypeScript file, configure the `calendarType` and the `FormControl`:

```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { calendarType } from 'ngx-angular-date-range-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = new FormControl();

  calendar: calendarType = {
    type: 'day',
    date: new Date(),
    containDarkMode: true,
    locale: 'en',
    backgroundColorPrimary: '#F1BF98',
    backgroundColorSecondary: '#FDF4ED',
    maxDate: new Date(),
    minDate: new Date(),
  };
}
```

##Options
<table>
  <tr>
    <th>Option</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>string</td>
    <td>day</td>
    <td>Specifies the type of date range picker to be displayed. Possible values are <code>day</code>, <code>month</code>, and <code>year</code>.</td>
  </tr>
  <tr>
    <td>date</td>
    <td>Date</td>
    <td>new Date()</td>
    <td>Specifies the date to be displayed in the date range picker.</td>
  </tr>
  <tr>
    <td>containDarkMode</td>
    <td>boolean</td>
    <td>false</td>
    <td>Specifies whether the date range picker should be displayed in dark mode.</td>
  </tr>
  <tr>
    <td>locale</td>
    <td>string</td>
    <td>en</td>
    <td>Specifies the locale to be used for formatting the date range picker. Possible values are <code>en</code> and <code>pt</code>.</td>
  </tr>
  <tr>
    <td>backgroundColorPrimary</td>
    <td>string</td>
    <td>#F1BF98</td>
    <td>Specifies the primary background color of the date range picker.</td>
  </tr>
  <tr>
    <td>backgroundColorSecondary</td>
    <td>string</td>
    <td>#FDF4ED</td>
    <td>Specifies the secondary background color of the date range picker.</td>
  </tr>
  <tr>
    <td>maxDate</td>
    <td>Date</td>
    <td>new Date()</td>
    <td>Specifies the maximum date that can be selected in the date range picker.</td>
  </tr>
  <tr>
    <td>minDate</td>
    <td>Date</td>
    <td>new Date()</td>
    <td>Specifies the minimum date that can be selected in the date range picker.</td>
  </tr>
</table>

## Demo


## Features

- Supports various date range types (day, month, year).
- Allows formatting based on different regions.
- Provides internationalization (i18n) support.
- Customizable CSS styling.
- Supports dark mode.
- Allows setting a maximum and minimum date range.
- Supports reactive forms.
- Supports template-driven forms.
- Supports Angular 11.

## Contributions

Contributions are welcome! Feel free to open issues or pull requests on the [GitHub repository](https://github.com/JordaoNhanga15/angular-date-range-picker).

## Author

- GitHub: [@JordaoNhanga15](https://github.com/JordaoNhanga15)
- LinkedIn: [Jordão de Oliveira](https://www.linkedin.com/in/jordao-de-oliveira/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
