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

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    BrowserAnimationsModule, // ui widgets etc
    SlideMenuModule,
    PanelMenuModule,
    //MenuItem,
  ],
  declarations: [ AppComponent, SubjectmenuComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
