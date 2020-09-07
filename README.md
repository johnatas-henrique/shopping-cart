# Boas vindas ao repositório do projeto de Carrinho de Compras!

## Meus comentários

Esse projeto foi o primeiro momento onde tive contato com **APIs** e com buscar informações em locais externos, também aprendi sobre manipulação de `LocalStorage` e `Cookies` aqui.

Aqui nesse projeto, também aprendi que por vezes, desenvolvedores utilizam o equipamento de quem vai utilizar o site para guardar preferências de uso e informações em geral, através de `Cookies` e `LocalStorage`.

---

## Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _johnatas.henrique@gmail.com_.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos-johnatas
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos-johnatas
  git clone git@github.com:johnatas-henrique/shopping-cart.git
```

3. Dê duplo clique no arquivo **index.html** e o projeto vai abrir em seu navegador, não é necessário instalar nada mais.

---

## Requisitos do projeto

### 1. Salve o nome da pessoa no **SessionStorage**

Você deve salvar o nome da pessoa que utiliza a página na **SessionStorage**.
A pessoa deve digitar o nome dela no campo `<input class="input-name" type="text">` (já presente na página).

### 2. Salve se a pessoa concorda com os termos da sua página nos **Cookies**

Salve se a pessoa concorda com os termos da sua página ou não nos **Cookies**.
A pessoa deve marcar ou desmarcar o campo `<input class="input-terms" type="checkbox">` (já presente na página).

### 3. Listagem de produtos

Você deve criar uma listagem de produtos que devem ser consultados através da API do Mercado Livre.

Você deve utilizar o _endpoint_:
```javascript
"https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
```
onde `$QUERY` deve ser o valor da sua busca.

O retorno desse _endpoint_ será algo no formato `JSON`. A lista de produtos que devem ser exibidos é o _array_ `results` do `JSON`.

Você **deve** utilizar a função `createProductItemElement(product)` para criar os componentes _HTML_ referentes a um produto.

Adicione o elemento retornado da função `createProductItemElement(product)` como filho do elemento `<section class="items">`.

### 4. Adicione o produto ao carrinho de compras

Cada produto na página _HTML_ possui um botão com o nome `Adicionar ao carrinho!`.

Ao clicar nesse botão você deve realizar uma requisição para o _endpoint_:
```javascript
"https://api.mercadolibre.com/items/$ItemID"
```
onde `$ItemID` deve ser o valor `id` do item selecionado.

Quando colocado o id `MLB1341706310` retorno desse _endpoint_ será algo no formato `JSON` também. Preste atenção que o `JSON` deve conter apenas **um** item.

Você **deve** utilizar a função `createCartItemElement()` para criar os componentes _HTML_ referentes a um item do carrinho.

Adicione o elemento retornado da função `createCartItemElement(product)` como filho do elemento `<ol class="cart__items">`.

### 5. Remova o item do carrinho de compras ao clicar nele

Ao clicar no **produto no carrinho de compra**, ele deve ser removido da lista.
Para isso, uma função (já existente) chamada `cartItemClickListener(event)` deve ser implementada com a lógica necessária para realizar a remoção.

### 6. Salve o carrinho de compras no **LocalStorage**

O carrinho de compras deve ser salvo no **LocalStorage**, ou seja, todas as **adições** e **remoções** devem ser abordadas para que a lista atual seja salva.

### 7. Carregue o carrinho de compras através do **LocalStorage** ao iniciar a página

Ao carregar a página, o estado atual do carrinho de compras deve ser carregado do **LocalStorage**.
