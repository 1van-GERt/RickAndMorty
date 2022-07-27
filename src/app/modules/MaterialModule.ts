import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
    imports: [],
    declarations: [],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatProgressBarModule
        
    ]
})


export class MaterialModule {
}
