import requests


response = requests.get("https://api.github.com/users")
json_response = response.json()
for user in json_response:
    print(user['login'], user['url'])