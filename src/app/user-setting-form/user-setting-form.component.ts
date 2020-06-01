import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { UserSettings } from '../data/user-settings-form';

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
  constructor() { }
  ngOnInit(): void {
  }

}
