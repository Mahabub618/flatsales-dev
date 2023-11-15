import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  registrationForm!: FormGroup;
  user: User | undefined;
  userSubmitted = false;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private alertify: AlertifyService) {

  }
  ngOnInit() {
    this.createRegistrationForm();
  }
  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.minLength(11)]]
    }, { validator: this.passwordMatchingValidator } as AbstractControlOptions);
  }

  passwordMatchingValidator(fg: AbstractControl) {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      fg.get('confirmPassword')?.setErrors(null);
    } else {
      fg.get('confirmPassword')?.setErrors({ notMatched: true });
    }
  }
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
  onSubmit() {
    console.log(this.registrationForm);
    this.userSubmitted = true;
    if(this.registrationForm.valid) {
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success("Congrats, you are successfully registered");
    }
    else {
      this.alertify.error("Kindly provide the required fields")
    }
  }
  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
}
