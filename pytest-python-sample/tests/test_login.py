import json
import pytest
from pages.login_page import LoginPage
from utils.custom_logger import create_logger

logger = create_logger()

with open('test_data/users.json') as f:
    users = json.load(f)


@pytest.mark.parametrize('user', users)
def test_user_can_login(browser, user, config):
    browser.get(config['base_url'])
    login_page = LoginPage(browser)

    logger.info(f"Testing login for user: {user['username']}")

    login_page.enter_username(user['username'])
    login_page.enter_password(user['password'])
    login_page.click_login()

    if user['username'] == "student":
        assert login_page.is_login_successful()
        logger.info("Login successful!")
    else:
        assert not login_page.is_login_successful()
        logger.info("Login failed as expected for invalid user.")
