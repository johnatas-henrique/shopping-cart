const headers = { Accept: 'application/json' };
const QUERY = 'computador';
let resultados = [];
const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Requisito 1
const nomeSessionStorage = () => {
  const inputNome = document.querySelector('.input-name');
  inputNome.addEventListener('blur', () => sessionStorage.setItem('Nome', inputNome.value));
  const sessionExists = sessionStorage.getItem('Nome');
  if (sessionExists) {
    inputNome.value = sessionExists;
  }
}

// Requisito 2
const cookieChecked = () => {
  const inputTerms = document.querySelector('.input-terms');
  const cookieTime = 'Wed, 1 Jan 2021 12:00:00 GMT';
  const cookieName = 'checkbox';
  inputTerms.addEventListener('click', () => {
    if (inputTerms.checked) {
      document.cookie = `${cookieName}=true; ${cookieTime}`;
    } else {
      document.cookie = `${cookieName}=false; ${cookieTime}`;
    }
  });
  if (document.cookie.includes(`${cookieName}=true`)) inputTerms.checked = true;
};

// Requisito 4
function pegaProduto(link, header) {
  fetch(link, header)
  .then((res) => {
    res.json()
    .then((data) => {
      const produto = data;
          const objProduto = createCartItemElement(
            { sku: produto.id, name: produto.title, salePrice: produto.thumbnail });
          const itensCarrinho = document.querySelector('.cart__items');
          itensCarrinho.appendChild(objProduto);
        });
    });
    .catch(() => console.log('Erro pega Produto'));
}

const adicionarProduto = () => {
  const adiItems = document.querySelectorAll('.item__add');
  adiItems.forEach(adiItem => adiItem.addEventListener('click', (event) => {
    const ItemID = getSkuFromProductItem(event.target.parentNode);
    const endpoint = `https://api.mercadolibre.com/items/${ItemID}`;
    pegaProduto(endpoint, headers);
  }));
}

// Requisito 3
const mostrarProdutos = () => {
  const listaItems = document.querySelector('.items');
  resultados.forEach((resultado) => {
    const objProdutos = createProductItemElement(
      { sku: resultado.id, name: resultado.title, image: resultado.thumbnail }
      );
    listaItems.appendChild(objProdutos);
  });
  adicionarProduto();
}

function pegaLista(link, header) {
  fetch(link, header)
    .then((res) => {
      res.json()
        .then((data) => {
          resultados = data.results;
          mostrarProdutos();
        });
    });
    .catch(() => console.log('Erro'));
}

window.onload = function onload() {
  nomeSessionStorage();
  cookieChecked();
  pegaLista(url, headers);

};
