import { Component, OnInit } from '@angular/core';
import DxThemes from 'devextreme/ui/themes';
import { Employee, State } from '../models/Employee.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-ex-theme',
  templateUrl: './ex-theme.component.html',
  styleUrls: ['./ex-theme.component.scss']
})
export class ExThemeComponent implements OnInit {

  constructor(private dataservice: DataService){

  }

  ngOnInit(): void {
    
  }

  dataSource: Employee[] = this.dataservice.getEmployees();
  states: State[] = this.dataservice.getStates();

  onClick(e: any) {
    console.log('theme ==> ', DxThemes.current())
    DxThemes.current(DxThemes.current() === 'generic.light' ? 'generic.dark' : 'generic.light')
  }

}
