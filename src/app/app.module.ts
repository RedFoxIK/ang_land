import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ProcessComponent } from './process/process.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: ContactsComponent
  },
  {
    path: 'process',
    pathMatch: 'full',
    component: ProcessComponent
  },
  {
    path: 'resources',
    pathMatch: 'full',
    component: ResourcesComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactsComponent,
    HeaderComponent,
    ProcessComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
