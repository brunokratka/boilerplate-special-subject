import React  from "react";
import moment from "moment";
import faker  from "faker";

import PageWrapper  from "../../components/PageWrapper/PageWrapper";
import Row          from "../../components/Row/Row";
import Col          from "../../components/Col/Col";
import Block        from "../../components/block/Block";
import Paragraph    from "../../components/paragraph/Paragraph";
import Quotes       from "../../components/quotes/Quotes";
import Image        from "../../components/image/Image";
import Title        from "../../components/title/Title";
import BgContainer  from "../../components/bg-container/BgContainer";
import Video        from "../../components/video/Video";
import Gallery      from "../../components/gallery/Gallery";
import Expediente   from "../../components/expediente/Expediente";
import { colors }   from "../../resources/styles/colors";
import Timeline     from "../../components/timeline/Timeline";
import TimeLineDate from "../../components/timeline/TimeLineDate";
import ImgCompare   from "../../components/imgCompare/ImgCompare";

const author = "Littlefinger";
const text = faker.lorem.paragraph(10);
const subtitle = "Iose, de Rosane Gurgel, é um dos selecionados para a mostra.";

const mockExped = [
  {
    secao: "Redação",
    colaboradores: [
      { nome: "Varys, the Spider", funcao: "Diretor Geral de Jornalismo" },
      { nome: "Litlefinger", funcao: "Diretor Geral de Jornalismo" },
      { nome: "Tyrion Lannister", funcao: "Coordenação" },
      { nome: "Jorah Mormont", funcao: "Editor Executivo" },
      { nome: "Meister Luwin", funcao: "Revisão" },
      { nome: "Samwell Tarly", funcao: "Paragraphos" },
      { nome: "Bran Stark", funcao: "Fotos" }
    ]
  },
  {
    secao: "Desenvolvimento",
    colaboradores: [
      { nome: "Arenuza Goulart", funcao: "Diretora de Novos Produtos" },
      { nome: "Aline Marques", funcao: "Gerente de Novos Produtos" },
      { nome: "Breno Martins", funcao: "Designer" },
      { nome: "Ramon Madeira", funcao: "Ilustração" },
      { nome: "Jordão França", funcao: "Vegetariano" },
      { nome: "Bruno Kitkat", funcao: "Sommelier de shampoo" },
      { nome: "Rafhael de Oliveira", funcao: "Front-end" }
    ]
  }
];

const mockModalContent = [
  {
    wall: true,
    title: "Parede",
    img: "http://via.placeholder.com/350x150",
    topNormalParagraph: "Cada parede tem",
    topBoldParagraph: "50cm de espessura",
    bottomNormalParagraph:
      "A caixa é hermeticamente fechada e construída para durar, no mínimo",
    bottomBoldParagraph: "300 anos"
  },
  {
    wall: false,
    figureOnly: true,
    title: "Capsula",
    img: "http://via.placeholder.com/350x150"
  },
  {
    wall: false,
    title: "SOLO",
    img: "http://via.placeholder.com/350x150",
    text:
      "Um dos motivos para o local ser escolhido foi a estrutura do solo, rochoso. No local funcionava uma pedreira do Estado, de onde era extraída brita"
  },
  {
    wall: false,
    title: "ÁGUA SUBTERRÂNEA",
    img: "http://via.placeholder.com/350x150",
    text:
      "São 4 tubos de 30 metros de profundidade que atingem o lençol freático em pontos estratégicos do depósito para captação e monitoramento da água"
  }
];

const datesTimeLine = [
  new TimeLineDate("1987-09-13", [
    {
      type: "Paragraph",
      props: {
        text:
          "Roberto dos Santos Alves e Wagner Mota Pereira removem a unidade de cesioterapia do Instituto Goiano de Radioterapia, na Avenida Paranaíba. Eles tentam separar o chumbo da parte que continha a fonte radioativa. Wagner, usando ferramentas inadequadas, consegue romper a “janela de irídio” de 1 mm de espessura, da fonte de césio, no quintal da casa de Roberto (Rua 57, Setor Central)"
      }
    }
  ]),
  new TimeLineDate("1987-09-15", [
    {
      type: "Image",
      props: {
        src: "http://via.placeholder.com/350x150"
      }
    },
    {
      type: "Paragraph",
      props: {
        text:
          "Wagner procura assistência médica, com queimaduras na mão e no braço"
      }
    }
  ])
];

