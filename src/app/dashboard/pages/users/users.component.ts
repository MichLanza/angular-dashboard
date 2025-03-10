import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@Services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, TitleComponent],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  public userService = inject (UsersService);

  constructor() {
  }
}
