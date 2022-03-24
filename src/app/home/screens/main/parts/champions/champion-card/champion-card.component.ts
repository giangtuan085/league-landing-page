import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Champion } from 'src/app/core/models/champion';

@Component({
  selector: 'champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.scss']
})
export class ChampionCardComponent implements OnInit {
  @Input() champ: Champion;
  @ViewChild('cardRef') imgRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  public viewChampDetail(): void {
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

    setTimeout(() => {
        newNode.style.width = 'auto';
        newNode.style.height = '100%';
        newNode.style.top = 0;
        newNode.style.left = 0;
    },)

    document.body.appendChild(newNode);

    const videoUrl = `https://youtube.com/embed/${this.champ.video}`;
    document.querySelector(`#champ-detail-${this.champ.name} iframe`).setAttribute('src', videoUrl);
    document.querySelector(`#champ-detail-${this.champ.name}`).classList.add('active');
  }

}
