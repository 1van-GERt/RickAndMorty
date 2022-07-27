import { Component,
          OnInit,
         Input } from '@angular/core';
import { MaterialModule } from "../../modules/MaterialModule";
import { CharactersServise } from "../../servises/characters.servise";
import {	FormGroup,
          FormControl,
          FormArray,
          FormBuilder} from '@angular/forms';



@Component({
  selector: 'outputList',
  templateUrl: 'outputList.component.html',
  styleUrls: ['outputList.component.scss']
})

export class OutputListComponent implements OnInit {
  @Input() filterData!: Array<any> ;
  @Input() componentName!: string;
  @Input() resourcesAdres!: string;
  @Input() childComponent!: string; 

  public filterForm!: FormGroup;
  public itemList: Array<any> = [];
  public loadCount!: number;
  public loadProgressValue!: number;

  public pageStart: number = 1;
  public pageMax!: number;
  public pageNumber!: number; 

  public filterStatys: string='';
  public showFiller:boolean = false;

  public inFloat: boolean = false;
  public showFilter: boolean = !false

  
  constructor(
    private charactersServise: CharactersServise,
  ){}

  ngOnInit(){
    console.log(this.childComponent)
    this.pageNumber = this.pageStart;
    this.getCharacters();

    this.setFilterForm(this.filterData);
  }

  setFilterForm(arr:any){
    let group:any ={};
    arr.forEach((item:any) => {
      group[item.label] = new FormControl('')
    })
    this.filterForm = new FormGroup( group) ;
  }

  setPageNumber(){
    this.pageNumber = ++this.pageNumber;
    this.getCharacters();
    this.setLoadProgressValue();
  }
 
  setLoadProgressValue(){
    this.loadProgressValue =  (this.pageNumber * 20) / this.loadCount * 100;
  }



  setFilterStatys(){
    this.itemList = [];
    this.pageNumber = 1;
    this.filterStatys = '';
    for(let key in this.filterForm.controls){
      if(this.filterForm.controls[key].value !== ''){
        this.filterStatys = this.filterStatys + ('&' + key + '=' + this.filterForm.controls[key].value);
      }     
    }
    this.getCharacters();
    
  }

  getCharacters(){   
    this.charactersServise.getCharacters(this.pageNumber, this.filterStatys, this.resourcesAdres).subscribe(value => {
      
      this.itemList = this.itemList.concat(value.results);  
      this.loadCount = value.info.count;
      this.pageMax = value.info.pages;
      this.setLoadProgressValue(); 
     
    })
  }

  showSidenav(){
    this.showFilter = !this.showFilter;
    console.log('showFilter',this.showFilter)
  }

  setInFloat(bntValue: boolean){
    this.inFloat = bntValue;
  }

}
