import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */

@Injectable()
export class User {
  user: any;

  // tslint:disable-next-line: no-shadowed-variable
  constructor() { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    // let seq = this.api.post('signup', accountInfo);//.share();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    // return seq;

    return of(accountInfo);
  }

  setPassword(pwdDetails: any) {

    console.log('new password is: ' + pwdDetails);

    return of(pwdDetails);

  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this.user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this.user = resp.user;
  }
}
