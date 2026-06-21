# São João Premium — Landing page

Site de apresentação do empreendimento **São João Premium** (Pedrouços, Maia), com a **dps Imobiliário**.

Site estático (HTML + CSS + JS, sem build). Pensado para publicar em:

```
https://dpsimobiliario.pt/saojoaopremium
```

## Estrutura

```
saojoaopremium/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── logo-dps.svg
│   └── img/            (renders do empreendimento)
├── robots.txt
└── README.md
```

Caminhos relativos — funciona em subpasta (`/saojoaopremium`) ou domínio próprio.

## Notas

- **Sem qualquer dado do promotor.** O único contacto é o da dps Imobiliário: WhatsApp **925 610 864** (botão lateral fixo + formulário). Os logótipos do promotor foram removidos dos renders.
- Tipologias T1 a T4 (áreas indicativas), todas com varanda e garagem.
- Plano de pagamento faseado e prazo de conclusão (até 36 meses após comunicação de início de obra) indicados como informativos, sujeitos a confirmação.
- Imagens 3D extraídas da brochura, meramente indicativas.
- Mapa centrado em Pedrouços, Maia. Para a morada exata, editar o `src` do `<iframe>` na secção Localização.
