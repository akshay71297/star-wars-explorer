import {Injectable} from '@angular/core';
import {Person} from '@model/person.model';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {Observable, of, Subject} from 'rxjs';
import {DataListInterface} from '@app/shared/interfaces/data-list.interface';

@Injectable()
export class PeopleService implements DataListInterface{

  list: Observable<Person[]> | null = null;
  nextLink = null;
  previousLink = null;

  nextLinkChange: Observable<boolean> | null = null;
  previousLinkChange: Observable<boolean> | null = null;

  singleElement: Observable<Person> | null = null;

  constructor(private swapiService: SwapiService) {
  }

  getList(): void {
    this.swapiService.getPeople().subscribe(res => {
      this.updateClassFieldsFromResult(res);
    });
  }

  moveToNextPage(): void {
    if (this.nextLink) {
      this.swapiService.getPeople(this.nextLink).subscribe(res => {
        this.updateClassFieldsFromResult(res);
      });
    }
  }

  moveToPreviousPage(): void {
    if (this.previousLink) {
      this.swapiService.getPeople(this.previousLink).subscribe(res => {
        this.updateClassFieldsFromResult(res);
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
    this.swapiService.getPerson(id).subscribe(res => {
      this.singleElement = of(res);
    });
  }


}
