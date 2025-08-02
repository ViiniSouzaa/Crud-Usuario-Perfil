package com.project.usuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.usuarios.entity.Perfil;

public interface PerfilRepository extends JpaRepository<Perfil, Long> {}