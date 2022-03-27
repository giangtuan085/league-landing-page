import { AfterViewInit, Component,  Input, OnDestroy, OnInit } from '@angular/core';
import { WelcomeChampPreview } from 'src/app/core/constants/constants';

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
  isFocus: boolean = true; // check window active

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = 0;
    }
  }


}
