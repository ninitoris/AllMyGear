import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { checklistModel } from 'src/app/shared/models/checklist.model';
import { gearItem } from 'src/app/shared/models/gear-item.model';
import { relationshipsModel } from 'src/app/shared/models/relationships.model';
import { MyGearService } from 'src/app/shared/services/my-gear.service';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss'],
})
export class DndComponent implements OnInit {
  constructor(private gearService: MyGearService) {}

  /** Array of items grouped by category */
  gearListByGroups: {
    [key: string]: gearItem[];
  } = {};

  /** Array of items grouped by uid */
  gearListGroupedByNum: {
    [key: number]: gearItem;
  } = {};

  //array of all group names
  groupsList!: string[];

  //array of checklists
  checklists: checklistModel[] = [];

  //array of checklists' divs' ids used for drag n drop
  checklistsConnections: string[] = [];

  //array of gear items grouped by checklist num
  checklistsWithItems: {
    [key: number]: gearItem[];
  } = {};

  allMyGear: gearItem[] = [];

  gearItemsLoaded: Promise<boolean> | undefined;

  ngOnInit(): void {
    let checklistSubsription = this.gearService.getMyChecklists();
    let myGearitemsSubsceiption = this.gearService.getMyGearList();

    forkJoin([checklistSubsription, myGearitemsSubsceiption]).subscribe(
      (res) => {
        this.checklists = res[0];
        this.allMyGear = res[1];
        console.log(this.checklists);
        console.log(this.allMyGear);

        this.gearListByGroups['undefined category'] = [];
        this.allMyGear.map((el) => {
          let group = el['category'];
          if (group) {
            if (this.gearListByGroups[group] === undefined) {
              this.gearListByGroups[group] = [];
            }
            this.gearListByGroups[group].push(el);
          } else this.gearListByGroups['undefined'].push(el);

          this.gearListGroupedByNum[el.gearitemid] = el;
        });

        //get list of groups
        this.groupsList = Object.keys(this.gearListByGroups);

        this.gearItemsLoaded = Promise.resolve(true);
      }
    );

    /*
    удалить!!!!!!!!!!!!!!!!!

    forkJoin([allItemsSubscription, checklistSubsription, relationsSubscription]).subscribe(
      (res)=>{

        this.allItems = res[0];
        this.checklists = res[1];
        let rels:relationshipsModel[] = res[2];

        this.allItems.forEach((el)=>{
          let group = el["group"]
          if (group){
            if (this.gearListByGroups[group] === undefined){
              this.gearListByGroups[group] = []
            }
            this.gearListByGroups[group].push(el)
          } else
          this.gearListByGroups["undefined"].push(el)

          this.gearListGroupedByNum[el.itemNum] = el
        })

        //get list of groups
        this.groupsList = Object.keys(this.gearListByGroups)


        this.checklists.forEach((chl)=>{
          this.checklistsConnections.push ('dnd-checklist-' + chl.checklistNum)
        })

        rels.forEach((rel)=>{
          let checklistNum = rel.checklistNum
          let itemNum = rel.itemNum
          if (this.checklistsWithItems[checklistNum] === undefined)
            this.checklistsWithItems[checklistNum] = []
          this.checklistsWithItems[checklistNum].push(this.gearListGroupedByNum[itemNum])
        })

        this.gearItemsLoaded = Promise.resolve(true)

      }
    )*/
  }

  // ngOnInit(): void{
  //   let allItemsSubscription = this.gearService.getMyGearList();
  //   allItemsSubscription.subscribe((res)=>{
  //     this.allItems = res;

  //   })
  // }
}
