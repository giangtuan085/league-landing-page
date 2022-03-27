import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IChampion } from 'src/app/core/models/champion';

@Component({
  selector: 'champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.scss']
})
export class ChampionCardComponent implements OnInit {
  @Input() champ: IChampion;
  @ViewChild('imgRef') imgRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  // on click, zoom in image and add transition to detail view
  public transformImg(): void {
    const img = this.imgRef.nativeElement;
    const pos = img.getBoundingClientRect();

    const newNode = img.cloneNode(true);
    newNode.style.width = img.offsetWidth + 'px';
    newNode.style.height = img.offsetHeight + 'px';
    newNode.style.position = 'absolute';
    newNode.style.top = pos.top + 'px';
    newNode.style.left = pos.left + 'px';
    newNode.style.zIndex = '102';

    newNode.style.transition = 'all 0.7s ease';
    newNode.id = `champ-img-${this.champ.name}`;

    // delay transition
    setTimeout(() => {
      newNode.style.width = 'auto';
      newNode.style.height = '100%';
      newNode.style.top = 0;
      newNode.style.left = 0;
    },)

    document.body.appendChild(newNode);
  }

}
