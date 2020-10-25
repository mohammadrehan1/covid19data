import { CovidReport } from './../model/CovidReport.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  coviddata:CovidReport={
    country:'',
	cases:null,
	todayCases:null,
	deaths:null,
	todayDeaths:null,
	recovered:null,
	active:null,
	critical:null,
	casePerOneMillion:null,
	deathsPerOneMillion:null,
	tests:null,
	testsPerOneMillion:null
  }
  constructor(public http:HttpClient) { }

getCovidData(){
  return this.http.get("http://localhost:9187/retrieve");
}

}
