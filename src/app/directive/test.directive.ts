import { Directive,ElementRef, HostListener } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';



@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  
  constructor(private el:ElementRef, private router:Router, private activatedRoute:ActivatedRoute) {
    console.log(el.nativeElement);
    //el.nativeElement.style.color="red";
  }

  @HostListener('click') onDelete(){
    //alert();
    //this.el.nativeElement.style.color="yellow";
    //this.router.navigateByUrl('driver-view');
  }

}
