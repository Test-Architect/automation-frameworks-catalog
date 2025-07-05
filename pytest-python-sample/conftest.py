import pytest
from selenium import webdriver
from utils.config_reader import load_config

@pytest.fixture(scope="session")
def config():
    return load_config()

@pytest.fixture(scope="function")
def browser(config):
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.implicitly_wait(config['timeouts']['implicit_wait'])
    yield driver
    driver.quit()
