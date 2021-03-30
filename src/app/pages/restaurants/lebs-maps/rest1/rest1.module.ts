import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rest1PageRoutingModule } from './rest1-routing.module';

import { Rest1Page } from './rest1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rest1PageRoutingModule
  ],
  declarations: [Rest1Page]
})
export class Rest1PageModule {}
