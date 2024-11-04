import { Component, inject } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { Observable } from "rxjs";

import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Firestore, collection, collectionData } from "@angular/fire/firestore";

import { NavBarModule } from "./components/nav-bar/nav-bar.module";
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    MatSidenavModule,
    NavBarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Accessability_Proj-Fall2024';
  /*
  // initialize Firestore, scalable NoSQL database
  private firestore: Firestore = inject(Firestore);

  // setting up object to hold Firestore items
  items$: Observable<any[]>;
  */
  constructor() {
    /*
    // Firestore data path structured as <collection_name>/<document_id> continuing for any subcollections
    const aCollection = collection(this.firestore, 'items');

    // collectionData retuns an observable that can be used to display data
    this.items$ = collectionData(aCollection);
    */
  }
}
