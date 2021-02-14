import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MoviesComponent} from '@app/movies/movies.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MoviesModule} from '@app/movies/movies.module';


describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      imports: [RouterTestingModule, MoviesModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
