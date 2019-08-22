import { Component, OnInit, AfterViewChecked, NgZone, Renderer, ViewChild, ElementRef, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit, AfterViewChecked {

  list = [];
  @Input() set vehicleProp(list) {
    const data = (this.list as Array<string>).concat(list);
    this.list = data.filter((item, pos) => { return data.indexOf(item) == pos });
  };
  @ViewChild('el') el: ElementRef;

  constructor(
    private ngZone: NgZone,
    private renderer: Renderer
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.ngZone.runOutsideAngular(() => {
      console.log('view check of Car');
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
