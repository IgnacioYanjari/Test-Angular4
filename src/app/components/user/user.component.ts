import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

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
  posts:Post[];
  renderEdit:boolean = false;

  constructor(private dataService:DataService) {
    //this.name = name
    console.log('contructor run...')
  }

  ngOnInit() {
    console.log('ngOnInit run...')
    this.name = 'Ignacio Yanjari';
    this.age = 21;
    this.address = {
      street: 'Telescopio',
      city: 'Santiago',
      state: 'Región Metropolitana'
    };
    this.hobbies = [
      "Escribir Código", "Ver Series",
      "Escuchar Cumbia", "Dormir"
    ];
    this.email = "ignacio.yanjari@mail.udp.cl";
    this.dataService.getPosts().subscribe( posts => {
      // console.log(posts)
      this.posts = posts;
    })
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
  changeRenderEdit(){
    console.log('entra')
    this.renderEdit = !this.renderEdit;
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  body:string,
  id:number,
  title:string,
  userId:number
}
