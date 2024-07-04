import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/request-response';
import { delay, map, Observable, tap } from 'rxjs';


interface State {
  users: User[],
  loading: boolean,
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private client = inject(HttpClient);

  #state = signal<State>({  //el numeral significa que es privado
    users: [],
    loading: true,
  })
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.client.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe(res => {
        this.#state.set({
          loading: false,
          users: res.data
        })
      });

  }



  getUserById(id: string) {
    return this.client.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map(resp => resp.data)
      )
  }

}
