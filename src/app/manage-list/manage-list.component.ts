import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageListComponent implements OnInit {

  @Input() list: string[];
  @Output('updatedList') latestList = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  addProperty(prop) {
    this.list = [...this.list, prop];
    this.latestList.emit(this.list);
  }

}
