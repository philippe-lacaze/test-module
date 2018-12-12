import {Component, OnInit} from '@angular/core';
import {Logger, LoggerService} from './logger-module/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-module';

  private logger1: Logger;
  private logger2: Logger;

  constructor(loggerService: LoggerService) {
    this.logger1 = loggerService.getLogger('AppComponent');
    this.logger2 = loggerService.getLogger('TotoComponent');
    this.logger1.info('ctor');
    this.logger2.info('ctor');
  }

  ngOnInit(): void {
    this.logger1.log('ngOnInit', this);
    this.logger2.log('ngOnInit', this);
  }
}
