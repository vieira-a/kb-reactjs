# Sobre
O objetivo deste repositório é manter anotações e exemplos práticos de aprendizado acerca de React JS.

## Anotações gerais e convenções
App.js é utilizado por convenção como o arquivo principal da aplicação, aonde são centralizados todos os outros componentes.
Componentes ficam em pasta chamada components.

A motivação principal de um componente precisa ser reutilizával.

## Props
São valores passados para componentes.
Podemos num componente, pegar valores de propriedades de outro componente.
Cria-se as props no elemento filho. Importa o elemento filho para um elemento o pai. O elemento pai atribui valor ás props.
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

## Eventos no React
Eventos mais utilizados para manipulação de formulários:

**onClick**
**onChange**
**onSubmit**
