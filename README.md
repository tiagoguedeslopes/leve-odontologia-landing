# Leve Odontologia — Landing Page

Landing page para a clínica **Leve Odontologia** (Natal/RN), construída a partir do material de marca
real fornecido pela cliente (Instagram [@leve_odontologia](https://www.instagram.com/leve_odontologia)).

Site estático (HTML/CSS/JS puro, sem build step), publicado via GitHub Pages.

## Estrutura

```
site/
  index.html
  assets/
    css/style.css
    js/main.js
    img/          # fotos reais extraídas do Instagram da clínica (capturas enviadas pela cliente)
```

## Fonte da marca

Todo o conteúdo (nome, tagline, paleta de cores, fotos e nomes de profissionais) vem exclusivamente
do documento de análise de marca fornecido pela cliente (`leve_odontologia_analise_prompt.docx`).
Nenhum dado — nome, depoimento, CRO, endereço, horário ou preço — foi inventado. Onde a informação
real não estava disponível, o site traz o placeholder `[INSERIR DADO REAL DO CLIENTE]`.

A planilha de 4 concorrentes de Natal/RN (`Sites Bons - Dentistas Descartados.xlsx`) foi usada
**apenas como benchmark de UX/estrutura** (o que funciona e o que evitar) — nenhum texto, foto,
paleta ou identidade visual desses sites foi reaproveitado.

## Pendências antes do lançamento oficial (ver lista completa no relatório de entrega)

- Confirmar grafia do nome "Dr. Rogério Virgínia" com a clínica.
- Preencher CRO dos profissionais, endereço, horário de funcionamento, convênios aceitos, valores
  e depoimentos reais de pacientes (todos marcados como `[INSERIR DADO REAL DO CLIENTE]` no site).
- Confirmar nomes/cargos da equipe de apoio (assistentes) exibida na foto de grupo.

## Rodar localmente

Qualquer servidor estático funciona, por exemplo:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.
