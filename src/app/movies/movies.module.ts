import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { MovieSelectionComponent } from './components/movie-selection/movie-selection.component';
import { ChampionsResultsComponent } from './components/champions-results/champions-results.component';
import { FormsModule } from '@angular/forms';
import { PluginsModule } from '../plugins/plugins.module';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    MainComponent,
    MovieSelectionComponent,
    ChampionsResultsComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, PluginsModule],
  exports: [MainComponent],
})
export class MoviesModule {}
