import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonSettings, Column, Row, TableEvent } from '../interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent<T> implements OnInit {

  @Input() headers!: Column<T>[];
  @Input() rows!: Row<T>[];
  @Input() buttons!: ButtonSettings[];
  @Input() filters!: string[];
  @Output() parentMethod = new EventEmitter<TableEvent<T>>();
  @Output() addEventMethod = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    
  }

  sendData(data: T, type: string) {
    console.log(JSON.stringify(data));
    this.parentMethod.emit({data, type});
  }

  addEvent(open: boolean) {
    this.addEventMethod.emit(true);
  }

}
