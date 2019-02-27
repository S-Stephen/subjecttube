import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';

/* including firestore: */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

/* include ui widgets etc */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*slide menu */
import {SlideMenuModule} from 'primeng/slidemenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import { SubjectmenuComponent } from './subjectmenu/subjectmenu.component';
//import {MenuItem} from 'primeng/api';


/* for base_url to be elsewhere -> how to change dynamically on build? */
import {APP_BASE_HREF} from '@angular/common';
import { CurrentsubjectComponent } from './currentsubject/currentsubject.component';
import { AppRoutingModule } from './app-routing.module';

/* light box for videao */
//import {LightboxModule} from 'primeng/lightbox';

/* our carousel like widget */
import {GalleriaModule} from 'primeng/galleria';

/* Dialog modal like module */
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    BrowserAnimationsModule, // ui widgets etc
    SlideMenuModule,
    PanelMenuModule,
    AppRoutingModule,
    //LightboxModule,
    GalleriaModule,
    DialogModule
    //MenuItem,
  ],
  providers: [{provide: APP_BASE_HREF, useValue:'/~sms67/firebase/subjecttube/dist/subjecttube'}],
  declarations: [ AppComponent, SubjectmenuComponent, CurrentsubjectComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
