import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  @Input() className: string = '';
  @Input() contentClassName: string = '';
  @Input() bgImage: string = '';
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
