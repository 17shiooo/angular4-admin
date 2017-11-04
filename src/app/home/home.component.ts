import { Component, OnInit } from '@angular/core';
import { HomeService, BookPlazaParams, BookPlazaItemEntity } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  private bookPlazaParams: BookPlazaParams = new BookPlazaParams();

  private bookPlazaItemList: Array<BookPlazaItemEntity>; // 排行榜列表

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.requestGetPlazaList();
  }

  /**
   * 获取排行榜数据
   */
  requestGetPlazaList() {
    this.homeService.requestGetBookPlazaData(this.bookPlazaParams).subscribe(data => {
      this.bookPlazaItemList = data.items;
    });
  }

}
