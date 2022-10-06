import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  inputform!: FormGroup;

  orders: any;
  i: any;





  constructor(private cls: FormBuilder) {

    this.orders = [];




    this.inputform = this.cls.group({
      msg: ['', Validators.required],
      msg2: ['', Validators.required],
    })

  }



  addmsg() {
    this.orders.push(this.inputform.value);
    this.inputform.reset();
  };


  addmsg2() {
    this.orders.push(this.inputform.value);
    this.inputform.reset();
  };






  ngOnInit(): void {
  }
  dat1: any;
  date2: number = Date.now();



  deleteFieldValue(index: any) {
    this.orders.splice(index, 1);
  }



}

