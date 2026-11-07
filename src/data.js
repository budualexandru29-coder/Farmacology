// Variante OSPE Farmacologie generală · Anul II MG · Modulul 1
// Fiecare item: q = cerința din fișa student; ans = răspunsul din barem (cu „(x p)” pentru fiecare noțiune);
// acc = formulări echivalente acceptate; p = [0, parțial|null, maxim]; n = noțiuni cerute (regula 50%);
// src = trimiteri la LP (cazul) și la Materialul OSPE (pagina); dom = FC | FD | FT.
const VARIANTE = [
{
 id: 1, titlu: "Peptid oral · agonist β2 · down-regulation",
 subiecte: [
  { dom: "FC", stem: "Un medicament cu structură peptidică se administrează per os. Se recoltează probe de sânge la 20, 40, 60 și 90 de minute, iar concentrația plasmatică a medicamentului este 0 μg/mL la toate recoltările.",
    items: [
     { q: "Explicați valorile concentrației plasmatice.", ans: "Substanța nu se absoarbe, nu ajunge în sânge (0,5 p); este degradată de proteazele din tractul gastro-intestinal înainte de a traversa membranele (0,5 p).", acc: "„inactivată de enzimele digestive”, „scindată în fragmente de peptide și aminoacizi”.", p: [0, 0.5, 1], src: ["LP 1 · c1"] },
     { q: "Ce parametru farmacocinetic primar caracterizează absorbția și ce valoare are în acest caz?", ans: "Biodisponibilitatea (Bd, F) (0,5 p); practic nulă, ≈ 0% (0,5 p).", acc: "„Bd = 0”, „nu este biodisponibil oral”.", p: [0, 0.5, 1], src: ["LP 1 · c1", "OSPE p.1"] },
     { q: "Numiți două condiții pe care trebuie să le îndeplinească o substanță ca să poată traversa membranele biologice.", ans: "Oricare două, câte 0,5 p: liposolubilă (coeficient de repartiție octanol/apă); neionizată (depinde de pH și pKa); nelegată de proteine.", acc: "„lipofilă”, „nepolară”, „fracția liberă”.", p: [0, 0.5, 1], n: 2, src: ["LP 1 · De reținut"] }
    ]},
  { dom: "FD", stem: "Un pacient folosește inhalator o substanță cu afinitate pentru receptorii β2 cuplați cu proteine Gs și cu activitate intrinsecă, cu distribuție bună în musculatura netedă traheobronșică.",
    items: [
     { q: "Ce tip de ligand este substanța?", ans: "Agonist.", acc: "„agonist β2”, „simpatomimetic β2-stimulator”.", p: [0, null, 0.5], src: ["LP 3 · c3", "OSPE p.7"] },
     { q: "Ce fel de receptori sunt receptorii β2 (localizare la nivelul celulei, cuplare)?", ans: "Receptori membranari (0,5 p), cuplați cu proteine Gs (0,5 p).", acc: "„receptori de suprafață”, „GPCR – Gs”.", p: [0, 0.5, 1], src: ["LP 3 · c3", "OSPE p.8"] },
     { q: "Ce efect are asupra bronhiilor și în ce afecțiuni poate fi utilă?", ans: "Bronhodilatație (0,5 p); astm bronșic sau BPOC (0,5 p).", acc: "„relaxarea musculaturii netede bronșice”.", p: [0, 0.5, 1], src: ["LP 3 · c3", "OSPE p.15"] },
     { q: "Ce efect ar avea asupra uterului gravid și în ce situație ar fi util?", ans: "Relaxare, efect tocolitic (0,5 p); întârzierea instalării travaliului (0,5 p).", acc: "„prevenirea nașterii premature”.", p: [0, 0.5, 1], src: ["LP 3 · tabel Rp adrenergici", "OSPE p.15"] }
    ]},
  { dom: "FT", stem: "După câteva luni de utilizare continuă, pacientul observă că efectul bronhodilatator nu mai are intensitatea de la începutul terapiei.",
    items: [
     { q: "Explicați mecanismul farmacodinamic al scăderii efectului.", ans: "Down-regulation, reglare descendentă a densității receptoriale (0,5 p): excesul de agonist duce la internalizarea receptorilor și la scăderea numărului lor de la suprafața membranei (1 p).", acc: "„toleranță prin mecanism farmacodinamic” + mecanismul; doar termenul fără mecanism = 0,5 p.", p: [0, 0.5, 1.5], src: ["LP 4 · c4", "OSPE p.11", "OSPE p.13"] },
     { q: "Ce măsură permite obținerea unui efect de aceeași intensitate?", ans: "Creșterea dozei de medicament (1 p).", acc: "„asocierea cu corticosteroizi, care atenuează down-regulation”.", p: [0, null, 1], src: ["LP 4 · c4"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul intracelular prin care substanța produce bronhodilatație.", ans: "Stimulare β2 (Gs) → αs activează adenilat-ciclaza → ↑ AMPc → ↑ protein-kinaza A → ↑ Ca²⁺-ATPaza (și sechestrarea Ca²⁺ în reticulul endoplasmatic) → ↓ Ca²⁺ intracelular → relaxarea musculaturii netede.", src: ["LP 3 · c3", "OSPE p.15"] }
},
{
 id: 2, titlu: "Antagonist α1 · inductor enzimatic · efect secundar",
 subiecte: [
  { dom: "FD", stem: "Un pacient hipertensiv primește o substanță cu afinitate pentru receptorii α1 cuplați cu proteine Gq din musculatura netedă vasculară, lipsită de activitate intrinsecă.",
    items: [
     { q: "Ce tip de ligand este substanța?", ans: "Antagonist.", acc: "„blocant α1”, „simpatolitic α1”.", p: [0, null, 0.5], src: ["LP 3 · Interacțiunea ligand-receptor", "OSPE p.7"] },
     { q: "Ce fel de receptori sunt receptorii α1 (localizare la nivelul celulei, cuplare)?", ans: "Receptori membranari (0,5 p), cuplați cu proteine Gq (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · tabel Rp adrenergici", "OSPE p.8"] },
     { q: "Ce efect are asupra vaselor de sânge și asupra tensiunii arteriale?", ans: "Vasodilatație (0,75 p) → scăderea tensiunii arteriale (0,75 p).", acc: "„scade TA”, „efect antihipertensiv”.", p: [0, 0.75, 1.5], src: ["OSPE p.16"] }
    ]},
  { dom: "FC", stem: "Substanța de la subiectul 1 este inactivată hepatic de CYP3A4. Pacientul începe un tratament cronic cu un al doilea medicament, inductor enzimatic puternic al CYP3A4. După 3 săptămâni, valorile tensionale cresc din nou.",
    items: [
     { q: "Explicați creșterea valorilor tensionale.", ans: "Inductorul enzimatic crește rata de sinteză a CYP3A4 (1 p) → antihipertensivul este metabolizat mai repede, concentrația lui plasmatică scade, iar efectul scade (1 p).", acc: "„se elimină mai repede”, „risc de ineficacitate terapeutică”.", p: [0, 1, 2], src: ["LP 2 · Consecințe inductor", "LP 2 · c1", "OSPE p.3"] },
     { q: "Ce măsuri se pot lua?", ans: "Creșterea dozei antihipertensivului (0,5 p) sau evitarea asocierii, cu folosirea unei alternative (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · Consecințe inductor"] },
     { q: "De ce activitatea CYP3A4 poate fi indusă, spre deosebire de cea a acetilcolinesterazei?", ans: "CYP3A4 este enzimă microzomială (citocrom P450), cu specificitate redusă de substrat, inductibilă (0,5 p); acetilcolinesteraza este enzimă nemicrozomială, cu specificitate înaltă (metabolizează compuși endogeni), neinductibilă (0,5 p).", acc: "„garnitură nespecifică vs. specifică”.", p: [0, 0.5, 1], src: ["LP 2 · Metabolizarea", "OSPE p.3"] }
    ]},
  { dom: "FT", stem: "La creșterea dozei, pacientul prezintă hipotensiune arterială, explicată prin vasodilatația produsă de substanța de la subiectul 1.",
    items: [
     { q: "Încadrați această reacție (efect secundar sau efect toxic) și argumentați.", ans: "Efect secundar (0,5 p): efect neintenționat, dependent de mecanismul de acțiune și de doză (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse"] },
     { q: "Prin ce se deosebește un efect toxic de un efect secundar?", ans: "Efectul toxic se produce printr-un mecanism toxic direct, cu afectarea unui organ sau sistem (hepatic, SNC, efecte teratogene, mutagene, carcinogene) (1 p).", acc: "Un exemplu de organ afectat e suficient pentru punctaj maxim dacă e prezent „mecanism toxic direct”.", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul molecular prin care substanța de la subiectul 1 produce vasodilatație.", ans: "Blocarea receptorilor α1 (Gq) → nu se mai activează fosfolipaza C → ↓ IP3 și DAG → ↓ Ca²⁺ intracelular → relaxarea musculaturii netede vasculare.", src: ["OSPE p.16", "LP 3 · c5"] }
},
{
 id: 3, titlu: "Volum de distribuție · antagonist muscarinic · dependență",
 subiecte: [
  { dom: "FC", stem: "Se administrează i.v. câte 100 mg din două substanțe. Substanța P realizează o concentrație plasmatică inițială de 25 mg/L, iar substanța Q de 0,5 mg/L. Distribuția este rapidă, iar eliminarea până la măsurare este neglijabilă.",
    items: [
     { q: "Calculați volumul aparent de distribuție pentru fiecare substanță.", ans: "Vd = doza i.v. / c0: Vd (P) = 100 mg / 25 mg/L = 4 L (0,5 p); Vd (Q) = 100 mg / 0,5 mg/L = 200 L (0,5 p).", acc: "Rezultat corect cu unitate de măsură; fără unitate, se acordă jumătate.", p: [0, 0.5, 1], src: ["LP 1 · c5", "OSPE p.2"] },
     { q: "Unde se distribuie preferențial fiecare substanță?", ans: "P – intravascular, în sânge (Vd ≈ 3 L) (0,5 p); Q – în țesuturi, cu acumulare tisulară (Vd depășește apa totală, ≈ 42 L) (0,5 p).", acc: "„Q are afinitate mare pentru anumite țesuturi”.", p: [0, 0.5, 1], src: ["LP 1 · c5", "OSPE p.2"] }
    ]},
  { dom: "FD", stem: "În sacul conjunctival al unui iepure se instilează o substanță cu afinitate pentru receptorii muscarinici M1,3 (Gq) și M2 (Gi), lipsită de activitate intrinsecă.",
    items: [
     { q: "Ce efect are asupra diametrului pupilar, acomodării și presiunii intraoculare?", ans: "Midriază pasivă (0,5 p); cicloplegie, paralizia acomodării (0,5 p); creșterea presiunii intraoculare (0,5 p).", acc: "„midriază” fără „pasivă” se acceptă.", p: [0, 0.5, 1.5], src: ["LP 3 · c7", "OSPE p.16"] },
     { q: "Explicați de ce crește presiunea intraoculară.", ans: "Relaxarea mușchiului circular al irisului și a mușchiului ciliar (0,5 p) → îngreunarea scurgerii umorii apoase prin rețeaua trabeculară (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · c7.4", "OSPE p.16"] },
     { q: "Ce efect ar avea la nivel cardiac dacă s-ar absorbi sistemic? Prin blocarea căror receptori?", ans: "Creșterea frecvenței cardiace, tahicardie, efect vagolitic (0,5 p); prin blocarea receptorilor M2 (Gi) (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · tabel Rp colinergici", "OSPE p.15"] },
     { q: "Ce efect ar avea asupra glandelor salivare?", ans: "Efect antisecretor, uscăciunea gurii (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 3 · c6", "OSPE p.16"] }
    ]},
  { dom: "FT", stem: "Un pacient folosește cronic o substanță cu afinitate pentru receptorii GABA-A și activitate intrinsecă. O întrerupe brusc și, în zilele următoare, prezintă anxietate, insomnie și tremor.",
    items: [
     { q: "Cum se numește fenomenul apărut și ce tip de dependență indică?", ans: "Sindrom de abstinență (0,5 p), care indică dependență fizică (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse", "OSPE p.13"] },
     { q: "Explicați diferența dintre dependența psihică și dependența fizică.", ans: "Dependența psihică: dorință crescută de a consuma substanța pentru obținerea unei satisfacții de ordin emoțional (1 p). Dependența fizică: modificări adaptative ca urmare a consumului cronic, manifestate prin sindrom de abstinență la întrerupere, cu simptome de obicei opuse efectelor substanței (1 p).", acc: "", p: [0, 1, 2], src: ["LP 4 · c4.3", "OSPE p.13"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul molecular al midriazei produse de substanța de la subiectul 2.", ans: "Blocarea M3 (Gq) din mușchiul circular al irisului → nu se activează PLC → nu se hidrolizează PIP2 la IP3 + DAG → ↓ Ca²⁺ → relaxarea mușchiului circular → midriază pasivă.", src: ["LP 3 · c5", "LP 3 · c7", "OSPE p.16"] }
},
{
 id: 4, titlu: "Deplasare de pe proteine · agonist GABA-A · tahifilaxie",
 subiecte: [
  { dom: "FC", stem: "Un pacient cu diabet zaharat folosește cronic substanța G, care stimulează eliberarea de insulină și se leagă de albumină în proporție de peste 90%. Pentru o durere, își administrează substanța X, care se leagă în aceeași proporție de aceleași situsuri ale albuminei. După câteva ore apar tahicardie, transpirații, tremor și foame.",
    items: [
     { q: "Ce complicație a apărut și cum se explică?", ans: "Hipoglicemie (0,5 p); X deplasează G de pe proteinele plasmatice (0,5 p) → crește fracția liberă a lui G (0,5 p) → efect intensificat, supradozare relativă la doză terapeutică (0,5 p).", acc: "„competiție pentru situsurile de legare”.", p: [0, 1, 2], src: ["LP 1 · c7", "OSPE p.1–2"] },
     { q: "Ce situație patologică ar putea crește fracția liberă a lui G chiar fără substanța X? Dați un exemplu de cauză.", ans: "Hipoalbuminemia (0,5 p); cauze, oricare: ciroză, insuficiență hepatică, cașexie, boală cronică renală (0,5 p).", acc: "„scăderea proteinelor plasmatice”.", p: [0, 0.5, 1], src: ["LP 1 · Proteine de legare", "OSPE p.1"] }
    ]},
  { dom: "FD", stem: "Substanța A are lipofilie crescută, traversează bariera hematoencefalică, are afinitate pentru receptori din SNC cuplați cu canale de Cl⁻ și are activitate intrinsecă.",
    items: [
     { q: "Ce fel de receptori sunt aceștia? Dați un exemplu.", ans: "Receptori membranari cuplați cu canale ionice (0,5 p); receptorul GABA-A sau receptorul pentru glicină (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c1", "OSPE p.9"] },
     { q: "Ce modificări produce la nivelul membranei neuronale?", ans: "Deschiderea canalului cu influx de Cl⁻ (0,5 p) → hiperpolarizare (0,5 p) → potențial postsinaptic inhibitor (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 4 · c1", "OSPE p.9"] },
     { q: "Ce efect are la nivelul SNC?", ans: "Efect deprimant, inhibitor (0,5 p).", acc: "„sedativ”, „inhibă activitatea neuronală”.", p: [0, null, 0.5], src: ["OSPE p.9"] },
     { q: "Ce s-ar întâmpla cu efectul central dacă substanța ar fi puternic hidrofilă?", ans: "Nu ar traversa bariera hematoencefalică, deci nu ar ajunge la receptorii din SNC și nu ar avea efect central (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 1 · c4", "LP 1 · De reținut"] }
    ]},
  { dom: "FT", stem: "O substanță care favorizează eliberarea noradrenalinei din terminațiile presinaptice simpatice este folosită ca picături nazale, la interval de câteva ore. După câteva administrări nu mai are efect.",
    items: [
     { q: "Cum se numește fenomenul și prin ce mecanism se produce?", ans: "Toleranță acută, tahifilaxie (0,5 p), prin epuizarea stocurilor presinaptice de noradrenalină (1 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 4 · c3", "OSPE p.14"] },
     { q: "Se poate restabili efectul prin creșterea dozei? Argumentați.", ans: "Nu; trebuie să treacă un timp pentru refacerea stocurilor de mediator (0,5 p).", acc: "", p: [0, null, 0.5], src: ["OSPE p.14"] }
    ]}
 ],
 bonus: { q: "Prin ce receptori și ce cale intracelulară produce noradrenalina eliberată efectul decongestionant?", ans: "Receptori α1 (Gq) vasculari → ↑ PLC → ↑ IP3 + DAG → ↑ Ca²⁺ → contracția musculaturii netede vasculare → vasoconstricție, decongestionarea mucoasei nazale.", src: ["LP 4 · c3", "OSPE p.16"] }
},
{
 id: 5, titlu: "pH urinar · antagonist β1 · rebound",
 subiecte: [
  { dom: "FC", stem: "Un pacient este adus la spital în stare de inconștiență după ingestia unei cantități mari dintr-o substanță cu caracter slab acid, care se excretă renal și se reabsoarbe tubular.",
    items: [
     { q: "Propuneți o modalitate de creștere a eliminării renale a substanței.", ans: "Alcalinizarea urinii (1 p).", acc: "„administrarea de bicarbonat de sodiu”.", p: [0, null, 1], src: ["LP 2 · c5", "OSPE p.5"] },
     { q: "Explicați mecanismul.", ans: "În urina alcalină, acidul slab trece predominant în formă ionizată (0,5 p), polară, hidrofilă (0,5 p), care nu se reabsoarbe tubular și rămâne în urină (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 2 · Influența pH-ului urinar", "OSPE p.5"] },
     { q: "Ce s-ar întâmpla cu o substanță slab bazică dacă urina ar fi alcalinizată?", ans: "Ar fi predominant neionizată, s-ar reabsorbi tubular, iar efectul ar crește, uneori până la toxicitate (0,5 p).", acc: "", p: [0, null, 0.5], src: ["OSPE p.5"] }
    ]},
  { dom: "FD", stem: "Substanța M are afinitate pentru receptorii β1 cuplați cu proteine Gs din cord și din aparatul juxtaglomerular și nu are activitate intrinsecă.",
    items: [
     { q: "Ce tip de ligand este substanța?", ans: "Antagonist (0,5 p).", acc: "„beta-blocant”, „simpatolitic β1”.", p: [0, null, 0.5], src: ["LP 3 · c4"] },
     { q: "Ce efect are asupra cordului?", ans: "Scade frecvența cardiacă (0,5 p) și forța de contracție (0,5 p).", acc: "„cardioinhibiție”, „efecte trop-negative”.", p: [0, 0.5, 1], src: ["LP 3 · c4", "OSPE p.14"] },
     { q: "Ce efect are la nivelul aparatului juxtaglomerular și ce consecință are asupra tensiunii arteriale?", ans: "Scade secreția de renină (0,5 p) → mai puțină angiotensină II, scăderea retenției hidrosaline și a volemiei → scade TA (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · c4", "OSPE p.14"] },
     { q: "Numiți două indicații terapeutice.", ans: "Oricare două, câte 0,5 p: hipertensiune arterială, angină pectorală, tahiaritmii.", acc: "", p: [0, 0.5, 1], n: 2, src: ["OSPE p.14"] }
    ]},
  { dom: "FT", stem: "După câțiva ani de tratament cu substanța M, pacientul o întrerupe brusc. A doua zi ajunge la UPU cu criză hipertensivă și tahicardie.",
    items: [
     { q: "Explicați mecanismul acestor manifestări.", ans: "Administrarea cronică a antagonistului crește densitatea receptorială – up-regulation (0,5 p); la întrerupere, mai mulți receptori sunt disponibili pentru mediatorii endogeni (0,5 p) → efect de rebound (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 4 · c5", "OSPE p.11"] },
     { q: "Cum ar putea fi prevenite?", ans: "Reducerea treptată a dozelor (1 p).", acc: "„întreruperea progresivă”.", p: [0, null, 1], src: ["LP 4 · c5"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul molecular al scăderii forței de contracție.", ans: "Blocarea β1 (Gs) → nu se activează adenilat-ciclaza → ↓ AMPc → ↓ protein-kinaza A → ↓ deschiderea canalelor de Ca²⁺ tip L → ↓ Ca²⁺ intracelular → scade contracția.", src: ["LP 3 · c4", "OSPE p.14"] }
},
{
 id: 6, titlu: "Prodrug + inhibitor · agonist muscarinic · acatalazie",
 subiecte: [
  { dom: "FC", stem: "Un pacient folosește un antiagregant plachetar administrat ca prodrug, transformat în metabolitul activ de CYP2C19. Pentru protecție gastrică i se asociază un medicament cu acțiune inhibitoare asupra CYP2C19.",
    items: [
     { q: "Ce consecință are această asociere asupra efectului antiagregant?", ans: "Scade rata de bioactivare, de formare a metabolitului activ (0,75 p) → scade efectul antiagregant, risc de ineficacitate (0,75 p).", acc: "", p: [0, 0.75, 1.5], src: ["LP 2 · c4", "OSPE p.4"] },
     { q: "Ce măsură se recomandă?", ans: "Evitarea asocierii, cu folosirea unei alternative (0,5 p).", acc: "„creșterea dozei de prodrug”.", p: [0, null, 0.5], src: ["LP 2 · c4"] },
     { q: "Ce s-ar întâmpla dacă al doilea medicament ar fi inductor al CYP2C19?", ans: "Ar crește rata de formare a metabolitului activ (0,5 p) → ar crește eficacitatea, dar și toxicitatea (0,5 p).", acc: "„risc de sângerare”.", p: [0, 0.5, 1], src: ["LP 2 · Consecințe inductor", "OSPE p.3"] }
    ]},
  { dom: "FD", stem: "Într-un vas cu soluție în condiții fiziologice (izotonie, izoionie, O2, 37°C) se plasează un fragment de intestin subțire. Se adaugă o substanță cu afinitate pentru receptorii M1,3 (Gq) și cu activitate intrinsecă, iar ulterior un antagonist al acelorași receptori.",
    items: [
     { q: "Cum este influențată contractilitatea după adăugarea primei substanțe?", ans: "Crește, contracție (0,5 p).", acc: "„crește peristaltismul”.", p: [0, null, 0.5], src: ["LP 3 · c5", "OSPE p.16"] },
     { q: "Cum se modifică după adăugarea antagonistului? Explicați.", ans: "Contracția este anulată, musculatura se relaxează (0,5 p), deoarece antagonistul blochează receptorii și împiedică acțiunea agonistului (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · c5", "OSPE p.7"] },
     { q: "Numiți alte două efecte pe care le-ar avea agonistul administrat sistemic.", ans: "Oricare două, câte 0,5 p: hipersecreția glandelor exocrine, bronhoconstricție, mioză cu scăderea presiunii intraoculare, favorizarea micțiunii, vasodilatație (prin NO).", acc: "", p: [0, 0.5, 1], n: 2, src: ["LP 3 · tabel Rp colinergici", "OSPE p.16"] },
     { q: "Dacă substanța ar stimula și receptorii M2 (Gi) cardiaci, ce efect ar avea și prin ce mecanism?", ans: "Scade frecvența cardiacă, efect vagotonic (0,5 p); prin deschiderea canalelor de K⁺ → hiperpolarizare membranară (0,5 p).", acc: "„bradicardie”, „efect cronotrop negativ”.", p: [0, 0.5, 1], src: ["OSPE p.15"] }
    ]},
  { dom: "FT", stem: "Un copil se lovește, iar rana este dezinfectată cu apă oxigenată. În loc de degajare de gaz, sângele devine negru-cenușiu.",
    items: [
     { q: "Explicați fenomenul.", ans: "Acatalazie, deficit de catalază (0,5 p); apa oxigenată oxidează fierul bivalent din hemoglobină la fier trivalent → methemoglobină (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c6", "OSPE p.12"] },
     { q: "Ce tip de reacție adversă este și prin ce se deosebește de o reacție alergică?", ans: "Reacție de tip idiosincrazic: intoleranță înnăscută, deficit enzimatic condiționat genetic (0,75 p); reacția alergică are mecanism imunologic, apare la re-expunere (intoleranță dobândită) (0,75 p).", acc: "", p: [0, 0.75, 1.5], src: ["LP 4 · c6.3", "OSPE p.12"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul molecular al contracției intestinale produse de agonist.", ans: "Stimulare M1,3 (Gq) → ↑ PLC → PIP2 → IP3 + DAG; IP3 eliberează Ca²⁺ din reticulul endoplasmatic → contracție fazică; DAG → PKC → contracție tonică.", src: ["LP 3 · c5", "OSPE p.11"] }
},
{
 id: 7, titlu: "Cinetică de ordinul I · supradoză de agonist · anafilaxie",
 subiecte: [
  { dom: "FC", stem: "După o doză unică, se măsoară concentrația plasmatică a unui medicament: 80 μg/mL la 0 h, 40 μg/mL la 2 h, 20 μg/mL la 4 h, 10 μg/mL la 6 h și 5 μg/mL la 8 h.",
    items: [
     { q: "Ce tip de cinetică de eliminare urmează medicamentul? Argumentați.", ans: "Cinetică de ordinul I: concentrația scade exponențial, la jumătate în intervale egale (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 2 · c7", "OSPE p.4"] },
     { q: "Care este timpul de înjumătățire?", ans: "2 ore (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 2 · c6", "OSPE p.4"] },
     { q: "După cât timp se poate considera eliminarea practic completă?", ans: "După 5–7 t1/2 (0,5 p) = 10–14 ore (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · c6", "OSPE p.4"] },
     { q: "Câte administrări pe zi ar fi necesare și cum s-ar putea reduce numărul lor?", ans: "Intervalul dintre doze este 1–2 t1/2, adică 2–4 ore → 6–12 administrări pe zi (0,5 p); forme farmaceutice retard, cu eliberare prelungită (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · c6"] }
    ]},
  { dom: "FD", stem: "Un pacient ajunge la UPU după o supradoză cu substanța B. Se cunosc: substanța B produce deprimare respiratorie, are afinitate pentru receptori membranari din centrul respirator bulbar și are activitate intrinsecă.",
    items: [
     { q: "Ce tip de ligand este substanța B?", ans: "Agonist (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 3 · c2"] },
     { q: "Care este cea mai bună abordare terapeutică? Explicați.", ans: "Un antagonist competitiv al acelorași receptori (1 p), care intră în competiție cu B pentru situsul de legare și anulează efectul, deprimarea respiratorie (0,5 p).", acc: "„antidot – antagonist al receptorului”.", p: [0, 1, 1.5], src: ["LP 3 · c2", "OSPE p.7"] },
     { q: "Definiți afinitatea și activitatea intrinsecă.", ans: "Afinitatea: capacitatea ligandului de a se lega specific de situsul de legare al receptorului (0,5 p). Activitatea intrinsecă: capacitatea ligandului de a activa receptorul și de a produce un răspuns biologic după legare (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · Interacțiunea ligand-receptor", "OSPE p.7"] }
    ]},
  { dom: "FT", stem: "Un pacient de 60 de ani primește antibioterapie pentru o infecție streptococică. La câteva ore după administrare acuză dificultăți respiratorii, amețeală și hipotensiune.",
    items: [
     { q: "Explicați mecanismul manifestărilor, precizând receptorii histaminei implicați.", ans: "Reacție alergică de tip I: complexul antigen–IgE produce degranularea mastocitelor cu eliberare de histamină (0,5 p); H1 (Gq) bronșici → bronhoconstricție (0,5 p); H1 (Gq) și H2 (Gs) vasculari → vasodilatație, scăderea TA, creșterea permeabilității (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 4 · c7", "OSPE p.12"] },
     { q: "Care este tratamentul de primă linie și prin ce receptori acționează?", ans: "Adrenalină i.m. (0,5 p); agonist α1 (Gq) vascular → vasoconstricție (0,5 p); agonist β2 (Gs) bronșic → bronhodilatație (0,5 p).", acc: "Doza 0,01 mg/kg, maximum 0,5 mg, nu e obligatorie.", p: [0, 0.5, 1.5], src: ["LP 4 · c7", "OSPE p.12"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul prin care histamina produce vasodilatație prin receptorii H1 endoteliali.", ans: "H1 (Gq) endotelial → ↑ PLC → ↑ IP3 + DAG → ↑ Ca²⁺ → ↑ NO-sintaza → NO difuzează în celula musculară netedă → ↑ guanilat-ciclaza → ↑ GMPc → vasodilatație.", src: ["OSPE p.17", "OSPE p.10"] }
},
{
 id: 8, titlu: "Prim pasaj hepatic · agonist α2 ocular · alergie tip IV",
 subiecte: [
  { dom: "FC", stem: "O substanță lipofilă are biodisponibilitatea orală de 1%, iar administrată sublingual are biodisponibilitatea de aproape 100%.",
    items: [
     { q: "Explicați diferența dintre cele două căi de administrare.", ans: "Per os, substanța trece prin sistemul port și este metabolizată, inactivată în ficat înainte de distribuție – efectul primului pasaj hepatic (1 p); sublingual se absoarbe prin mucoasa bucală și ocolește filtrul hepatic (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 1 · Efectul primului pasaj", "OSPE p.1"] },
     { q: "Ce biodisponibilitate are o substanță administrată i.v. și de ce?", ans: "100%, deoarece este introdusă direct în circulația sanguină (0,5 p).", acc: "", p: [0, null, 0.5], src: ["OSPE p.1"] },
     { q: "Cum se calculează biodisponibilitatea absolută?", ans: "Bd abs = AUC p.o. / AUC i.v. × 100 (0,5 p).", acc: "„aria de sub curbă oral raportată la i.v.”.", p: [0, null, 0.5], src: ["LP 1 · Biodisponibilitatea"] }
    ]},
  { dom: "FD", stem: "Un pacient cu presiune intraoculară crescută folosește picături oftalmice cu o substanță cu afinitate pentru receptorii α2 cuplați cu proteine Gi și cu activitate intrinsecă.",
    items: [
     { q: "Ce tip de ligand este substanța?", ans: "Agonist (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 3 · c7.5"] },
     { q: "Ce fel de receptori sunt receptorii α2 (localizare la nivelul celulei, cuplare)?", ans: "Receptori membranari (0,5 p), cuplați cu proteine Gi (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · tabel Rp adrenergici", "OSPE p.8"] },
     { q: "Ce efect are asupra presiunii intraoculare și cum se realizează?", ans: "Scade presiunea intraoculară (0,5 p); postsinaptic scade AMPc și secreția de umoare apoasă (1 p); presinaptic scade eliberarea de noradrenalină și previne midriaza (0,5 p).", acc: "", p: [0, 1, 2], src: ["LP 3 · c7.5"] },
     { q: "Ce efect ar avea asupra tensiunii arteriale dacă s-ar absorbi sistemic? Explicați.", ans: "Scade eliberarea de noradrenalină prin feed-back negativ presinaptic (0,5 p) → scade influența simpatică asupra vaselor și cordului → scade TA (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.15", "LP 3 · tabel Rp adrenergici"] }
    ]},
  { dom: "FT", stem: "După câteva săptămâni de utilizare a picăturilor, pacientul prezintă o dermatită de contact la nivelul pleoapelor.",
    items: [
     { q: "Ce tip de reacție alergică este (după clasificarea în patru tipuri)?", ans: "Tip IV, întârziată, mediată celular (1 p).", acc: "", p: [0, null, 1], src: ["OSPE p.12"] },
     { q: "Ce celule o mediază?", ans: "Limfocitele T sensibilizate (0,5 p).", acc: "", p: [0, null, 0.5], src: ["OSPE p.12"] },
     { q: "Este o reacție dependentă de doză?", ans: "Nu, reacțiile alergice sunt independente de doză (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 4 · Reacții adverse", "OSPE p.12"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul molecular prin care substanța scade secreția de umoare apoasă.", ans: "Stimulare α2 (Gi) → αi inhibă adenilat-ciclaza → ↓ AMPc → scade secreția de umoare apoasă.", src: ["LP 3 · c7.5", "OSPE p.8"] }
},
{
 id: 9, titlu: "Inhibitor enzimatic · placa motorie · apnee idiosincrazică",
 subiecte: [
  { dom: "FC", stem: "Un pacient folosește în doză maximă un hipolipemiant metabolizat de CYP3A4, care poate produce toxicitate musculară (miozită, rabdomioliză). Pentru o infecție, medicul ia în calcul un antibiotic cu acțiune inhibitoare enzimatică pe CYP3A4.",
    items: [
     { q: "Ce consecințe poate avea asocierea?", ans: "Hipolipemiantul este metabolizat mai lent (0,5 p) → crește concentrația lui plasmatică (0,5 p) → risc de toxicitate musculară la doze terapeutice (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 2 · c3", "OSPE p.4"] },
     { q: "Ce măsuri se pot lua?", ans: "Scăderea dozei hipolipemiantului (0,5 p) sau evitarea asocierii, cu folosirea unei alternative (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · Consecințe inhibitor"] }
    ]},
  { dom: "FD", stem: "Acetilcolina eliberată în fanta sinaptică stimulează receptorii nicotinici N2 din placa motorie.",
    items: [
     { q: "Cu ce tip de structură efectoare sunt cuplați receptorii N2 și ce efect are stimularea lor?", ans: "Canale ionice de Na⁺ (0,5 p); contracția musculaturii striate (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c2", "OSPE p.8"] },
     { q: "Descrieți secvența de evenimente de la legarea acetilcolinei până la contracție.", ans: "Deschiderea canalului → influx de Na⁺ → depolarizare → deschiderea canalelor de Na⁺ voltaj-dependente → potențial de acțiune propagat → contracția fibrei (1 p).", acc: "Secvența incompletă, cu influx de Na⁺ și depolarizare = 0,5 p.", p: [0, 0.5, 1], src: ["LP 4 · c2"] },
     { q: "Cum ar putea fi prelungit efectul acetilcolinei?", ans: "Prin inhibarea acetilcolinesterazei (0,5 p): acetilcolina este descompusă mai lent și rămâne mai mult timp în fanta sinaptică (0,5 p).", acc: "„inhibitori de colinesterază”, „parasimpatomimetice indirecte”.", p: [0, 0.5, 1], src: ["LP 4 · c2.2"] },
     { q: "Cum pot fi influențați receptorii N2 pentru a obține relaxare musculară în chirurgie?", ans: "Blocante neuromusculare, miorelaxante periferice, curarizante (0,5 p): antidepolarizante și depolarizante (antirepolarizante) (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c2.3"] }
    ]},
  { dom: "FT", stem: "Pentru o intervenție scurtă, unui pacient i se administrează un miorelaxant depolarizant, ester al colinei, metabolizat rapid de pseudocolinesterază. La sfârșitul intervenției, apneea persistă mult peste durata obișnuită.",
    items: [
     { q: "Explicați fenomenul.", ans: "Deficit de pseudocolinesterază (0,5 p) → miorelaxantul este metabolizat lent și se elimină greu (0,5 p) → relaxare prelungită, inclusiv a diafragmei, chiar la doze terapeutice (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 4 · c6.2", "OSPE p.12–13"] },
     { q: "Ce tip de reacție adversă este?", ans: "Reacție de tip idiosincrazic, intoleranță înnăscută, condiționată genetic (0,5 p), independentă de doză (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse", "OSPE p.12"] }
    ]}
 ],
 bonus: { q: "Explicați de ce un miorelaxant depolarizant produce întâi contracții și apoi relaxare.", ans: "Faza I: se leagă de N2, deschide canalul de Na⁺ → depolarizare → contracții fasciculare scurte. Faza II: rămâne legat de receptor, care nu mai poate fi stimulat → membrana rămâne inexcitabilă → relaxarea musculaturii striate.", src: ["OSPE p.12–13"] }
},
{
 id: 10, titlu: "Chelare cu calciu · receptor intracelular · autoinducție",
 subiecte: [
  { dom: "FC", stem: "O pacientă cu hipotiroidie folosește cronic, per os, un substituent al hormonului tiroidian. De câteva zile simptomele s-au agravat (bradicardie, somnolență, intoleranță la frig). A început din proprie inițiativă un supliment cu calciu, pe care îl ia simultan cu tratamentul, dimineața.",
    items: [
     { q: "Explicați agravarea simptomatologiei.", ans: "Calciul se leagă de substanța activă (0,5 p) → scade absorbția ei (0,5 p) → scade efectul (0,5 p).", acc: "„formează complecși neabsorbabili”, „scade biodisponibilitatea”.", p: [0, 0.5, 1.5], src: ["LP 1 · c3"] },
     { q: "Cum poate fi consiliată pacienta?", ans: "Administrare pe stomacul gol, cu cel puțin o jumătate de oră înainte de micul dejun (0,5 p), la cel puțin 2 ore distanță de alte medicamente sau suplimente, mai ales cele cu calciu, fier sau aluminiu (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 1 · c3"] }
    ]},
  { dom: "FD", stem: "O substanță cu lipofilie crescută, cu afinitate pentru receptori intracitoplasmatici și cu activitate intrinsecă, are efect antiinflamator.",
    items: [
     { q: "Ce tip de receptori sunt aceștia și de ce lipofilia este obligatorie?", ans: "Receptori intracelulari, nemembranari, de tipul celor pentru hormoni steroizi (0,5 p); doar substanțele lipofile traversează membrana pentru a ajunge la receptor (0,5 p).", acc: "„receptori nucleari”.", p: [0, 0.5, 1], src: ["LP 4 · c7", "OSPE p.9"] },
     { q: "Descrieți mecanismul prin care se produce efectul antiinflamator.", ans: "Complexul hormon–receptor pătrunde în nucleu și se leagă de elementul de răspuns hormonal (0,5 p) → transcripție, ARNm (0,5 p) → sinteză de anexine (0,5 p) → inhibarea fosfolipazei A2 (0,5 p).", acc: "", p: [0, 1, 2], src: ["OSPE p.9–10", "LP 4 · c7"] },
     { q: "Ce consecință are inhibarea fosfolipazei A2?", ans: "Nu se mai formează acid arahidonic din fosfolipidele membranare → scade sinteza de prostaglandine pe calea COX (0,5 p) și de leucotriene pe calea LOX (0,5 p).", acc: "„scad mediatorii proinflamatori”.", p: [0, 0.5, 1], src: ["LP 4 · c7", "OSPE p.10"] }
    ]},
  { dom: "FT", stem: "La un pacient tratat cronic cu o substanță inductoare enzimatică, concentrațiile plasmatice la 4, 8 și 12 ore sunt 8,65 / 7,42 / 6,32 mg/L la inițierea tratamentului și 6,12 / 4,35 / 3,17 mg/L după 3 săptămâni, la aceeași doză.",
    items: [
     { q: "Ce fenomen explică scăderea concentrațiilor și ce tip de toleranță produce?", ans: "Autoinducție enzimatică: substanța își induce propria metabolizare (0,5 p) → toleranță prin mecanism farmacocinetic (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · c2", "OSPE p.13"] },
     { q: "Prin ce se deosebește toleranța prin mecanism farmacodinamic?", ans: "Se produce prin down-regulation (0,5 p): administrarea continuă a unui agonist duce la internalizarea receptorilor (0,5 p) și la scăderea densității receptoriale, cu scăderea efectului (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 4 · c4", "OSPE p.13"] }
    ]}
 ],
 bonus: { q: "Ce efect au leucotrienele la nivel bronșic, prin ce receptori și cu ce profil temporal?", ans: "Bronhoconstricție prin receptorii CysLT1 (Gq), cu debut lent, dar efect îndelungat.", src: ["LP 4 · c7"] }
}
];
const VARIANTE2 = [
{
 id: 11, titlu: "Lipofil la obez · potență · toleranță înnăscută",
 subiecte: [
  { dom: "FC", stem: "Un pacient cu IMC 37 urmează tratament cronic cu o substanță lipofilă, a cărei doză a trebuit crescută pe parcursul tratamentului. După un regim drastic de slăbire, se prezintă cu simptome de supradozaj ale aceleiași substanțe.",
    items: [
     { q: "De ce a fost necesară creșterea dozei?", ans: "Substanța lipofilă se distribuie în țesutul adipos, cu volum de distribuție crescut (0,75 p); concentrația din sânge este redusă, efectul mai scăzut, deci sunt necesare doze mai mari (0,75 p).", acc: "", p: [0, 0.75, 1.5], src: ["LP 1 · c6", "OSPE p.2"] },
     { q: "De ce au apărut simptomele de supradozaj după slăbire?", ans: "Substanța acumulată în țesutul adipos se redistribuie și ajunge în sânge (0,5 p) → supradozare (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 1 · c6", "OSPE p.2"] },
     { q: "Ce etapă farmacocinetică este influențată?", ans: "Distribuția (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 1 · c6"] }
    ]},
  { dom: "FD", stem: "Două substanțe din aceeași clasă, A și B, produc același efect terapeutic: A în doză de 50 mg, B în doză de 10 mg.",
    items: [
     { q: "Ce parametru farmacodinamic permite ca B să fie administrată în doză mai mică?", ans: "Potența (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 3 · c1", "OSPE p.6"] },
     { q: "Care substanță este mai potentă și de câte ori?", ans: "B (0,5 p), de 5 ori mai potentă decât A (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.6"] },
     { q: "Prin ce se deosebește potența de eficacitate?", ans: "Potența: doza necesară pentru a obține un efect de o anumită intensitate (0,5 p). Eficacitatea: intensitatea maximă a efectului pe care îl poate produce substanța (0,5 p).", acc: "Explicarea pe curba doză–efect: deplasare pe orizontală vs. înălțimea platoului.", p: [0, 0.5, 1], src: ["LP 3 · c1", "OSPE p.6"] },
     { q: "Dacă B ar avea activitate intrinsecă 0 < α < 1, ar putea atinge efectul maxim al mediatorului? Explicați.", ans: "Nu; este agonist parțial și produce efecte de intensitate mai mică decât mediatorul (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · Interacțiunea ligand-receptor", "OSPE p.7"] }
    ]},
  { dom: "FT", stem: "Doi pacienți primesc aceeași substanță: unul răspunde mult mai slab încă de la prima administrare, fără nicio expunere anterioară; celălalt devine treptat mai puțin sensibil după luni de tratament.",
    items: [
     { q: "Cum se numește tipul de răspuns al primului pacient?", ans: "Toleranță înnăscută, naturală (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 4 · Reacții adverse", "OSPE p.13"] },
     { q: "Explicați diferența dintre toleranța înnăscută și cea dobândită.", ans: "Toleranța înnăscută este condiționată genetic, poate depinde de rasă prin garnitura enzimatică diferită (1 p). Toleranța dobândită apare după administrări repetate, cu scăderea treptată a răspunsului, și necesită creșterea dozei (1 p).", acc: "", p: [0, 1, 2], src: ["OSPE p.13"] }
    ]}
 ],
 bonus: { q: "Ce valoare are activitatea intrinsecă pentru un agonist total, un agonist parțial, un antagonist și un agonist invers?", ans: "Agonist total α = 1; agonist parțial 0 < α < 1; antagonist α = 0; agonist invers −1 < α < 0.", src: ["LP 3 · Interacțiunea ligand-receptor", "OSPE p.7"] }
},
{
 id: 12, titlu: "Bioechivalență · receptor tirozin-kinazic · alergie tip II",
 subiecte: [
  { dom: "FC", stem: "O companie vrea să pună pe piață un medicament generic, care să poată substitui medicamentul original cu aceeași substanță activă.",
    items: [
     { q: "Ce tip de studiu este necesar?", ans: "Studiu de bioechivalență (0,5 p).", acc: "„compararea biodisponibilității generic vs. original”.", p: [0, null, 0.5], src: ["LP 1 · c2"] },
     { q: "Ce trei parametri ai curbei concentrație plasmatică–timp se compară și ce reprezintă fiecare?", ans: "Cmax – concentrația plasmatică maximă (0,5 p); Tmax – timpul până la atingerea Cmax (0,5 p); AUC – aria de sub curbă, cantitatea totală care ajunge în circulația sistemică (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 1 · c2"] },
     { q: "Ce risc ar avea un generic cu Cmax mult mai mare decât originalul?", ans: "Se absoarbe prea repede, cu risc de toxicitate (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 1 · c2"] }
    ]},
  { dom: "FD", stem: "Un hormon cu structură peptidică se leagă de un receptor care are situsul de legare extracelular și un domeniu intracitoplasmatic cu activitate tirozin-kinazică.",
    items: [
     { q: "Ce tip de receptor este acesta?", ans: "Receptor membranar (0,5 p) de tip enzimă, cu activitate protein-kinazică (0,5 p).", acc: "„receptor cuplat cu enzimă”.", p: [0, 0.5, 1], src: ["LP 3 · Receptori enzime", "OSPE p.9"] },
     { q: "Ce se întâmplă după legarea hormonului și ce efect asupra glicemiei rezultă?", ans: "Fosforilarea resturilor tirozinice (0,5 p) → activarea transportorilor de glucoză GLUT (0,5 p) → glucoza este preluată intracelular, iar glicemia scade (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["OSPE p.9"] },
     { q: "De ce acest hormon nu poate fi administrat per os?", ans: "Este degradat de proteazele digestive (0,5 p); molecula este prea mare și prea hidrofilă pentru a se absorbi (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 1 · c1"] }
    ]},
  { dom: "FT", stem: "După un tratament, un pacient dezvoltă trombocitopenie. Se identifică anticorpi IgG îndreptați împotriva trombocitelor pe care s-a legat medicamentul.",
    items: [
     { q: "Ce tip de reacție alergică este?", ans: "Tip II, citotoxică (1 p).", acc: "", p: [0, null, 1], src: ["OSPE p.12"] },
     { q: "Explicați mecanismul.", ans: "Anticorpii IgG sau IgM interacționează cu antigenele de pe elementele figurate ale sângelui (0,5 p) → se activează complementul și celula este lizată (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.12"] },
     { q: "Este o reacție dependentă de doză? Când apare?", ans: "Independentă de doză (0,5 p); apare la re-expunerea la medicament (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c6.3", "OSPE p.12"] }
    ]}
 ],
 bonus: { q: "Ce anticorpi și ce celule sunt implicate într-o reacție alergică de tip I?", ans: "IgE care acoperă suprafața mastocitelor (și bazofilelor); la re-expunere, complexul antigen–anticorp produce degranularea, cu eliberare de histamină.", src: ["LP 4 · c7", "OSPE p.12"] }
},
{
 id: 13, titlu: "Inductor + contraceptiv · antagonist H1 · reactivitate",
 subiecte: [
  { dom: "FC", stem: "O pacientă urmează tratament cronic cu un antiepileptic cu acțiune inductoare enzimatică asupra CYP3A4. Ca metodă contraceptivă folosește contraceptive orale, metabolizate de CYP3A4.",
    items: [
     { q: "Ce consecință are asocierea?", ans: "Crește expresia CYP3A4 (0,5 p) → contraceptivele sunt metabolizate mai repede (0,5 p) → eficacitatea contraceptivă poate fi compromisă (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 2 · c1", "OSPE p.3"] },
     { q: "Ce recomandare îi faceți?", ans: "Alte metode contraceptive, de exemplu prezervativ sau sterilet (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · c1"] }
    ]},
  { dom: "FD", stem: "Într-o reacție alergică, histamina eliberată acționează pe receptorii H1 (Gq) din musculatura netedă bronșică. Pacientului i se administrează o substanță cu afinitate pentru receptorii H1, lipsită de activitate intrinsecă.",
    items: [
     { q: "Ce efect are histamina asupra bronhiilor?", ans: "Bronhoconstricție (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 4 · c7", "OSPE p.16"] },
     { q: "Ce tip de ligand este substanța administrată?", ans: "Antagonist (0,5 p).", acc: "„antihistaminic H1-blocant”.", p: [0, null, 0.5], src: ["LP 3 · Interacțiunea ligand-receptor"] },
     { q: "Ce efect are asupra acțiunii histaminei și pentru ce simptome se folosește în anafilaxie?", ans: "Blochează receptorii H1 și împiedică efectele histaminei mediate de aceștia (0,5 p); ca adjuvant de linia a doua, pentru prurit și urticarie (1 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 4 · c7"] },
     { q: "Ar împiedica această substanță bronhoconstricția produsă de leucotriene? Argumentați.", ans: "Nu; leucotrienele acționează pe alți receptori, CysLT1 (Gq) (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c7"] }
    ]},
  { dom: "FT", stem: "Aceeași doză dintr-un medicament este administrată unui grup mare de pacienți. Câțiva nu răspund aproape deloc, alții au un efect exagerat. Niciunul nu are un deficit enzimatic cunoscut sau alergie.",
    items: [
     { q: "Cum se numesc cele două tipuri de răspuns?", ans: "Toleranță, reactivitate scăzută (0,5 p); intoleranță, reactivitate exagerată (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse"] },
     { q: "Cum se explică apariția lor în populație?", ans: "Sunt extremele distribuției normale gaussiene a reactivității (1 p).", acc: "", p: [0, null, 1], src: ["LP 4 · Reacții adverse"] },
     { q: "Prin ce se deosebesc de o reacție idiosincrazică?", ans: "Reacția idiosincrazică are condiționare genetică, printr-un deficit enzimatic înnăscut (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse", "OSPE p.12"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul molecular al bronhoconstricției produse de histamină.", ans: "H1 (Gq) → ↑ PLC → ↑ IP3 + DAG → ↑ Ca²⁺ → bronhoconstricție.", src: ["OSPE p.16"] }
},
{
 id: 14, titlu: "Stare de echilibru · antagonist M2 · efect teratogen",
 subiecte: [
  { dom: "FC", stem: "Un medicament folosit în tratament cronic are timpul de înjumătățire de 24 de ore și se elimină după o cinetică de ordinul I.",
    items: [
     { q: "După cât timp se atinge concentrația plasmatică de echilibru (steady-state)?", ans: "După 4–7 t1/2 (0,5 p), adică 4–7 zile (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.4", "OSPE p.6"] },
     { q: "Cum se poate atinge mai repede o concentrație în domeniul terapeutic?", ans: "Doză de atac (0,5 p), urmată de doze de întreținere (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.6"] },
     { q: "Ce cale de administrare permite atingerea rapidă și menținerea concentrației prin reglarea debitului?", ans: "Perfuzia intravenoasă (0,5 p).", acc: "", p: [0, null, 0.5], src: ["OSPE p.6"] },
     { q: "De câte ori pe zi se administrează?", ans: "O dată pe zi, intervalul dintre doze fiind 1–2 t1/2 (0,5 p).", acc: "„1/zi”.", p: [0, null, 0.5], src: ["LP 2 · c6", "OSPE p.6"] }
    ]},
  { dom: "FD", stem: "Unui pacient cu bradicardie i se administrează o substanță cu afinitate pentru receptorii muscarinici M2 (Gi) din nodul sinusal, lipsită de activitate intrinsecă.",
    items: [
     { q: "Ce tip de ligand este substanța?", ans: "Antagonist (0,5 p).", acc: "„parasimpatolitic”.", p: [0, null, 0.5], src: ["OSPE p.15"] },
     { q: "Explicați cum acționează acetilcolina pe acești receptori.", ans: "Stimularea M2 (Gi) deschide canalele de K⁺ (0,5 p) → hiperpolarizare membranară (0,5 p) → scade frecvența cardiacă, efect cronotrop negativ (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["OSPE p.15"] },
     { q: "Ce efect are substanța și de ce este utilă aici?", ans: "Crește frecvența cardiacă, efect vagolitic (0,5 p); corectează bradicardia (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.15", "LP 3 · tabel Rp colinergici"] }
    ]},
  { dom: "FT", stem: "O substanță administrată în timpul sarcinii produce malformații fetale.",
    items: [
     { q: "Încadrați reacția adversă.", ans: "Efect toxic (0,5 p), teratogen (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse"] },
     { q: "Ce caracterizează efectele toxice?", ans: "Mecanism toxic direct, cu afectarea unui organ sau sistem (0,5 p); sunt dependente de doză (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse"] },
     { q: "Numiți alte două tipuri de efecte toxice.", ans: "Oricare două, câte 0,5 p: afectare SNC, afectare hepatică, efecte mutagene, efecte carcinogene.", acc: "", p: [0, 0.5, 1], n: 2, src: ["LP 4 · Reacții adverse"] }
    ]}
 ],
 bonus: { q: "Explicați de ce substanța din subiectul 2 crește frecvența cardiacă.", ans: "Blochează M2 (Gi) → acetilcolina nu mai deschide canalele de K⁺ → nu se produce hiperpolarizarea → dispare efectul cronotrop negativ vagal, frecvența crește.", src: ["OSPE p.15"] }
},
{
 id: 15, titlu: "Cinetică de ordinul 0 · agonist M3 ocular · idiosincrazie",
 subiecte: [
  { dom: "FC", stem: "Un medicament realizează o concentrație plasmatică inițială de 200 ng/mL. După 1, 2 și 3 ore, concentrațiile sunt 180, 160 și 140 ng/mL.",
    items: [
     { q: "Ce tip de cinetică de eliminare urmează?", ans: "Cinetică de ordinul 0 (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 2 · c7", "OSPE p.4"] },
     { q: "Argumentați.", ans: "Se elimină o cantitate constantă în unitatea de timp, 20 ng/mL pe oră, independent de concentrația plasmatică; scăderea este liniară (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · Tipuri de cinetică", "OSPE p.4"] },
     { q: "Se poate estima timpul de eliminare completă pe baza t1/2? De ce?", ans: "Nu (0,5 p), deoarece la cinetica de ordinul 0 timpul de înjumătățire variază (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · Tipuri de cinetică", "OSPE p.4"] },
     { q: "Ce caracterizează, prin contrast, cinetica de ordinul I?", ans: "Cantitatea eliminată variază proporțional cu concentrația plasmatică, iar t1/2 este constant (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 2 · Tipuri de cinetică"] }
    ]},
  { dom: "FD", stem: "Unui pacient cu glaucom cu unghi deschis i se instilează în sacul conjunctival o substanță cu afinitate pentru receptorii M3 (Gq) și cu activitate intrinsecă.",
    items: [
     { q: "Ce efect are asupra pupilei și prin contracția cărui mușchi?", ans: "Mioză (0,5 p), prin contracția mușchiului circular al irisului, sfincterul pupilei (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · c7", "OSPE p.16"] },
     { q: "Ce efect are asupra presiunii intraoculare și prin ce mecanism?", ans: "Scade presiunea intraoculară (0,5 p); contracția mușchiului circular și a mușchiului ciliar (0,5 p) lărgește spațiile Fontana și canalul Schlemm, crescând scurgerea umorii apoase prin rețeaua trabeculară (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 3 · c7.4", "LP 3 · tabel Rp colinergici"] },
     { q: "Ce efect are asupra acomodării?", ans: "Spasm de acomodare la vederea de aproape (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 3 · tabel Rp colinergici"] },
     { q: "Prin ce alt mecanism, care crește scurgerea uveosclerală, se poate scădea presiunea intraoculară?", ans: "Stimularea receptorilor prostaglandinici F (Gq) (0,5 p) → activarea metaloproteinazelor, care degradează colagenul și lărgesc spațiile dintre fibrele mușchiului ciliar (0,5 p).", acc: "„analogi de prostaglandine”.", p: [0, 0.5, 1], src: ["LP 3 · c7.5"] }
    ]},
  { dom: "FT", stem: "Un pacient tolerează foarte prost chiar cantități mici de alcool, din cauza unui deficit înnăscut de alcool-dehidrogenază.",
    items: [
     { q: "Ce tip de reacție este?", ans: "Reacție de tip idiosincrazic (0,5 p), intoleranță înnăscută condiționată genetic (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c6.2", "LP 4 · Reacții adverse"] },
     { q: "Este dependentă de doză?", ans: "Nu, este independentă de doză (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 4 · c6.3"] },
     { q: "Dați un alt exemplu de reacție idiosincrazică.", ans: "Acatalazia sau apneea toxică la miorelaxantul depolarizant, prin deficit de pseudocolinesterază (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 4 · c6"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul molecular al miozei.", ans: "Stimulare M3 (Gq) → ↑ PLC → PIP2 → IP3 + DAG → ↑ Ca²⁺ → contracția mușchiului circular al irisului → mioză.", src: ["LP 3 · c7", "OSPE p.16"] }
},
{
 id: 16, titlu: "Insuficiență renală · agonist β1 · sensibilizare alergică",
 subiecte: [
  { dom: "FC", stem: "Un medicament se elimină predominant renal și se leagă în proporție mare de proteinele plasmatice. Se administrează la un pacient cu insuficiență renală, în doza obișnuită.",
    items: [
     { q: "Cum sunt influențate eliminarea renală, clearance-ul și timpul de înjumătățire?", ans: "Eliminarea renală scade (0,5 p); clearance-ul scade (0,5 p); timpul de înjumătățire crește (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["LP 2 · c7"] },
     { q: "Ce risc apare la doza obișnuită?", ans: "Acumulare, cu risc de supradozare și toxicitate (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · c7", "OSPE p.5"] },
     { q: "Cum influențează legarea de proteinele plasmatice timpul de înjumătățire?", ans: "Îl crește (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 2 · c7"] }
    ]},
  { dom: "FD", stem: "Se administrează o substanță cu afinitate pentru receptorii β1 (Gs) din cord și din aparatul juxtaglomerular și cu activitate intrinsecă.",
    items: [
     { q: "Ce tip de ligand este substanța?", ans: "Agonist (0,5 p).", acc: "„simpatomimetic β-stimulator”.", p: [0, null, 0.5], src: ["OSPE p.14"] },
     { q: "Ce efecte cardiace produce?", ans: "Crește forța de contracție (0,5 p) și frecvența cardiacă (0,5 p).", acc: "„cardiostimulare”, „efecte trop-pozitive”.", p: [0, 0.5, 1], src: ["LP 3 · c4", "OSPE p.14"] },
     { q: "Ce efect are la nivelul aparatului juxtaglomerular și cum influențează tensiunea arterială?", ans: "Crește secreția de renină (0,5 p) → angiotensina II produce vasoconstricție și retenție hidrosalină → crește TA (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.14"] },
     { q: "Explicați cum crește frecvența cardiacă la nivelul nodului sinusal.", ans: "↑ AMPc → activarea canalelor HCN → influx de Na⁺ → depolarizare → crește numărul de impulsuri pe minut (1 p).", acc: "Secvența fără canalele HCN = 0,5 p.", p: [0, 0.5, 1], src: ["LP 3 · c4", "OSPE p.14"] }
    ]},
  { dom: "FT", stem: "Un pacient a primit un antibiotic acum un an, fără nicio reacție. Acum, la o nouă cură cu același antibiotic, face o reacție alergică imediată.",
    items: [
     { q: "De ce nu a reacționat la prima expunere?", ans: "Prima expunere a produs sensibilizarea: sinteza de IgE, care acoperă suprafața mastocitelor (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c7", "OSPE p.12"] },
     { q: "Ce se întâmplă la re-expunere?", ans: "Reacția antigen–anticorp produce degranularea mastocitelor, cu eliberare de histamină și alți mediatori (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c7", "OSPE p.12"] },
     { q: "Este o reacție dependentă de doză?", ans: "Nu, este independentă de doză (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 4 · c6.3"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul molecular al creșterii forței de contracție.", ans: "β1 (Gs) → ↑ adenilat-ciclaza → ↑ AMPc → ↑ protein-kinaza A → deschiderea canalelor de Ca²⁺ tip L → influx de Ca²⁺ → eliberare de Ca²⁺ din reticulul sarcoplasmatic → ↑ Ca²⁺ intracelular → crește contracția.", src: ["LP 3 · c4", "OSPE p.14"] }
},
{
 id: 17, titlu: "Proteine de legare · oxid nitric · mecanisme de toleranță",
 subiecte: [
  { dom: "FC", stem: "O substanță circulă în sânge legată în principal de globulina care leagă hormonii sexuali (SHBG). Pacientul începe un tratament cu androgeni, care scad nivelul SHBG.",
    items: [
     { q: "Ce se întâmplă cu fracția liberă a substanței? De ce?", ans: "Crește (0,5 p), deoarece scade proteina care o leagă în mod normal (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 1 · Proteine de legare"] },
     { q: "Ce consecință are asupra efectului?", ans: "Efectul crește (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 1 · c7"] },
     { q: "Numiți două alte situații care scad nivelul proteinelor de legare.", ans: "Oricare două, câte 0,5 p: afecțiuni hepatice (ciroză, insuficiență hepatică), cașexie, boală cronică renală.", acc: "", p: [0, 0.5, 1], n: 2, src: ["LP 1 · Proteine de legare", "OSPE p.1"] },
     { q: "De ce numai fracția liberă își exercită efectul?", ans: "Doar fracția nelegată poate traversa membranele biologice (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 1 · De reținut", "OSPE p.1"] }
    ]},
  { dom: "FD", stem: "Celulele endoteliale sintetizează din arginină, sub acțiunea unei sintaze, o moleculă mică, cu lipofilie crescută, care difuzează în celulele musculare netede vasculare.",
    items: [
     { q: "Ce moleculă este și de ce poate traversa membranele?", ans: "Oxidul nitric, NO, factor relaxant derivat din endoteliu (0,5 p); are lipofilie crescută (0,5 p).", acc: "„EDRF”.", p: [0, 0.5, 1], src: ["OSPE p.10"] },
     { q: "Ce structură receptoare activează în celula musculară netedă?", ans: "Guanilat-ciclaza solubilă, intracitoplasmatică (1 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.10"] },
     { q: "Ce mesager secund se formează și ce efect are?", ans: "GMP ciclic (0,5 p) → împiedică glisarea filamentelor de actină și miozină, relaxare, vasodilatație (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.10"] },
     { q: "Comparați efectul creșterii AMPc asupra musculaturii netede și asupra musculaturii cardiace.", ans: "Relaxare în musculatura netedă (0,5 p); contracție în musculatura cardiacă (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.10"] }
    ]},
  { dom: "FT", stem: "După câteva luni de tratament cronic, efectul unui medicament scade la aceeași doză.",
    items: [
     { q: "Numiți două mecanisme farmacocinetice prin care poate apărea toleranța.", ans: "Oricare două, câte 0,5 p: scăderea ratei de absorbție, creșterea ratei de metabolizare (inclusiv autoinducție), creșterea ratei de eliminare.", acc: "", p: [0, 0.5, 1], n: 2, src: ["OSPE p.13"] },
     { q: "Numiți și explicați un mecanism farmacodinamic.", ans: "Down-regulation: administrarea continuă a unui agonist scade densitatea receptorială (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · c4", "OSPE p.13"] }
    ]}
 ],
 bonus: { q: "Pe ce altă cale, în afara stimulării adenilat-ciclazei, poate crește AMPc intracelular?", ans: "Prin inhibarea fosfodiesterazei, enzima care inactivează AMPc la 5′AMP.", src: ["OSPE p.10"] }
},
{
 id: 18, titlu: "Bază slabă în urină alcalină · agonist α1 ocular · alergie tip III",
 subiecte: [
  { dom: "FC", stem: "Un pacient folosește o substanță cu caracter slab bazic, excretată renal și reabsorbită tubular. I se asociază un medicament care alcalinizează urina.",
    items: [
     { q: "În ce formă se va afla substanța în urina alcalină?", ans: "Predominant neionizată (0,5 p), nepolară, lipofilă (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · Influența pH-ului urinar", "OSPE p.5"] },
     { q: "Ce consecință are asupra efectului?", ans: "Crește reabsorbția tubulară (0,5 p) → efectul crește, uneori până la efecte toxice (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.5"] },
     { q: "În ce segment al nefronului are loc reabsorbția și de ce doar forma neionizată se reabsoarbe?", ans: "Tubul contort distal (0,5 p); forma neionizată, lipofilă, difuzează pasiv înapoi în capilarele peritubulare, iar forma ionizată, hidrofilă, rămâne în urină (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 2 · Excreția"] }
    ]},
  { dom: "FD", stem: "La un iepure se instilează în sacul conjunctival o substanță cu afinitate pentru receptorii α1 (Gq) și cu activitate intrinsecă.",
    items: [
     { q: "Ce tip de ligand este substanța?", ans: "Agonist (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 3 · c7"] },
     { q: "Ce efect are asupra pupilei și prin ce mușchi?", ans: "Midriază activă (0,5 p), prin contracția mușchiului radial al irisului (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · c7", "OSPE p.16"] },
     { q: "În ce scop diagnostic este utilă midriaza?", ans: "Examenul fundului de ochi (0,5 p).", acc: "", p: [0, null, 0.5], src: ["OSPE p.16"] },
     { q: "Prin ce se deosebește de midriaza produsă de un antagonist muscarinic?", ans: "Antagonistul muscarinic produce midriază pasivă, prin relaxarea mușchiului circular (0,5 p), și crește presiunea intraoculară (0,5 p).", acc: "„cicloplegie” pentru a doua noțiune.", p: [0, 0.5, 1], src: ["LP 3 · c7", "OSPE p.16"] },
     { q: "Ce efect ar avea aplicată pe mucoasa nazală?", ans: "Vasoconstricție, decongestionarea mucoasei (0,5 p).", acc: "", p: [0, null, 0.5], src: ["OSPE p.16"] }
    ]},
  { dom: "FT", stem: "La câteva zile după un tratament, un pacient prezintă urticarie, artralgii și semne de glomerulonefrită.",
    items: [
     { q: "Ce tip de reacție alergică este?", ans: "Tip III, prin complexe imune (1 p).", acc: "", p: [0, null, 1], src: ["OSPE p.12"] },
     { q: "Explicați mecanismul.", ans: "Antigenele și anticorpii IgG formează complexe circulante (0,5 p), care se depun în vasele mici (0,5 p), activează complementul și produc inflamație (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["OSPE p.12"] }
    ]}
 ],
 bonus: { q: "Explicați mecanismul molecular al midriazei active.", ans: "α1 (Gq) → ↑ PLC → ↑ IP3 + DAG → ↑ Ca²⁺ intracelular → contracția mușchiului radial al irisului → midriază.", src: ["LP 3 · c7", "OSPE p.16"] }
},
{
 id: 19, titlu: "Bariera hematoencefalică · tipuri de antagoniști · toleranță la opioide",
 subiecte: [
  { dom: "FC", stem: "Un pacient cu boala Parkinson primește un precursor care, prin decarboxilare, se transformă în dopamină. I se asociază un inhibitor al decarboxilazei, ca să se evite efectele periferice ale dopaminei.",
    items: [
     { q: "De ce se administrează precursorul și nu dopamina însăși?", ans: "Precursorul traversează bariera hematoencefalică (0,5 p), dopamina nu (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 1 · c4"] },
     { q: "De ce inhibitorul nu împiedică formarea dopaminei și în creier?", ans: "Inhibitorul nu traversează bariera hematoencefalică (0,5 p), deci blochează conversia doar la periferie (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 1 · c4"] },
     { q: "Numiți două proprietăți care permit unei substanțe să traverseze membranele.", ans: "Oricare două, câte 0,5 p: liposolubilă, neionizată, nelegată de proteine.", acc: "", p: [0, 0.5, 1], n: 2, src: ["LP 1 · De reținut"] }
    ]},
  { dom: "FD", stem: "Substanțele X și Y blochează același receptor. X se leagă de situsul activ și concurează cu mediatorul. Y se leagă de un alt situs și blochează steric situsul mediatorului. O a treia substanță, Z, reduce activitatea receptorului sub nivelul bazal.",
    items: [
     { q: "Ce tip de antagonist este fiecare dintre X și Y?", ans: "X – antagonist competitiv (0,5 p); Y – antagonist necompetitiv (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · Interacțiunea ligand-receptor", "OSPE p.7"] },
     { q: "Ce activitate intrinsecă au X și Y?", ans: "α = 0 (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 3 · Interacțiunea ligand-receptor"] },
     { q: "Ce tip de ligand este Z și cum acționează?", ans: "Agonist invers (0,5 p); reduce activitatea constitutivă a receptorului, stabilizând conformația inactivă (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.7"] },
     { q: "Ce efect are un antagonist asupra activității constitutive a receptorului, spre deosebire de Z?", ans: "Blochează agonistul fără să modifice activitatea constitutivă (1 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.7"] }
    ]},
  { dom: "FT", stem: "O persoană folosește repetat un agonist al receptorilor opioizi și are nevoie de doze tot mai mari pentru același efect. Când consumul se oprește brusc, apar simptome opuse celor produse de substanță.",
    items: [
     { q: "Ce fenomen explică nevoia de doze crescute și prin ce mecanism?", ans: "Toleranță prin mecanism farmacodinamic (0,5 p): stimularea excesivă a receptorilor produce down-regulation (1 p).", acc: "", p: [0, 0.5, 1.5], src: ["OSPE p.13"] },
     { q: "Cum se numesc simptomele de la întrerupere și ce tip de dependență indică?", ans: "Sindrom de abstinență (0,5 p), dependență fizică (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse", "OSPE p.13"] }
    ]}
 ],
 bonus: { q: "Descrieți activarea proteinei G după legarea agonistului de receptor.", ans: "În stare inactivă proteina G leagă GDP; după legarea agonistului schimbă GDP cu GTP, iar subunitatea α se disociază de βγ și influențează efectorul (adenilat-ciclază, fosfolipază C sau canal ionic), cu formarea de mesageri secunzi.", src: ["OSPE p.8", "LP 3 · c3"] }
},
{
 id: 20, titlu: "Deplasare de pe albumină · agonist β2 sistemic · reacții independente de doză",
 subiecte: [
  { dom: "FC", stem: "Un pacient tratat cu un anticoagulant oral, legat de proteinele plasmatice în proporție de peste 90%, primește pentru dureri articulare un antiinflamator care se leagă de aceleași situsuri, tot peste 90%.",
    items: [
     { q: "Explicați interacțiunea.", ans: "Antiinflamatorul ocupă situsurile de legare ale anticoagulantului (0,5 p) → crește fracția liberă a anticoagulantului (0,5 p) → supradozare relativă, deși doza este corectă (0,5 p).", acc: "", p: [0, 0.5, 1.5], src: ["OSPE p.1", "LP 1 · c7"] },
     { q: "Ce risc clinic apare?", ans: "Risc de sângerare (0,5 p).", acc: "", p: [0, null, 0.5], src: ["OSPE p.1"] },
     { q: "Ce stare patologică ar crește acest risc chiar fără antiinflamator?", ans: "Hipoalbuminemia (0,5 p).", acc: "„cașexie, insuficiență hepatică sau renală”.", p: [0, null, 0.5], src: ["OSPE p.1"] }
    ]},
  { dom: "FD", stem: "O substanță cu afinitate pentru receptorii β2 și cu activitate intrinsecă se administrează sistemic.",
    items: [
     { q: "Ce efect are asupra vaselor de sânge?", ans: "Vasodilatație (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 3 · tabel Rp adrenergici", "OSPE p.15"] },
     { q: "Ce efect are asupra glicemiei și prin ce mecanism?", ans: "Glicogenoliză în ficat și mușchi striați (0,5 p) → hiperglicemie (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · tabel Rp adrenergici"] },
     { q: "Ce efect are pe receptorii β2 presinaptici?", ans: "Stimulează eliberarea de noradrenalină prin feed-back pozitiv (1 p).", acc: "", p: [0, 0.5, 1], src: ["LP 3 · tabel Rp adrenergici"] },
     { q: "Cu ce proteină G sunt cuplați receptorii β2 și ce enzimă influențează?", ans: "Gs (0,5 p); stimulează adenilat-ciclaza (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["OSPE p.8", "OSPE p.15"] }
    ]},
  { dom: "FT", stem: "Pacientul de la subiectul 2 dezvoltă hiperglicemie, mai accentuată la doze mari.",
    items: [
     { q: "Ce tip de reacție adversă este? Argumentați.", ans: "Efect secundar (0,5 p): neintenționat, dependent de mecanismul de acțiune (0,5 p).", acc: "", p: [0, 0.5, 1], src: ["LP 4 · Reacții adverse"] },
     { q: "Este dependentă de doză?", ans: "Da (0,5 p).", acc: "", p: [0, null, 0.5], src: ["LP 4 · Reacții adverse"] },
     { q: "Numiți trei tipuri de reacții adverse independente de doză.", ans: "Câte 0,5 p: toleranța înnăscută (reactivitate scăzută, idiosincrazie); intoleranța înnăscută (idiosincrazie); intoleranța dobândită (alergie).", acc: "„reacții idiosincrazice”, „reacții alergice”, „extremele distribuției gaussiene”.", p: [0, 0.5, 1.5], n: 3, src: ["LP 4 · Reacții adverse"] }
    ]}
 ],
 bonus: { q: "Ce efect are stimularea receptorilor β3 (Gs) din adipocite și din vezica urinară?", ans: "Lipoliză în adipocite; relaxarea musculaturii netede a vezicii urinare.", src: ["LP 3 · tabel Rp adrenergici"] }
}
];

VARIANTE.push(...VARIANTE2);
if (typeof module !== "undefined") module.exports = VARIANTE;
