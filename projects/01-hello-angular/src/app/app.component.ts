import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Hello, {{ userName }}! If you are reading this...</h1> 
    <!-- interpolation: ^ variable into template -->
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li> I Know Things Now from Into the Woods</li>
      <li> Station Eleven by Emily St. James Mandel</li>
      <li> Twilight </li>
    </ol>
  `,
  styles: `
    ol {
      list-style-type: upper-roman;
    }
  `,
})
export class AppComponent {
  // define properties within the class component
  userName = 'codingChamp';
}
