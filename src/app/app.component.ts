import { Component } from '@angular/core';

@Component({
  selector: 'nb-root',
  template: `
      <h1 class="red">
        Welcome to {{title}}!
      </h1>
      <nb-post></nb-post>
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
