import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ChampionsData } from 'src/app/core/constants/constants';
import { IChampion } from 'src/app/core/models/champion';

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit, OnChanges {
  @Input() isActive: boolean;
  champions: IChampion[] = ChampionsData;
  selectedChampion: IChampion;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public viewDetail(champ: IChampion): void {
    this.selectedChampion = champ;
  }

  public closeDetail(): void {
    this.selectedChampion = null;
  }
}
