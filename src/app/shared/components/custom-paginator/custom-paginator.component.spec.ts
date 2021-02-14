import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomPaginatorComponent} from './custom-paginator.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('CustomPaginatorComponent', () => {
  let component: CustomPaginatorComponent;
  let fixture: ComponentFixture<CustomPaginatorComponent>;

  let previousButton: DebugElement;
  let nextButton: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomPaginatorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    previousButton = fixture.debugElement.query(By.css('div')).children[0];
    nextButton = fixture.debugElement.query(By.css('div')).children[1];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting previous button to disable', () => {
    component.enablePrevious = false;
    fixture.detectChanges();
    expect(previousButton.nativeElement.disabled).toBeTruthy();
  });

  it('Setting next button to disable', () => {
    component.enableNext = false;
    fixture.detectChanges();
    expect(nextButton.nativeElement.disabled).toBeTruthy();
  });

  it('clicking previous button to check emitting empty value', () => {
    component.enablePrevious = true;
    spyOn(component.clickPrevious, 'emit');
    previousButton.nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    // event must have been emitted without any parameter
    expect(component.clickPrevious.emit).toHaveBeenCalledWith();
  });

  it('clicking next button to check emitting empty value', () => {
    component.enableNext = true;
    spyOn(component.clickNext, 'emit');
    nextButton.nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    // event must have been emitted without any parameter
    expect(component.clickNext.emit).toHaveBeenCalledWith();
  });
});
