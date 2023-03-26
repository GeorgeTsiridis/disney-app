import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { MaterialModule } from './shared/material.module';
import { KendoModule } from './shared/kendo.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterListComponent,
    CharacterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    KendoModule
    // StorageModule
  ],
  providers: [
    HttpClientModule,
    {
      provide: Storage,
      useFactory: () => {
        return window.localStorage;
      }
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
