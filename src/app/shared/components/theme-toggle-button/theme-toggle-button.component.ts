import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-theme-toggle-button',
  templateUrl: './theme-toggle-button.component.html',
  styles: [
  ]
})
export class ThemeToggleButtonComponent implements OnInit {
  @Input()
  backgroundColor = 'bg-slate-200 dark:bg-slate-800';
  @Input()
  iconColor = 'text-slate-800 dark:text-slate-200';
  @Input()
  selectedIconColor = 'bg-slate-700 dark:bg-slate-500';


  currentTheme: 'dark' | 'light' = 'light';

  ngOnInit(): void {
    const themePreference = this.themePreference;
    if (themePreference) {
      this.currentTheme = themePreference as 'dark' | 'light';
    }
    this.changeThemePreference();
  }

  show(element: any) {
    this.currentTheme = element.checked ? 'dark' : 'light';
    this.saveThemePreference();
    this.changeThemePreference();
  }

  saveThemePreference() {
    localStorage.setItem('theme', this.currentTheme);
  }

  get themePreference(): string | null {
    return localStorage.getItem('theme');
  }

  changeThemePreference() {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }
}
