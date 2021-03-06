import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
    items: MenuItem[];

    home: MenuItem;

    ngOnInit():void {
        this.items = [
            {label:'Categories'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi', icon: 'pi pi-external-link'}
        ];
        
        this.home = {icon: 'pi pi-home', "routerLink":"/", routerLinkActiveOptions:'active-linksssss'};
    }
    

}
