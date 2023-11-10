import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getList(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getById(id: number | string | null): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }

  getOne(): User {
    return {
      id: 11,
      name: 'Alex Smith',
      username: 'Alex2013',
      email: 'alex.smith@november.biz',
      address: {
        street: 'Main Street',
        suite: 'Apt. 101',
        city: 'Newtown',
        zipcode: '12345-6789',
        geo: {
          lat: '-47.3159',
          lng: '81.1496',
        },
      },
      phone: '1-555-736-8031 x56442',
      website: 'alexsmith.org',
      company: {
        name: 'Smith-Romaguera',
        catchPhrase: 'Innovative multi-layered architecture',
        bs: 'maximize end-to-end solutions',
      },
    };
  }
}
