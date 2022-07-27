import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/home/header/header.component';
import { DndComponent } from './core/home/drag-and-drop/dnd.component';
import { GroupComponent } from './core/home/drag-and-drop/group/group.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ItemComponent } from './core/home/drag-and-drop/item/item.component';
import { ChecklistComponent } from './core/home/drag-and-drop/checklist/checklist.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DndComponent,
    GroupComponent,
    ItemComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
