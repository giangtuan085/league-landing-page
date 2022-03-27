import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Champion } from 'src/app/core/models/champion';
import { SanitizeService } from 'src/app/core/services/sanitize/sanitize.service';

@Component({
  selector: 'champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit, OnChanges {
  @Input() champ: Champion;
  @Input() isActive: boolean = true;
  @Output() close = new EventEmitter<string>();
  iframeRef: SafeResourceUrl;

  constructor(private sanitizer: SanitizeService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.iframeRef = this.sanitizer.transform(this.champ?.video);
  }

  public onClose(): void {
    this.isActive = false;

    const img = document.querySelector<HTMLElement>(`#champ-img-${this.champ.name}`);

    img.style.opacity = '0';
    // delay hide image
    setTimeout(() => {
      img.remove();
      this.close.emit('');
    }, 500);
  }


}
