import { Component } from '@angular/core';
import { MaterialModule } from "../../modules/MaterialModule";
import { APIServise } from '../../servises/API.servise';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'characterInfo',
  templateUrl: 'characterInfo.component.html',
  styleUrls: ['characterInfo.component.scss']
})

export class CharacterInfoComponent {
  private subscriptions: Subscription = new Subscription();
  public characterId!: number;
  public character!: any;

  
  constructor(
    private apiServises: APIServise,
    private activateRoute: ActivatedRoute,
  ){}

  ngOnInit(){
    this.getCharacterId();
    this.getCharacter()
  }

  getCharacterId(){
    this.subscriptions.add(this.activateRoute.params.subscribe(params => {
     this.characterId = params['id'];
    console.log( this.characterId )
    }));
  }

  getCharacter(){
    this.apiServises.getAPI('https://rickandmortyapi.com/api/character/' + this.characterId + '').subscribe( value => {
      console.log('value:',value)
      this.character = value;
      console.log(this.character)
    })
  }
}
