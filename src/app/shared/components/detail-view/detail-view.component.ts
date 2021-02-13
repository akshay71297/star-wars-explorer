import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '@model/person.model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  @Input() proprietiesToDisplay;
  @Input() icon;
  @Input() element;
  @Input() backLink;

  constructor() { }

  ngOnInit(): void {
  }

}
