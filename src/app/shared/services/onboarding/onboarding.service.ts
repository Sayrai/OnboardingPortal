import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(pageNumber: number): Observable<any> {

    const url = (`${environment.apiBaseUrl}users?page=${pageNumber}`)

    return this.httpClient.get(url);
  }
}
