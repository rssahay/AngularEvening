import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  @Input('demomessage') parentMessage :any  //alias name

  @Input() x :any;    

  @Input() y:any;

  @Output() childmessageEvent = new EventEmitter<any>();

  @Output() userMessageEvent = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    console.log("check", this.parentMessage)

    this.childmessageEvent.emit('Hello from child component')
  }


  sendMessage(msg :any){
    this.userMessageEvent.emit(msg)
  }


  sum(x:any ,y:any){

  }

  calculate(){
    this.sum(4,5)
  }

}
