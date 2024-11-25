import { AfterViewInit, Component, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import store from 'store2';
import KTComponents from 'theme-data/core';
import KTLayout from 'theme-data/app/layouts/demo1';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchModalComponent } from 'src/app/partials/search-modal/search-modal.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, SearchModalComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements AfterViewInit, OnInit {

  constructor(private router: Router, private renderer: Renderer2){}

  title = 'testMC';
  @HostBinding('class') hostClass = 'flex grow';

	ngAfterViewInit(): void {
		KTComponents.init();
		KTLayout.init();
	}

	ngOnInit(): void {
    this.AddBasicClasses();
	}
  
  logMe(){
    console.log("WOrking.");
    store.remove('token');
    const token = store('token');
    console.log('Token after removal:', token); 
    this.router.navigateByUrl('/login');
  }
  AddBasicClasses(){
    this.renderer.addClass(document.body, 'antialiased');
    this.renderer.addClass(document.body, 'flex');
    this.renderer.addClass(document.body, 'h-full');
    this.renderer.addClass(document.body, 'demo1');
    this.renderer.addClass(document.body, 'sidebar-fixed');
    this.renderer.addClass(document.body, 'header-fixed');
    this.renderer.addClass(document.body, 'bg-[#fefefe]');
    this.renderer.addClass(document.body, 'dark:bg-coal-500');
  }
}
