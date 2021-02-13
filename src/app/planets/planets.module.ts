import { NgModule } from '@angular/core';
import {SharedModule} from '@app/shared/shared.module';
import {PlanetsComponent} from '@app/planets/planets.component';
import {PlanetsRoutingModule} from '@app/planets/planets.routing.module';

@NgModule({
  declarations: [
    PlanetsComponent,
  ],
  imports: [
    PlanetsRoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class PlanetsModule { }
