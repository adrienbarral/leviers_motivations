import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rankable-item',
  templateUrl: './rankable-item.component.html',
  styleUrls: ['./rankable-item.component.css']
})
export class RankableItemComponent {
  @Input() label = '---';
  
  private _satisfaction_level = 0
  
  @Output()
  satisfaction_levelChange = new EventEmitter<number>();

  @Input() 
  set satisfaction_level(value: number) {
    console.log(`Setting satisfaction level to ${value}`);
    this._satisfaction_level = value;
    this.satisfaction_levelChange.emit(value);
  }

  get satisfaction_level(): number {
    return this._satisfaction_level;
  }
  
  @Input()
  readonly = false;

  constructor(){

  }
}
