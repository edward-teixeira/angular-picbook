import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {
  constructor(private signupService: SignUpService) { }

  checkUsernameTaken() {
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName => {
          return this.signupService.checkUserNameTaken(userName);
        }))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true} : null))
        .pipe(first());
    }
  }

}