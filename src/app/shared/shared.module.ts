import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LinkerPipe } from './pipes/linker.pipe';

@NgModule({
  declarations: [
    LinkerPipe
  ],
  exports: [
    LinkerPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
