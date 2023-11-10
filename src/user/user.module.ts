import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [UserListComponent, UserDetailComponent],
  exports: [UserListComponent, UserDetailComponent],
})
export class UserModule {}
