#!/bin/sh
# Converte o bloco "órbita" (nó Figma 11:714) para HTML e ajusta o posicionamento para o layout em fluxo.
cd "$(dirname "$0")"
python3 jsx2html.py figma-11-714.jsx > s714.html
sed -i '' \
 -e 's/class="absolute gap-x-\[27.62415885925293px\] gap-y-\[27.62415885925293px\] grid grid-cols-\[___437.49px_587.00px_437.49px\] grid-rows-\[_587.00px\] left-\[186.81px\] top-\[2947.11px\] w-\[1517.188px\]"/class="orbit-grid relative gap-x-[27.62px] grid grid-cols-[437.49px_587px_437.49px] grid-rows-[587px] w-[1517.188px] mx-auto"/' \
 -e 's/class="absolute content-stretch flex flex-col h-\[108.177px\] items-center left-\[186.81px\] pt-\[69.06px\] top-\[3534.1px\] w-\[1517.171px\]"/class="orbit-foot relative flex flex-col items-center pt-[69.06px] w-full"/' \
 -e 's/class="contents relative size-full" data-node-id="11:714"/class="orbit-wrap relative" data-node-id="11:714"/' \
 -e 's/class="col-2 h-\[586.997px\] justify-self-stretch relative row-1 self-center shrink-0" data-node-id="11:757"/class="orbit-center col-2 h-[586.997px] justify-self-stretch relative row-1 self-center shrink-0" data-node-id="11:757"/' \
 s714.html
python3 build.py
