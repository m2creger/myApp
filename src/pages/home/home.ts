import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Character } from '../../app/character.model';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  character = new Character('Luke Skywalker', '172', 'male');	
  
  // searchForm: FormGroup;
  characters: Character[];

  constructor(public navCtrl: NavController,
  			private http: Http) {

  }

  ngOnInit() {
    
  }
  // testFunction(name) {
  // 	console.log("getting clicks");
  //   this.http.get('http://swapi.co/api/people/?search=' + name)
  //   	.subscribe(response => console.log(response.json()));
  //       	//this.characters = response.json().results);
  //       //console.log(this.characters);
  // }

  findCharacter(name){
  	console.log("finding character");
    this.http.get('http://swapi.co/api/people/?search=' + name)
        .subscribe(response => this.characters = response.json().results);
  }	

  // initForm() {
  // 	let characterName = '';
  // 	this.searchForm = new FormGroup({
  // 		'character': new FormControl(characterName)
  // 	})
  // }

}
