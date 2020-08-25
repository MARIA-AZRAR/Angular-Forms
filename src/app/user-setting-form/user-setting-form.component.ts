import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings-form';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  OriginalUserSettings: UserSettings =  {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,            //we have created an object with predefined properties
    notes: null,
  };
  
  userRating: number;
  maxRating: number = 10;
  startDate: Date;
  startTime: Date;
  singleModel = "On";  //toggle button variable
  userSettings: UserSettings = {...this.OriginalUserSettings};
  postError: boolean = false;     //just work like flag
  postErrorMessage: any;
  subscriptionTypes: Observable<String[]>;

  constructor(private dataService: DataService) { };

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();  //getting data from dataService
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onBlur(field: NgModel) {
    console.log('blur called: ' + field.valid);
  }

  onHttpError(errorResponse: any){
    console.log('error: ' , errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;  //error message is here from server side  code : response.status = 400; response.body = {errorMessage: 'Error is from your side dude i am not responsible'};
  }

   onSubmit(form: NgForm) {
     console.log('form submitted: ' , form.value); //not doing form.submitted



     
    //  if(form.valid){
    //   this.dataService.postUserSettingForm(this.userSettings).subscribe(
    //   result => console.log('success : ', result),
    //   error => this.onHttpError(error)    //we are calling a function which will run if error is returned from server   
    //   )
    //  } 
    //  else {
    //    this.postError = true;
    //    this.postErrorMessage = 'Fix above Errors';
    //  }

   }
}
