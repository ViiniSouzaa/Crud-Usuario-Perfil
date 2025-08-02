package com.project.usuarios.mapper;

import com.project.usuarios.dto.PerfilDTO;
import com.project.usuarios.entity.Perfil;

public class PerfilMapper {

	public static PerfilDTO toDTO(Perfil perfil) {
        PerfilDTO dto = new PerfilDTO();
        dto.setId(perfil.getId());
        dto.setDescricao(perfil.getDescricao());
        return dto;
    }

    public static Perfil toEntity(PerfilDTO dto) {
        Perfil perfil = new Perfil();
        perfil.setId(dto.getId());
        perfil.setDescricao(dto.getDescricao());
        return perfil;
    }
}
