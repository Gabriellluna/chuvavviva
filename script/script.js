const menuButton = document.querySelector("#menuButton")
const mobileMenu = document.querySelector(".mobile-menu")
const navMobileMenu = document.querySelector(".nav-mobile-menu")
const row1Item1 = document.querySelector(".row1-item1")
const row1Item2 = document.querySelector(".row1-item2")
const row2Item1 = document.querySelector(".row2-item1")
const row2Item2 = document.querySelector(".row2-item2")
const row2Item3 = document.querySelector(".row2-item3")
const question = document.querySelector("#label")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const prox = document.querySelector("#prox")
const prev = document.querySelector("#prev")
const send = document.querySelector("#send")
const questionIndex = document.querySelector("#question-index")
const buttons = document.querySelector("#buttons")
const explanations = document.querySelector(".explanations")
const explanation = document.querySelector("#explanation")
const alertMessage = document.querySelector(".alertMessage")
const successMessage = document.querySelector(".successMessage")
const radios = document.querySelectorAll('input[name="option"]')
const questionColor = document.querySelectorAll('.question')
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-hero-menu a");
const theme = document.querySelector(".theme")
const themeImage = document.querySelector("#themeImage")
let currentQuestion = 1
let corretas = 0
let enviado = false
const changeTheme = () => {
    if (localStorage.getItem("theme") === "sun") {
        localStorage.setItem("theme", "moon")
    } else if (localStorage.getItem("theme") === "moon") {
        localStorage.setItem("theme", "tree")
    } else {
        localStorage.setItem("theme", "sun")
    }
}
const updateTheme = () => {
    themeImage.src = `./images/icons/${localStorage.getItem("theme")}.svg`
    if (localStorage.getItem("theme") === "sun") {
        themeImage.src = './images/icons/sun.svg'
        document.documentElement.classList.remove("theme-moon")
        document.documentElement.classList.remove("theme-tree")
        themeImage.style.filter = "brightness(0) invert(1)";
    } else if (localStorage.getItem("theme") === "moon") {
        themeImage.src = './images/icons/moon.svg'
        document.documentElement.classList.add("theme-moon")
        document.documentElement.classList.remove("theme-tree")
        themeImage.style.filter = "brightness(0)";
    } else {
        themeImage.src = './images/icons/tree.svg'
        document.documentElement.classList.remove("theme-moon")
        document.documentElement.classList.add("theme-tree")
        themeImage.style.filter = "brightness(0) invert(1)";
    }
}
updateTheme()
window.addEventListener("scroll", () => {
    let activeSection = "";

    sections.forEach(section => {
        const top = section.offsetTop - 100;

        if (window.scrollY >= top) {
            activeSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${activeSection}`) {
            link.classList.add("activeLink");
        } else {
            link.classList.remove("activeLink");
        }
    });
});

theme.addEventListener("click", () => {
    changeTheme()
    updateTheme()
})

const questions = {
    1: {
        pergunta: "Qual é o principal problema que o ChuvaViva tenta resolver?",
        opcoes: [
            "Falta de chuva nas cidades",
            "Dados climáticos existem, mas não viram ação hiperlocal a tempo",
            "Ausência de estações meteorológicas no Brasil",
            "Falta de financiamento para a Defesa Civil"
        ],
        correta: 2,
        explicacao: "O ChuvaViva parte da premissa de que os dados já existem — o gargalo está em transformá-los em decisões hiperlocais a tempo de salvar vidas."
    },
    2: {
        pergunta: "Qual tragédia brasileira é citada como exemplo da falha nos sistemas de alerta?",
        opcoes: [
            "Enchentes de São Paulo em 2019",
            "Petrópolis em 2022",
            "Mariana em 2015",
            "Rio de Janeiro em 2011"
        ],
        correta: 2,
        explicacao: "Petrópolis em 2022 ilustrou a 'fratura': alertas regionais chegaram tarde demais para evitar a catástrofe."
    },
    3: {
        pergunta: "Qual é a resolução espacial de risco calculada pelo ChuvaViva?",
        opcoes: [
            "1 km por célula",
            "500 m por célula",
            "100 m por célula",
            "10 m por célula"
        ],
        correta: 3,
        explicacao: "O sistema calcula risco em grid de 100 m — fino o suficiente para diferenciar uma rua da outra na mesma encosta."
    },
    4: {
        pergunta: "Qual fonte de dados é usada pelo ChuvaViva para altimetria e modelagem de fluxo de água?",
        opcoes: [
            "Sentinel-2",
            "CEMADEN",
            "SRTM / NASA",
            "OpenStreetMap"
        ],
        correta: 3,
        explicacao: "O SRTM da NASA fornece altimetria global de 30 m, usada para modelar fluxo de água e encostas."
    },
    5: {
        pergunta: "Qual tecnologia é utilizada nos sensores de campo (IoT) para transmissão de dados hiperlocais?",
        opcoes: [
            "Wi-Fi e Bluetooth",
            "LoRa e LTE-M",
            "5G e Zigbee",
            "Satélite VSAT"
        ],
        correta: 2,
        explicacao: "Os pluviômetros e sensores ribeirinhos baseados em ESP32 transmitem via LoRa e LTE-M, protocolos adequados para IoT em campo."
    },
    6: {
        pergunta: "Qual é a janela de antecipação que o ChuvaViva oferece para serviços essenciais como hospitais e escolas?",
        opcoes: [
            "15 a 30 minutos",
            "30 minutos a 1 hora",
            "1 a 6 horas",
            "12 a 24 horas"
        ],
        correta: 3,
        explicacao: "A janela de antecipação de 1 a 6 horas permite que hospitais, escolas e utilities se preparem antes do evento."
    },
    7: {
        pergunta: "Qual banco de dados com extensão espacial compõe o núcleo de geoprocessamento do ChuvaViva?",
        opcoes: [
            "MySQL + GeoServer",
            "PostGIS (PostgreSQL espacial)",
            "MongoDB + Turf.js",
            "SQLite + GDAL"
        ],
        correta: 2,
        explicacao: "O PostGIS é a extensão espacial do PostgreSQL usada para operações geoespaciais em escala no núcleo do sistema."
    },
    8: {
        pergunta: "Quais grupos populacionais têm peso explícito no algoritmo de priorização de alertas?",
        opcoes: [
            "Apenas moradores de encostas",
            "Proprietários de imóveis em área de risco",
            "Idosos, crianças, PCDs e populações de baixa renda",
            "Gestores públicos e socorristas"
        ],
        correta: 3,
        explicacao: "O algoritmo prioriza idosos, crianças, pessoas com deficiência e populações de baixa renda — os mais vulneráveis durante desastres."
    },
    9: {
        pergunta: "Qual é o prazo estimado de implantação para o primeiro município piloto?",
        opcoes: [
            "30 dias",
            "60 dias",
            "90 dias",
            "180 dias"
        ],
        correta: 3,
        explicacao: "O ChuvaViva opera como uma camada sobre dados públicos existentes e promete implantação em até 90 dias para o município piloto."
    },
    10: {
        pergunta: "Qual das afirmações descreve corretamente o impacto médio dos desastres hidrológicos no Brasil?",
        opcoes: [
            "Cerca de 200 mortes por ano e R$ 5 bi em prejuízos",
            "Cerca de 847 mortes por ano e R$ 27 bi em prejuízos na última década",
            "Mais de 2.000 mortes por ano e R$ 100 bi em prejuízos",
            "Cerca de 500 mortes por ano e R$ 10 bi em prejuízos"
        ],
        correta: 2,
        explicacao: "Os dados do CEMADEN, CRED e CNM apontam 847 mortes médias por ano e R$ 27 bi em prejuízos acumulados na última década."
    }
}

const answers = {
    1: {
        resposta: 0,
        correta: false
    },
    2: {
        resposta: 0,
        correta: false
    },
    3: {
        resposta: 0,
        correta: false
    },
    4: {
        resposta: 0,
        correta: false
    },
    5: {
        resposta: 0,
        correta: false
    },
    6: {
        resposta: 0,
        correta: false
    },
    7: {
        resposta: 0,
        correta: false
    },
    8: {
        resposta: 0,
        correta: false
    },
    9: {
        resposta: 0,
        correta: false
    },
    10: {
        resposta: 0
    },
}


menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    navMobileMenu.classList.toggle("close")
})

row1Item1.addEventListener("click", () => {
    row1Item1.classList.toggle("col-lg-8")
    row1Item1.classList.toggle("style")
})
row1Item2.addEventListener("click", () => {
    row1Item2.classList.toggle("col-lg-8")
    row1Item2.classList.toggle("style")
})

row2Item1.addEventListener("click", () => {
    row2Item1.classList.toggle("col-lg-6")
    row2Item1.classList.toggle("style")
})

row2Item2.addEventListener("click", () => {
    row2Item2.classList.toggle("col-lg-6")
    row2Item2.classList.toggle("style")
})

row2Item3.addEventListener("click", () => {
    row2Item3.classList.toggle("col-lg-6")
    row2Item3.classList.toggle("style")
})

question.textContent = questions[1].pergunta
option1.textContent = questions[1].opcoes[0]
option2.textContent = questions[1].opcoes[1]
option3.textContent = questions[1].opcoes[2]
option4.textContent = questions[1].opcoes[3]
prev.classList.add("d-none")

const verifyBlank = () => {
    if (document.querySelector('input[name="option"]:checked') === null) {
        return false
    } else {
        return true
    }
}

const verifyAnswer = (index) => {
    const user = answers[index].resposta
    const quiz = questions[currentQuestion].correta

    if (user === quiz) {
        answers[index].correta = true
    } else {
        answers[index].correta = false
    }
}


const updateInfo = () => {
    questionIndex.textContent = `Pergunta nº ${currentQuestion}`
    question.textContent = questions[currentQuestion].pergunta
    option1.textContent = questions[currentQuestion].opcoes[0]
    option2.textContent = questions[currentQuestion].opcoes[1]
    option3.textContent = questions[currentQuestion].opcoes[2]
    option4.textContent = questions[currentQuestion].opcoes[3]
    if (answers[currentQuestion].resposta != 0) {
        radios[answers[currentQuestion].resposta - 1].checked = true
    }
    if (currentQuestion === 1) {
        prev.classList.add("d-none")
    } else {
        prev.classList.remove("d-none")
    }
    if (currentQuestion === 10) {
        if (enviado) {
            prox.classList.add("d-none")
            prox.textContent = "Próximo"
        } else {
            prox.textContent = "Enviar"
        }
    } else {
        prox.classList.remove("d-none")
        prox.textContent = "Próximo"
    }

    if (enviado) {
        explanations.classList.remove("d-none")
        explanation.textContent = questions[currentQuestion].explicacao
        if (answers[currentQuestion].correta === true) {
            questionIndex.textContent = `Pergunta nº ${currentQuestion} - Correta`
            const questionCorreta = questionColor[answers[currentQuestion].resposta - 1]
            clearQuestions()
            questionColor[answers[currentQuestion].resposta - 1].classList.add("correct")
        } else {
            questionIndex.textContent = `Pergunta nº ${currentQuestion} - Incorreta`
            clearQuestions()
            questionColor[questions[currentQuestion].correta - 1].classList.add("correct")
            questionColor[answers[currentQuestion].resposta - 1].classList.add("incorrect")
        }
    }
}

const clearQuestions = () => {
    questionColor.forEach(element => {
        element.classList.remove("correct")
        element.classList.remove("incorrect")
    })
}

const sumCorretas = () => {
    const totalCorretas = Object.values(answers).filter(answer => answer.correta === true).length;
    corretas = totalCorretas;
    successMessage.classList.remove("d-none")
    successMessage.textContent = `Parabéns`
    if (corretas >= 7) {
        successMessage.textContent = `Parabéns, você acertou ${corretas} perguntas de 10. Muito bom!`
    }
    else if (corretas === 6) {
        successMessage.textContent = `Parabéns, você acertou ${corretas} perguntas de 10. Dá para passar de ano...`
    } else {
        successMessage.textContent = `Você acertou ${corretas} perguntas de 10. Dá para melhorar...`
    }
}

prox.addEventListener("click", () => {
    if (!verifyBlank()) {
        alertMessage.classList.remove("d-none")
    } else {
        alertMessage.classList.add("d-none")
        if (!enviado) {
            if (currentQuestion === 10) {
                currentQuestion = 10
                answers[currentQuestion].resposta = Number(document.querySelector('input[name="option"]:checked').value)
                verifyAnswer(currentQuestion)
                enviado = true
                updateInfo()
                sumCorretas()
                return
            }
            if (answers[currentQuestion].resposta != 0) {
                answers[currentQuestion].resposta = Number(document.querySelector('input[name="option"]:checked').value)
                verifyAnswer(currentQuestion)
                currentQuestion = currentQuestion + 1
                document.querySelector('input[name="option"]:checked').checked = false
                updateInfo()
            } else {
                answers[currentQuestion].resposta = Number(document.querySelector('input[name="option"]:checked').value)
                verifyAnswer(currentQuestion)
                currentQuestion = currentQuestion + 1
                document.querySelector('input[name="option"]:checked').checked = false
                updateInfo()
            }
        } else {
            currentQuestion = currentQuestion + 1
            updateInfo()
        }
    }
})

prev.addEventListener("click", () => {
    currentQuestion = currentQuestion - 1
    updateInfo()
})
