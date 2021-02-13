import { NgModule } from '@angular/core';
import {SharedModule} from '@app/shared/shared.module';
import {MoviesComponent} from '@app/movies/movies.component';
import {MoviesRoutingModule} from '@app/movies/movies.routing.module';

@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule,
  ],
  providers: [],
})
export class MoviesModule { }
