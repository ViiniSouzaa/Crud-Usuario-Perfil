CREATE TABLE perfil (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(255) NOT NULL
);

CREATE TABLE usuario (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL
);

CREATE TABLE usuario_perfis (
  usuario_id BIGINT NOT NULL,
  perfis_id BIGINT NOT NULL,
  PRIMARY KEY (usuario_id, perfis_id),
  FOREIGN KEY (usuario_id) REFERENCES usuario(id),
  FOREIGN KEY (perfis_id) REFERENCES perfil(id)
);