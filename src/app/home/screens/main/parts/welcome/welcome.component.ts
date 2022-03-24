import { AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { WelcomeChampPreview } from 'src/app/core/constants/constants';
import hoverEffect from 'hover-effect';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() isActive: boolean;
  animationInterval: any; // interval saved ID
  isInitialized: boolean;
  animates: any[] = []; // animation list
  previews: string[] = WelcomeChampPreview;
  routerSub: Subscription;
  isFocus: boolean = true; // check window active

  constructor(private router: Router) {
    this.routerSub = router.events.subscribe((e) => {
      if (e instanceof NavigationEnd && e.url !== '/') {
      }
    });

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isInitialized = true;
    this.runAnimation();
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = 0;
    }
    this.routerSub.unsubscribe();
  }

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

}
