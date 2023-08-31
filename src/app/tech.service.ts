import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor() { }
  private data: string[] = [];

addToData(item: string) {
  this.data.push(item);
}

getData(): string[] {
  return this.data;
}
}
