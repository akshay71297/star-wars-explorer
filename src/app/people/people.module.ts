import { NgModule } from '@angular/core';
import { PeopleComponent } from '@app/people/people.component';
import {SharedModule} from '@app/shared/shared.module';
import {PeopleRoutingModule} from '@app/people/people.routing.module';

@NgModule({
  declarations: [
    PeopleComponent,
  ],
  imports: [
    PeopleRoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class PeopleModule { }
