import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';
import { TokenService } from '../../core/token/token.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
    ) {}

    ngOnInit(): void {
      this.platformDetectorService.isPlatformBrowser() &&
      this.userNameInput.nativeElement.focus();
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const { userName, password } = this.loginForm.value;
        this.authService.authenticate(userName, password)
            .subscribe(
            (res) => {
                //usuario autenticado
                //navega para as fotos do usuario
                this.router.navigate(['user/', userName]);
            },
            (error) => {
                 //ocorreu um erro na autenticação
                 this.loginForm.reset();
            });
    }

 }
