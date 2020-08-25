import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dragdropcolumn',
  templateUrl: './dragdropcolumn.component.html',
  styleUrls: ['./dragdropcolumn.component.css']
})
export class DragdropcolumnComponent implements OnInit {
  dataSource: any;
  
  displayedColumns = ['id', 'name', 'age', 'gender', 'country'];
  rows = [
    {
      id: '1',
      name: 'John',
      age: '21',
      gender: 'Male',
      country: 'UK'
    },
    {
      id: '2',
      name: 'Robin',
      age: '25',
      gender: 'Male',
      country: 'London'
    },
    {
      id: '3',
      name: 'Robert',
      age: '12',
      gender: 'Male',
      country: 'Dubai'
    },
    {
      id: '4',
      name: 'Neeraj',
      age: '23',
      gender: 'Male',
      country: 'India'
    },
    {
      id: '5',
      name: 'Wiliiams',
      age: '30',
      gender: 'Male',
      country: 'Ausralia'
    },
    {
      id: '6',
      name: 'ChinZee',
      age: '25',
      gender: 'Female',
      country: 'China'
    },
    {
      id: '7',
      name: 'Renee',
      age: '12',
      gender: 'Female',
      country: 'Canada'
    },
    {
      id: '8',
      name: 'Putin',
      age: '24',
      gender: 'Female',
      country: 'France'
    },
    {
      id: '9',
      name: 'Kalki',
      age: '29',
      gender: 'Female',
      country: 'Jambia'
    },
    {
      id: '10',
      name: 'Dev',
      age: '25',
      gender: 'Male',
      country: 'Newzeland'
    },
  
  ];
  
  columns: any[] = [
    {
      name: 'id',
      title: 'No.'
    },
    {
      name: 'name',
      title: 'Name'
    },
    {
      name: 'age',
      title: 'Age'
    },
    {
      name: 'gender',
      title: 'Gender'
    },
    {
      name: 'country',
      title: 'Country'
    }
  ];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.rows);
  }
    tableDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }
}



