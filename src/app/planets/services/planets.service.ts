import {Injectable} from '@angular/core';
import {SwapiService} from '@app/shared/services/swapi/swapi.service';
import {Observable, of} from 'rxjs';
import {DataListInterface} from '@app/shared/interfaces/data-list.interface';
import {Planet} from '@model/planet.model';

// injected in planets module
@Injectable()
export class PlanetsService implements DataListInterface {

  list: Observable<Planet[]> | null = null;
  nextLink = null;
  previousLink = null;

  loading: boolean;

  nextLinkChange: Observable<boolean> | null = null;
  previousLinkChange: Observable<boolean> | null = null;

  singleElement: Observable<Planet> | null = null;

  constructor(private swapiService: SwapiService) {
  }

  getList(): void {
    this.loading = true;
    this.swapiService.getPlanets().subscribe(res => {
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
      this.swapiService.getPlanets(this.nextLink).subscribe(res => {
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
      this.swapiService.getPlanets(this.previousLink).subscribe(res => {
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
    this.swapiService.getPlanet(id).subscribe(res => {
      this.singleElement = of(res);
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }


}
