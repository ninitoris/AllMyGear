import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndComponent } from './dnd.component';

describe('ChecklistComponent', () => {
  let component: DndComponent;
  let fixture: ComponentFixture<DndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
