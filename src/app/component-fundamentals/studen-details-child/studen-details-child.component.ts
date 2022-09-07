import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-studen-details-child',
  templateUrl: './studen-details-child.component.html',
  styleUrls: ['./studen-details-child.component.scss']
})
export class StudenDetailsChildComponent implements OnInit {

  @Input() name :any

  @Output() Education = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.Education.emit('BE computer Engineering')
  }

}
