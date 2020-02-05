import React from 'react'
import styled from 'styled-components'

import { Subtitle } from '../../components/Typography'

import { media } from '../../styles/styleUtils'

const Wrapper = styled.div`
  margin-top: 80px;
  ${media.md`
    margin-top: 40px;
  `};
`

const Section = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 60px;
  margin-top: 80px;
  ${media.lg`
    grid-gap: 10px;
  `}
  ${media.md`
    grid-template-columns: 1fr;
    margin-top: 40px;

  `}
`

const Content = styled.div``

const Item = styled.div`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`

const ItemTitle = styled.h2`
  color: white;
  font-size: 31px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 0 10px 0;
  ${media.xl`
    font-size: 26px;
  `}
  ${media.md`
    font-size: 21px;
  `}
  ${media.sm`
    font-size: 16px;
  `}
`

const ItemDescription = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 0 10px 0;
  ${media.md`
    font-size: 16px;
  `}
  ${media.sm`
    font-size: 14px;
  `}
`

const ItemText = styled.p`
  color: white;
  line-height: 32px;
  font-size: 21px;
  font-weight: 400;
  margin: 10px 0;
  ${media.xl`
    font-size: 18px;
    line-height: 28px;

  `}
  ${media.md`
    font-size: 16px;
    line-height: 26px;
  `}
  ${media.sm`
    font-size: 14px;
    line-height: 24px;
  `}
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const StyledAnchor = styled.a`
  color: white;
`

const Bold = styled.span`
  font-weight: 700;
`

export default () => (
  <Wrapper>
    <Section>
      <Subtitle>Profile</Subtitle>
      <Content>
        <Item>
          <ItemText>
            I have been working with web technologies for over 5 years now.
            During this time I've taken part in various different projects from
            real-time web applications to WebGL and data visualization. I have a
            deep understanding of current web technology ecosystem and modern
            web development stacks, especially with MERN (MongoDB, Express,
            React/Redux, Node).
          </ItemText>
        </Item>
      </Content>
    </Section>
    <Section>
      <Subtitle>Experience</Subtitle>
      <Content>
        <Item>
          <ItemTitle>Gnonce - Co-Founder</ItemTitle>
          <ItemDescription>Aug 2018 - Present</ItemDescription>
          <ItemText>
            I started my entrepreneurial career at Gnonce while I was still
            finishing up my studies in the University of Jyväskylä. Gnonce is a
            software consulting company and startup incubator founded by three
            IT students working on the same academic research group. After my
            BSc I started to work at Gnonce full time, providing my technical
            skills for startup joint ventures and subcontracting clients
            cross-industry.
          </ItemText>
          <ItemText>
            Some of my most important clients include well known publicly listed
            companies in the banking and the construction industry.
          </ItemText>
          <ItemText>
            Things we are very passionate about:{' '}
            <Bold>
              modern web applications, software architecture, rapid prototyping,
              agile methods, software startups
            </Bold>
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>Kauppa Käy LKV - Lead Frontend Developer</ItemTitle>
          <ItemDescription>
            May 2019 - Jan 2020 | Gnonce's joint venture
          </ItemDescription>
          <ItemText>
            Worked as a lead frontend developer for a web application made to
            revolutionize the real estate investing. My responsibility was to
            build the SSR (server-side rendered) web application and configure
            CI/CD pipelines to support continuous and agile software releases. I
            also helped team members to grasp the SSR paradigm.
          </ItemText>
          <ItemText>
            In just under five months our team of four developers was able to
            design and deliver a fully working real-time progressive web
            application that is used by thousands of users on a daily basis. The
            live web application can be found from:{' '}
            <StyledAnchor
              href="https://kauppa.sijoitusasunnot.com"
              target="_blank"
            >
              https://kauppa.sijoitusasunnot.com
            </StyledAnchor>
          </ItemText>
          <ItemText>
            Relevant tech:{' '}
            <Bold>
              Next.js, React, Redux, GraphQL, Pusher, Typescript, Node.js, Express, Cypress, Jest,
              Docker, CircleCi, Heroku
            </Bold>
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>University of Jyväskylä - Research assistant</ItemTitle>
          <ItemDescription>Jun 2018 - Jun 2019</ItemDescription>
          <ItemText>
            After two years of my studies I started working in academic research
            group. I worked as a lead developer for multiple projects related to
            decentralized app development, and also created and maintained a
            private Ethereum network which was used for development purposes by
            our research group. One of my major responsibilities was to teach
            smart contract development for over 60 BSc & MSc students on a
            decentralized application development course.
          </ItemText>
          <ItemText>
            <Bold>
              My biggest non-technical accomplishment in this job was to get a
              funding worth of 100 000€ for our research project.
            </Bold>
          </ItemText>
          <ItemText>
            Relevant tech:{' '}
            <Bold>
              React, Redux, Node.js, Express, MongoDB, Ethereum, IPFS
            </Bold>
          </ItemText>
        </Item>
        <Item>
          <ItemTitle>Web developer - Freelancer</ItemTitle>
          <ItemDescription>Oct 2014 - Aug 2018</ItemDescription>
          <ItemText>
            Worked as a freelance web developer creating websites for my
            customers. During this time I designed, developed and deployed
            various different websites mostly using HTML, CSS and Javascript.
            Starting this as a high school graduate, I gained a lot of early
            career experience working with clients while improving my web
            development skills.
          </ItemText>
          <ItemText>
            Relevant tech:{' '}
            <Bold>
              HTML5, CSS, SASS, Javascript, jQuery, Gulp.js, Bootstrap,
              Wordpress
            </Bold>
          </ItemText>
        </Item>
      </Content>
    </Section>
    <Section>
      <Subtitle>Education</Subtitle>
      <Content>
        <Item>
          <ItemTitle>
            University of Jyväskylä - BSc, Information Technology
          </ItemTitle>
          <ItemDescription>Sep 2015 - Dec 2018</ItemDescription>
        </Item>
        <Item>
          <ItemTitle>High School - Technology line</ItemTitle>
          <ItemDescription>2012- 2015</ItemDescription>
          <ItemText>
            In addition to my high school studies I have completed over ten
            programming courses with excellent success and diplomas.
          </ItemText>
        </Item>
      </Content>
    </Section>
    <Section>
      <Subtitle>Language</Subtitle>
      <Row>
        <Item>
          <ItemTitle>Finnish</ItemTitle>
          <ItemDescription>Native</ItemDescription>
        </Item>
        <Item>
          <ItemTitle>English</ItemTitle>
          <ItemDescription>Proficient</ItemDescription>
        </Item>
        <Item>
          <ItemTitle>Swedish</ItemTitle>
          <ItemDescription>Basics</ItemDescription>
        </Item>
      </Row>
    </Section>
  </Wrapper>
)
