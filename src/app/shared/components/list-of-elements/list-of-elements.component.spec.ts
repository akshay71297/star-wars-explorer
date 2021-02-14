import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListOfElementsComponent} from './list-of-elements.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('ListOfElementsComponent', () => {
  let component: ListOfElementsComponent;
  let fixture: ComponentFixture<ListOfElementsComponent>;
  let listElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfElementsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    listElement = fixture.debugElement.query(By.css('mat-list'));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('content div should not render element', () => {
    // not element provided to the component
    expect(listElement).toBeFalsy();
  });
  it('content div should be rendered', () => {
    component.list = [];
    fixture.detectChanges();
    listElement = fixture.debugElement.query(By.css('mat-list')).nativeElement;
    expect(listElement).toBeTruthy();
  });
});
