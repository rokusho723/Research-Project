import { Component, ViewChild, inject, ElementRef, OnInit, OnDestroy } from '@angular/core';

import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { AsyncPipe } from "@angular/common";
import { LiveAnnouncer } from "@angular/cdk/a11y";

import { DataService as _tagList } from '../../services/sharedData/data.service';
import { BlogData as _blogModel } from "../../models/blog-data.model";
//import { PostBlogService as _dbService } from "./create-post-service/post-blog.service";
import { DatabasePullService as _dbService } from "../../services/firebase/database-requests.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  blog!: FormGroup;
  private currentDate:string = '';
  private tagList: string[] = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl('');
  filteredTags!: Observable<string[]>;
  tagGridList: string[] = ['#accessibility'];

  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor(
    private tagLoader:_tagList,
    private fb: FormBuilder,
    private db: _dbService){
  }
  ngOnInit(){
    this.currentDate = this.getDate();
    this.initializeAutocomplete();
    this.initializeForm();
  }
  ngOnDestroy(){
    this.unsubscriber();
  }

  unsubscriber(){
    this.filteredTags.subscribe().unsubscribe();
  }

  initializeAutocomplete(): void{
    this.tagList = this.tagLoader.getTags().sort();

    this.filteredTags = this.formCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.tagList.slice())),
    );
  }

  initializeForm(): void{
    this.blog = this.fb.group({
      name: ['', Validators.required],
      createDate: [this.currentDate],
      imgLink: [''],
      title: ['', Validators.required],
      content: ['', Validators.required],
      likes: [0],
      tags: this.fb.array(['accessibility'], [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }
  get name(){ return this.blog.get('name') }
  get createDate(){ return this.blog.get('createDate') }
  get imgLink(){ return this.blog.get('imgLink') }
  get title(){ return this.blog.get('title') }
  get content(){ return this.blog.get('content') }
  get likes(){ return this.blog.get('likes') }
  get tags(){ return this.blog.get('tags') as FormArray }
  resetForm(): void{
    this.initializeForm();
  }
  formSubmit(): void{
    // submiting form data
    if(this.blog.valid){
      this.db.addBlog(this.blog.value);
      console.log(this.blog.value)
      this.announcer.announce("Blog Posted");
    }
  }

  addTag(event: MatChipInputEvent): void {
    const userTagInput = (event.value || '').trim();

    if (
      this.tagList.some(tag => tag.toLowerCase().includes(userTagInput.toLowerCase()))
      && !this.tagGridList.some(tag => tag.toLowerCase().includes(userTagInput.toLowerCase()))
    ) {
      const value = this.tagList.find(tag=>tag.toLowerCase() === userTagInput.toLowerCase());
      this.tagGridList.push('#'+value);
      this.tags.push(this.createFormTag(value!));

      this.announcer.announce(`Added ${value}`);
    }
    // Clear the input value
    event.chipInput!.clear();
    this.formCtrl.setValue(null);
  }
  createFormTag(tagName: string){
    return this.fb.control( tagName, Validators.required );
  }
  removeTag(tag: string): void {
    const index = this.tagGridList.indexOf(tag);

    if (index >= 0) {
      this.tagGridList.splice(index, 1);
      this.tags.removeAt(index);
      this.announcer.announce(`Removed ${tag}`);
    }
  }
  selectedTag(event: MatAutocompleteSelectedEvent): void {
    const viewValue = event.option.viewValue;
    const value = event.option.value;
    if (viewValue && !this.tagGridList.includes(viewValue)) {
      this.tagGridList.push(viewValue);
      this.tags.push(this.createFormTag(value));

      this.announcer.announce(`Added ${value}`);
    }
    // Clear input value
    this.tagInput.nativeElement.value = '';
    this.formCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tagList.filter(tag => tag.toLowerCase().includes(filterValue));
  }
  getDate():string{

    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = this.getMonthName(today.getMonth());
    const year = today.getFullYear();
    return `${month} ${day}, ${year}`;
  }
  getMonthName(monthIndex: number):string{
    const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December',
    ];
    return monthNames[monthIndex];
  }
}
