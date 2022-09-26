import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-student-child',
  templateUrl: './student-child.component.html',
  styleUrls: ['./student-child.component.scss']
})
export class StudentChildComponent implements OnInit {

  @Input()studentdetails:any ="";

  @Input() school :any =''

  @Output() studenTopper = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.studenTopper.emit('AKshay')
  }

  buttonClick(){
    this.studenTopper.emit('Piyush')
  }

}
