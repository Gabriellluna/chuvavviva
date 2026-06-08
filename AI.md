SOLICITAÇÃO 1:

O QUE PEDI PARA A IA? Pedi para ela criar as 10 perguntas do quiz do site de acordo com uma estrutura informada e com base no html existente
"com base nesse html que colei no prompt,  quero que você crie dez perguntas para um quiz dinâmico que vou fazer seguindo a seguinte estrutura: questions ={ 1 : {
pergunta: "Qual é...?", opcoes: ["opcao1", "opcao2", "opcao3", "opcao4"], correta: número da opcao correta, explicacao: "explicacao do porque a opção correta é a correta" }"

O QUE A IA RETORNOU: 
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

O QUE FOI ALTERADO OU REJEITADO E O MOTIVO: Não alterei nada na estrutura, usei conforme a estrutura que já havia solicitado.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


SOLICITAÇÃO 2:

O QUE PEDI PARA A IA? Depois de criar a lógica de troca de tema do site manualmente com JS, estilizando cor por cor, pesquisei e vi que seria mais lógico e eficiente criar um tema "moon", outro tema "sun" e um último tema "tree" no css. Assim, quando o usuário mudasse de tema clicando no botão, eu poderia apenas remover uma ou outra classe com cores definidas referentes ao tema, dinamicamente com JS. Então eu pedi: "(colei o arquivo css no começo do prompt). Com base nesse meu css, crie as classes theme-moon (tema escuro) e theme-tree (cores verdes claras). Quero que você crie as classes com cores harmônicas e que combinem, mudando as variáveis que defini em root"

O QUE A IA RETORNOU: 
O seu CSS já está muito bem estruturado com variáveis. Vou criar os temas alterando apenas as variáveis principais definidas anteriormente.
.theme-moon {
    --bg-white: #202c46;
    --bg-little-white: #314055;
    --bg-primary-color: #F9FAFB;

    --bg-light-grey: #0F172A;
    --bg-little-light-grey: #334155;

    --color-grey: #CBD5E1;
    --color-light-grey: #94A3B8;
    --border-grey: #475569;

    --bg-light-blue: #60A5FA;

    --light-green: #163126;
    --green: #1E4A38;
    --border-green: #4ADE80;

    --light-yellow: #3D2D14;
    --yellow: #5B431C;
    --border-yellow: #FACC15;

    --light-red: #3A1C22;
    --red: #5A2932;
    --border-red: #FB7185;
}

.theme-tree {
    --bg-white: #F3FAF4;
    --bg-little-white: #E8F5EA;

    --bg-primary-color: #1B4332;
    --bg-light-blue: #2D6A4F;

    --bg-light-grey: #D8F3DC;
    --bg-little-light-grey: #B7E4C7;

    --color-grey: #52796F;
    --color-light-grey: #84A98C;
    --border-grey: #95D5B2;

    --light-green: #D8F3DC;
    --green: #95D5B2;
    --border-green: #2D6A4F;

    --light-yellow: #FFF3CD;
    --yellow: #FFE8A1;
    --border-yellow: #D4A017;

    --light-red: #FFD6D6;
    --red: #FF9E9E;
    --border-red: #D65A5A;
}

O QUE FOI ALTERADO OU REJEITADO E O MOTIVO: Não alterei nada nas cores definidas pela IA, gostei bastante do resultado dos outros dois temas.