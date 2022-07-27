import { Component,
         Input } from '@angular/core';
import { MaterialModule } from "../../modules/MaterialModule";
import { APIServise } from '../../servises/API.servise'
import { CharactersServise } from '../../servises/characters.servise'



@Component({
  selector: 'characterCard',
  templateUrl: 'characterCard.component.html',
  styleUrls: ['characterCard.component.scss']
})

export class CharacterCardComponent {
  @Input() character!:any


  // public inFloat: boolean = false;
  private subscription!: any;
  
  constructor(
    private apiServises: APIServise,
    private charactersServise: CharactersServise
  ){

  }

}
