const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

const iniciarTeste = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    // Abre o app
    await driver.get('http://localhost:8100')

    // Aguarda a página carregar
    await driver.sleep(1000)
    
    // Troca /home por /tabs
    await driver.get('http://localhost:8100/tabs')
    
    await driver.sleep(1000)

    await driver.close();
}

iniciarTeste();