import {Injectable} from '@angular/core';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {Observable, of} from 'rxjs';
import {DataListInterface} from '@app/shared/interfaces/data-list.interface';
import {Movie} from '@model/movie.model';
import {Planet} from '@model/planet.model';

// injected in planets module
@Injectable()
export class PlanetsService implements DataListInterface{

  list: Observable<Planet[]> | null = null;
  nextLink = null;
  previousLink = null;

  nextLinkChange: Observable<boolean> | null = null;
  previousLinkChange: Observable<boolean> | null = null;

  singleElement: Observable<Planet> | null = null;

  constructor(private swapiService: SwapiService) {
  }

  getList(): void {
    this.swapiService.getPlanets().subscribe(res => {
      this.updateClassFieldsFromResult(res);
    });
  }

  moveToNextPage(): void {
    if (this.nextLink) {
      this.swapiService.getPlanets(this.nextLink).subscribe(res => {
        this.updateClassFieldsFromResult(res);
      });
    }
  }

  moveToPreviousPage(): void {
    if (this.previousLink) {
      this.swapiService.getPlanets(this.previousLink).subscribe(res => {
        this.updateClassFieldsFromResult(res);
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
    this.swapiService.getPlanet(id).subscribe(res => {
      this.singleElement = of(res);
    });
  }


}
