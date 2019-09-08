import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './component';
import { token } from './service';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent
  ],
  providers: [{
    provide: token,
    useValue: 'http://localhost'
  }],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
