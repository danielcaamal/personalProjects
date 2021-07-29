from os import write
import sys
import csv
import os

CLIENT_TABLE = '.clients.csv'
CLIENT_SCHEMA = ['name', 'company','email' ,'position']

clients = []

def _initialice_clients_from_storage():
    with open(CLIENT_TABLE,mode='r') as f:
        reader = csv.DictReader(f, fieldnames=CLIENT_SCHEMA)
        for row in reader:
            clients.append(row)


def _save_clients_to_storage():
    tmp_table_name = '{}.tmp'.format(CLIENT_TABLE)
    with open(tmp_table_name, mode='w') as f:
        writer = csv.DictWriter(f, fieldnames=CLIENT_SCHEMA)
        writer.writerows(clients)
        
        os.remove(CLIENT_TABLE)
        os.rename(tmp_table_name, CLIENT_TABLE)


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
    print('uid\t | name\t\t\t | company\t | email\t\t\t | position')
    for idx, client in enumerate(clients):
        print('{uid}\t | {name}\t | {company}\t | {email}\t | {position}'.format(
            uid=idx,
            name=client['name'],
            company=client['company'],
            email=client['email'],
            position=client['position']))
    
    print('\n')



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
    _initialice_clients_from_storage()
    command = input(INTRO)
    command = command.upper()

    if command == 'L':
        list_clients()
    
    elif command == 'C':
        client = _get_client_from_user()
        create_client(client)
        #list_clients()

    elif command == 'U':
        client_id = int(_get_client_field('id'))
        updated_client = _get_client_from_user()
        update_client(client_id, updated_client)
        #list_clients()

    elif command == 'D':
        client_id = int(_get_client_field('id'))
        delete_client(client_id)
        #list_clients()
    
    elif command == 'S':
        client_name = _get_client_field('name')
        found = search_client(client_name)
        if found:
            print(f'The client {client_name}IS in the client\'s list')
        else:
            print(f'The client: {client_name} IS NOT in our client\'s list')

    else:
        print('Invalid command')
    
    _save_clients_to_storage()


if __name__ == "__main__":
    run()