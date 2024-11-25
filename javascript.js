const paginas = {
    "inicio": "",
    "sobre": "",
    "servicos": "",
    "contato": "",
};

let conteudo = window.document.getElementById('conteudo');

function navegarpara(pagina){
    conteudo.innerHTML = paginas[pagina];
}