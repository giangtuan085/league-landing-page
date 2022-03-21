import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  @Input() isActive: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
