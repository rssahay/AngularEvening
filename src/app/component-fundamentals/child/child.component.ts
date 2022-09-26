import { AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {


  @Input('demomessage') parentMessage: any  //alias name

  @Input() x: any;

  @Input() y: any;

  @Output() childmessageEvent = new EventEmitter<any>();

  @Output() userMessageEvent = new EventEmitter<any>();

  @Output() sendmessage = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    console.log("check", this.parentMessage)
    // this.sendmessage.emit("sending message intially")

    // this.childmessageEvent.emit('Hello from child component')
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sendmessage.emit("sending message intially")

      this.childmessageEvent.emit('Hello from child component')
    }, 10)

  }

  sendMessage(msg: any) {
    this.userMessageEvent.emit(msg)
  }


  sum(x: any, y: any) {

  }

  calculate() {
    this.sum(4, 5)
  }

}
