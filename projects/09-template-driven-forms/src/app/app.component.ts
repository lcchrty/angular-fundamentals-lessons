import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
         <input type="text" id="title" [(ngModel)]="title" required />

        <label for="body">Post Body</label>
        <!-- add the textarea -->
         <input type="textarea" id="body" [(ngModel)]="body" />
      </section>
      <section>
        <p> {{title}}</p>
        <p> {{body}}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  // title = '09-template-driven-forms';
  title = "";
  body = "";

}
