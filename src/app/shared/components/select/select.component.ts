import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() title: any = '';
  @Input() data: any = '';
  @Input() select: any = '';
  @Input() all: boolean = true;

  @Output() onChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  selectitems(event: any) {
    this.onChange.emit(event);
  }
}
