import { Component, OnInit, Input } from '@angular/core';
import { HttpService} from './EAMList.http';
import { Pkg } from './package.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eamlist',
  templateUrl: './eamlist.component.html',
  styleUrls: ['./eamlist.component.scss']
})
export class EAMListComponent implements OnInit {

  packages$ : Observable<Pkg[]>;
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
  this.packages$ = this.dataService.getPackage(this.inputFilter || "A");
  }
  ngOnChanges()
  {
    this.refresh()
  }
  ngOnInit() {
    this.packages$ = this.dataService.getPackage(this.inputFilter || "A");
  }

}
