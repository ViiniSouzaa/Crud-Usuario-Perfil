-- Perfis
INSERT INTO perfil (id, descricao) VALUES (1, 'Administrador');
INSERT INTO perfil (id, descricao) VALUES (2, 'Usuário Padrão');

-- Usuários
INSERT INTO usuario (id, nome) VALUES (1, 'João da Silva');
INSERT INTO usuario (id, nome) VALUES (2, 'Maria de Souza');

-- Tabela de ligação (usuario_perfis)
INSERT INTO usuario_perfis (usuario_id, perfis_id) VALUES (1, 1);
INSERT INTO usuario_perfis (usuario_id, perfis_id) VALUES (1, 2);
INSERT INTO usuario_perfis (usuario_id, perfis_id) VALUES (2, 2);