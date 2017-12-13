import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './shared-components/map/map.component';
import 'rxjs/Rx';

import { AgmCoreModule } from '@agm/core';

import { AppRouters } from './app.routers';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './components/article/article.service';

import { apiKey } from '../environments/environment';
import { FishingPlaceComponent } from './components/home/fishing-place/fishing-place.component';
import { FishingPlaceService} from './components/home/fishing-place/fishing-place.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LayoutComponent,
    HomeComponent,
    MapComponent,
    ArticleComponent,
    FishingPlaceComponent
  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRouters),
    AgmCoreModule.forRoot({
        apiKey
    })
  ],
  providers: [
      ArticleService,
      FishingPlaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
