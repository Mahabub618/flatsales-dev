import {Component, OnInit} from '@angular/core';
import {AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {AlertifyService} from "../../services/alertify.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  loginForm!: FormGroup;
  user: User | undefined;

  constructor(private fb: FormBuilder,
              private router: Router,
              private alertify: AlertifyService,
              private authService: AuthService) {
  }
  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
  onLogin() {
    console.log(this.loginForm);
    const token = this.authService.authUser(this.userData());
    if(token) {
      localStorage.setItem('token', token.userName);
      this.alertify.success("Login Successful");
      this.router.navigate(['/']).then(r => {
        console.log("Navigation Completed");
      });
    }
    else {
      this.alertify.error("User name or password is wrong!");
    }
  }
  get userName() {
    return this.loginForm.get('userName') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  userData() : User {
    return this.user = {
      userName: this.userName.value,
      password: this.password.value
    }
  }
}
