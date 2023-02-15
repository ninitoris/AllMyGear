import { Conditional } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { checklistModel } from 'src/app/shared/models/checklist.model';
import { gearItem } from 'src/app/shared/models/gear-item.model';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MyGearService } from 'src/app/shared/services/my-gear.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  @Input() checklist!: checklistModel;
  @Input() items: gearItem[] | undefined;

  checkListitems: gearItem[] = []

  constructor(private gearService: MyGearService) { }

  ngOnInit(): void {
    console.log('checklist init');
    this.gearService.getItemsForChecklist(this.checklist.checklistid).subscribe(res =>{
      this.checkListitems = res;
      console.log(`checklist ${this.checklist.checklistid} got res:`);
      console.log(res);
    })
  }

  drop(event: CdkDragDrop<gearItem[] | undefined>) {
    console.log(event)
    if (!event.container.data){
      return
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data!,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
