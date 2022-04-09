import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryViewComponent } from './components/main-view/gallery-view/gallery-view.component';
import { PhotoDetailViewComponent } from './components/main-view/photo-detail-view/photo-detail-view.component';
import { MainViewComponent } from './components/main-view/main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    GalleryViewComponent,
    PhotoDetailViewComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
