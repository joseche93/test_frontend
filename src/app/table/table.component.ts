import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() {
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    })
   }

  ngOnInit() {
  }


}
