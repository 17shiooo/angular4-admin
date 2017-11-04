import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {

  private domain: string = environment.DUOKANDOMAIN;;

  constructor(private http: Http) { }

  /**
   * 获取排行榜数据
   */
  requestGetBookPlazaData(bookPlazaParams?:BookPlazaParams): Observable<BookPlazaEntity> {
    const http_url = `${this.domain}/store/v0/comment/plaza`;
    return this.http.get(http_url).map((result: Response) => result.json())
      .catch(this.getError);;
  }

  private getError(error: Response): Observable<any> {
    console.log(error);
    return Observable.throw(error.json() || 'Server Issue');
  }
}

export class BookPlazaParams{
  count:number=36;
  book:number=1;
}

/**
 * 排行榜实体
 */
export class BookPlazaEntity{
  count:number;
  items:Array<BookPlazaItemEntity>;
  more:boolean;
  result:number;
  total:number;
  v:number;
}

/**
 * 排行榜列表详情实体
 */
export class BookPlazaItemEntity{
  author:number;
  anthor_icon:string;
  author_nick:string;
  comment_count:number;
  content:string;
  create_time:number;
  id:number;
  like_count:number;
  object_id:number;
  rate:5;
  status:0;
  type:0;
}