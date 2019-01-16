import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  enteredValue = 'Default Text';
  newPost = 'This to be changed';
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
