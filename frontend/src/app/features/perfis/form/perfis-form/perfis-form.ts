import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PerfilService } from '../../../../core/services/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfis-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './perfis-form.html',
  styleUrl: './perfis-form.scss'
})
export class PerfisFormComponent implements OnInit {
  isEdit: boolean = false;

  private fb = inject(FormBuilder);
  private perfilService = inject(PerfilService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  form = this.fb.group({
    id: this.fb.control<number | null>(null),
    descricao: ['', [Validators.required, Validators.minLength(5)]],
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.perfilService.getById(+id).subscribe(perfil => {
        this.form.patchValue(perfil);
      });
    }
  }

  onSubmit(): void {
    const perfilForm = this.form.value;

    const perfil: any = {
      descricao: perfilForm.descricao ?? ''
    };

    if (perfilForm.id) {
      perfil.id = perfilForm.id;
      this.perfilService.update(perfil.id, perfil).subscribe(() => this.router.navigate(['/perfis']));
    } else {
      this.perfilService.create(perfil).subscribe(() => this.router.navigate(['/perfis']));
    }
    }
}
