import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() isActive: boolean;
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.videoPlayer.nativeElement.muted = true;
  }

  ngOnChanges(): void {
    if (this.isActive) {
      this.videoPlayer.nativeElement.currentTime = 0;
      this.videoPlayer.nativeElement.play();
    }
  }

}
