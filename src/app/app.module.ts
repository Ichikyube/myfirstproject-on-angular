import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { navbarComponent } from './layout/navbar.component';
import { footerComponent } from './layout/footer.component';
import { SearchArtistsPipe } from './search-artists.pipe';

import { AnimboxComponent } from './animbox.component';
import { MouseComponent } from './mouse.component';
import { FadeBlockComponent } from './fadeblock.component';

import { HomeComponent } from './route/home.component';
import { AboutComponent } from './route/about.component';
import { NewsComponent } from './route/news.component';
import { ContactComponent } from './route/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent ,
    ContactComponent,
    SearchArtistsPipe,
    ArtistItemsComponent,
    ArtistDetailsComponent,
    AnimboxComponent,
    MouseComponent,
    FadeBlockComponent,

    navbarComponent,
    footerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
