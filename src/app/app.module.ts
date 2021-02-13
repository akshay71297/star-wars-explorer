import { NgModule } from '@angular/core';
import { AppComponent } from '@app/app.component';
import {AppRoutingModule} from '@app/app.routing.module';
import { PeopleComponent } from '@app/pages/people/people.component';
import {ElevationOnHoverDirective} from '@app/directives/elevation-on-hover.directive';
import {SharedModule} from '@app/shared-modules/shared.module';
import {LandingComponent} from '@component/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ElevationOnHoverDirective,
    LandingComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
