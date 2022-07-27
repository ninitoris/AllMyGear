import { Conditional } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { checklistModel } from 'src/app/shared/models/checklist.model';
import { gearItem } from 'src/app/shared/models/gear-item.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  @Input() checklist!: checklistModel;
  @Input() items: gearItem[] | undefined;

  checkListitems: gearItem[] = []

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<gearItem[] | undefined>) {
    console.log(event)
  }

}
