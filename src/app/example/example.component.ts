import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students=[
    {
      Imagepath:'http://localhost:4200/assets/images/balloon.jpg',name:'aakash'
    }
  ];
  

}
