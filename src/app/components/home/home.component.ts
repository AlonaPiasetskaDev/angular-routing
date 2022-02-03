import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly GENERATOR_URL = 'https://dog.ceo/api/breeds/image/random';
  value = '';

}
