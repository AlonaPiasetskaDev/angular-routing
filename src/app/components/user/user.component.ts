import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  username: string = 'stranger';
  email: string = 'smbd@mail.com';
  name: string = 'Sem';
  age: number = 24;
  gender: boolean = true;
  avatar: string = 'assets/img/happy.png';


  constructor() { }

}
