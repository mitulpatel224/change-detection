import { Component, OnInit, ViewChild, Renderer, ChangeDetectionStrategy, NgZone, Input } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BikeComponent implements OnInit {

  list = [];
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
      console.log('view check of Bike');
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
