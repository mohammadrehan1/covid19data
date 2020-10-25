import { CovidReport } from './../../model/CovidReport.model';
import { CommonserviceService } from './../../shared/commonservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-coviddata',
  templateUrl: './coviddata.component.html',
  styleUrls: ['./coviddata.component.css']
})
export class CoviddataComponent implements OnInit {

  coviddata:CovidReport[];
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths','todayDeaths','recovered','active','critical','casePerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];
 
  dataSource: MatTableDataSource<any>
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(public sharedservice:CommonserviceService) { }

  ngOnInit(): void {

    this.sharedservice.getCovidData().subscribe((res:CovidReport[])=>{
     
      console.log(res);
      
      this.coviddata=res; 
    });
   
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 

}

