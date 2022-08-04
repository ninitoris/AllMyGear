import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { checklistModel } from '../models/checklist.model';
import { gearItem } from '../models/gear-item.model';
import { relationshipsModel } from '../models/relationships.model';

const myGear = [
  {
    "itemNum": 1,
    "itemName": "Tent 2P",
    "manufacturer": "Red Fox",
    "model": "Challenger 2",
    "year": "2012",
    "price": "170$",
    "weightKG": "2.6",
    "group": "Shelter"
  },
  {
    "itemNum": 2,
    "itemName": "Camping tent 6P",
    "manufacturer": "asdf",
    "model": "qwre",
    "year": "2012",
    "price": "170$",
    "weightKG": "9.7",
    "group": "Shelter"
  },
  {
    "itemNum": 3,
    "itemName": "Bed item 123",
    "manufacturer": "asdf",
    "model": "qwre",
    "year": "2012",
    "price": "170$",
    "weightKG": "9.7",
    "group": "Bed"
  },
  {
    "itemNum": 3,
    "itemName": "Kitchen item 123",
    "manufacturer": "asdf",
    "model": "qwre",
    "year": "2012",
    "price": "170$",
    "weightKG": "9.7",
    "group": "Kitchen"
  },
  {
    "itemNum": 4,
    "itemName": "Cook set",
    "manufacturer": "asdf",
    "model": "qwre",
    "year": "2012",
    "price": "170$",
    "weightKG": "0.795",
    "group": "Kitchen"
  },
  {
    "itemNum": 5,
    "itemName": "Knife",
    "manufacturer": "asdf",
    "model": "qwre",
    "year": "2012",
    "price": "170$",
    "weightKG": "0.1",
    "group": "Kitchen"
  }
]

const myChecklists = [
  {
    "checklistNum": 1,
    "checklistName": "Чеклист 1"
  },
  {
    "checklistNum": 2,
    "checklistName": "Чеклист 2"
  },
  {
    "checklistNum": 3,
    "checklistName": "Чеклист 3"
  }
]


const itemChecklistRelations = [
  {
    "itemNum": 5,
    "checklistNum": 1
  },
  {
    "itemNum": 3,
    "checklistNum": 1
  },
  {
    "itemNum": 4,
    "checklistNum": 1
  },
  {
    "itemNum": 1,
    "checklistNum": 1
  },
  {
    "itemNum": 2,
    "checklistNum": 2
  },
  {
    "itemNum": 4,
    "checklistNum": 2
  }
]

@Injectable({
  providedIn: 'root'
})
export class MyGearService {

  constructor(private http: HttpClient) { }

  getMyGearList(){
    return this.http.get<gearItem[]>('api/myGear');
  }

  getMyChecklists(){
    return this.http.get<checklistModel[]>('api/checklists')
  }

  getRelations(){
    return this.http.get<relationshipsModel[]>('api/rels')
  }
}
