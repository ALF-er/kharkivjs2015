import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, S
} from "../src/spectacle";

import preloader from "../src/utils/preloader";


const images = {
  alf: require("./alf.jpg"),
  react: require("./logo_react.svg"),
  flux: require("./logo_flux.svg")
};

preloader([images.alf, images.react, images.flux]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800} progress="bar">

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Почему
          </Heading>
          <Heading size={1} fit caps>
            React и Flux
          </Heading>
          <Heading size={1} fit caps textColor="black">
            это хорошо
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Layout>
            <Fill>
              <Image src={images.alf.replace("/", "")} height="293px"/>
            </Fill>
            <Fill>
                <Heading size={1} fit textColor="primary">
                    Илья Сегеда <S type="italic">aka ALFer</S>
                </Heading>
                <List textColor="primary">
                    <ListItem>В фронтенде с 2001</ListItem>
                    <ListItem>Занимался Web/Flash до 2010</ListItem>
                    <ListItem>Занимаюсь JavaScript с 2007</ListItem>
                </List>
                <List textColor="primary">
                    <ListItem>Twitter: <Link href="http://twitter.com/ALF_er">@ALF_er</Link></ListItem>
                    <ListItem>Чаты: Illia Segeda aka ALFer</ListItem>
                </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={1} fit>
            Немного истории
          </Heading>
          <List>
            <ListItem>В 2003 Brad Fitzpatrick выпустил Memcached, и показал как устроен LiveJournal</ListItem>
            <ListItem>В 2004 Google опубликовал описание MapReduce, и показал как обрабатывать данные</ListItem>
            <ListItem>В 2007 Amazon опубликовал описание Dynamo, и показал как строить БД</ListItem>
            <ListItem>В 2010 Twitter свитчнулся на client-side templating, превратив сервер в просто API</ListItem>
            <ListItem><Appear>В 2013 Facebook презентует React</Appear></ListItem>
          </List>

          {/*<CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"/>*/}
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
            <Image src={images.react} height="400px" margin="-50px 0 0 0"/>

            <Heading size={1} fit textColor="primary" margin="-100px 0 0 0">
                React
            </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              Абстракция над DOM
            </Heading>
            <Text size={1} lineHeight={1} margin="20 0 0 0" textColor="tertiary">что избавило от необходимости использовать шаблонизаторы</Text>
            {/*<Heading size={1} caps fit textColor="tertiary">*/}
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              Компоненты
            </Heading>
            <Heading size={1} caps fit textColor="primary">
              и их композиция
            </Heading>
            <Text size={1} lineHeight={1} margin="20 0 0 0" textColor="tertiary">что позволило создавать по настоящему реиспользуемые функциональные блоки приложения</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              Декларативность
            </Heading>
            <Heading size={1} lineHeight={1.5} caps fit textColor="primary">
              и идемпотентность
            </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              Функциональность
            </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              Изоморфность
            </Heading>
            <Heading size={1} caps fit textColor="primary">
              она же Универсальность
            </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              Различные compile targets
            </Heading>
            <Heading size={1} caps fit textColor="primary">
              и различные compile source
            </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Image src={images.flux} height="400px" margin="-150px 0 0 0"/>

            <Heading size={1} fit margin="-100px 0 0 0">
                Flux
            </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} caps fit>
                Предсказуемость
            </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} caps fit>
                Однонаправленность
            </Heading>
            <Heading size={1} caps fit>
                потока данных
            </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} caps fit>
                Отсутствие two-way binding
            </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} caps fit>
                Стало проще понять
            </Heading>
            <Heading size={1} caps fit>
                как приложение устроено
            </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} caps fit>
                Undo/Redo и Report bug
            </Heading>
            <Heading size={1} caps fit>
                из коробки
            </Heading>
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="black">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            THANKS
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
