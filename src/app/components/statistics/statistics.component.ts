import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  title='DASHBOARD:MANAGEMENT PLATFORM';
  chart;
  pie: any;
  doughnut: any;
  line:any;

  constructor() { }

  ngOnInit(): void {

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'TOTAL MONTHLY INCOME'
        },
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [

          {
            type: 'line',
            label: 'Tenants',
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'blue',
            data: [243, 256, 365, 285, 296, 265, 356, 343, 256, 265, 250, 243],
            fill: true,
          },
          {
            type: 'bar',
            label: 'Sales',
            data: [243, 296, 365, 300, 156, 265, 356, 400, 360, 415, 350, 543],
            backgroundColor: 'coral',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },

          {
            type: 'bar',
            label: 'Savings',
            data: [273, 156, 345, 299, 196, 365, 306, 443, 286, 165, 140, 333],
            backgroundColor: 'greenyellow',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          },

        ]
      }
    });

//doughnut chart
    this.doughnut = new Chart('doughnut', { 
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'MONTHLY TRANSACTIONS'
        }, legend: {
          position: 'top',
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
  },

  data: {
    datasets: [{
      data: [493, 600, 256, 555, 290,320],
      backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'magenta'],
      label: 'Dataset 1'
    }],
    labels: [
      "Withdraws", "Deposits", "Loans", "Investment", "Expenses", "Savings"]
  }


      });





      //Pie chart
    this.doughnut = new Chart('pie', { 
      type: 'pie',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'EXPENSES'
        }, legend: {
          position: 'top',
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
  },

  data: {
    datasets: [{
      data: [493, 600, 256, 555, 290],
      backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
      label: 'Dataset 1'
    }],
    labels: [
      "Travelling", "Office", "Electricity", "Rent", "Communication"]
  }


      });




      this.chart = new Chart('line', {
        type: 'line',
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'LOAN REPAYMENT'
          },
        },
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
  
            {
              type: 'line',
              label: 'short-term',
              backgroundColor: 'rgba(1,0,255,0.4)',
              borderColor: 'blue',
              data: [200, 250, 87, 185, 290, 205, 156, 303, 200, 255, 100, 0],
              fill: false,
            },
            {
              type: 'line',
              label: 'long-term',
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'orange',
              data: [243, 356, 365, 285, 196, 265, 356, 343, 256, 165, 250,0],
              fill: false,
            },
   
  
          ]
        }
      });



      //horizontal bar
    this. chart = new Chart('horizontalBar', {
      type: 'horizontalBar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'MEMBERS ENROLLMENT'
        }, legend: { 
          display:false,
          position: 'top',
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [{
          data: [450, 350, 255, 180, 70],
          backgroundColor: ["red", "orange", "yellow", "green", "blue"],
          label: 'Dataset 1'
        }],
        labels: ["Female", "Male", "Youths", "Chamas", "Coporations"]
      }
    });
  }

}
