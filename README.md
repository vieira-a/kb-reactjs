# Sobre
O objetivo deste repositório é manter anotações e exemplos práticos de aprendizado acerca de React JS.

## Anotações gerais e convenções
App.js é utilizado por convenção como o arquivo principal da aplicação, aonde são centralizados todos os outros componentes.
Componentes ficam em pasta chamada components.

A motivação principal de um componente precisa ser reutilizával.

## Props
São valores passados para componentes: PAI > FILHO
Podemos num componente, pegar valores de propriedades de outro componente.
Cria-se as props como argumento da função do componente filho. Importa o elemento filho para um elemento o pai, informando as props que serão passadas para o elemento filho.

*Declarando o elemento filho passando props pra ele*

`<ElementoFilho nome="Anderson"/>`

*Pegando o props do elemento pai*

```
function(props){
    <h2>{props.nome}<h2/>
}
```
Podem ser passados valores diretos, por variáveis ou states.
## Desestruturando props
Aplica-se quando há várias props a serem passadas.

`<ElementoFilho firstName="Anderson" lastName="Vieira" age={38}/>`

```
function showUser({nome, sobrenome, idade}){
    <h2>Dados do usuário<h2/>
    <ul>
        <li>Nome: {firstName}<li/>
        <li>Sobrenome: {lastName}<li/>
        <li>Idade: {age}<li/>
    </ul>
}
```

**PropTypes** é utilizado para especificar que tipo de objeto é o props. Exemplo de utilização: 
```
function Item({ marca, ano }) {
    return(
        <li>{ marca } - { ano }<li/>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano: PropTypes.number,
}
```

O componente Item recebe duas props: marca e ano. Com `Item.propTypes` define-se o tipo de dado que as props terão.

## Funções como prop
Cria função no elemento pai, passa a função como prop:

`<ComponenteFilho myFunction={showMessage}/>`

No componente filho, essa função pode ser usada num evento

```
function ComponenteFilho({myFunction}){
    <button onClick={myFunction}>Clique aqui</button>
}
```

## CSS com React
A nível global por meio do index.css
A nível de componentes através do CSS modules, criando um CSS para cada componente e nomeando convencionalmente como `Componente.module.css`. Depois, basta importá-lo no componente: `import styles from '.Caminho/Arquivo.css'`

O CSS modules não permite criar classes com hífen `nome-classe`. Usa-se camel case ou underline `nomeClasse` ou `nome_classe`
Com `PropTypes.string.isRequired` é possível fazer com que a props seja obrigatória.

É possível passar argumentos padrão para o props através do **defaultProps**. Exemplo:

```
Item.defaultProps = {
    marca: 'Sem marca',
    ano: '0'
}
```
Com isso. ao criar o componente sem os valores do props, o mesmo receberá os valores padrão pré configurados. Ao usar o defaultProps, o `isRequired` passa a não ser mais obrigatório.

## Fragments
Adicionar componentes a partir das tags `<>` e `</>`
Usado quando há necessidade de ter mais de um elemento pai em um componente.

## Eventos no React
Eventos mais utilizados para manipulação de formulários:

**onClick**
**onChange**
**onSubmit**

## State Lift 
[Aula](https://www.youtube.com/watch?v=01Gj6i2wlS4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=14)

Compartilhamento de estados entre componentes a partir de um componente pai. Usam o mesmo componente, porém, pode utilizar lógicas diferentes para implementar o estado de forma individual.
Exemplo de uso: 

**Cria-se o useState no componente pai** 
Aonde serão recebidos os dados de um input que está em outro componente

`const [nome, setNoma] = useState()`

No elemento pai, é necessário importar o elemento que conterá o input, passando o useState como props para este componente importado, para que possa ser utilizado lá. Com isso, o elemento filho recebe o useState **setNome** como props.

```
return(
    <SeuNome setNome={setNome}>
)
```

**Executa o setNome no input do componente filho**
Para pegar o valor do input e manipular, ou no componente pai, ou em outro componente através de props.

**Recebe o setNome como props passado do elemento pai**

```
function SeuNome({ setNome }){
    return(
        <input type="text" onChange={(e) => setNome(e.target.value)}/>
    )
}
```

Com isso, o valor do input agora será passado através de props para o elemento pai, que poderá utilizar a informação, ou transferi-la para que outro componente possa utilizá-la, também através de props.
Exemplo de como passar adiante:
**No return do elemento pai**
Passa o **nome** adquirido através do **setNome** para outro componente através de props.

```
return(
    <OutroComponente nome={nome}>
)
```
Desta forma, o nome pode ser utilizado em outro componente. Ele foi "roteado" através do elemento pai, pegando de um filho e passando para outro.
A ideia central do State Lift é ter um componente que **altera** (setNome), e um componente que **usa** (nome).

## React Router
Cria páginas e URLs para acessá-las.
A grande vantagem é não ter um page reload.
`npm install react-router-dom`

## React Icons
Pacote de ícones externos

## Encapsulamento de componentes com props
É possível envolver o conteúdo de um componente dentro de outro. Exemplo:
- Cria um componente com o nome Container(props) passando o props pra ele.
- Envolve o conteúdo do componente filho no componente:

 <Container>
    <div>Conteúdo do componente filho</div>
 <Container />

 O uso do container é interessante porque ele irá dimensionar os demais conteúdos do HTML.

## Hooks
Recursos com diversas funções que realizam diferentes ações, e podem ser reaproveitadas, como componentes. 
**useState** guarda e altera o estado de algum dado na aplicação

## Previous state
Nos permite pegar o dado em seu valor original como argumento antes da modificação.

## Renderização condicional

## React e CSS

**CSS Global**
index.css utilizado para configurações gerais, resets, etc.