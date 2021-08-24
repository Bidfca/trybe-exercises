def valida_email(email):
    if len(email.split("@")) == 1 or len(email.split(".")) == 1:
        raise ValueError("Email should have the format: 'nomeusuario@nomewebsite.extensao'");

    nomeusuario = email.split("@")[0];
    nomewebsite = email.split("@")[1].split(".")[0];
    extensao = email.split(".")[1];

    if not email[0].isalpha():
        raise ValueError("First character should be a letter");

    if len(extensao) > 3:
        raise ValueError("Extension maximum length is 3");
    
    for letter in nomeusuario:
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ("_", "-")
        ):
            raise ValueError(
                "Username should contains only letters, "
                "digits, dashes or underscores"
            );
    
    for letter in nomewebsite:
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError(
                "Website should contains only letters, and digits"
            );
    
    return True;