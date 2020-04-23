import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ownerMenu: MenuItem[];
  driverMenu: MenuItem[];

    ngOnInit():void {
      this.ownerMenu = [
            
            
          { label: 'Dashboard', "routerLink": "/",},
          { label: 'Driver', 
            // icon: 'pi pi-fw pi-pencil',
            items: [
                { label: 'Create', "routerLink": "/create-driver",/*icon: 'pi pi-fw pi-save'*/},
                { label: 'List', "routerLink": "/driver",/*icon: 'pi pi-fw pi-save'*/},
            ]
          },
          { label: 'Report',"routerLink": "/report",},
          
      ];

      this.driverMenu = [
            
          { label: 'Dashboard', "routerLink": "/driver-dashboard",},
          { label: 'Report', 
            items: [
                { label: 'Create', "routerLink": "/driver-create-report",},
                { label: 'List', "routerLink": "/driver-view-report",},
            ]
          },
          { label: 'My Profile',"routerLink": "/driver-view",},
          
      ]
            
    }

}
