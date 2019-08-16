import { Component, OnInit, Input } from '@angular/core';
import { HttpService} from './EAMList.http';
import { Pkg, Flight } from './package.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-eamlist',
  templateUrl: './eamlist.component.html',
  styleUrls: ['./eamlist.component.scss']
})
export class EAMListComponent implements OnInit {

  flights$ : Observable<Flight[]>;
  @Input() inputFilter:String;

  getTimeInMinutes(p:Pkg){
  
    var rawMinutes = Math.floor((p.outbound.loadTime - Date.now())/1000/60) + 5 * 24 * 60 -(12*60)+3;
    var minutes = rawMinutes % 60;
    var hours = Math.floor(rawMinutes - minutes)/60;
    var output = hours +'h'+minutes+'m';//add constant to look at dates in the past
    // var color = ";"
    // if(hours < 1 && minutes <= 15){
    //   color =  "red";
    // }
    // else if (hours < 1 && minutes <= 30)
    // {
    //   color =  "yellow";
    // }
    // else
    // {
    //   color = "green";
    // }
    // document.getElementById("timeRemaining").innerHTML = "<strong id= 'timeRemaining' style=color:"+color+">""</strong>";
    return output;
  }

  constructor(private dataService: HttpService) {
    this.inputFilter="A";
  }

  
  // onChange(wing)
  // {
  //   this.filter=wing;
  //   this.refresh();
  // }

  refresh()
  {
    this.flights$ = this.dataService.getPackage(this.inputFilter || "A");
  }
  ngOnChanges()
  {
    this.refresh()
  }
  ngOnInit() {
    this.flights$ = this.dataService.getPackage(this.inputFilter || "A");
    setInterval(() => {
      this.refresh();
    }, 10000);
    console.log(this.flights$)
  }

}