const galleryContent = [
  {
    img: "http://via.placeholder.com/350x150",
    description: "Comida de Vó"
  },
  {
    img: "http://via.placeholder.com/350x150",
    description: "Comida de Vó"
  },
  {
    img: "http://via.placeholder.com/350x150",
    description: "Comida de Vó"
  },
  {
    img: "http://via.placeholder.com/350x150",
    description: "Comida de Vó"
  },
  {
    img: "http://via.placeholder.com/350x150",
    description: "Comida de Vó"
  },
  {
    img: "http://via.placeholder.com/350x150",
    description: "Comida de Vó"
  },
  {
    img: "http://via.placeholder.com/350x150",
    description: "Comida de Vó"
  }
];

function Components() {
  return (
    <PageWrapper>
      <Block>
        <Title title="Expediente" color={colors.primary} />
        <Expediente data={mockExped} />
        <Title title="Olho" color={colors.primary} />
        <Paragraph text={text} eye={true} />
        <Title title="Paragrapho uma coluna" color={colors.primary} />
        <Paragraph text={text} />
        <Paragraph text={text} />
        <Title title="Paragrapho duas colunas" color={colors.primary} />
        {/* primeira coluna */}
        <Row>
          <Col desktop={1 / 2} tablet={1}>
            <Paragraph text={text} />
          </Col>
          {/* segunda coluna */}
          <Col desktop={1 / 2} tablet={1}>
            <Paragraph text={text} />
          </Col>
        </Row>
      </Block>

      <Block fullWidth={true}>
        <BgContainer color="#cccccc">
          <Video
            sources={[
              "http://www.quirksmode.org/html5/videos/big_buck_bunny.webm",
              "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4"
            ]}
          />
        </BgContainer>
      </Block>

      <Block>
        <Title title="Quotes" color={colors.primary} />
        <Quotes text={text} author={author} />
        <Title title="Image + Legenda" color={colors.primary} />
        <Image
          src="http://i0.kym-cdn.com/entries/icons/facebook/000/014/959/Screenshot_116.jpg"
          subtitle={subtitle}
        />
        <Title title="Image + Legenda [Retangular]" />
        <Image
          src="http://www.funny-animalpictures.com/media/content/items/images/funnydogs0063_O.jpg"
          subtitle="Devair Alves Ferreira."
          rectangle={true}
        />
        <Title title="Imagem + Paragrapho" />
        <Row>
          <Col desktop={1 / 2} tablet={1}>
            <Image src="http://i0.kym-cdn.com/entries/icons/facebook/000/014/959/Screenshot_116.jpg" />
          </Col>
          {/* segunda coluna */}
          <Col desktop={1 / 2} tablet={1}>
            <Paragraph text={text} />
          </Col>
        </Row>
        <Title title="Timeline" color={colors.primary} />
        <Timeline dates={datesTimeLine} />
      </Block>

      <Block fullWidth={true}>
        <Title title="Gallery" color={colors.primary} />
        <Gallery images={galleryContent} />
      </Block>
      <Block fullWidth={true} hAlign="center">
        <Title title="ImgCurtain" color={colors.primary} />
        <ImgCompare
            background="http://www.funny-animalpictures.com/media/content/items/images/funnydogs0063_O.jpg"
            foreground="https://www.rd.com/wp-content/uploads/sites/2/2017/06/05-dog-breed-Safety-Tips-to-Keep-Your-Dog-in-Top-Shape-This-Summer-508549561-Yevgen-Romanenko.jpg"
        />
      </Block>
    </PageWrapper>
  );
}

export default Components;
