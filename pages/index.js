import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Input, Header, Icon, Label, Dropdown } from 'semantic-ui-react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const [height, setHeight] = useState(100)
  const [width, setWidth] = useState(100)
  const [radius, setRadius] = useState(0)
  const [borderSize, setBorderSize] = useState(1)
  const [border, setBorder] = useState('solid')

  const borderOptions = [
    {key: 'none', value: 'none', text: 'none'},
    {key: 'hidden', value: 'hidden', text: 'hidden'},
    {key: 'dotted', value: 'dotted', text: 'dotted'},
    {key: 'dashed', value: 'dashed', text: 'dashed'},
    {key: 'solid', value: 'solid', text: 'solid'},
    {key: 'double', value: 'double', text: 'double'},
    {key: 'groove', value: 'groove', text: 'groove'},
    {key: 'ridge', value: 'ridge', text: 'ridge'},
    {key: 'inset', value: 'inset', text: 'inset'},
    {key: 'outset', value: 'outset', text: 'outset'},
  ]

  return (
    <div>
      <Head>
        <title>Border radius preview</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container>
        <Header as="h1" textAlign="center">
          Border Radius Preview
          <Header.Subheader>
            &copy;2021 sumomo-99
          </Header.Subheader>
          <Header.Subheader>
            <Link href="https://github.com/sumomo-99/border-radius-preview">
              <Icon link size="big" name="github" />
            </Link>
            <Link href="https://twitter.com/sumomo_99">
              <Icon link size="big" name="twitter" />
            </Link>
          </Header.Subheader>
        </Header>
      </Container>

      <Container textAlign="center">
        <div>
          <Label>Box size</Label>
          <Input 
            className="inputText"
            type="number"
            icon="resize vertical" 
            iconPosition="left" 
            value={height} 
            onInput={e => setHeight(e.target.value)} />
            px
          <Input 
            className="inputText"
            type="number"
            icon="resize horizontal" 
            iconPosition="left" 
            value={width} 
            onInput={e => setWidth(e.target.value)} />
            px
        </div>
        <div>
          <Label >Radius</Label>
          <Input
            className="range"
            type="range"
            min="0"
            max={Math.min(height, width)/2}
            value={radius}
            onChange={e => setRadius(e.target.value)}
          />
          {radius} px
        </div>
        <div>
          <Label>Border size</Label>
          <Input
            className="range"
            type="range"
            min="1"
            max="20"
            value={borderSize}
            onChange={e => setBorderSize(e.target.value)}
          />
          {borderSize} px
        </div>
        <div>
          <Label>Border</Label>
          <Dropdown 
            options={borderOptions}
            selection
            value={border}
            onChange={(e, v) => setBorder(v.value)} 
          />
        </div>
      </Container>

      <Container>
        <div className="box" 
          style={{
            height: height + 'px',
            width: width + 'px',
            borderRadius: radius + 'px',
            border: borderSize + 'px' + ' ' + border
          }}
        ></div>
      </Container>


      <style jsx global>{`
      .container {
        margin: 2em 0 0 0;
      }

      .range {
        width: 100px;
        margin: 0 1em 0 1em;
      }

      .box {
        margin: 0 auto;
      }

      .inputText {
        width: 7em;
        margin: 0 0 0 1em;
      }
      `}</style>
    </div>
  )
}