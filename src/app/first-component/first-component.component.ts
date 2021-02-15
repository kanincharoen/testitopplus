import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  formgroup = this.fb.group({
     Name:"",
     Surname:"",
     Note:"",
     Gender:""
  })

  @ViewChild('numbermodtest') input:ElementRef | undefined; 
  testnumber:any = 0
  constructor(    private fb: FormBuilder) {

    
   }
   textbuzz:string = ""
   Name:string=""
   Surname:string=""
   Note:string=""
   Gender:string=""
   numbercontrol:number[] = []
   tempnumber:number = 0
  ngOnInit(): void {
  this.flowcontrol()
  }
  flowcontrol(){
    for(var i = 1; i < 10; i++) {
      setTimeout(() => {
     
        this.tempnumber = this.tempnumber + 1
        this.numbercontrol.push(this.tempnumber)
    }
      , 5000);
    }

  }
  mod(testnumbermod:any){
  
    this.testnumber = testnumbermod.value
    if(this.testnumber%3 == 0 && this.testnumber%5 == 0){
      this.textbuzz = "FizzBuzz"
    }
    else if(this.testnumber%3 == 0){
      this.textbuzz = "Fizz"
    }
    else if(this.testnumber%5 == 0){
      this.textbuzz = "Buzz"
    }
    else
    {
      this.textbuzz = this.testnumber
    }
    
  }
  onSubmit(){
    this.Name = this.formgroup.value.Name
    this.Surname = this.formgroup.value.Surname
    this.Note = this.formgroup.value.Note
    this.Gender = this.formgroup.value.Gender
  }
}
