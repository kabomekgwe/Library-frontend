import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup;
  error;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginUserForm  = new FormGroup({
      email: new FormControl('', { validators: [Validators.required], updateOn: 'change'} ),
      password: new FormControl('', { validators: [Validators.required],updateOn: 'change'} ),
    });


  }

  onSubmit() {
    const myForm = this.loginUserForm.value;
    const form = {
      name: myForm.name,
      surname: myForm.surname,
      email: myForm.email,
      password: myForm.password
    };


     this.authService.login(form).subscribe(data => {

      this.authService.authToken = data['id'];
      this.authService.storeUserData(data['id'], data['name']);

       this.router.navigate(['/']);
     }, (err) => (this.error = err.error) );
  }
}
