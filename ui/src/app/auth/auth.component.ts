import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  authType: String = '';
  title: String;
  isSubmitting: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe((data) => {
      console.log(data);
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'login') ? 'Login' : 'Register';
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl('', Validators.required));
      }
    });
  }

  submitForm(formdata) {
    console.log(formdata);
    this.isSubmitting = true;
    let credentials = this.authForm.value;
    console.log(credentials);
  }
}
