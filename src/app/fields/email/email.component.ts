import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  @Input() myForm;
  @Input() prop;
  @Input() case;
  @Output() onRemoveControl = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  removeControl(arrayField, i) {
    alert(i);
    this.onRemoveControl.emit({arrayField: arrayField, i: i});
  }
}
