import sys

clients = [
    {
        'name': 'Pablo',
        'company': 'Google',
        'email': 'pablo@google.com',
        'position': 'Software Engineer'
    },
    {
        'name': 'Ricardo',
        'company': 'Facebook',
        'email': 'ricardo@facebook.com',
        'position': 'Data Engineer'
    },
]

def create_client(client):
    global clients
    if client not in clients:
        clients.append(client)
    else:
        print('Client already is in the client\'s list')


def update_client(client_id, updated_client):
    global clients
    if len(clients) - 1 >= client_id:
        clients[client_id] = updated_client
    else:
        print('Client is not in the client\'s list')


def delete_client(client_id):
    global clients
    for idx, client in enumerate(clients):
        if idx == client_id:
            del clients[idx]
            break
    print('Client is not in the client\'s list')


def search_client(client_name):
    global clients
    for client in clients:
        if client['name'] != client_name:
            continue
        else:
            return True
    return False


def list_clients():
    global clients
    print('\n','*'*100,'\n')
    print('Client\'s List')
    print('uid\t | name\t\t | company\t | email\t\t | position')
    for idx, client in enumerate(clients):
        print('{uid}\t | {name}\t | {company}\t | {email}\t | {position}'.format(
            uid=idx,
            name=client['name'],
            company=client['company'],
            email=client['email'],
            position=client['position']))
    
    print('\n')
    print(dir({1, 2, 3}))
    a = [0, 1, 2, 2, 4, 5]
    b = [0, 1, 5]
    c = set(a)
    b = set(b)
    print(len(b.intersection(a)))



INTRO = f'''
{'*'*100}
{'*'*36}  WELCOME TO  KARIM VENTAS  {'*'*36}
{'*'*100}
- [L]ist client
- [C]reate client
- [U]pdate client
- [D]elete client
- [S]earch client

{'*'*100}

What would you like to do today?
'''

def _get_client_field(field_name):
    field = None
    while not field:
        field = input(f'What is the client {field_name}? ')
    
    return field


def _get_client_from_user():
    client = {
            'name': _get_client_field('name'),
            'company': _get_client_field('company'),
            'email': _get_client_field('email'),
            'position': _get_client_field('position'),
        }
    return client

def run():
    command = input(INTRO)
    command = command.upper()

    if command == 'L':
        list_clients()
    
    elif command == 'C':
        client = _get_client_from_user()
        create_client(client)
        list_clients()

    elif command == 'U':
        client_id = int(_get_client_field('id'))
        updated_client = _get_client_from_user()
        update_client(client_id, updated_client)
        list_clients()

    elif command == 'D':
        client_id = int(_get_client_field('id'))
        delete_client(client_id)
        list_clients()
    
    elif command == 'S':
        client_name = _get_client_field('name')
        found = search_client(client_name)
        if found:
            print(f'The client {client_name}IS in the client\'s list')
        else:
            print(f'The client: {client_name} IS NOT in our client\'s list')

    else:
        print('El comando es inválido')


if __name__ == "__main__":
    run()