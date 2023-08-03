import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  present_tab: string = "home";


  activateTab(tab_type: string) {
    this.present_tab = tab_type
  }
}
