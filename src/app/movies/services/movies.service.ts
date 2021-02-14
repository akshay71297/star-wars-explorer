import {Injectable} from '@angular/core';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {Observable, of} from 'rxjs';
import {DataListInterface} from '@app/shared/interfaces/data-list.interface';
import {Movie} from '@model/movie.model';

// injected in movies module
@Injectable()
export class MoviesService implements DataListInterface {

  list: Observable<Movie[]> | null = null;
  nextLink = null;
  previousLink = null;
  loading: boolean;

  nextLinkChange: Observable<boolean> | null = null;
  previousLinkChange: Observable<boolean> | null = null;

  singleElement: Observable<Movie> | null = null;

  constructor(private swapiService: SwapiService) {
  }

  getList(): void {
    this.loading = true;
    this.swapiService.getMovies().subscribe(res => {
      this.updateClassFieldsFromResult(res);
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }

  moveToNextPage(): void {
    if (this.nextLink) {
      this.loading = true;
      this.swapiService.getMovies(this.nextLink).subscribe(res => {
        this.updateClassFieldsFromResult(res);
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;

      });
    }
  }

  moveToPreviousPage(): void {
    if (this.previousLink) {
      this.loading = true;
      this.swapiService.getMovies(this.previousLink).subscribe(res => {
        this.updateClassFieldsFromResult(res);
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;

      });
    }
  }

  updateClassFieldsFromResult(result): void {
    this.list = of(result.results);
    this.previousLink = result.previous;
    this.nextLink = result.next;
    // to use custom paginator
    this.nextLinkChange = of(result.next);
    this.previousLinkChange = of(result.previous);
  }

  getElementById(id): void {
    this.loading = true;

    this.swapiService.getMovie(id).subscribe(res => {
      this.singleElement = of(res);
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }


}
