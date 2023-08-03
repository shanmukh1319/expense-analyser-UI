import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent {
  table_category_type:string="";

  getCategoryType(event:any){
    this.table_category_type=event
  }

}
