import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit, AfterViewInit {
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }
}
