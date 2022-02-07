import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import { IState } from 'src/app/reducers';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent extends SimpleModalComponent<null,null> implements OnDestroy {

  constructor(private simpleModalService: SimpleModalService, private store: Store<IState>) {
    super();
   }

   confirm(){
     console.log('confirm!')
   }

   ngOnDestroy(): void {
       console.log('destroyed!!!')
   }
}
