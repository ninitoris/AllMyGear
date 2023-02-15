import { Component, Input, OnInit } from '@angular/core';
import { gearItem } from 'src/app/shared/models/gear-item.model';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: gearItem;

  constructor() { }

  ngOnInit(): void {
  }

}
