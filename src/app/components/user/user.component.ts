import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:Address;
  hobbies: string[];
  hello: any;
  email:string;

  constructor() {
    //this.name = name
    console.log('contructor run...')
  }

  ngOnInit() {
    console.log('ngOnInit run...')
    this.name = 'Ignacio Yanjari';
    this.age = 30;
    this.address = {
      street: 'Telescopio',
      city: 'Santiago',
      state: 'RM'
    };
    this.hobbies = [
      "Write Code", "Watch movies",
      "Listen to music", "Sleep"
    ];
    this.email = "test@test.com";
  }
  addHobby(hobby){
    this.hobbies.unshift(hobby);
    console.log(`${hobby} Added`)
    return false;
  }
  deleteHobby(hobby){
    for(let i = 0 ; i< this.hobbies.length ; i++){
      if(this.hobbies[i] == hobby)
        this.hobbies.splice(i,1)
    }
    console.log(`${hobby} Deleted `)
  }

}
interface Address{
  street:string,
  city:string,
  state:string
}
