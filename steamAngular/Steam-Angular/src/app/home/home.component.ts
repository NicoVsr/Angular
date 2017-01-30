import { Component, OnInit } from '@angular/core';

import { JeuxService } from '../jeux.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
 {
  constructor(public _jeuxService: JeuxService) {

  }
  jeux = this._jeuxService.getJeux;




}
