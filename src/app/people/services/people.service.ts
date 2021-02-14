import {Injectable} from '@angular/core';
import {Person} from '@model/person.model';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {Observable, of} from 'rxjs';
import {DataListInterface} from '@app/shared/interfaces/data-list.interface';

// injected in people module
@Injectable()
export class PeopleService implements DataListInterface {

  list: Observable<Person[]> | null = null;
  nextLink = null;
  previousLink = null;

  loading: boolean;

  nextLinkChange: Observable<boolean> | null = null;
  previousLinkChange: Observable<boolean> | null = null;

  singleElement: Observable<Person> | null = null;

  constructor(private swapiService: SwapiService) {
  }

  getList(): void {
    this.loading = true;
    this.swapiService.getPeople().subscribe(res => {
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
      this.swapiService.getPeople(this.nextLink).subscribe(res => {
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
      this.swapiService.getPeople(this.previousLink).subscribe(res => {
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
    this.nextLink = result.next;
    this.previousLink = result.previous;
    // to use custom paginator
    this.nextLinkChange = of(result.next);
    this.previousLinkChange = of(result.previous);
  }

  getElementById(id): void {
    this.loading = true;
    this.swapiService.getPerson(id).subscribe(res => {
      this.singleElement = of(res);
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }


}
