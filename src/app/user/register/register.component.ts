import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserForm: FormGroup;
  error;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerUserForm  = new FormGroup({
      // tslint:disable-next-line:max-line-length
      name: new FormControl('', { validators:
          [Validators.required,
           Validators.minLength(3),
           Validators.maxLength(35),
           Validators.pattern(/[a-zA-Z ]$/)
            ], updateOn: 'change'} ),
      // tslint:disable-next-line:max-line-length
      surname: new FormControl('', { validators:
        [ Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
          Validators.pattern(/[a-zA-Z ]$/)
        ], updateOn: 'change'} ),
      email: new FormControl('', { validators: [
        Validators.required,
        Validators.email,
        ], updateOn: 'change'} ),
      // tslint:disable-next-line:max-line-length
      password: new FormControl('', { validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*\d)(?=.*[A-Za-z0-9!$&])[A-Za-z0-9!$&].{8,35}$/),
        ],
         updateOn: 'change'} ),
      reenterpassword: new FormControl('', { validators: [
        Validators.required, ], updateOn: 'change'} ),
    });


  }

  onSubmit() {
    const myForm = this.registerUserForm.value;
    const form = {
      name: myForm.name,
      surname: myForm.surname,
      email: myForm.email,
      password: myForm.password
    };


     this.authService.register(form).subscribe(data => {

       this.authService.storeUserData(data['token'], data['user'].name);
       this.router.navigate(['/']);
     }, (err) => (this.error = err.error) );
  }

}
