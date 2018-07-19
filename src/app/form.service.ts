import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formData = {
    firstname: {
      type: 'text',
      value: 'Гоша',
      label: 'Ваше имя',
      validators: {
        required: true
      }
    },
    lastname: {
      type: 'text',
      value: 'Дударь',
      label: 'Ваша фамилия',
      validators: {
        required: true
      }
    },
    password: {
      type: 'password',
      value: '123456',
      label: 'Пароль',
      validators: {
        required: true
      }
    },
    passwordRepeat: {
      type: 'password',
      value: '123457',
      label: 'Повторите пароль',
      validators: {
        required: true
      }
    },
    phone: {
      type: 'number',
      value: '38',
      label: 'Телефон',
      array: 'phone',
      validators: {
        required: true
      }
    },
    email: {
      type: 'email',
      value: 'goshaDudka228@gmail.com',
      label: 'Email',
      validators: {
        email: true,
        required: true
      }
    },
    userType: {
      type: 'radio',
      value: 'rent',
      label: 'Я хочу',
      options: [
        { label: 'снять жилье', value: 'rent' },
        { label: 'сдать жилье', value: 'surrender' }
      ],
      validators: {
        required: true
      }
    },
    city: {
      type: 'select',
      value: 'ki',
      label: 'Город',
      options: [
        { label: 'Киев', value: 'ki' },
        { label: 'Полтава', value: 'pl'}
      ],
      validators: {
        required: true
      }
    }
  };
  constructor() { }

  getFormData(){
    return this.formData;
  }
}
