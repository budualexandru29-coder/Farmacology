# Reconstruiește index.html din src/: python3 build.py
# Versiunea publică nu include imaginile slide-urilor (materiale de curs de uz intern):
# trimiterile deschid textul citat, marcat cu galben, și spun unde e în LP.
import json
t = open('src/template.html', encoding='utf-8').read()
d = open('src/data.js', encoding='utf-8').read().replace('if (typeof module !== "undefined") module.exports = VARIANTE;', '')
s = json.load(open('src/sources.json', encoding='utf-8'))
page = (t.replace('/*DATA*/', d)
         .replace('/*SURSE*/', json.dumps(s, ensure_ascii=False, separators=(',', ':')))
         .replace('/*IMG*/true', 'false'))
html = ('<!doctype html>\n<html lang="ro">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
        '</head>\n<body>\n' + page + '\n</body>\n</html>\n')
open('index.html', 'w', encoding='utf-8').write(html)
