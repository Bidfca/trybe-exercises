import pytest
from exercicio19 import valida_email

def test_se_extensao_maior_que_3():
    with pytest.raises(ValueError, match="Extension maximum length is 3"):
        valida_email("nomeusuario@nomewebsite.extensao");

def test_se_usuario_nao_comeca_com_letra():
    with pytest.raises(ValueError, match="First character should be a letter"):
        valida_email("1nomeusuario@nomewebsite.ext");

def test_se_usuario_e_invalido():
    with pytest.raises(ValueError, match="Username should contains only letters, "
                "digits, dashes or underscores"):
        valida_email("nome%usuario@nomewebsite.ext");

def test_se_nome_website_e_invalido():
    with pytest.raises(ValueError, match="Website should contains only letters, and digits"):
        valida_email("nomeusuario@nome_website.ext");

def test_se_email_valido_retorna_true():
        valida_email("nomeusuario@nomewebsite.ext") == True;