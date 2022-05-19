import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonSettings, Column, Row } from '../interfaces/interfaces';

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
  @Output() parentMethod = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    
  }

  sendData(data: any, type: string) {
    console.log(JSON.stringify(data));
    this.parentMethod.emit({data, type});
  }

}
