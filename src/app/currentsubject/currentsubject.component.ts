import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// for the router:
import { ActivatedRoute } from '@angular/router';

// used to communicate across components
import {CurrentsubjectService} from '../currentsubject.service';

// used to keep a track of the clips uploaded
import {ClipsService} from '../clips.service';

import { DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'app-currentsubject',
  templateUrl: './currentsubject.component.html',
  styleUrls: ['./currentsubject.component.css']
})
export class CurrentsubjectComponent implements OnInit, OnDestroy {

  subid: string;
  current: any;
  subscription: Subscription;
  display: boolean;

  clips: any[] // incorrect type but we'll give it a go
  clip: any;
  clipurl: any;

  carousel: any[]

  constructor(private _currentsubjectService: CurrentsubjectService,
              private _clipsService: ClipsService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer ) {
    // CurrentsubjectService was an attempt to communicate the selected subject via a service
    this.subscription = this._currentsubjectService.getMessage().subscribe(current=>{this.current = current;});
    this.display = false;
  }

  ngOnInit() {
    //this.data = this._curentsubjectService.dataArray;
    this.subid = this.route.snapshot.paramMap.get('id')

    //retrieve alist of accepted clips for this id
    this.getClips();
    this.getCarouselURLs()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getClips(): void {
    this._clipsService.getClips(this.subid)
        .subscribe(clips => this.clips = clips); // we should unsubscrbe at some stage cf other style -> subscription
  }

  getEmbedUrl(clip){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+clip['url']+"?autoplay=1&rel=0")
  }
  getVideoThumbnailURL(clip){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://img.youtube.com/vi/"+clip['url']+"/hqdefault.jpg")
    //return this.sanitizer.bypassSecurityTrustResourceUrl("https://img.youtube.com/vi/"+clip['url']+"/maxresdefault.jpg")
  }
  getCarouselURLs(){
    //this.carousel=[];
    //loop though our clips and push them to the array
    //this._clipsService.getClips(this.subid)
    //  .forEach(function(clip){ this.carousel.push({source:this.getVideoThumbnailURL(clip)}) })
    //return this.carousel;
    this._clipsService.getClips(this.subid).subscribe(clips => {
      this.carousel = clips.map(c => {
        return {source:this.getVideoThumbnailURL(c)}
      });
    })
  }
  //from https://github.com/ova2/angular-development-with-primeng/blob/master/chapter9/galleria/src/app/section/galleria.component.ts
  onImageClicked($event: any) {
    this.display = true;
    this.clip = this.clips[$event.index]
    this.clipurl = this.getEmbedUrl(this.clip)
    //window.open($event.image.source, '_blank');
  }

}
