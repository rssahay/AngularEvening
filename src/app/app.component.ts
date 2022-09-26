import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}
const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngularTraining';
  countries = COUNTRIES;

  color='violet'

  isenabled:boolean = false
  cricketScore:any = 100;

  student ={
    fname : 'aditya',
    mobileno : 789546,
    address :{
      street: 'fc road'
    }
  }

  userNavigate(){
    this._router.navigateByUrl('education')
    
   
  }

  allowUsertoNavigate(){
    this._router.navigate(['education'])
   
  }

  showMessage(){
    alert("button clicked")
  }

  onSubmit(){
  //alert("you successfully submitted details..!!")
    console.log("form submitted")
  }

  constructor( private _router :Router, private _acitvatedRoute : ActivatedRoute){
 
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // using the id attbute manipulating the dom element
  //   let ele =  (document.getElementById('demo')) as HTMLElement
  //   ele.innerHTML = 'Hello'
  //   ele.style.color= 'cyan'
  //   console.log("element = "+ ele)

  //   // using the class attribute
  //   let classel = (document.getElementsByClassName('dynamic')) as HTMLCollection

  //   for(let i=0 ; i< classel.length; i++){
  //     classel[i].innerHTML = 'assigning dynamic value'+i
  //   }
  //  // classel[0].innerHTML = 'assigning dynamic value'
  //    console.log(classel)

  //   let el: HTMLCollection =  (document.getElementsByClassName('paraEx')) 

  //   console.log("elemnt check =" + el)
  //  // el[0].innerHTML  = 'This'
  //   el[1].innerHTML = "header 1 dynamic content"
  //   el[2].innerHTML = "header 2 dynamic content"

    
  //   let htmlel = (document.getElementById('dynamicpara')) as HTMLElement
  //   htmlel.innerHTML = "Hello this is the dynamic paragraph "

  //   let par = (document.getElementById('updatepara'))as HTMLElement
  //   par.innerHTML= 'updating from typescript' 



  //   let newel = document.createElement("span")
  //     htmlel.appendChild(newel)

  }
}




