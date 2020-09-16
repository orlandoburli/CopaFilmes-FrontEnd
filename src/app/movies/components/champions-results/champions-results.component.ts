import { Component, Input, OnInit } from '@angular/core';
import { Champion } from '../../models/champion.model';

@Component({
  selector: 'app-champions-results',
  templateUrl: './champions-results.component.html',
  styleUrls: ['./champions-results.component.scss'],
})
export class ChampionsResultsComponent implements OnInit {
  @Input() champion: Champion;

  constructor() {}

  ngOnInit(): void {}
}
