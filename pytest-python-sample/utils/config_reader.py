import yaml

def load_config():
    with open('config/config.yml') as file:
        return yaml.safe_load(file)