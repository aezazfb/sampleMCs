import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import KTComponents from '../theme-data/core/index';
import KTLayout from '../theme-data/app/layouts/demo1';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'testMC';
  @HostBinding('class') hostClass = '';

	ngAfterViewInit(): void {
		KTComponents.init();
		KTLayout.init();
	}

	ngOnInit(): void {
	}
}
