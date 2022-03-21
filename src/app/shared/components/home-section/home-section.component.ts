import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  @Input() className: string = '';
  @Input() contentClassName: string = '';
  @Input() bgImage: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.bgImage, changes);
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values
  }

}
