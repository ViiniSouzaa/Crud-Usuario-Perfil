import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { Usuario } from '../../../core/models/usuario.model';
import { UsuarioService } from '../../../core/services/usuario.service';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'usuario-list.component',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit, OnDestroy {

  usuarios: Usuario[] = [];
  private subscription?: Subscription;

  
    private usuarioService = inject( UsuarioService);
    private router = inject(Router);
    private cdr = inject(ChangeDetectorRef);  

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
  this.usuarioService.getAll().subscribe(usuarios => {
    this.usuarios = usuarios;
    this.cdr.detectChanges();
  });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  confirmarExclusao(id: number): void {
    const confirmado = window.confirm('Tem certeza que deseja excluir este usuário?');
    if (confirmado) {
      this.usuarioService.delete(id).subscribe(() => {
        this.carregarUsuarios(); // Atualiza a lista
      });
    }
  }
}
