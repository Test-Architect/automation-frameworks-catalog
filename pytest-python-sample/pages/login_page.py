from selenium.webdriver.common.by import By
from utils.waits import wait_for_element


class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.username_field = (By.ID, "username")
        self.password_field = (By.ID, "password")
        self.login_button = (By.ID, "submit")

    def enter_username(self, username):
        wait_for_element(self.driver, self.username_field).send_keys(username)

    def enter_password(self, password):
        wait_for_element(self.driver, self.password_field).send_keys(password)

    def click_login(self):
        wait_for_element(self.driver, self.login_button).click()

    def is_login_successful(self):
        return "Logged In Successfully" in self.driver.page_source
