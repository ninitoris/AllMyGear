import { Component, Input, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { gearItem } from 'src/app/shared/models/gear-item.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() groupname!: string;
  @Input() items!: gearItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
