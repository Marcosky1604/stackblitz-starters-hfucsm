import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  //mes variables
  // List de users
  users$: Observable<User[]> = of([]);
  private criteriaSubject = new BehaviorSubject<string>('');
  criteria$ = this.criteriaSubject.asObservable();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = combineLatest([
      this.userService.getList(),
      this.criteria$,
    ]).pipe(
      map(([users, criteria]) =>
        users.filter((user) =>
          user.name.toLowerCase().includes(criteria.toLowerCase())
        )
        .sort((userA, userB) => {
          return userA.name.toLowerCase() < userB.name.toLowerCase() ? -1 : 1;
        })
      )
    );
  }

  //Mes fonctions
  trackByFn(index: number, user: User) {
    return user.id;
  }

  onCriteriaChange(criteria: string) {
    this.criteriaSubject.next(criteria);
  }
  //  get filteredUsers(): User[] {
  //   return this.users.filter((user) =>
  //    user.name.toLocaleLowerCase().includes(this.criteria.toLowerCase())
  // );
  //  }
}
