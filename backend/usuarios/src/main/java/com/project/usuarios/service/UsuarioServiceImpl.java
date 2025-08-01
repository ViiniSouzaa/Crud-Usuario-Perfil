package com.project.usuarios.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.usuarios.dto.UsuarioDTO;
import com.project.usuarios.entity.Usuario;
import com.project.usuarios.mapper.UsuarioMapper;
import com.project.usuarios.repository.UsuarioRepository;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioServiceImpl implements UsuarioService{

	private final UsuarioRepository usuarioRepository;

	@Override
	public List<UsuarioDTO> findAll() {
		return usuarioRepository.findAll().stream()
				.map(UsuarioMapper::toDTO)
				.toList();
	}

	@Override
	public Optional<UsuarioDTO> findById(Long id) {
		return usuarioRepository.findById(id)
				.map(UsuarioMapper::toDTO);
	}

	@Override
	public UsuarioDTO save(@Valid UsuarioDTO usuario) {
		return UsuarioMapper.toDTO(
				usuarioRepository.save(
						UsuarioMapper.toEntity(usuario)));
	}

	@Override
	public boolean existsById(Long id) {
		return usuarioRepository.existsById(id);
	}

	@Override
	public void deleteById(Long id) {
		usuarioRepository.deleteById(id);
		
	}
}
