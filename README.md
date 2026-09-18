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
    img/          # fotos reais da clínica: recortes tratados do Instagram + fotos oficiais do Google Business Profile
```

## Fonte da marca

Nome, tagline, paleta de cores e nomes de profissionais vêm do documento de análise de marca
fornecido pela cliente (`leve_odontologia_analise_prompt.docx`). Endereço, horário de funcionamento,
telefone e a avaliação de 5,0 (170 avaliações) foram confirmados diretamente na ficha do Google
Business Profile da clínica. Um dos depoimentos usa uma avaliação pública real do Google (Naylanne
Pinto). Nenhum dado — nome, depoimento, CRO, valor ou convênio — foi inventado. Onde a informação
real ainda não está disponível, o site traz o placeholder `[INSERIR DADO REAL DO CLIENTE]`.

A planilha de 4 concorrentes de Natal/RN (`Sites Bons - Dentistas Descartados.xlsx`) foi usada
**apenas como benchmark de UX/estrutura** (o que funciona e o que evitar) — nenhum texto, foto,
paleta ou identidade visual desses sites foi reaproveitado.

## Pendências antes do lançamento oficial (ver lista completa no relatório de entrega)

- Confirmar grafia do nome "Dr. Rogério Virgínia" com a clínica.
- Preencher CRO dos profissionais, convênios aceitos, valores e mais depoimentos reais de
  pacientes (marcados como `[INSERIR DADO REAL DO CLIENTE]` no site).
- Confirmar nomes/cargos da equipe de apoio (assistentes) exibida na foto de grupo.
- Endereço e horário de funcionamento já preenchidos com dados reais do Google Business Profile —
  revisar se continuam corretos antes de publicar.

## Rodar localmente

Qualquer servidor estático funciona, por exemplo:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.
