import { Component, ViewChild } from '@angular/core';
import { EAMListComponent } from './home/eamlist/eamlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HACKATHONPROJ';
  public extractedFilter:String;
  onChildFilterChange(filter:String)
  {
    this.extractedFilter=filter;
  }
}
