import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

    ngOnInit():void {
        this.items = [
            
            
          {label: 'Dashboard'},
          {
            label: 'Driver',
            // icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Create', /*icon: 'pi pi-fw pi-save'*/},
                {label: 'List', /*icon: 'pi pi-fw pi-save'*/},
            ]
          },
          { label: 'Report'},
          
      ]
            
    }

}
