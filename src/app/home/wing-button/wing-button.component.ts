import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wing-button',
  templateUrl: './wing-button.component.html',
  styleUrls: ['./wing-button.component.scss']
})
export class WingButtonComponent implements OnInit {

  constructor() { }
  @Output()
  change: EventEmitter<String> = new EventEmitter<String>();
  btnTab(wing)
  {
    this.change.emit(wing);
  }
  ngOnInit() {
  }

}
