import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.scss']
})
export class NewloginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}


  ngOnInit(): void {
  }

  login() {
    // Assuming you have logic to get the token from a login API
    const token = 'YOUR_TOKEN'; // Replace with actual token from your login API
    this.authService.login(token);
    this.router.navigate(['/']); // Redirect to home after login
  }

}
