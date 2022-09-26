import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  // template: `<div> Hello from inline template </div>
  // <p> multiline template add </p>`,
  styleUrls: ['./helloworld.component.scss']
})
export class HelloworldComponent implements OnInit {

  message :string ='Hello from interpolation message passing data from component to Template';

  showDisplayMessage = 'Hello component using interpolation'
  buttonmessage :any;
  result:any

  imageurl="happy.jpg"

  showbutton =false

  buttoncolor = "red"

  primarybutton = `background-color: brown;
              margin: 10px;
              border: 2px solid blue;`;

  person =[{
    name: 'Akshay',
    location : 'Mumbai'
  }]

  sum(){
    let x =5;
    let y = 10;
    this.result = x+y;
  }

  constructor(private activatedroute:ActivatedRoute,){

  }
  
  ngOnInit(): void {
  //  this.activatedroute.queryParamMap.subscribe(params => {
  //   console.log("params "+ params.get('data'))
  //  })

   
  }

  tooglebutton(){
    this.showbutton = !this.showbutton
    this.showbutton ? this.primarybutton=`background-color: green;
    margin: 10px;
    border: 2px solid blue;` : this.primarybutton=`background-color: cyan;
    margin: 30px;
    border: 2px solid blue;`

    // if(this.showbutton){
    //   this.primarybutton= `background-color: green;
    //   margin: 10px;
    //   border: 2px solid blue;`
    // }else{
    //   this.primarybutton=`background-color: cyan;
    //   margin: 30px;
    //   border: 2px solid blue;`
    // }
   
  }


  submitForm(event :any){
    console.log(event)
    this.buttonmessage="Button Clicked"
   // alert("button clicked")
  }
}
