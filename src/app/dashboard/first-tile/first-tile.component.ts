import { Component } from '@angular/core';
import * as Highcharts from "highcharts"

@Component({
  selector: 'app-first-tile',
  templateUrl: './first-tile.component.html',
  styleUrls: ['./first-tile.component.scss']
})
export class FirstTileComponent {

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
     
      text: 'Monthly Income vs Expense',
      align: 'center',
      
      floating: false,
      style: {
          color: '#71717a',
          fontWeight: 'light',
          fontSize: '10px',
      }
  },

  chart: {
    backgroundColor: '#94daff6f',

 },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
      data: [12, 8, 43, 85, 100, 90, 100, 110],
      type: 'line',
      color: '#ffffff'
    },
    {
    data: [33, 56, 78, 24, 50, 60, 30, 135],
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
