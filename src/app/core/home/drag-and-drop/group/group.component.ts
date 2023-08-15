import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { gearItem } from 'src/app/shared/models/gear-item.model';
import { DndComponent } from '../dnd.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

  @Input() groupname!: string;
  @Input() items!: gearItem[];

  constructor(private dndcomp: DndComponent) { }

  allchecklists = this.dndcomp.checklistsConnections

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<gearItem[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
