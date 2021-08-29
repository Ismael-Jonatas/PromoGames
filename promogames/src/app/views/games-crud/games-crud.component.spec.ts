import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCrudComponent } from './games-crud.component';

describe('GamesCrudComponent', () => {
  let component: GamesCrudComponent;
  let fixture: ComponentFixture<GamesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
