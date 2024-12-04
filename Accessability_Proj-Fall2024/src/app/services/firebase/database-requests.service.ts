import { Injectable, inject } from '@angular/core';
import { Observable } from "rxjs";

import { BlogData } from "../../models/blog-data.model";

import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentReference } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class DatabasePullService {

  private firestore:Firestore = inject(Firestore);
  blogs$: Observable<BlogData[]>
  blogCollection: CollectionReference;

  // initialize Firestore, scalable NoSQL database
  constructor() {
    this.blogCollection = collection(this.firestore, 'blogs');

    this.blogs$ = collectionData(this.blogCollection) as Observable<BlogData[]>;
  }
  addBlog(newBlog:BlogData){
    addDoc(this.blogCollection, newBlog)
    .then((documentReference:DocumentReference)=>{
      console.log(documentReference);
    });
  }
}
