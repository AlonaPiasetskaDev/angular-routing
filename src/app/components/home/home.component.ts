import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly GENERATOR_URL = 'https://dog.ceo/api/breeds/image/random';
  @Input() value: string = 'Start typing';
  text = `smaksjlash ${this.GENERATOR_URL} kjugkggjg`;

  changeInput(e: any){
    this.value = e;
  }
}
