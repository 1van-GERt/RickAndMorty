import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.scss']
})

export class CharactersComponent{
  public resourcesAdres: string = 'character';
  public componentName: string = 'Персонажи';
  public childComponent: string = 'characterCard';
  
  public filterFormData = [
    {
      label: 'name',
      type: 'input',
    },
    {
      label: 'status',
      type: 'select',
      options: [
        '',
        'Alive',
        'Dead',
        'Unknown'
      ]
    },

    {
      label: 'gender',
      type: 'select',
      options: [
        '',
        'Female',
        'Male',
        'Genderless',
        'Unknown'
      ]
    }, 

    {
      label: 'species',
      type: 'select',
      options: [
        '',
        'human',
        'alien',
        'robot',
        'animal',
        'alien',
        'cronenberg',
        'disease',
        'mythological',
        'Unknown'
      ]
    }, 
  ];
}
