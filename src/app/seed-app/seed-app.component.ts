import { Component, OnInit } from '@angular/core';
import { HeaderMenus, NavList, NavEntity } from '../utils/data-helper';
@Component({
  selector: 'app-seed-app',
  templateUrl: './seed-app.component.html',
  styleUrls: ['./seed-app.component.css']
})
export class SeedAppComponent implements OnInit {

  public leftHeaderLists: Array<string> =HeaderMenus.leftMenus;
  public rightHeaderLists: Array<string>=HeaderMenus.rightMenus;
  public navList: Array<NavEntity>= NavList;

  constructor() {
  }

  ngOnInit() {
  }

}
