import { Component, OnInit } from '@angular/core';
import {CountryInfo} from './country-info';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
  }

  countryList:CountryInfo[] = [
      {
        label: 'AZERBAIJAN',
        value: '01',
      },
      {
        label: 'ARMENIA',
        value: '02'
      },
      {
        label: 'ARABIA',
        value: '03'
      },

      {
        label: 'BAHRAIN',
        value: '04'
      },
      {
        label: 'BAHRAIN',
        value: '05'
      },
      {
        label: 'BANGLADESH',
        value: '06'
      },
      {
        label: 'CAMBODIA',
        value: '07'
      },
      {
        label: 'CHINA',
        value: '08'
      },
      {
        label: 'EAST',
        value: '10'
      },
      {
        label: 'INDIA',
        value: '11'
      },
      {
        label: 'INDONESIA',
        value: '12'
      },
      {
        label: 'IRAN',
        value: '13'
      },
      {
        label: 'IRAQ',
        value: '14'
      },
      {
        label: 'JAPAN',
        value: '15'
      },
      {
        label: 'JORDAN',
        value: '16'
      },
      {
        label: 'KAZAKHSTAN',
        value: '17'
      },
      {
        label: 'KUWAIT',
        value: '18'
      },
      {
        label: 'KYRGYZSTAN',
        value: '19'
      },
      {
        label: 'BAHRAIN',
        value: '20'
      }
    ];
}

