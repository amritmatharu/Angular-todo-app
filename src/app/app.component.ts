import { Component } from '@angular/core';
import { Item } from './interface/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';//The filter property is of type union & it could have value-all, active, or done.

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>{
      return  this.filter === 'done' ? item.done : !item.done
    });
  }

}