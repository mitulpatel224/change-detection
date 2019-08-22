import { Component, OnInit, ElementRef, ChangeDetectionStrategy, Renderer, ViewChild, NgZone } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesComponent implements OnInit {

  vehicleProp = ['engine', 'brakes'];
  @ViewChild('el') el: ElementRef;
  constructor(
    private renderer: Renderer,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.ngZone.runOutsideAngular(() => {
      console.log('view check of Vehicles');
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#FFEBEE');
      setTimeout(() => {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
      }, 1000);
    });
  }

  onListUpdate(list) {
    this.vehicleProp = [...list];
  }

}
