import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './angular-material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule],
})
export class ThirdPartyModule {}
