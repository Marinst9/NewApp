import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { User } from './_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.usersSubject.asObservable();

  constructor( private http:HttpClient) { }
 
  getUsers() {
    return this.http.get('https://localhost:7072/api/Users');
  }

  // Додајте го getter методот за пристап до users
  // getUsersData(): any[] {
  //   return this.users$;
  // }
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`https://localhost:7072/api/Users/${userId}`);
  }
  
 
  

  // Ako želite ažurirati listu korisnika nakon dohvatanja, možete dodati metodu za postavljanje korisnika
  setUsers(users: User[]): void {
    this.usersSubject.next(users);
  }

}
