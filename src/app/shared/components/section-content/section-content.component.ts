import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss'],
})
export class SectionContentComponent implements OnInit {
  @Input() className: string = '';
  @Input() bgImage: string = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.bgImage, changes);
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values
  }

}
