package com.project.usuarios.mapper;

import java.util.stream.Collectors;

import com.project.usuarios.dto.PerfilDTO;
import com.project.usuarios.dto.UsuarioDTO;
import com.project.usuarios.entity.Perfil;
import com.project.usuarios.entity.Usuario;

public class UsuarioMapper {

	public static UsuarioDTO toDTO(Usuario usuario) {
        UsuarioDTO dto = new UsuarioDTO();
        dto.setId(usuario.getId());
        dto.setNome(usuario.getNome());
        dto.setPerfis(usuario.getPerfis()
                .stream()
                .map(PerfilMapper::toDTO)
                .collect(Collectors.toList()));
        return dto;
    }

    public static Usuario toEntity(UsuarioDTO dto) {
        Usuario usuario = new Usuario();
        usuario.setId(dto.getId());
        usuario.setNome(dto.getNome());
        usuario.setPerfis(dto.getPerfis()
                .stream()
                .map(PerfilMapper::toEntity)
                .collect(Collectors.toList()));
        return usuario;
    }
}
