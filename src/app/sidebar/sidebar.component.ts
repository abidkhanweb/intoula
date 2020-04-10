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
            
            
          {label: 'Dashboard', "routerLink": "/",},
          {label: 'Driver', "routerLink": "/driver",
            // icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Create', "routerLink": "/create-driver",/*icon: 'pi pi-fw pi-save'*/},
                {label: 'List', "routerLink": "/driver",/*icon: 'pi pi-fw pi-save'*/},
            ]
          },
          { label: 'Report',"routerLink": "/report",},
          
      ]
            
    }

}
