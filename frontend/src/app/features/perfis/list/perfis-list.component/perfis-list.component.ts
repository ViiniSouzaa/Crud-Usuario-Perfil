import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PerfilService } from '../../../../core/services/perfil.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfis-list.component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './perfis-list.component.html',
  styleUrl: './perfis-list.component.scss'
})
export class PerfisListComponent implements OnInit {
  private perfilService = inject(PerfilService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); 

  perfis: any[] = [];

  ngOnInit(): void {
    this.carregarPerfis();
    
  }

  carregarPerfis(): void {
    this.perfilService.getAll().subscribe(data => {
      this.perfis = data;
      this.cdr.detectChanges(); 
    });
  }

  confirmarExclusao(id: number): void {
    if (window.confirm('Deseja realmente excluir este perfil?')) {
      this.perfilService.delete(id).subscribe(() => {
        this.carregarPerfis();
      });
    }
  }
}
