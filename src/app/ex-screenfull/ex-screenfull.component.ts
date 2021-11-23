import { Component, OnInit } from '@angular/core';
import { Employee, State } from '../models/Employee.interface';
import { DataService } from '../services/data.service';
import screenfull from 'screenfull'

@Component({
  selector: 'app-ex-screenfull',
  templateUrl: './ex-screenfull.component.html',
  styleUrls: ['./ex-screenfull.component.scss']
})
export class ExScreenfullComponent implements OnInit {

  dataSource: Employee[] = this.dataservice.getEmployees();
  states: State[] = this.dataservice.getStates();

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
  }

  onClick(e: any) {
    if(screenfull.isEnabled){
      const el = document.querySelector('#gridContainer')!
      screenfull.toggle(el)
    }
  }

  onExitFullScreen(){
    if(screenfull.isEnabled){
      screenfull.exit()
    }
  }

}
