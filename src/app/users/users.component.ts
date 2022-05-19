import { Component, OnInit } from '@angular/core';
import { ButtonSettings, Column, Row, TableEvent, User } from '../interfaces/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Row<User>[] = [
  {
    values: {
      uid: '11110023',
      email: 'jorge@gmail.com',
      password: '123456',
      permissionsLevel: '1',
      isActive: true
    }
  },
  {
    values:  {
      uid: '11110024',
      email: 'Jhon@gmail.com',
      password: '123456',
      permissionsLevel: '1',
      isActive: true
    }
  },
  {
    values: {
      uid: '11110025',
      email: 'Jen23@gmail.com',
      password: '123456',
      permissionsLevel: '2',
      isActive: true
    }
  },
  {
    values: {
      uid: '11110026',
      email: 'maxPower@gmail.com',
      password: '123456',
      permissionsLevel: '1',
      isActive: false
    }
  },
  {
    values: {
      uid: '11110027',
      email: 'willSmith@gmail.com',
      password: '123456',
      permissionsLevel: '2',
      isActive: true
    }
  }        
  ];

  usersColumns: Column<User>[] = [
    { name: 'uid', title: 'UID' },
    { name: 'email', title: 'Email' },
    { name: 'password', title: 'Password' },
    { name: 'permissionsLevel', title: 'Permisos' },
    { name: 'isActive', title: 'Activo?' }
  ];

  /**
   * Title and icon are optional
   * but is convenient have one
   */
  buttons: ButtonSettings[] = [
    {
      class: 'p-button-info mr-2',
      functionType: 'edit',
      icon: 'pi pi-pencil'
    },
    {
      class: 'p-button-danger mr-2',
      functionType: 'delete',
      icon: 'pi pi-trash'
    },
    {
      class: 'p-button-secondary',
      functionType: 'show',
      icon: 'pi pi-search'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getTableEvent($event: TableEvent<User>) {
    switch ($event.type) {
      case 'edit':
        this.openUpdate($event.data);
        break;
      case 'delete':
        this.openDelete($event.data);
        break;
      case 'show':
        this.openDetails($event.data);
        break;
    }
  }

  openUpdate(user: User){ console.log('Usuario editado'); }

  openDelete(user: User) { console.log('Usuario eliminado'); }

  openDetails(user: User) { console.log('Detalles de usuario'); }
}
