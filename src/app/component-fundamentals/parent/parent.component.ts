import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message = 'Hello sending message from parent component'

  num1:number = 10;
  num2: number = 12;

  displaymessage:any;
  userDisplayMessage:any;
  studentEducaton :any

  studentName  = 'AKshay'
  constructor() { }

  ngOnInit(): void {
  }

  listenEductionDetails(event:any){
    this.studentEducaton = event;
  }

  listningfromChild(event :any){
    console.log(event)
    this.displaymessage = event;
  }

  listningUserMessage(event :any){
    this.userDisplayMessage = event;
  }

  recievemessage(event :any){
    console.log("message got ", event)
  }

}
