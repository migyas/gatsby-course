import React from "react"
import Icons from "../components/SocialLinks/Icons"
import links from "../components/SocialLinks/content"

import * as S from "../components/About/styled"
import * as SL from "../components/SocialLinks/styled"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const aboutSEO = data.markdownRemark

  return (
    <Layout>
      <SEO
        title="Sobre mim"
        description=" Tudo sobre mim, minhas habilidades e trajetoria"
        image={aboutSEO.frontmatter && aboutSEO.frontmatter.image}
      />
      <S.MainContent>
        <S.AboutHeader>
          <S.AboutTitle>Sobre Mim</S.AboutTitle>
          <S.AboutDate>
            Meu nome é Willian Justen de Vasconcellos, nasci em Petrópolis/RJ e
            sou instrutor na <S.AboutLink to="#">Udemy</S.AboutLink>, além de
            ser um nômade digital e tirar{" "}
            <S.AboutLink to="#">algumas fotos</S.AboutLink> por onde vou.{" "}
          </S.AboutDate>
          <S.AboutDate>
            Já passei por empresas como <S.AboutLink to="#">Toptal</S.AboutLink>
            , <S.AboutLink to="#">Huge</S.AboutLink>,{" "}
            <S.AboutLink to="#">Globo.com</S.AboutLink>,{" "}
            <S.AboutLink to="#">Queremos</S.AboutLink> e outras mais. Cursei
            Tecnologia da Informação na Faeterj-Petrópolis no ano de 2014, mas
            curiosamente, essa não foi minha primeira faculdade, eu também fiz
            Química Industrial na Uff. Sim, você leu certo, eu realmente fiz
            Química… E por que eu trabalho com web agora? Ah… porque web é
            incrível e a facilidade em aprender cada dia mais, me deixa mais
            feliz com a escolha que fiz.{" "}
          </S.AboutDate>
          <S.AboutDate>
            Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo
            livre, gosto de ensinar meus amigos sobre alguma coisa que aprendi,
            acho que por isso nasceu esse blog.
          </S.AboutDate>
          <S.AboutDescription>Habilidades</S.AboutDescription>
          <S.AboutList>
            <S.AboutItems>HTML e Template Languages</S.AboutItems>
            <S.AboutItems>Design Responsivo (Mobile First)</S.AboutItems>
            <S.AboutItems>CSS (Stylus, Sass, Less, PostCSS)</S.AboutItems>
            <S.AboutItems>
              Css Frameworks (Bootstrap, Foundation, Bulma)
            </S.AboutItems>
            <S.AboutItems>
              Javascript (Design Patterns, Testes, ES6/7)
            </S.AboutItems>
            <S.AboutItems>ReactJS / Redux / Flux</S.AboutItems>
            <S.AboutItems>NodeJS</S.AboutItems>
            <S.AboutItems>
              Automatizadores (Grunt, Gulp, Webpack, Parcel)
            </S.AboutItems>
            <S.AboutItems>Git</S.AboutItems>
            <S.AboutItems>Python</S.AboutItems>
            <S.AboutItems>Ruby / Rails</S.AboutItems>
            <S.AboutItems>MySQL - MongoDB</S.AboutItems>
            <S.AboutItems>Scrum and Kanban</S.AboutItems>
            <S.AboutItems>TDD e Continuous Integration</S.AboutItems>
            <S.AboutItems>O que eu não sei, aprendo rápido =)</S.AboutItems>
          </S.AboutList>
          <S.AboutDescription>Contato</S.AboutDescription>
          <S.AboutDate>
            Você pode entrar em contato comigo através de qualquer uma das
            minhas redes sociais.
          </S.AboutDate>
          <SL.SocialLinksWrapper>
            <SL.SocialLinksList>
              {links.map((link, i) => {
                const Icon = Icons[link.label]

                return (
                  <SL.SocialLinksItem key={i}>
                    <SL.SocialLinksLink
                      href={link.url}
                      title={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SL.IconWrapper>
                        <Icon />
                      </SL.IconWrapper>
                    </SL.SocialLinksLink>
                  </SL.SocialLinksItem>
                )
              })}
            </SL.SocialLinksList>
          </SL.SocialLinksWrapper>
        </S.AboutHeader>
      </S.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query aboutSEO {
    markdownRemark {
      frontmatter {
        image
      }
    }
  }
`

export default AboutPage
