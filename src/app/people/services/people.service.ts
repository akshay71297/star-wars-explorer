import {Injectable} from '@angular/core';
import {Person} from '@model/person.model';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Observable<Person[]> | null = null;
  nextLink = null;
  previousLink = null;

  person: Observable<Person> | null = null;

  constructor(private swapiService: SwapiService) {
  }

  getPeople(): void {
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
    this.people = of(result.results);
    this.previousLink = result.previous;
    this.nextLink = result.next;
  }

  getPersonById(id): void {
    this.swapiService.getPerson(id).subscribe(res => {
      this.person = of(res);
    });
  }


}
