import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  addToWishlist(id: number) {
    return this.http.post('http://localhost:3000/wishlist', id);
  }

  removeFromWishlist(id: number) {
    return this.http.delete('http://localhost:3000/wishlist/' + id);
  }
}
