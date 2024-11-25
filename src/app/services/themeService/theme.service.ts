import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private darkModeClass = 'dark';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
   }

   enableDarkMode(): void {
    this.renderer.addClass(document.body, this.darkModeClass);
  }

  disableDarkMode(): void {
    this.renderer.removeClass(document.body, this.darkModeClass);
  }

  // toggleDarkMode(): void {
  //   if (document.body.classList.contains(this.darkModeClass)) {
  //     this.disableDarkMode();
  //   } else {
  //     this.enableDarkMode();
  //   }
  // }

  toggleDarkMode(): void {
    const darkModeClass = this.darkModeClass;
    console.log("Working!");
    if (document.body.classList.contains(darkModeClass)) {
      this.disableDarkMode();
      localStorage.setItem('theme', 'light');
    } else {
      this.enableDarkMode();
      localStorage.setItem('theme', 'dark');
    }
  }
  
  loadUserPreference(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }
}
