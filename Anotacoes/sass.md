sass --watch ./sass/style.scss:./css/style.css = Para conseguir linkar o arquivo com o outro

**SASS NESTING**

Nesting é como se fosse uma caixa e tem várias coisas dentro dela, por exemplo um card

**SASS:** card{       **CSS:** card h2{}

```
   h2{};           card p{} 

   p{};            card button{} 

   button{}; 

      }; 
```

Assim ocupamos muito mais tempo e nosso código fica um pouco mais fácil para ler

&:hover tem que usar assim para conseguir usar o hover dentro do elemento que você quer

&: também faz o elemento ficar com as propriedades do pai, ótimo para reaproveitar código

button{                        <button class="btn btn-red">Comprar</button>

&:button-red{

}

}

**EXTEND HERANÇA**

Ele herda as propriedades do elemento que ele quer usando **@extend**, vamos supor que temos um botão, só que quero ele com uma cor diferente dos outros então eu usaria

.btn{                        .btn-vermelho{

padding:10px;                @extend .btn;

background:gray;             background:red;

```
}                                     } 
```

**VARIÁVEIS E USE**

Para usar o **@use** se utiliza **@use "./arquivo.scss"**, usar um @use em um Sass global para não precisar conectar todos os arquivos e transformar de uma vez em CSS, para criar uma variável se faz **$nome-da-variavel: propriedade;**, para usar se utiliza assim:

@use "./arquivo.scss";

h1{

color: arquivo.$nome-da-variavel;

}

**MIXIN**

É como uma receita de elementos prontos que posso mudar algum ingrediente para sair diferente ou igual

@mixin "nome" button-style("propriedades que você quer mudar" $color, $background){  button-red{

```
    background:$background;                                                      @include button-style("aqui a cor do color" $color-red, "aqui a cor do background" red); 

    color:$color;                                                                   } 

    padding:10px;                                                              **AVISO**: o @mixin é muito importante porque consegue resumir elementos e reutilizá-los podendo fazer   

    border-radius:x;                                                                  pequenas alterações e deixando mais limpo, verificar se é melhor usar @extend ou @mixin 

    margin:20px;                                                                      melhor usar o mixin, não esquecer que o mixin sempre vai no topo 
```

}

**FUNÇÕES**

Existem várias funções no Sass, tem como criar funções também

**1.FUNÇÃO DARKEN:** serve para deixar as cores mais escuras, se utiliza assim **color: darken(red, 10%);**

**MINIFY**

Serve para deixar o código tudo em uma só linha e assim conseguir fazer o site ficar mais otimizado e rápido

sass ./sass/style.scss:./css/style.css --style compressed

VARIAVEIS

Muito importante separar as cores do seu site, cor primaria, cor secunadria, cor terciaria etc, não esquecer também de diminuir o peso das imagens









