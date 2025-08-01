package com.project.usuarios.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.usuarios.dto.PerfilDTO;
import com.project.usuarios.service.PerfilService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/perfis")
@RequiredArgsConstructor
@CrossOrigin
public class PerfilController {

	private final PerfilService perfilService;
	
	@GetMapping
    public List<PerfilDTO> listar() {
        return perfilService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PerfilDTO> buscarPorId(@PathVariable Long id) {
    	return perfilService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Object> criar(@Valid @RequestBody PerfilDTO perfil) {
        return ResponseEntity.ok(perfilService.save(perfil));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> atualizar(@PathVariable Long id, @Valid @RequestBody PerfilDTO perfil) {
        if (!perfilService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        perfil.setId(id);
        return ResponseEntity.ok(perfilService.save(perfil));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (!perfilService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        perfilService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
	
	
}
