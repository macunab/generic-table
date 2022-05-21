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
    { field: 'uid', title: 'UID' },
    { field: 'email', title: 'Email' },
    { field: 'password', title: 'Password' },
    { field: 'permissionsLevel', title: 'Permisos' },
    { field: 'isActive', title: 'Activo?' }
  ];

  usersSearchFilters: string[] = ['values.email', 'values.permissionsLevel'];

  /**
   * Title and icon are optional
   * but is convenient have one
   */
  buttons: ButtonSettings[] = [
    {
      class: 'p-button-sm p-button-info p-button-rounded p-button-text mr-2',
      functionType: 'edit',
      icon: 'pi pi-pencil',
      tooltipText: 'Editar'
    },
    {
      class: 'p-button-sm p-button-danger p-button-rounded p-button-text mr-2',
      functionType: 'delete',
      icon: 'pi pi-trash',
      tooltipText: 'Eliminar'
    },
    {
      class: 'p-button-sm p-button-secondary p-button-rounded p-button-text',
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

  getAddEvent($event: boolean) {
    console.log(`El modal de agregar nuevo usuario se abre? : ${$event}`);
  }

  openUpdate(user: User){ console.log('Usuario editado'); }

  openDelete(user: User) { console.log('Usuario eliminado'); }

  openDetails(user: User) { console.log('Detalles de usuario'); }
}
