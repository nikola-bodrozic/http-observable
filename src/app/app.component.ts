import { Component } from '@angular/core';

@Component({
  selector: 'nb-root',
  template: `
      <h1 class="red">
        Welcome to {{title}}!
      </h1>
  `,
  styles: [`
      .red{
           color:red;
      }
  `]
})
export class AppComponent {
  title = 'nb';
}
