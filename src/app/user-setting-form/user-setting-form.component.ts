import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { UserSettings } from '../data/user-settings-form';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

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
    date: null
  };
  
  userSettings: UserSettings = {...this.OriginalUserSettings};
  constructor(private dataService: DataService) { };

  ngOnInit(): void {
  }

  onBlur(field: NgModel) {
    console.log('blur called: ' + field.valid);
  }
   onSubmit(form: NgForm) {
     console.log('form submitted: ' + form.submitted);
     this.dataService.postUserSettingForm(this.userSettings).subscribe(
       result => console.log('success : ', result),
       error => console.log('error: ', error) 
       
     )
   }
}
