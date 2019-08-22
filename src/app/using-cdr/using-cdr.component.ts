import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, NgZone, OnInit,
  Renderer, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-using-cdr',
  templateUrl: './using-cdr.component.html',
  styleUrls: ['./using-cdr.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class UsingCdrComponent implements OnInit, DoCheck {

  @ViewChild('el') el: ElementRef;
  timer: string;
  cdrConf: {
    isDetached: boolean,
    isMarkedForCheck: boolean,
  }
  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private renderer: Renderer,
  ) {
    this.cdrConf = {
      isDetached: false,
      isMarkedForCheck: false,
    }
  }

  ngOnInit() {
    // this.ngZone.runOutsideAngular(() => {
    setInterval(() => {
      // this.ngZone.run(() => 
      this.setTimer()
      // );
    }, 1000);
    // });
  }
  ngDoCheck() {
    this.ngZone.runOutsideAngular(() => {
      console.log('view check of Vehicles');
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#FFEBEE');
      setTimeout(() => {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
      }, 1000);
    });
  }

  setTimer() {
    this.timer = new Date().toTimeString();
  }
  detach() {
    this.cdrConf.isDetached = true;
    console.log('Component Detaching');
    this.onTimeOut(this.cdr.detach());
    this.cdr.detectChanges();
  }

  reatach() {
    this.cdrConf.isDetached = false;
    console.log('Component Re-Attaching');
    this.onTimeOut(this.cdr.reattach());
  }

  detectChanges() {
    console.log('Detecting Changes');
    this.onTimeOut(this.cdr.detectChanges());
  }

  markForCheck() {
    this.cdrConf.isMarkedForCheck = true;
    console.log('Component Marked For Change');
    this.onTimeOut(this.cdr.markForCheck());
  }

  onTimeOut(callback: any) {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => callback);
      }, 500);
    });
  }

}
