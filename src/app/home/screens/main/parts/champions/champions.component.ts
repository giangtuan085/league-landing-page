import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChampionsData } from 'src/app/core/constants/constants';
import { Champion } from 'src/app/core/models/champion';

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit, OnChanges {
  @Input() isActive: boolean;
  champions: Champion[] = ChampionsData;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
