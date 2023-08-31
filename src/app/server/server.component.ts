import { Component, Input } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color: white;
  }
`]
})
export class ServerComponent {
  @Input() special:any;
  serverId: number = 10;
  serverStatus: string = 'offline';
  use:any;
  
  
  karthi=false;


  constructor(public car:CarService) {
    // this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  
      this.car.updateUser(3,{ id:4, name: 'santhosh' },);
      this.use=this.car.users[2]
      // console.log(this.use)
  
      // const updatedData = { name: 'Updated Name', age: 30 };
      // car.updateUser(2, updatedData); // Assuming userService is an instance of the service containing the updateUser method
      
  }

  
    
  

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
