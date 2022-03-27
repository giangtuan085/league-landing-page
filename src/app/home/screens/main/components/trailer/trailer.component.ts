import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Trailer } from 'src/app/core/constants/constants';

@Component({
  selector: 'trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit, AfterViewInit {
  @Input() isActive: boolean;
  trailer: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.trailer = this.transform(Trailer);
  }
 
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  private transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://youtube.com/embed/${url}`);
  }

}
