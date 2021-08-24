from exercicio19 import valida_email

def filtra_emails(emails):
    emails_validos = [];

    for email in emails:
        try:
            valida_email(email);
        except ValueError as error: # Sem 'as' é printado <class 'ValueError'>
            print(error);
        else:
            emails_validos.append(email);
    return emails_validos;

print(filtra_emails(["username@website.com", "inv*alid@website.com"]));
