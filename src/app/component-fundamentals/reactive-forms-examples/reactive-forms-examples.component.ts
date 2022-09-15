import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms-examples',
  templateUrl: './reactive-forms-examples.component.html',
  styleUrls: ['./reactive-forms-examples.component.scss']
})
export class ReactiveFormsExamplesComponent implements OnInit {

  isSubmitted: boolean = false
  toShow :boolean = false;
  constructor( private fb: FormBuilder) { }

  username = new FormControl('',Validators.required);
  password =  new FormControl('')

  userprofile =[{
    firstname : 'Akshay',
    lastname : 'Kumar',
    Place : 'Pune',
    mobile : 745896,
    flatno : 744,
    street : 'qqww',
    city: 'Pune',
    state : 'MH'
  },
  {
    firstname : 'vineet',
    lastname : 'Kumar',
    Place : 'Pune',
    mobile : 745896,
    flatno : 744,
    street : 'qqww',
    city: 'Pune',
    state : 'MH'
  },
  {
    firstname : 'ram',
    lastname : 'Kumar',
    Place : 'Pune',
    mobile : 745896,
    flatno : 744,
    street : 'qqww',
    city: 'Pune',
    state : 'MH'
  },
  {
    firstname : 'aakash',
    lastname : 'Kumar',
    Place : 'Pune',
    mobile : 745896,
    flatno : 744,
    street : 'qqww',
    city: 'Pune',
    state : 'MH'
  },
  {
    firstname : 'shubham',
    lastname : 'Kumar',
    Place : 'mumbai',
    mobile : 745896,
    flatno : 744,
    street : 'qqww',
    city: 'mumbai',
    state : 'MH'
  }]

  // profile = new FormGroup({
  //   firstname :new FormControl(''),
  //   lastname : new FormControl(''),
  //   Place : new FormControl(''),
  //   mobile :new FormControl(''),
    
  //   address : new FormGroup({
  //     flatno : new FormControl(''),
  //     street : new FormControl(''),
  //     city: new FormControl(''),
  //     state : new FormControl('',Validators.required)
  //   }),

  //  contacts :this.fb.array([
  //   this.fb.group({
  //     name : [''],
  //     phone : ['']
  //   })
  //  ])

  // }
  profile = this.fb.group({
    firstname :[''],
    lastname : [''],
    Place : [''],
    mobile :[''],
    
    address : this.fb.group({
      flatno : [''],
      street : [''],
      city: [''],
      state :['',[Validators.required]]
    }),

   contacts :this.fb.array([
    this.fb.group({
      name : [''],
      phone : ['',Validators.required]
    })
   ])

  })



  educationDetails = new FormGroup({
    qualification: new FormControl('',Validators.required),
    passoutYear : new FormControl('',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]),
    university : new FormControl(''),

  })

  addContactDetails(){
    let control = <FormArray>this.profile.controls['contacts'];
    control.push(
      this.fb.group({
        name: [''],
        phone: ['', [ Validators.required]],
      })
    )
  }

  delet(index:any){

  }

  updateProfile(){
    this.profile.patchValue({
      firstname : 'shubham',
      lastname : 'kumar',
      Place : 'Pune',
      mobile : '7444444',
      address : {
        city : 'mumbai'
      }
      // bankdetails :{
      //   accountholdername
        
      // }
    })

  }

  Editrecord( user :any ,index:any){
    console.log("Row data" + user)
    this.profile.patchValue({
      firstname : user.firstname,
      lastname : user.lastname,
      mobile : user.mobile,
      address : {
        city : user.city
      }
    })



  }
  ngOnInit(): void {
  
  }

  get contacts(){
    return this.profile.get('contacts') as FormArray;
  }

  get phone(){
    return this.contacts.get('phone') as FormControl;
  }

  get address(){
    return this.profile.get('address') as FormGroup;
  }
  get state(){
    return this.address.get('state');
  }
  SubmitProfile(){
    this.isSubmitted = true
    this.address.markAllAsTouched()
    this.state?.markAsTouched();
    this.state?.markAsDirty()
    console.log(this.profile)
    console.log("Mobile Number" + this.profile.value.mobile)
    console.log("Place" + this.profile.value.Place)
    this.userprofile.push({
    firstname : this.profile.value.firstname,
    lastname :  this.profile.value.lastname,
    Place :  this.profile.value.Place,
    mobile :  this.profile.value.mobile,
    flatno : 744,
    street : 'qqww',
    city: 'delhi',
    state : 'MH'
    })
  //  this.profile.reset();
  }

  SubmitEducation(){
    this.educationDetails.markAllAsTouched();
    if(this.educationDetails.valid){
      console.log(this.educationDetails.value.qualification)
      console.log(this.educationDetails.value.passoutYear)
    }else{
      console.log("Enter the required fields")
    }
   
  }

  update(){
    this.username.setValue('mark')




  }

  // studentSubmit(){
  //   this.student.markAllAsTouched();
  // }

  submit(){
    if(this.username.valid){

    }
    console.log("Form Object" + this.username)
   console.log("User entered Value" + this.username.value)
  }

}
