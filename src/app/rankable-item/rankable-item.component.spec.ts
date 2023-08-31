import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankableItemComponent } from './rankable-item.component';

describe('RankableItemComponent', () => {
  let component: RankableItemComponent;
  let fixture: ComponentFixture<RankableItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankableItemComponent]
    });
    fixture = TestBed.createComponent(RankableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
