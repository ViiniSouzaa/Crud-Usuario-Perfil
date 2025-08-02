import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Perfil } from '../../../../core/models/perfil.model';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../../core/models/usuario.model';
import { PerfilService } from '../../../../core/services/perfil.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-usuarios-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './usuarios-form.html',
  styleUrl: './usuarios-form.scss'
})
export class UsuariosFormComponent implements OnInit {
  perfis: Perfil[] = []; 
  isEdit: boolean = false;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private usuarioService = inject(UsuarioService);
  private perfilService = inject(PerfilService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);  

  form: FormGroup = this.fb.group({
    id: [null],
    nome: ['', [Validators.required, Validators.minLength(10)]],
    perfis: [[], [Validators.required]],
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.usuarioService.getById(+id).subscribe(usuario => {
          this.form.patchValue({
            ...usuario,
            perfis: usuario.perfis.map(p => p.id)
          });
          this.isEdit = true;
        });
      }
    });
    this.perfilService.getAll().subscribe(perfis => {
      this.perfis = perfis;
      this.cdr.detectChanges();
    });
  }

  onSubmit() {
    const formValue = this.form.value;

    const usuario: Usuario = {
      ...formValue,
      perfis: formValue.perfis.map((id: number) => ({ id }))
    };

    if (usuario.id) {
      this.usuarioService.update(usuario.id, usuario).subscribe(() => this.router.navigate(['/usuarios']));
    } else {
      this.usuarioService.create(usuario).subscribe(() => this.router.navigate(['/usuarios']));
    }
  }
}
