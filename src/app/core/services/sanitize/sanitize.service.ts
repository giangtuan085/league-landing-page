import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SanitizeService {

  constructor(private sanitizer: DomSanitizer) { }

  // trust resouce from youtube url
  public transform(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://youtube.com/embed/${id}`);
  }

}
