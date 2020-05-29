import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings-form';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  userSettings: UserSettings =  {
    name:"Milton",
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Monthly",            //we have created an object with predefined properties
    notes: "Some notes",
    date: null
  }
  constructor() { }
  ngOnInit(): void {
  }

}
