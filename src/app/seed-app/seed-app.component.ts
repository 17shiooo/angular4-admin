import { Component, OnInit } from '@angular/core';
import {HeaderMenus,NavList} from '../utils/data';
@Component({
  selector: 'app-seed-app',
  templateUrl: './seed-app.component.html',
  styleUrls: ['./seed-app.component.css']
})
export class SeedAppComponent implements OnInit {

  public leftHeaderLists:Array<string>;
  public rightHeaderLists:Array<string>;
  public navList;

  constructor() {
    this.leftHeaderLists=HeaderMenus.leftMenus;
    this.rightHeaderLists=HeaderMenus.rightMenus;
    this.navList=NavList;
   }

  ngOnInit() {
  }

}
