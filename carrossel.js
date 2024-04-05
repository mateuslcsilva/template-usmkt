export const next = () => {
    const transform = Number(document.querySelector('#itemsContainer').style.transform.replace(/\D/g, "")) + document.querySelector('#carrossel').offsetWidth + 375 <= document.querySelector('#itemsContainer').offsetWidth ? Number(document.querySelector('#itemsContainer').style.transform.replace(/\D/g, "")) + 375 : 0;
    console.log(transform)
    if(document.querySelector('#itemsContainer')) document.querySelector('#itemsContainer').style.transform = `translateX(-${transform}px)`
}

export const previous = () => {
    const transform = 
    Number(document.querySelector('#itemsContainer').style.transform.replace(/\D/g, "")) - 375 < 0 ? 
    Number(document.querySelector('#itemsContainer').offsetWidth) - document.querySelector('#carrossel').offsetWidth
    : Number(document.querySelector('#itemsContainer').style.transform.replace(/\D/g, "")) - 375;
    if(document.querySelector('#itemsContainer')) document.querySelector('#itemsContainer').style.transform = `translateX(-${transform}px)`
}

export const carrossel = (elemento, opcoes) => {

    document.querySelector(`#${elemento}`).innerHTML += `
        <div id="itemsContainer" class="flex min-w-max h-full relative transition-ease duration-500">
            ${opcoes.data.map(data => mountItemCarrossel(data)).join('')}
        </div>
        <button id="btnPrevious" class="absolute bottom-1/2 translate-y-1/2 left-0 rounded-full p-3 transition-1 hover:scale-[1.1]">
            <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
        </button>
        <button id="btnNext" class="absolute bottom-1/2 translate-y-1/2 right-0 rounded-full p-3 transition-1 hover:scale-[1.1]">
            <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </button>
    `;

    document.querySelector('#btnNext').addEventListener('click', next)
    document.querySelector('#btnPrevious').addEventListener('click', previous)
}

const mountItemCarrossel = (data) => {
    return `
        <div class="flex flex-col justify-between items-center w-[360px] h-[470px] bg-white p-8 mx-2 shadow-xl">
            <img width="310" height="310" src="assets/${data.imagem}"/>
            <div class="relative h-2 w-full flex justify-center">
                <div id="divider"></div>
            </div>
            <h4 class="text-xl font-bold text-darkgray mb-2">${data.texto}</h4>
        </div>
    `;
}