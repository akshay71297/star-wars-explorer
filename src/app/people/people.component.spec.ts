import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PeopleComponent} from './people.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PeopleModule} from '@app/people/people.module';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleComponent],
      imports: [RouterTestingModule, PeopleModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
