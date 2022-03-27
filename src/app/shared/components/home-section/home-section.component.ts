import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChampionsData, WelcomeChampPreview } from 'src/app/core/constants/constants';
import hoverEffect from 'hover-effect';
import { IChampion } from 'src/app/core/models/champion';

@Component({
  selector: 'home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() className: string = '';
  @Input() contentClassName: string = '';
  @Input() bgImage: string = '';
  @Input() isActive: boolean;
  @Input() page: number;
  @Output() viewDetailEvent = new EventEmitter<IChampion>();
  @Output() closeDetailEvent = new EventEmitter<IChampion>();
  animationInterval: any; // interval saved ID
  isInitialized: boolean;
  animates: any[] = []; // animation list
  previews: string[] = WelcomeChampPreview;
  isFocus: boolean = true; // check window active
  champions: IChampion[] = ChampionsData;
  selectedChampion: IChampion;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isInitialized = true;
    if (this.page === 1) {
      this.runAnimation();
    }
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = 0;
    }
  }

  // ||| START PAGE 1 |||
  // TODO: break this down, refactor to angular style
  private runAnimation(): void {
    if (!this.isInitialized) {
      return;
    }
    this.animates = [];

    for (let i = 0; i < this.previews.length; i++) {
      let item = this.previews[i];
      let nextImg = this.previews[i === this.previews.length - 1 ? 0 : i + 1];
      let animation = new hoverEffect({
        parent: document.querySelector('#welcome__img__slide'),
        intensity: 0.5,
        image1: item,
        image2: nextImg,
        displacementImage: 'assets/images/distortion.png',
        hover: false
      })
      this.animates.push(animation);
    }

    let currItem = 0;

    const autoImageSlide = () => {
      if (!this.isFocus) {
        return;
      }
      let prevItem = currItem;
      currItem = (currItem + 1) % this.animates.length;
      this.animates[prevItem].next();

      setTimeout(() => {
        let canvas = document.querySelectorAll('#welcome__img__slide > canvas');
        document.querySelector('#welcome__img__slide')?.appendChild(canvas[0]);
        this.animates[prevItem].previous();
      }, 3000);
    };

    this.animationInterval = setInterval(autoImageSlide, 3000);
  }

  // check if window is focused
  @HostListener('window:focus', ['$event'])
  public onFocus(event): void {
    this.isFocus = true;
  }

  // check if window is focused
  @HostListener('window:blur', ['$event'])
  public onBlur(event): void {
    this.isFocus = false;
  }
  // ||| END PAGE 1 |||

  // ||| START PAGE 2 |||
  public viewDetail(champ: IChampion): void {
    this.selectedChampion = champ;
    this.viewDetailEvent.emit(this.selectedChampion);
  }

  public closeDetail(): void {
    this.selectedChampion = null;
    this.closeDetailEvent.emit();
  }
  // ||| END PAGE 2 |||

}
