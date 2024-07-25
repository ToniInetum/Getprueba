import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private fileTmp:any //Variable creada que irá debajo
  text = [];

  constructor(private restService: RestService){ // TODO esto es inyect
    

    //   this.restService.recibir().subscribe({
    //     next: (data) => {
    //       console.log(data)
    //       this.text= data
    //   }
    // });
  }

  getFile($event: any): void{
    //TODO esto captura el archivo
    const[ file ] = $event.target.files;
    this.fileTmp={
      fileRaw:file, //fileRaw es la archivo puro
      fileName:file.name
    }
  }
  sendFile():void{

    const body = new FormData();
    body.append('myFile',this.fileTmp.fileRaw, this.fileTmp.fileName)
    body.append('email','test@test.com')
    this.restService.sendPost(body)
    .subscribe(res => console.log(res))
  }
  
  recibirInfo(){
    this.restService.recibir().subscribe({
      next: (data) => {
        console.log(data)
        this.text= data
    }
  });
  }
  
}

