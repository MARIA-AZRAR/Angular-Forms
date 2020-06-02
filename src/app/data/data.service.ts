import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings-form';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postUserSettingForm(userSettings: UserSettings): Observable <UserSettings> {   //observable return type is observable of usersettings
    return of(userSettings);
  }

}
