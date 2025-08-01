package com.project.usuarios.service;

import java.util.List;
import java.util.Optional;

import com.project.usuarios.dto.PerfilDTO;

import jakarta.validation.Valid;

public interface PerfilService {

	List<PerfilDTO> findAll();

	Optional<PerfilDTO> findById(Long id);

	PerfilDTO save(@Valid PerfilDTO perfil);

	boolean existsById(Long id);

	void deleteById(Long id);

}
