import { Component, OnInit } from '@angular/core';
// Table interface
import { Table } from './../interfaces/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show : boolean = false;

  seeTable() {
    this.show = true;
  }

  hideTable() {
    this.show = false;
  }
  

}
