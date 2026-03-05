const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

const iniciarTeste = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get('https://http.cat/');

    const urls = await driver.findElements(By.css("li a")); // Procura os elementos que estão dentro de "li" e são "a" (links)
    console.log(urls.length); //Printa a quantidade de elementos encontrados

    const hrefs = []

    for (var elementos of urls) { // OF = exatamente o que está na lista || IN = printa a posição do elemento (1, 2, 3, 4)
        var url = await elementos.getAttribute("href"); // Pega o valor do atributo "href" (link) de cada elemento encontrado e armazena na variável "url"
        hrefs.push(url); // Adiciona o valor do link encontrado na lista "hrefs"
    }
    // console.log(hrefs); // Printa a lista de links encontrados

    for (var href of hrefs) { // Para cada link encontrado na lista "hrefs"
        await driver.get(href); // Acessa o link
        const description = await driver.findElements(By.css("div p"));

        for (var element of description) { // Para cada elemento encontrado na descrição
           var text = await element.getText(); // Pega o texto do elemento e armazena na variável "text"
           console.log(text); // Printa o texto encontrado

    }
    
    }





    await driver.close();
}

iniciarTeste();

// /html/body/div[2]/main/ul/li[1]