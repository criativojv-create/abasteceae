#!/usr/bin/env python3
"""Converte o JSX (React+Tailwind) exportado pelo Figma em HTML com classes Tailwind.
Uso: python3 jsx2html.py entrada.jsx > saida.html
"""
import re, sys

src = open(sys.argv[1], encoding="utf-8").read()

# pega só o que está dentro do return ( ... );
m = re.search(r"return \(\n(.*)\n  \);\n}", src, re.S)
body = m.group(1) if m else src

def style_obj_to_css(obj):
    out = []
    # pares chave: "valor" | 'valor'
    for k, q, v in re.findall(r"(\w+):\s*(\"|')((?:\\.|(?!\2).)*)\2", obj):
        v = v.replace('\\"', '"')
        if k == "fontVariationSettings":
            continue
        kebab = re.sub(r"([A-Z])", lambda x: "-" + x.group(1).lower(), k)
        out.append(f"{kebab}: {v}")
    return "; ".join(out)

body = re.sub(r"style=\{\{(.*?)\}\}", lambda m: 'style="' + style_obj_to_css(m.group(1)).replace('"', "&quot;") + '"', body)
body = body.replace("className=", "class=")
body = re.sub(r"\{`([^`]*)`\}", lambda m: m.group(1), body)

# fontes do Figma -> família + peso
WEIGHTS = {"Regular": "", "Medium": "font-medium", "SemiBold": "font-semibold", "Semi_Bold": "font-semibold",
           "Bold": "font-bold", "Black": "font-black"}
def font_sub(m):
    fam, w = m.group(1), m.group(2)
    fam_css = {"Instrument_Sans": "font-instrument", "Inter": "font-inter", "Inter_Tight": "font-tight", "Sora": "font-sora"}[fam]
    wt = WEIGHTS.get(w, "")
    return (fam_css + (" " + wt if wt else "")).strip()
body = re.sub(r"font-\['([A-Za-z_]+):([A-Za-z_]+)'\]", font_sub, body)

# tags auto-fechadas não existem em HTML para div/p/span
body = re.sub(r"<(div|p|span)((?:[^<>\"]|\"[^\"]*\")*?)\s*/>", r"<\1\2></\1>", body)
# espaços entre spans de uma mesma frase não podem colapsar
body = re.sub(r"</span>\s*\n\s*<span", "</span><span", body)
# atributos JSX booleanos
body = body.replace(" aria-hidden ", ' aria-hidden="true" ')
# remove indentação base de 4 espaços
body = "\n".join(l[4:] if l.startswith("    ") else l for l in body.splitlines())
print(body)
