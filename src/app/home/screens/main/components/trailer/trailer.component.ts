import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Trailer } from 'src/app/core/constants/constants';
import { SanitizeService } from 'src/app/core/services/sanitize/sanitize.service';

@Component({
  selector: 'trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit, AfterViewInit {
  @Input() isActive: boolean;
  trailer: SafeResourceUrl;

  constructor(private sanitizer: SanitizeService) {
    this.trailer = this.sanitizer.transform(Trailer);
  }
 
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
