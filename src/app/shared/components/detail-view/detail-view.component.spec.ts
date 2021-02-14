import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailViewComponent} from './detail-view.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;

  let divContent: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    divContent = fixture.debugElement.query(By.css('.content'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('link is there', () => {
    const link = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(link).toBeTruthy();
  });

  it('content div should not render element', () => {
    // not element provided to the component
    expect(divContent).toBeFalsy();
  });
  it('content div should be rendered', () => {
    component.element = {};
    fixture.detectChanges();
    const content = fixture.debugElement.query(By.css('.content')).nativeElement;
    expect(content).toBeTruthy();
  });
});
