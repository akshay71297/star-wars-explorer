import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpinnerNoRecordComponent} from './spinner-no-record.component';
import {By} from '@angular/platform-browser';

describe('SpinnerNoRecordComponent', () => {
  let component: SpinnerNoRecordComponent;
  let fixture: ComponentFixture<SpinnerNoRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerNoRecordComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerNoRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should receive message in input and display as message of error component`, () => {
    const errorTitleHtml = fixture.debugElement.query(By.css('p')).nativeElement;
    component.message = 'testing loading';
    fixture.detectChanges();
    expect(errorTitleHtml.outerText).toEqual('testing loading');
  });
});
