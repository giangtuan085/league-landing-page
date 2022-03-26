import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
  selectedChampion: Champion;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public viewDetail(champ: Champion): void {
    this.selectedChampion = champ;
  }

  public closeDetail(): void {
    this.selectedChampion = null;
  }
}
