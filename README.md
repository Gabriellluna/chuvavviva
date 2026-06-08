# ChuvaViva

**Landing page de apresentação** do projeto ChuvaViva — desenvolvido para a **Global Solution 2026 da FIAP**.

> Este repositório contém exclusivamente a landing page estática de apresentação do conceito. Não se trata de uma aplicação funcional do sistema descrito.

---

## Sobre o projeto

O ChuvaViva é um sistema operacional climático urbano que transforma dados públicos de satélite, sensores IoT e histórico meteorológico em alertas hiperlocais de enchentes e deslizamentos — rua por rua, em tempo real.

O problema central não é a chuva em si, mas a latência entre o dado disponível e a decisão que salva vidas. O ChuvaViva conecta da telemetria ao morador e à Defesa Civil em um único fluxo operacional.

---

## Objetivo do sistema (conceito)

- Prever enchentes e deslizamentos em células de **100 m de resolução**
- Gerar **rotas de evacuação dinâmicas**, recalculadas em tempo real
- Priorizar **populações vulneráveis** (idosos, crianças, PCDs, baixa renda)
- Fornecer um **painel operacional unificado** para Defesa Civil e prefeituras
- Oferecer **janela de antecipação de 1 a 6 horas** para serviços essenciais
- Reduzir a latência entre dado coletado e decisão acionável de horas para segundos

---

## Público-alvo

| Frente | Entrega |
|---|---|
| **Cidadão** | Alerta com rota e ponto de abrigo via app, SMS ou WhatsApp |
| **Gestão Pública** | Painel multi-célula, despacho de equipes e histórico auditável |
| **Serviços Essenciais** | Alertas por endereço institucional e API para sistemas internos |

---

## Stack tecnológica (conceito)

| Camada | Tecnologia | Função |
|---|---|---|
| Orbital | SRTM / NASA | Altimetria global 30 m para modelar fluxo e encostas |
| Orbital | Sentinel-2 | Cobertura do solo, vegetação e impermeabilização |
| Dado público | INMET | Pluviometria em tempo real |
| Dado público | CEMADEN | Histórico nacional de desastres para calibração |
| Dado público | OpenStreetMap | Malha viária para rotas e priorização |
| Borda | IoT · ESP32 | Pluviômetros e níveis ribeirinhos via LoRa e LTE-M |
| Núcleo | PostGIS | Geoprocessamento espacial em escala |
| Núcleo | Python · FastAPI | API de baixa latência para ingestão e distribuição |
| Modelo | IA Multifator | Predição por célula combinando chuva, relevo, solo e histórico |

---

## Estrutura da landing page

```
ChuvaViva/
├── index.html          # Página principal
├── styles/
│   └── style.css       # Estilos globais
├── script/
│   └── script.js       # Interatividade (menu mobile, benefícios, quiz)
├── images/             # Imagens e ícones do projeto
└── fonts/              # Tipografia (Inter, JetBrains Mono)
```

### Seções da página

1. **Hero** — Chamada principal com mapa de risco visual
2. **Problema** — Contexto sobre desastres hidrológicos no Brasil (847 mortes/ano, R$ 27 bi em prejuízos)
3. **Tecnologia** — Stack de dados e infraestrutura do sistema
4. **Objetivos** — Cinco objetivos operacionais concretos
5. **Público-alvo** — Cidadão, Defesa Civil e serviços essenciais
6. **Benefícios** — Impactos diretos por audiência
7. **Aplicação** — Fluxo de quatro etapas: Coleta → Processamento → Alerta → Ação
8. **Quiz** — Teste de conhecimento sobre o projeto e o problema

---

## Como visualizar

Por ser uma landing page estática, basta abrir o arquivo `index.html` diretamente no navegador. Não há dependências de build, servidor ou instalação.

---

## Contexto acadêmico

Projeto desenvolvido como entrega da **Global Solution 2026 — FIAP**.

O conceito propõe implantação em até **90 dias** para um município piloto, operando como uma camada sobre dados públicos já existentes.

---

## Equipe

| Nome | RM |
|---|---|
| Bruno Guilherme Gonçalves de Oliveira | RM573697 |
| Gabriel Cardoso de Sá Finzetto | RM571846 |
| Gabriel Luna Maia | RM570982 |
| João Lucas Magordo Rodrigues | RM572419 |
| Murilo Vieira dos Reis | RM573764 |

---

## Fontes de dados referenciadas

- [INMET](https://www.gov.br/agricultura/pt-br/assuntos/inmet) — Instituto Nacional de Meteorologia
- [CEMADEN](https://www.gov.br/cemaden/pt-br) — Centro Nacional de Monitoramento e Alertas de Desastres Naturais
- [OpenStreetMap](https://www.openstreetmap.org) — Malha viária aberta
- [SRTM / NASA](https://srtm.csi.cgiar.org/) — Dados altimétricos globais
- [Sentinel-2 / ESA](https://sentinels.copernicus.eu/) — Imagens de cobertura do solo
