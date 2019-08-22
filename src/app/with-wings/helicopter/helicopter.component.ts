import { Component, OnInit, ChangeDetectionStrategy, Renderer, NgZone, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-helicopter',
  templateUrl: './helicopter.component.html',
  styleUrls: ['./helicopter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelicopterComponent implements OnInit {

  list = [];
  @Input() set vehicleProp(list) {
    const data = (this.list as Array<string>).concat(list);
    this.list = data.filter((item, pos) => { return data.indexOf(item) == pos });
  };
  @ViewChild('el') el;
  constructor(
    private renderer: Renderer,
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.ngZone.runOutsideAngular(() => {
      console.log('view check of Helicopter');
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
