import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeName } from 'src/app/enums/type-name';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  transaction: Transaction = {
    type: TypeName.Entrace,
    value: 0,
    description: '',
    createdAt: new Date()
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      type: ['', [Validators.required, Validators.minLength(3)]],
      value: ['', [Validators.required, Validators.email]],
      description: [''],
      createdAt: ['']
    });
   }

  ngOnInit(): void {
  }

  cadastrarTransacao(): void {
    alert('cadastrado!');
  }

  formataData(): void {
    let data = new Date(this.transaction.createdAt);
    this.transaction.createdAt = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }
}
