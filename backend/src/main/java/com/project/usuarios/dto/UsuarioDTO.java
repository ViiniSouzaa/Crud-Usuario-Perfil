package com.project.usuarios.dto;

import java.util.List;

import lombok.Data;

@Data
public class UsuarioDTO {

	private Long id;
    private String nome;
    private List<PerfilDTO> perfis;
    
}
