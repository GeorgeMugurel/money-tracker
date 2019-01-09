import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrackerClass } from './tracker';

@Component({
  selector: 'app-tracker-parent',
  templateUrl: './tracker-parent.component.html',
  styleUrls: ['./tracker-parent.component.css']
})
export class TrackerParentComponent implements OnInit {

  @Input()
  tracker: TrackerClass;

  @Output()
  trackerModelOutput: EventEmitter<TrackerClass> = new EventEmitter();

  categories = ['salary', 'night-shift', 'job-bonus'];

  constructor() {}

  formSubmit(){
    this.trackerModelOutput.emit(this.tracker);
  }

  ngOnInit() {
  }

}

