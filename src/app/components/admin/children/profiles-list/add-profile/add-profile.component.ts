import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/reducers/profile.reducer';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
  }

  @Input() toggle: boolean = false;

}
