import { Component, OnInit, ChangeDetectionStrategy, NgZone, Renderer, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-with-tires',
  templateUrl: './with-tires.component.html',
  styleUrls: ['./with-tires.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithTiresComponent implements OnInit {

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
      console.log('view check of Vehicles with tires');
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#E57373');
      setTimeout(() => {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
      }, 1000);
    })
  }

  onListUpdate(list) {
    this.list = [...list]
  }

}
