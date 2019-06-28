import { Component, OnInit, Input } from '@angular/core';
import { HttpService} from './EAMList.http';
import { Pkg, Flight } from './package.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-eamlist',
  templateUrl: './eamlist.component.html',
  styleUrls: ['./eamlist.component.scss']
})
export class EAMListComponent implements OnInit {

  flights$ : Observable<Flight[]>;
  @Input() inputFilter:String;

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
