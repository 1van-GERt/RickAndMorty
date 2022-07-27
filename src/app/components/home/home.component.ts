import { Component } from '@angular/core';
import { MaterialModule } from "../../modules/MaterialModule";



@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent {
  public showFiller = false;
}
