package com.project.usuarios.service;

import java.util.List;
import java.util.Optional;

import com.project.usuarios.dto.UsuarioDTO;

import jakarta.validation.Valid;

public interface UsuarioService {
	
	List<UsuarioDTO> findAll();

	Optional<UsuarioDTO> findById(Long id);

	UsuarioDTO save(@Valid UsuarioDTO usuario);

	boolean existsById(Long id);

	void deleteById(Long id);

}
