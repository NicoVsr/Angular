import { Component, OnInit } from '@angular/core';

import { eleve } from './eleve.model';

@Component({
  selector: 'app-moyenne',
  templateUrl: './moyenne.component.html',
  styleUrls: ['./moyenne.component.css']
})
export class MoyenneComponent {
  listeEleves: Array<eleve>;

get matieres(){
  return eleve.matieres;
}
  constructor() {
    this.listeEleves = new Array();
    let notesVictor = {};
    notesVictor[eleve.matieres[0]] = 12;
    notesVictor[eleve.matieres[1]] = 8;
    notesVictor[eleve.matieres[2]] = 16;

    let Victor = new eleve('Victor', notesVictor);

    let notesHugo = {};
    notesHugo[eleve.matieres[0]] = 1;
    notesHugo[eleve.matieres[1]] = 18;
    notesHugo[eleve.matieres[2]] = 10;

    let Hugo = new eleve('Hugo', notesHugo);


    this.listeEleves.push(Hugo);
    this.listeEleves.push(Victor);
   }

  moyenneGlobal(eleve: eleve){
    }

}
