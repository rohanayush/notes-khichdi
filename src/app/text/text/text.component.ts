import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  constructor() { }
  notes_user=[
    {'title':"hey !"}
  ]
  ngOnInit(): void {
  }
  submit(){}

}