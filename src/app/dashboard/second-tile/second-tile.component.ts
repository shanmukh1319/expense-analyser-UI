import { Component } from '@angular/core';
import * as Highcharts from "highcharts"


@Component({
  selector: 'app-second-tile',
  templateUrl: './second-tile.component.html',
  styleUrls: ['./second-tile.component.scss']
})
export class SecondTileComponent {

  ngOnInit() {
    
  }

  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    plotOptions: {
      series: {
          animation: {
              duration: 5000
          }
      }
  },
    title: {
     
      text: 'Weekly Income vs Expense',
      align: 'center',
      
      floating: false,
      style: {
          color: '#71717a',
          fontWeight: 'light',
          fontSize: '10px'
      }
  },
  chart: {
    backgroundColor:'#94daff6f',

 },
    xAxis: {
      categories: ["Mon","Tue","Wed","Thu",'Fri','Sat','Sun'],
          visible: true,
          labels: {
            useHTML: true,
            style: {
              color: '#71717a',
              fontSize:'10px'
            }
          },
  },
    yAxis: {
      title: {
        text: ""
      },
      labels: {
        useHTML: true,
        style: {
          color: '#71717a',
          fontSize:'10px'
        }
      },
    },
    series: [{
      data: [12, 127, 43, 90, 100, 110],
      type: 'line',
      color: '#ffffff'
    },
    {
    data: [33, 56, 78, 84,56, 135],
    type: 'line',
    color: '#71717a'
  }],
    legend: {
      enabled: false,
      align: 'right',
      verticalAlign: 'middle'
    },
    credits:{enabled:false},
    exporting: {
      enabled: false
    }
  }
  }
