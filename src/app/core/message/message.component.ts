import {Component, Inject, OnInit} from '@angular/core';
import {ModalService} from '../modal/modal.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(@Inject('messageService') public modalService: ModalService) { }

  ngOnInit() {
  }

}
