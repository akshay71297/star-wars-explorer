import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from './error.component';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should receive title in input and display as title of error component`, () => {
    const errorTitleHtml = fixture.debugElement.query(By.css('.title')).nativeElement;
    component.message = 'testing error';
    fixture.detectChanges();
    expect(errorTitleHtml.outerText).toEqual('testing error');
  });

  it(`should receive subtitle in input and display as subtitle of error component`, () => {
    const errorSubTitleHtml = fixture.debugElement.query(By.css('span')).nativeElement;
    component.subMessage = 'sub testing error';
    fixture.detectChanges();
    expect(errorSubTitleHtml.outerText).toEqual('sub testing error');
  });
});
