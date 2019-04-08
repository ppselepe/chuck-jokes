import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { SelectItem } from 'primeng/api';

import { JokeService } from '../../services/joke.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-joke-category',
  templateUrl: './joke-category.component.html',
  styleUrls: ['./joke-category.component.css']
})
export class JokeCategoryComponent implements OnInit {

  public category:Category = new Category();
  private categories: Array<any> = [];
  private selectedCategory: string;

  /*
   * Create an instance of JokeCategoryComponent
   * @Param {JokeService} the instance of the JokeService being iinjected
   * @Param {NgxSpinnerService} the instance of the NgxSpinnerService being iinjected
   */
  constructor(
    private jokeService: JokeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getJokeCategory();
  }

  /*
   *
   */
  getJokeCategory() {
    this.spinner.show();

    this.jokeService.getCategory().subscribe((data) => {
    //  data.forEach(cat =>{
      //  this.categories.push(cat);
      //});
      //return this.categories
      this.categories = data;
    },  (error) => {

      },() => {
          

      })
      this.spinner.hide();
  }

  /*
   * Event list for dropn down on change
   */
  public onChange(value:string): void {
      if (value) {
        let selectedCategory = value;
        this.getJoke(selectedCategory);
      }
  }

  private getJoke(selectedValue? :string): void {
    this.jokeService.getJoke(selectedValue)
      .subscribe((category:Category) =>{
        this.category = category;
      })
  }

}
