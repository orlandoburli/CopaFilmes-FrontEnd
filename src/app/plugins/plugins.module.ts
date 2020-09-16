import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { FormsModule } from '@angular/forms';

import { MovieCheckboxComponent } from './components/movie-checkbox/movie-checkbox.component';
import { AlertComponent } from './components/alert/alert.component';
import { ChampionComponent } from './components/champion/champion.component';

@NgModule({
  declarations: [TitleComponent, MovieCheckboxComponent, AlertComponent, ChampionComponent],
  exports: [
    TitleComponent,
    AlertComponent,
    MovieCheckboxComponent,
    ChampionComponent,
    FormsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class PluginsModule {}
