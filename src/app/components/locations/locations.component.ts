import { Component } from '@angular/core';
import { MaterialModule } from "../../modules/MaterialModule";
import { APIServise } from '../../servises/API.servise';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'locations',
  templateUrl: 'locations.component.html',
  styleUrls: ['locations.component.scss']
})

export class LocationsComponent {
  public resourcesAdres: string = 'location';
  public componentName: string = 'Локации';
  public childComponent: string = 'locationCard';

  public filterFormData = [
    {
      label: 'name',
      type: 'input',
    },
    {
      label: 'type',
      type: 'select',
      options: [
        '',
        '1',
        '2',
        'Unknown'
      ]
    },

    {
      label: 'dimension',
      type: 'select',
      options: [
        '',
        '1',
        '2',
        '3',
        'Unknown'
      ]
    }, 
  ];
}
