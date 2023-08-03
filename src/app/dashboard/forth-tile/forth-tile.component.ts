import { Component, EventEmitter, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);
@Component({
  selector: 'app-forth-tile',
  templateUrl: './forth-tile.component.html',
  styleUrls: ['./forth-tile.component.scss']
})
export class ForthTileComponent {


  
  @Output() selected_table_category_type = new EventEmitter<any>();

  options: any = {

    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
      },
    backgroundColor:'#ffffff',
      

    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Monthly Expenses Analysis'
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      },
      series: {
        
    }



    },
    xAxis: {
      categories: ["Shopping", "Tuition Fees", "Transport", "Daily Needs", "Food", "Fuel", "Bills", "Birthday Expenses", "Fees"],
      crosshair: 'true'
    },
    series: [{
      name: 'Expenses in Rupees',
      data: [
        { name: 'Shopping', expense_type: 'Shopping', y: 8000, id: 0 },
        { name: 'Tuition Fees', expense_type: 'Tuition Fees', y: 3000, id: 1 },
        { name: 'Transport', expense_type: 'Transport', y: 1000, id: 2 },
        { name: 'Daily Needs', expense_type: 'Daily Needs', y: 6000, id: 3 },
        { name: 'Food', expense_type: 'Food', y: 7000, id: 4 },
        { name: 'Fuel', expense_type: 'Fuel', y: 4000, id: 5 },
        { name: 'Bills', expense_type: 'Bills', y: 4000, id: 6 },
        { name: 'Birthday Expenses', expense_type: 'Birthday Expenses', y: 1000, id: 7 },
        { name: 'Fees', expense_type: 'Fees', y: 4000, id: 8 },

      ],
      point: {
        events: {
          click: (event: any) => {  
            this.selected_table_category_type.emit(event.point.expense_type)
          }
        }
      }

    }],

    exporting: {
      enabled: false
    },
    
  };


  constructor(
  ) {


  }

  ngOnInit() {

    Highcharts.chart('container', this.options);
  }




}


