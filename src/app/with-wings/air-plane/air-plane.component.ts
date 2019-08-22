import {
  AfterViewChecked, ChangeDetectionStrategy, Component, NgZone, OnInit, Renderer, ViewChild, Input
} from '@angular/core';

@Component({
  selector: 'app-air-plane',
  templateUrl: './air-plane.component.html',
  styleUrls: ['./air-plane.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirPlaneComponent implements OnInit, AfterViewChecked {

  list: any = [];
  @Input() set vehicleProp(list) {
    const data = (this.list as Array<string>).concat(list);
    this.list = data.filter((item, pos) => { return data.indexOf(item) == pos });
  };
  @ViewChild('el') el;
  constructor(
    private renderer: Renderer,
    private ngZone: NgZone,
  ) {
  }

  ngOnInit() {
  }
  ngAfterViewChecked() {
    this.ngZone.runOutsideAngular(() => {
      console.log('view check of air-plane');
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#E53935');
      setTimeout(() => {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
      }, 1000);
    })
  }

  onListUpdate(list) {
    this.list = [...list]
  }

}
