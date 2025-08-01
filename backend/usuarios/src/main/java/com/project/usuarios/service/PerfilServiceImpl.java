package com.project.usuarios.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.usuarios.dto.PerfilDTO;
import com.project.usuarios.mapper.PerfilMapper;
import com.project.usuarios.repository.PerfilRepository;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class PerfilServiceImpl implements PerfilService{

	private final PerfilRepository perfilRepository;
	
	@Override
    public List<PerfilDTO> findAll() {
        return perfilRepository.findAll().stream()
				.map(PerfilMapper::toDTO)
				.toList();
    }

    @Override
    public Optional<PerfilDTO> findById(Long id) {
        return perfilRepository.findById(id)
        		.map(PerfilMapper::toDTO);
    }

    @Override
    public PerfilDTO save(@Valid PerfilDTO perfil) {
        return PerfilMapper.toDTO(
        		perfilRepository.save(
        				PerfilMapper.toEntity(perfil)));
    }

    @Override
    public boolean existsById(Long id) {
        return perfilRepository.existsById(id);
    }

    @Override
    public void deleteById(Long id) {
        perfilRepository.deleteById(id);
    }

}
