import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-website';
  isDarkTheme = false;
  data$!: Observable<string>;
  data1$!: Promise<string>;
  newObservable!: Observable<string>;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const themeClass = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.className = themeClass;
  }

  constructor(){
    this.data$ = new Observable((subscriber) => {
      setInterval(() =>{
        subscriber.next(new Date().toString());
      }, 2000);
    });

    this.data1$ = new Promise((resolve, reject) =>{
      resolve(new Date().toString());
      reject(null);
    })

    // this.greet('Omkar', this.afterGreet);
  }

  ngOnInit(){
    this.newObservable = new Observable((subscriber) =>{
      subscriber.next(new Date().toString());
    })

    this.newObservable.subscribe({
      next(x){
        console.log(x);
      },
      error(err){
        console.error(err);
      },
      complete() {
        console.log('done')
      },
      
    })

    this.greet('Omkar', this.afterGreet);

  }

  //CallBack Example
  
  greet(name:string, CallBack:() => void){
    console.log('This is called first');
    CallBack();
  }

  afterGreet(){
    console.log('This is called later');
  }

  
}


