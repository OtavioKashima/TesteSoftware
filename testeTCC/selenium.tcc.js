const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

const iniciarTeste = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    try {

        await driver.get('http://localhost:8100')

        // espera o botão Login aparecer
        const botaoLogin = await driver.wait(
            until.elementLocated(By.xpath("//ion-button[contains(text(),'Login')]")),
            5000
        )

        // clica no botão Login
        await botaoLogin.click()

        // espera os campos aparecerem
        const campoCpf = await driver.wait(
            until.elementLocated(By.id('ion-input-0')),
            5000
        )

        const campoSenha = await driver.wait(
            until.elementLocated(By.id('ion-input-1')),
            5000
        )

        // preenche os campos
        await campoCpf.sendKeys("12345678900")
        await campoSenha.sendKeys("123456")

        // encontra botão logar
        const botaoLogar = await driver.findElement(
            By.xpath("//ion-button[contains(text(),'Logar')]")
        )

        // clica em logar
        await botaoLogar.click()

        // espera 3 segundos para ver resultado
        await driver.sleep(6000)

    } finally {
        await driver.quit()
    }
}

iniciarTeste()