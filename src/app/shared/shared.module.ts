import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from './/angular-material.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ElevationOnHoverDirective} from '@directive/elevation-on-hover.directive';
import {ListOfElementsComponent} from '@component/list-of-elements/list-of-elements.component';
import {SnakeToTitlePipe} from '@directive/snake-to-title.pipe';
import {DetailViewComponent} from '@component/detail-view/detail-view.component';
import {RouterModule} from '@angular/router';
import {CustomPaginatorComponent} from '@component/custom-paginator/custom-paginator.component';
import {SpinnerNoRecordComponent} from '@component/spinner-no-record/spinner-no-record.component';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {ErrorComponent} from '@component/error/error.component';
import {ConvertToHttpsInterceptor} from '@app/shared/services/interceptor/convert-to-https.interceptor';

@NgModule({
  declarations: [
    ElevationOnHoverDirective,
    ListOfElementsComponent,
    SnakeToTitlePipe,
    DetailViewComponent,
    CustomPaginatorComponent,
    SpinnerNoRecordComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    ListOfElementsComponent,
    SnakeToTitlePipe,
    DetailViewComponent,
    CustomPaginatorComponent,
    ElevationOnHoverDirective,
    ErrorComponent,
    SpinnerNoRecordComponent,
  ],
  providers: [
      SwapiService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ConvertToHttpsInterceptor,
        multi: true
      }
    ]
})

export class SharedModule {
}
