import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Employee, State } from '../models/Employee.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-ex-filter-as-string',
  templateUrl: './ex-filter-as-string.component.html',
  styleUrls: ['./ex-filter-as-string.component.scss']
})
export class ExFilterAsStringComponent implements OnInit, AfterViewInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent

  dataSource: Employee[] = this.dataservice.getEmployees();
  states: State[] = this.dataservice.getStates();
  filterValue: string = ''

  constructor(private dataservice: DataService) { }

  ngAfterViewInit(): void {
    this.dataGrid.filterPanel.customizeText = (evt) => {
      this.filterValue = evt.text
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  onEditorPreparing(evt){
    console.log('onEditorPreparing ==> ', evt)
  }

  onEditorPrepared(evt){
    console.log('onEditorPrepared ==> ', evt)
  }
}
