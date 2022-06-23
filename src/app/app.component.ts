import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-toast';
  constructor(private toastr: ToastrService){  }

  //You can set any of the toast characteristics that aren't "style" related when you call the toast - or you can also register global toast characteristics in the app.module.js
  //See the documentation for all the options:  https://www.npmjs.com/package/ngx-toastr

  yay(){
    this.toastr.success("I did it!", "Yay!", {timeOut: 2000})
  }
   
  boo(){
    this.toastr.error("I couldn't do it!", "Error", {timeOut: 5000})
  }
   
  info(){
    this.toastr.info("You should know that...", "Info")
  }
   
 warning(msg: string){
    this.toastr.warning(msg, "Warning")
  }
}
