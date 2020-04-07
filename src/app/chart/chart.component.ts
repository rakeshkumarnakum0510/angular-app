import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CaseService } from '../case.service';
import { Case } from '../case';
@Component({
   selector: 'app-chart',
   templateUrl: './chart.component.html',
   styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
   cases: Case[] = [];
   updateFromInput = false;
   Highcharts = Highcharts;
   newcase = [];
   date = [];
   countryNames = [];
   countryCases = [];
   countryDeaths = [];
   sumOfcases = [];
   sumOfdeaths = [];
   chartOptions = {
      chart: {
         type: 'column'
      },
      title: {
         text: 'Corona New Cases column charts'
      },
      series: [],
      xAxis: {
         categories: []
      },
      exporting: {
         enabled: false
      },
      yAxis: {
         allowDecimals: false,
         title: {
            text: "New Cases"
         }
      }
   };
   chartOptions1 = {
      chart: {
         type: 'column'
      },
      title: {
         text: 'Corona Death Cases column charts'
      },
      series: [],
      xAxis: {
         categories: []
      },
      exporting: {
         enabled: false
      },
      yAxis: {
         allowDecimals: false,
         title: {
            text: "New Deaths"
         }
      }
   };
   chartOptions2 = {
      chart: {
         type: 'pie'
      },
      title: {
         text: 'Corona Total Cases Pie Charts'
      },
      tooltip: {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
      accessibility: {
         point: {
            valueSuffix: '%'
         }
      },
      plotOptions: {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: false
            },
            showInLegend: true
         }
      },
      series:[]
        
     
   };

   chartOptions3 = {
      chart: {
         type: 'pie'
      },
      title: {
         text: 'Corona Total Death Cases Pie Charts'
      },
      tooltip: {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
      accessibility: {
         point: {
            valueSuffix: '%'
         }
      },
      plotOptions: {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: false
            },
            showInLegend: true
         }
      },
      series: [ ]
   };

   constructor(private caseService: CaseService) { }

   ngOnInit(): void {
      this.getCases();
   }

   getCases(): void {
      this.caseService.getCases().subscribe(data => {
         this.cases = data;
         const totalcases = this.cases.reduce((accum,item) => accum + item.newCase, 0)
         const totaldeaths = this.cases.reduce((accum,item) => accum + item.newDeath, 0)
         console.log(totalcases);
         console.log(totaldeaths);

         this.date = [...new Set(this.cases.map(item => item.date))];
         const countryNames = [...new Set(this.cases.map(item => item.name))];
         this.countryDeaths = [];
         this.countryCases = [];

         countryNames.forEach((el) => {
            const ccases = this.cases.filter(c => c.name == el);
            this.countryCases = [...this.countryCases, {
               data: ccases.map(d => d.newCase),
               name: el
            }];

            this.countryDeaths = [...this.countryDeaths, {
               data: ccases.map(d => d.newDeath),
               name: el
            }];

            this.sumOfcases = [...this.sumOfcases, {
               name: el,
               y:ccases.reduce((accum,item) => accum + item.newCase, 0)/totalcases*100
            }];
            
            this.sumOfdeaths = [...this.sumOfcases, {
               name: el,
               y:ccases.reduce((accum,item) => accum + item.newDeath, 0)/totaldeaths*100
            }];
           

         });
         console.log(this.sumOfcases);
         console.log(this.sumOfdeaths);


         this.chartOptions.series = this.countryCases;
         this.chartOptions.xAxis.categories = this.date;

         this.chartOptions1.series = this.countryDeaths;
         this.chartOptions1.xAxis.categories = this.date;

         this.chartOptions2.series =[{
            name: 'Countries',
            colorByPoint: true,
            data:this.sumOfcases
        }]
        
        this.chartOptions3.series =[{
         name: 'Countries',
         colorByPoint: true,
         data:this.sumOfdeaths
     }]

         this.updateFromInput = true;
      });
   }
}
