import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { User } from '../user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  formData: any;
  formProps: any = [];
  sendStatus: string;

  constructor(private fs: FormService,
              private fb: FormBuilder,
              private ds: DataService,
              private router: Router) {

  }

  ngOnInit() {
    const formData = {};
    this.formData = this.fs.getFormData();
    for (const prop of Object.keys(this.formData)) {
      if (this.formData[prop].array) {
        formData[prop] = new FormArray([
          new FormControl(this.formData[prop].value, this.mapValidator(this.formData[prop].validators))
        ]);
      } else {
        formData[prop] = new FormControl(this.formData[prop].value, this.mapValidator(this.formData[prop].validators));
      }

      this.formProps.push({
        key: prop,
        label: this.formData[prop].label,
        value: this.formData[prop].value,
        type: this.formData[prop].type,
        options: this.formData[prop].options,
        dependency: this.formData[prop].dependency,
        array: this.formData[prop].array
      });
      this.myForm = this.fb.group(formData);
    }
  }
  mapValidator(validators) {
    if (validators) {
      return Object.keys(validators).map(validationType => {
        if (validationType === 'required') {
          return Validators.required;
        } else if (validationType === 'email') {
          return Validators.pattern(/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/);
        }
      });
    } else { return []; }
  }
  submit() {
    const sendObj = [];
    for(const control of Object.keys(this.myForm.controls)) {
      sendObj.push(this.myForm.controls[control].value);
    }
    if (this.myForm.valid){
      this.ds.addUser(sendObj[0], sendObj[1], sendObj[2], sendObj[4], sendObj[5], sendObj[6], sendObj[7]);
      this.sendStatus = 'Успешно зарегестрированы';
      setTimeout(() => {
        this.goHome();
      }, 1000);
    } else { this.sendStatus = 'Заполните все поля'; }
  }
  goHome(){
    this.router.navigate(['/login']);
  }
  isDependent(dependent: any): boolean {
    if (dependent) {
      return dependent.value === this.myForm.controls[dependent.field].value;
    } else { return true; }
  }
  addContact(arrayField) {
    (<FormArray>this.myForm.get([arrayField])).push(
      new FormControl(this.formData[arrayField].value, this.mapValidator(this.formData[arrayField].validators))
    );
  }
  removeControl($event) {
    (<FormArray>this.myForm.get([$event.arrayField])).removeAt($event.i);
  }
}
