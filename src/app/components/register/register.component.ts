import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model : any = {}


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model)
    alert("Account registered Successfully !! ")
   
    
  }

  

}
