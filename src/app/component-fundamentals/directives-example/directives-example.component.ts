import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.scss']
})
export class DirectivesExampleComponent implements OnInit {
  friday = false

  daycheck = true
  constructor() { }

  ngOnInit(): void {
  }

  studentDetails = [{
  //key : value
  Firstname : 'akshay',
  lastname : 'kumar',
  address : 'pune',
  mobilenumber : 48965833
},
{
  //key : value
  Firstname : 'Amol',
  lastname : 'nn',
  address : 'pune',
  mobilenumber : 489688899
},
{
  //key : value
  Firstname : 'sujit',
  lastname : 'kk',
  address : 'pune',
  mobilenumber : 489688899
},
{
  //key : value
  Firstname : 'Aditya',
  lastname : 'kk',
  address : 'pune',
  mobilenumber : 489688899
},
{
  //key : value
  Firstname : 'shubham',
  lastname : 'pk',
  address : 'pune',
  mobilenumber : 489688899
}]


  items: any[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
  selectedValue: string= 'One';


  onSubmitDetails(formValue:any){
    let password = formValue.value.password;
    let username = formValue.value.username;

    console.log("Form value"+ password+ "  "+ username)
  }

  addrecords(){
    this.studentDetails.push({
      Firstname : 'aniket',
      lastname : 'qqq',
      address : 'pune',
      mobilenumber : 489688899
    })
  }

  removeRecord(index :any){
   // this.studentDetails.pop();
   this.studentDetails.splice(index,1)

  //  switch(exp){  // [ngswitch] = "exp"
  //   case 1: break;
  //   case 2: break;
  //   *ngswitchcase = "3"
  //  }
 
  }


  cases(values :any)
{
  this.selectedValue = values
}
}
