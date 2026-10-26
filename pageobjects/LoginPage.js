export class LoginPage{
    constructor(page){
        this.page = page;
        this.userNameInput = page.getByPlaceholder("Enter your email");
        this.passwordInput = page.getByPlaceholder("Enter your password"); 
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goTo() {
        await this.page.goto(process.env.BASE_URL);
    }

    async validLogin(userNameInput, passwordInput){
        await this.userNameInput.fill(userNameInput)
        await this.passwordInput.fill(passwordInput)
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = { LoginPage };