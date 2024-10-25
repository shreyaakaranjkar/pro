import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forminputs!:FormGroup;
  formregister!:FormGroup;
  islogin:boolean=false;
  loginarr!:Array<any>
  arryform!:any;
  signuparray:Array<any>=[]
  usersarray=["User","Sellar","Admin"]
  Inputfile!:any


 
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    // this._registerser.getuser().subscribe((res:any)=>{
    //   this.signuparray=res
    //   console.log(this.signuparray);
    // })

    this.logins()
    this.signup()
  }

logins(){
  this.forminputs=new FormGroup({
    username:new FormControl(null),
    password:new FormControl(null),
    securityq:new FormControl(null),
    status:new FormControl(null)
  })
}

signup(){
  this.formregister=new FormGroup({
    username:new FormControl(null),
    gmail:new FormControl(null),
    contact:new FormControl(null),
    password:new FormControl(null),
    ConfirmPassword:new FormControl(null),
    securityq:new FormControl(null),
    status:new FormControl(null),
    file:new FormControl(null),

  })
}

login() {
  // Assuming you have logic to get the token from a login API
  const token = status; // Replace with actual token from your login API
  this.authService.login('John','abc');
  this.router.navigate(['/']); // Redirect to home after login
}
  signinform(){
    console.log(this.formregister.value)
  }
 
filechange(event: any) {
this.formregister.patchValue({
  image_field_name_in_reactive_form: event.target.files[0],
});

}

}
