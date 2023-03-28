import {Phones} from "./app/shared/models/phones";
import { Tag } from "./app/shared/Tags";

export const sample_phones: Phones[] = [
  {
    id: '1',
    name: 'Samsung S21 ultra',
    price: 394,
    tags: ['Samsung','5G'],
    favourite: false,
    stars: 4.0,
    imageUrl: 'assets/s21.jpg',
    origins: ['Vietnam'],
  },
  {
    id: '2',
    name: 'Samsung S22 ultra',
    price: 930,
    tags: ['Samsung','5G','RAM'],
    favourite: false,
    stars: 3.0,
    imageUrl: 'assets/s22.jpg',
    origins: ['Vietnam'],
  },
  {
    id: '3',
    name: 'Samsung Z fold2',
    price: 450,
    tags: ['Samsung','5G','Fold'],
    favourite: true,
    stars: 3.0,
    imageUrl: 'assets/s21.jpg',
    origins: ['Vietnam'],
  },
  {
    id: '4',
    name: 'Samsung Galaxy Note10',
    price: 350,
    tags: ['Samsung','Note','Galaxy'],
    favourite: false,
    stars: 3.0,
    imageUrl: 'assets/note10.jpg',
    origins: ['Vietnam'],
  },
  {
    id: '5',
    name: 'Samsung Galaxy Note20 Ultra',
    price: 430,
    tags: ['Samsung','Note','Galaxy'],
    favourite: true,
    stars: 2.0,
    imageUrl: 'assets/note20.jpg',
    origins: ['Vietnam'],
  },
  {
    id: '6',
    name: 'Samsung Galaxy Note22 Ultra',
    price: 920,
    tags: ['Samsung','5G','Note','Galaxy'],
    favourite: false,
    stars: 5.0,
    imageUrl: 'assets/note22.jpg',
    origins: ['Vietnam'],
  },
]

export const sample_tags:Tag[] = [
  {name:'All',count:6},
  {name:'Samsung',count:6},
  {name:'5G',count:4},
  {name:'Note',count:3},
  {name:'RAM',count:1},
  {name:'Fold',count:1},
  {name:'Galaxy',count:3},

]
