import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pkg-sum',
  templateUrl: './pkg-sum.component.html',
  styleUrls: ['./pkg-sum.component.scss']
})
export class PkgSumComponent implements OnInit {
  totCount = 5;
  constructor() { }

  ngOnInit() {
  }

}
