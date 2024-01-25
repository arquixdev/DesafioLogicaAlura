let submit = document.querySelector('#name');
let botonCopiar = document.querySelector('#boton-copiar');

function criptografar() {
    let palavraCripto = submit.value;
    let palavraCrip = '';

    for (let i = 0; i < palavraCripto.length; i++) {
        let letra = palavraCripto[i];

        if(letra === 'a'){
            letra = 'ai';
        } else if (letra === 'e'){
            letra = 'enter';
        } else if (letra === 'i'){
            letra = 'imes';
        } else if (letra === 'o'){
            letra = 'ober';
        } else if (letra === 'u'){
            letra = 'ufat';
        } else {
            letra = letra;
        };

        palavraCrip += letra;
    }
    ocultarPalavra();
    mostrarInner(palavraCrip);
 
};


function descriptografar() {
    let palavraCripto = submit.value;
    let palavraDes = '';

    for (let i = 0; i < palavraCripto.length; i++) {
        let letra = palavraCripto[i];
    
        if(letra === 'a'){
            if (palavraCripto[i+1] === 'i') {
                letra = letra;
                i +=1
            }
        };
    
        if(letra === 'e'){
            if (palavraCripto[i+1] === 'n' && palavraCripto[i+2] === 't' && palavraCripto[i+3] === 'e' && palavraCripto[i+4] === 'r') {
                letra = letra;
                i += 4
            } 
        };
    
        if(letra === 'i'){
            if (palavraCripto[i+1] === 'm' && palavraCripto[i+2] === 'e' && palavraCripto[i+3] === 's') {
                letra = letra;
                i +=3
            } 
        };
    
        if(letra === 'o'){
            if (palavraCripto[i+1] === 'b' && palavraCripto[i+2] === 'e' && palavraCripto[i+3] === 'r') {
                letra = 'o';
                i += 3
            } 
        };
    
        if(letra === 'u'){
            if (palavraCripto[i+1] === 'f' && palavraCripto[i+2] === 'a' && palavraCripto[i+3] === 't') {
                letra = 'u';
                i +=4
            } 
        }
        palavraDes += letra;
    };
    ocultarPalavra();
    mostrarInner(palavraDes);
};

function ocultarPalavra(){
    let palavra = document.getElementById('mensagem-ocultar');
    palavra.style.display = 'none';
}

function mostrarInner(palavra){
    let inner = document.getElementById('msg');
    inner.innerHTML = palavra;
};

function copiar() {
    const textoAcopiar = document.getElementById("msg");
    const rango = document.createRange();
    rango.selectNode(textoAcopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(rango);
    document.execCommand("copy");
    alert("Copiado com Sucesso!");
}

let botonCriptografar = document.querySelector('#botonCrip');

let botonDescriptografar = document.querySelector('#botonDescrip');

botonCriptografar.onclick = criptografar;

botonDescriptografar.onclick = descriptografar;

botonCopiar.onclick = copiar;



