import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  theme: string = 'light'; // Default theme

  constructor() { }

  ngOnInit(): void {
    // Check the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
      document.body.classList.add(this.theme === 'dark' ? 'dark-mode' : '');
    }
  }

toggleTheme(): void {
  if (this.theme === 'light') {
    this.theme = 'dark';
    document.body.classList.add('dark-mode');
    console.log('Dark mode activated'); // Debugging message
  } else {
    this.theme = 'light';
    document.body.classList.remove('dark-mode');
    console.log('Light mode activated'); // Debugging message
  }
  // Save the theme preference in localStorage
  localStorage.setItem('theme', this.theme);
}
}
