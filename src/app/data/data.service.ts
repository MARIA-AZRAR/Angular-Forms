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

  getSubscriptionTypes(): Observable<String[]> {   //we are geeting data from data service we can also get it from JSON object using GET method
    return of(['Monthly','Annual','Lifetime']);
  }


}

/*   PutsReq means a little server Side Code
var parsedBody = JSON.parse(request.body);
parsedBody.id = '123';
response.body = parsedBody;
response.status = 200;
*/
