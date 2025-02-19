import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "black-dashboard-angular";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange(event);
      }
    });
  }

  onRouteChange(event: NavigationEnd): void {
    // Llama a la función que deseas ejecutar en cada cambio de ruta
    //this.globalFunction();
  }

  globalFunction(): void {
    //console.log('La ruta ha cambiado:', this.router.url);
    // Aquí puedes poner la lógica que deseas ejecutar en cada cambio de ruta
    const navbar = document.getElementsByTagName("nav")[0];
    const mainNav = document.getElementById("navigation");

    if (navbar) {
      navbar.classList.add("navbar-transparent");
      navbar.classList.remove("bg-white");
    }
    if (mainNav) {
      mainNav.classList.remove("show");
    }
  }
}
