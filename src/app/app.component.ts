import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('f') signupForm: NgForm;
	defaultQuestion = 'teacher';
	answer = '';
	genders = ['male', 'female'];
	user = {
		username: '',
		email: '',
		secretQuestion: '',
		answer: '',
		gender: ''
	};
	submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // setValue sets the whole form

    // this.signupForm.setValue({
    // 	userData: {
    // 		username: suggestedName,
    // 		email: ''
    // 	},
    // 	secret: 'pet',
    // 	questionAnswer: '',
    // 	gender: 'male'
    // });

    // patchValue overrides parts of the form

    /* patch value is only available on the
     form which itself is wrapped by ngForm */

     // setValue is also available on form
    this.signupForm.form.patchValue({
    	userData: {
    		username: suggestedName
    	}
    });
  }

  // onSubmit(form: NgForm) {
  // 	console.log(form)
  // }

  onSubmit() {
  	this.submitted = true;

  	this.user.username = this.signupForm.value.userData.username;
  	this.user.email = this.signupForm.value.userData.email;
  	this.user.secretQuestion = this.signupForm.value.secret;
  	this.user.answer = this.signupForm.value.questionAnswer;
  	this.user.gender = this.signupForm.value.gender;

  	// reset the form after submission

  	/* 
  		reset() not only resets all the controls (you could do this
  		with setValue too) but also resets the state (valid, touched, etc.)
  	*/ 
  	this.signupForm.reset();
  }
}
