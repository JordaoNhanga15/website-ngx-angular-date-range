import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { calendarType } from 'ngx-angular-date-range-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      /deep/ .light{
        width: 100% !important;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';

  date = new FormControl();

  row: calendarType = {
    type: 'day',
    date: new Date(),
    containDarkMode: true,
    locale: 'pt',
    backgroundColorPrimary: '#f67280',
    backgroundColorSecondary: '#cc9096',
    // maxDate: new Date(),
    // minDate: new Date('2020-01-01'),
  };
  format: string = 'dd/MM/yyyy';
  formHeader: FormGroup;
  formats = [
    { value: 'day', label: 'Dia' },
    { value: 'month', label: 'Mês' },
    { value: 'year', label: 'Ano' },
  ];
  locales = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'vi', label: 'Vietnamese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'es', label: 'Spanish' },
    { value: 'de', label: 'German' },
    { value: 'fr', label: 'French' },
    { value: 'it', label: 'Italian' },
    { value: 'ni', label: 'Nicaragua' },
    { value: 'th', label: 'tailandia' },
    { value: 'tw', label: 'Taiwan' },
    { value: 'se', label: 'Sweden' },
    { value: 'hu', label: 'Hungary' },
    { value: 'lt', label: 'Lithuania' },
    { value: 'kr', label: 'South Korea' },
  ];
  skills : string[] = [
    "Software Engineer",
    "Angular",
    "React",
    "Vue",
    "Node",
    "Express",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "DDD",
    "TDD",
    "Clean Code",
    "Clean Architecture",
    "SOLID",
    "Design Patterns",
    "Git",
    "GitHub",
    "GitLab",
  ]

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formHeader = this.fb.group({
      date: [],
      format: ['day'],
      locale: ['de'],
      backgroundPrimary: ['#f67280'],
      backgroundSecondary: ['#cc9096'],
    });

    this.f.format.valueChanges.subscribe((value) => {
      if (!value) return;

      this.row.type = value.toLowerCase();
    });

    this.f.locale.valueChanges.subscribe((value) => {
      if (!value) return;

      this.row.locale = this.locales.find((locale) => locale.label === value)
        ?.value as any;
    });

    this.f.date.valueChanges.subscribe((value) => {});

    this.f.backgroundPrimary.valueChanges.subscribe((value) => {
      if (!value) return;

      this.row.backgroundColorPrimary = value;
    });

    this.f.backgroundSecondary.valueChanges.subscribe((value) => {
      if (!value) return;

      this.row.backgroundColorSecondary = value;
    });
  }

  get f() {
    return this.formHeader.controls;
  }

  get datee() {
    return this.formHeader.get('date') as FormControl;
  }
}
