import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from './/angular-material.module';
import {HttpClientModule} from '@angular/common/http';
import {ElevationOnHoverDirective} from '@directive/elevation-on-hover.directive';
import {ListOfElementsComponent} from '@component/list-of-elements/list-of-elements.component';
import {SnakeToTitlePipe} from '@directive/snake-to-title.pipe';
import {DetailViewComponent} from '@component/detail-view/detail-view.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ElevationOnHoverDirective,
    ListOfElementsComponent,
    SnakeToTitlePipe,
    DetailViewComponent,
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
  ]
})

export class SharedModule { }
