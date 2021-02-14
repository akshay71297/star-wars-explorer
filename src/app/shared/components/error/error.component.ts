import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() message = 'Nothing to see here!\n[Error Occurred]';
  @Input() subMessage = 'Move Along...\nMove Along...';

  constructor() { }

  ngOnInit(): void {
  }

}
