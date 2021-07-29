
PASSWORD = '12345'

def password_required(func):
    def wrapper():
        password = input('¿Cuál es tu contraseña? ')
        
        if password == PASSWORD:
            return func()
        else:
            print('La contraseña es incorrecta')
    
    return wrapper

@password_required
def needs_password():
    print('Contraseña correcta')


def upper(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()

    return wrapper

@upper
def say_my_name(name):
    return f'Hola, {name}'


def run():
    needs_password()
    print(say_my_name('Daniel'))


if __name__ == '__main__':
    run()