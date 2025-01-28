import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.documentElement.style.setProperty('--primary', this.isDarkTheme ? '#6096B4' : '#2A2F4F');
    document.documentElement.style.setProperty('--secondary', this.isDarkTheme ? '#2A2F4F' : '#917FB3');
    document.documentElement.style.setProperty('--background', this.isDarkTheme ? '#FDE2F3' : '#ffffff');
  }
}