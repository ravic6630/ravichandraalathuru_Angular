import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}

  email='';
  password='';


  login(){

    if(!this.email){
      alert("email is empty!")
      return;
    }
    let  regexpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(!regexpEmail.test(this.email)){
      alert("Invalid email format!")
      return;
    }

    if(!this.password){
      alert("password is empty!")
      return;
    }
      
    let regularExpressionPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!regularExpressionPassword.test(this.password)){
      alert("Min 8 letter password, with at least a symbol, upper and lower case letters and a number!")
      return ;
    }
    
  this.router.navigate(['sidebar-menu']);      

  }

}
