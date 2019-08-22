import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, Renderer, NgZone } from '@angular/core';

@Component({
  selector: 'app-with-wings',
  templateUrl: './with-wings.component.html',
  styleUrls: ['./with-wings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithWingsComponent implements OnInit {

  list = [];
  @Input() set vehicleProp(list) {
    const data = (this.list as Array<string>).concat(list);
    this.list = data.filter((item, pos) => { return data.indexOf(item) == pos });
  };
  @ViewChild('el') el;
  constructor(
    private renderer: Renderer,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.ngZone.runOutsideAngular(() => {
      console.log('view check of Vehicles with wings');
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#E57373');
      setTimeout(() => {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
      }, 1000);
    });
  }

  onListUpdate(list) {
    this.list = [...list]
  }

}
