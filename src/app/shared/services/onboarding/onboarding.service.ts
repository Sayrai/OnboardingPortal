import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from '../../Interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(private _httpClient: HttpClient) { }

  public getAllUsers(pageNumber: string): Observable<HttpResponse<IUser>> {

    const url = (`${environment.apiBaseUrl}users?page=${pageNumber}`)

    return this._httpClient.get<IUser>(url, { observe: 'response' });
  }

  public getUserById(userId: number): Observable<HttpResponse<IUser>> {

    const url = (`${environment.apiBaseUrl}users/${userId}`)

    return this._httpClient.get<IUser>(url, { observe: 'response' });
  }

  // return payload wasn't specified on the docs, reason for using 'any' type- 
  // we could use post method instead of delete
  public deleteUser(id: number): Observable<HttpResponse<any>> {
    const url = (`${environment.apiBaseUrl}users/${id}`)

    return this._httpClient.delete(url, { observe: 'response' });
  }
}


