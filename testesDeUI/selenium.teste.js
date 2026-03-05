const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

const iniciarTeste = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get('https:/google.com')

    const inputs = await driver.findElements(By.css("textarea"));
    
    await inputs[0].sendKeys("Senai"); // Digita "Senai" no campo de busca do Google
    await inputs[0].sendKeys(Key.RETURN); // Pressiona a tecla "Enter" para realizar a busca




    await driver.close();
}

iniciarTeste();

