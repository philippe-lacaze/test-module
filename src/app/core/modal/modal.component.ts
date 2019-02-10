import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges, OnDestroy {

  display = false;

  @Input()
  show: Subject<void>;

  constructor() {
  }

  ngOnInit() {
  }


  ngOnDestroy() {
    if (this.show) {
      this.show.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['show'];
    if (change.currentValue) {
      this.show.subscribe(() => this.display = true);
    }
  }


}
