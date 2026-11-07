# Reconstruiește index.html din src/template.html + src/data.js: python3 build.py
t = open('src/template.html', encoding='utf-8').read()
d = open('src/data.js', encoding='utf-8').read().replace('if (typeof module !== "undefined") module.exports = VARIANTE;', '')
html = ('<!doctype html>\n<html lang="ro">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
        '<meta name="description" content="Douăzeci de variante OSPE de farmacologie generală, după baremele reale: trei subiecte, 9 puncte, 7 minute, cu barem de autocorectare.">\n'
        '</head>\n<body>\n' + t.replace('/*DATA*/', d) + '\n</body>\n</html>\n')
open('index.html', 'w', encoding='utf-8').write(html)
