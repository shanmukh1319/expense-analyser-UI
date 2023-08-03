import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PageHeaderComponent } from './page-design/page-header/page-header.component';
import { PageLayoutComponent } from './page-design/page-layout/page-layout.component';
import { FirstTileComponent } from './dashboard/first-tile/first-tile.component';
import { SecondTileComponent } from './dashboard/second-tile/second-tile.component';
import { ThirdTileComponent } from './dashboard/third-tile/third-tile.component';
import { ForthTileComponent } from './dashboard/forth-tile/forth-tile.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageLayoutComponent,
    FirstTileComponent,
    SecondTileComponent,
    ThirdTileComponent,
    ForthTileComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
