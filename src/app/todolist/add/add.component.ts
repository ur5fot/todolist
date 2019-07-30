import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../store/store.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  todoText: FormControl;

  constructor(private store: StoreService, private fb: FormBuilder) {
    this.todoText = this.fb.control( '', [Validators.minLength(3)]);
  }

  ngOnInit() {}

  creatingTodo() {
    if (this.todoText.invalid) {
      this.todoText.markAsTouched();
      return;
    }
    this.store.addingTodo({text: this.todoText.value});
    this.todoText.markAsUntouched();
    this.todoText.setValue('');
  }
}
