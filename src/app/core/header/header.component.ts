import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Router, ActivatedRouteSnapshot, RouterLink } from '@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent  implements OnInit {

  user$: Observable<User>;
  constructor(private userService: UserService,
              private router: Router) {
    this.user$ = this.userService.getUser();
  }

  ngOnInit(): void {

   }

   logout(){
     this.userService.logout();
     this.router.navigate(['']);
   }

}
