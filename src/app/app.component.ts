import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup;

  isGenderMale = true;
  isGenderFemale = true;

  viewArray = [];
  dataArray = [];
  femaleArray = [];
  maleArray = [];

  constructor(public fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      gender: ''
    });
  }

  checkMale(value) {
    console.log(value);
    this.isGenderMale = value;
    this.filterOnGender();
  }

  checkFemale(value) {
    console.log(value);
    this.isGenderFemale = value;
    this.filterOnGender();
  }

  filterOnGender() {
    if (this.dataArray && this.dataArray.length != 0) {
      if (this.isGenderMale && !this.isGenderFemale) {
        this.viewArray = this.dataArray.filter(a => {
          a.gender = 'male';
        });
        console.log(this.viewArray);
      } else if (this.isGenderFemale && !this.isGenderMale) {
        this.viewArray = this.dataArray.filter(a => {
          a.gender = 'female';
        });
        console.log(this.viewArray);
      } else {
        this.viewArray = this.dataArray;
        console.log(this.viewArray);
      }
    }
  }

  checkMethod(value) {
    console.log(value);
  }

  onSubmit(value) {
    this.dataArray.push(value);
    this.viewArray.push(value);
    console.log(this.dataArray);
  }

  firstNameSort(list) {
    list.sort((a, b) => {
      if (a.firstName > b.firstName) return 1;
      else if (a.firstName < b.firstName) return -1;
    });
  }

  lastNameSort(list) {
    list.sort((a, b) => {
      if (a.lastName > b.lastName) return 1;
      else if (a.lastName < b.lastName) return -1;
    });
  }
}
