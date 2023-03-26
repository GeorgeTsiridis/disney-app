import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { reducers } from '.';
import { CharacterEffects } from './effects/character.effects';

@NgModule({
  imports: [
    // StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ CharacterEffects]),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports: [StoreModule]
})
export class StorageModule { }
