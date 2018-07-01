import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number =0;
  add_item:string = "เพิ่มรายการใหม่"; //one way binding
  listText:string = "รายการเริ่มต้น"; //two way binding (model)
  listall = [];

  constructor() { }

  ngOnInit() {
    this.itemCount=this.listall.length;
  }

  additem()
  {
if(this.listText !=""){

//รับค่าจาก form และบันทึกลง array listall []
this.listall.push(this.listText);
//เครีย์ค่าใน form
this.listText='';
}
}

}
