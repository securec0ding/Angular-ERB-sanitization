import { Component } from '@angular/core';
import { WindowRef } from './../WindowRef';

@Component({
  selector: 'hello-name',
  template: `
    <div>
      <h3>
        Hello <span [innerHTML]="name"></span>
      </h3>
      <hr />
      <form >
        <label htmlFor="prompt">
          Say hello to:
        </label>
        <input
          #prompt
          type="text"
          value={{name}}
          (keyup)="updateName(prompt.value)"
        />
      </form>
    </div>
  `
})

export class AppComponent {
  name: string;

  constructor(private winRef: WindowRef) {
    this.name = winRef.nativeWindow.__name__;
  }

  updateName(newName) {
    this.name = newName;
  }
}
