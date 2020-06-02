import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings-form';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }   //we are using httpClient service by injecting it

  postUserSettingForm(userSettings: UserSettings): Observable <any> {   //http return type is any
    
    return this.http.post('URL', userSettings);      //http can be returned as observable
     
    //return of(userSettings);
  }

}
