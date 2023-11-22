
const produtos=[
    { 
        id: 1, 
        produto: "Tênis Mizuno Brave 6 - Chumbo",
        preco:"R$199,49",
        descricao:"Aposte no conforto e qualidade do novo Tênis de Corrida da Mizuno para te acompanhar nos seus treinos diários. Com design moderno, o running indicado para caminhadas e corridas leves possui cabedal fabricado com material macio e respirável que garante mais frescor durante o uso. O calcanhar é acolchoado e oferece suporte aos pés enquanto o cadarço garante ajuste eficaz. A entressola em EVA conta com tecnologia que proporciona alto nível de maciez entre uma passada e outra; e o solado de borracha proporciona aderência e tração por onde você passar. Indicado para corredores de pisada neutra, o Tênis Mizuno acompanha os corredores mais ambiciosos na busca pelo melhor pace. Aproveite! ",
        imagem:"https://static.netshoes.com.br/produtos/tenis-mizuno-brave-6/40/2FU-6366-040/2FU-6366-040_zoom1.jpg" 
    },
    { 
        id: 2, 
        produto: "Tênis Nike Court Vision Low Next Nature Masculino - Preto",
        preco:"R$539,49",
        descricao:"DIRETO DA QUADRA.Apaixonado pelo visual clássico do basquete dos anos 80, mas tem uma queda pela cultura acelerada dos jogos de hoje? Conheça o Nike Court Vision Low. Um clássico remixado com pelo menos 20% de materiais reciclados por peso, seu cabedal nítido e camadas costuradas mantêm a alma do estilo original. O colarinho baixo macio mantém a simplicidade e o conforto para o seu mundo.BenefíciosFeito com pelo menos 20% de materiais reciclados por peso.Sempre que você vê Nike Sunburst ou o nome Next Nature (NN), você vê mais um passo em nossa jornada em direção ao carbono zero e ao desperdício zero.Utilizando materiais sintéticos, o design apresenta materiais que ecoam os tênis de basquete da década de 1980.O colarinho baixo acolchoado é moderno e proporciona ótima sensação, enquanto as perfurações na região dos dedos e nas laterais acrescentam conforto e respirabilidade.Construção vulcanizada funde o solado e a entressola para um visual simples, que é durável e confortável.Detalhes do ProdutoPerfurações na região dos dedos e lateraisSolado de borracha",
        imagem:"https://static.netshoes.com.br/produtos/tenis-nike-court-vision-low-next-nature-masculino/06/2IC-7367-006/2IC-7367-006_zoom1.jpg" 
    },
    { 
        id: 3, 
        produto: "Tênis Adidas Adistar Td Masculino - Azul",
        preco:"R$299,99",
        descricao:"Contando com 6mm de drop, o Tênis Adidas Adistar Td Masculino é a escolha para corredores intermediários a profissionais. Esse tênis de corrida masculino é feito com materiais tecnológicos e cheios de qualidade garantidas pela Adidas. Com pelo menos 50% confeccionado em material reciclado, esse tênis performance também é um ato de sustentabilidade e consciência para um planeta melhor. O cabedal altamente respirável, conta com forro acolchoado e suporte no calcanhar para estabilidade. A entressola conta com amortecimento misto entre Bounce e Repetitor, ambas oferecem absorção de impactos com leveza e retorno de energia, já o solado em borracha Continental traz a durabilidade e flexibilidade necessárias para a corrida. Combine com um short de corrida e uma camisa de compressão para um look de corredor perfeito. Invista!",
        imagem:"https://static.netshoes.com.br/produtos/tenis-adidas-adistar-td-masculino/08/FB8-4383-008/FB8-4383-008_zoom1.jpg" 
    },
    { 
        id: 4, 
        produto: "Tênis Adidas Barricade Feminino - Branco+Vermelho",
        preco:"R$474,49",
        descricao:"Dê o seu melhor nas quadras de Tênis com esse novo Tênis Adidas Barricade Feminino. Confeccionado em material reciclado para as mulheres que buscam qualidade e conciência no sportwear, para ser usado em todos os tipo de quadra. O cabedal é confeccionado em mesh com aplicação sintética para durabilidade e respirabilidade, forro acolchoado, fechamento anatômico e suporte no calcanhar para estabilidade. A entressola conta com amortecimento Bounce para ótima absorção de impacto e retorno de energia, já o solado frisado em borracha Adiwear com resistência ao desgaste, oferece ótima precisão em movimentos multidirecionais, assim como a placa Torsion System para evitar possíveis torsões. Peça já seu tênis feminino e faça suas melhores jogadas!",
        imagem:"https://static.netshoes.com.br/produtos/tenis-adidas-barricade-feminino/24/FB8-0035-024/FB8-0035-024_zoom1.jpg" 
    },
]
const card=document.createElement('section')
const main=document.querySelector('main')
main.append(card)

const img=document.createElement('img')
const cartao=document.querySelector('section')
cartao.append(img)



img.src=produtos[0].imagem


