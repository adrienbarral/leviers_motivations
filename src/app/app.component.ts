import { Component } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

interface MotivationLevers {
  title: string,
  rate: number
};

enum STATE {
  GRATIFICATION = 1,
  SIGNIFICIANCE = 2
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Leviers de Motivation';
  STATE = STATE;
  state = STATE.GRATIFICATION;

  levers: Array<MotivationLevers> = [
    {
      title: `Fierté d'appartenance`,
      rate: 0
    },
    {
      title: `Apprentissage`,
      rate: 0
    },
    {
      title: `Intérêt du métier`,
      rate: 0
    },
    {
      title: `Rémunération globale`,
      rate: 0
    },
    {
      title: `Vision de l'entreprise`,
      rate: 0
    },
    {
      title: `Statut professionnel`,
      rate: 0
    },
    {
      title: `Perspectives d'évolution`,
      rate: 0
    },
    {
      title: `Plaisir dans les relations`,
      rate: 0
    },
    {
      title: `Environement physique (conditions de travail)`,
      rate: 0
    },
    {
      title: `Equilibre vie perso / vie pro`,
      rate: 0
    },
  ]

  constructor() {
    setInterval(()=>{
      console.log(JSON.stringify(this.levers))
    }, 2000);
  }
  drop(event: CdkDragDrop<MotivationLevers[]>) {
    moveItemInArray(this.levers, event.previousIndex, event.currentIndex);
  }
  print() {
    window.print();
  }
}