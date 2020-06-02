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
    
    return this.http.post('https://putsreq.com/W7nLfT6MHxFdqXY0U0u4', userSettings);  //URl from putsreq //http can be returned as observable

    //return of(userSettings);
  }

}

/*   PutsReq means a little server Side Code
var parsedBody = JSON.parse(request.body);
parsedBody.id = '123';
response.body = parsedBody;
response.status = 200;
*/
