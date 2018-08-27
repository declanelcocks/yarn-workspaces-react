import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 24px;
  }

  body {
    /*
      https://meowni.ca/font-style-matcher/

      Styles created using the above tool to try and ensure the FOUT
      (flash of unstyled text) doesn't look drastically different. This
      will try to ensure that when "Lato" is downloaded, it doesn't look
      too different to "sans-serif" and, more importantly, doesn't affect
      the layout of the page too much.
    */
    font-family: Tahoma, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.65;
    letter-spacing: 0.2px;
    word-spacing: 1.55px;

    h1, h2, h3, h4, h5, h6 {
      font-family: Georgia;
      word-spacing: -1.45px;
      letter-spacing: -0.6px;
    }

    &.fontloaded {
      font-family: 'Roboto', Tahoma, sans-serif;
      font-size: 1rem;
      line-height: 1.5rem;
      letter-spacing: 0px;
      word-spacing: 0px;

      h1, h2, h3, h4, h5, h6 {
        font-family: 'Source Serif Pro', Georgia, sans-serif;
        word-spacing: 0px;
        letter-spacing: 0px;
      }
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  p, ul, ol, pre, table, blockquote {
    margin-top: 0rem;
    margin-bottom: 1.75rem;
  }

  ul ul, ol ol, ul ol, ol ul {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  ul {
    list-style-type: none;

    li {
      display: inline;
      margin: 0;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`
