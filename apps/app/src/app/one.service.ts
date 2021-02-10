import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OneService {
  get myGetter() {
    return 'bla';
  }
}
