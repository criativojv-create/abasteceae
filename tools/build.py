#!/usr/bin/env python3
"""Monta index.html a partir de template.html + partes convertidas do Figma."""
import re, pathlib
root = pathlib.Path(__file__).resolve().parent
t = (root / "template.html").read_text()
logo = (root / "partials/logo.html").read_text()
box = (root / "partials/box.html").read_text()
orbit = (root / "s714.html").read_text()

# caixa do chef dentro da coluna central da órbita
orbit = orbit.replace('data-node-id="11:757" data-name="Container">', 'data-node-id="11:757" data-name="Container" data-fit="587">\n' + box, 1)
# colunas de notificações encaixam no celular
orbit = orbit.replace('data-node-id="11:716" data-name="Container"', 'data-node-id="11:716" data-name="Container" data-fit="437.49"', 1)
orbit = re.sub(r'(<div class="col-3 [^"]*" data-node-id="[^"]+" data-name="Container")', r'\1 data-fit="437.49"', orbit, count=1)

out = t.replace("<!--@LOGO-->", logo).replace("<!--@ORBIT-->", orbit)
out = out.replace('<div class="chat ', '<div data-fit="362.41" class="chat ', 1)
(root.parent / "index.html").write_text(out)
print("index.html:", len(out), "bytes;", out.count("data-fit="), "data-fit")
