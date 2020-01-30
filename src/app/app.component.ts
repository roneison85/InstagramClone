import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'InstagramClone';

  ngOnInit(): void {
    var firebaseConfig = {
      apiKey: "AIzaSyAS4LW0n8UFp43Hm2ogpLR6rQDSSvbGZ_0",
      authDomain: "jta-instagram-clone-22284.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-22284.firebaseio.com",
      projectId: "jta-instagram-clone-22284",
      storageBucket: "jta-instagram-clone-22284.appspot.com",
      messagingSenderId: "835758915386",
      appId: "1:835758915386:web:0881ced2dbd5dd53091a03",
      measurementId: "G-2NC33V4PV6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
