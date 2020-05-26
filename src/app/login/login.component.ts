import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup
  datosCorrectos:boolean=true;


  constructor(private creadorFormulario: FormBuilder, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formularioLogin = this.creadorFormulario.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],

      password: ['', Validators.required]

    });
  }

  ingresar(){
    if (this.formularioLogin.valid){
      this.datosCorrectos=true;
      this.spinner.show();
    }
    else{
      this.datosCorrectos=false;
    }
  }

}
