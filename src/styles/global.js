import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }

    :root{
        --black: #000000;
        --black-75: rgba(0, 0, 0, 0.75);
        --black-50: rgba(0, 0, 0, 0.5);
        --black-25: rgba(0, 0, 0, 0.25);
        --white: #FFFFFF;
        --white-75: rgba(255, 255, 255, 0.75);
        --white-50: rgba(255, 255, 255, 0.5);
        --white-15: rgba(255, 255, 255, 0.15);
        --white-0: rgba(255, 255, 255, 0);
        --dark: #121212;
        --light: #F9F9F9;
        --lighter-gray: #F6F3F3;
        --light-gray: #DFDFDF;
        --gray: #C4C4C4;
        --gray-15: rgba(196, 196, 196, 0.15);
        --dark-gray: #797979;
        --darker-blue: #050B2F;
        --dark-blue: #07387B;
        --blue-gradient: #07387B - #050B2F ;
        --blue: #2E7DB4;
        --light-blue: #439AD8;
        --dark-purple-blue: #171D6D;
        --purple-blue: #4D47E9;
        --light-purple-blue: #635EFF;
        --red: #E74C3C;
        --light-red: #FD4634;
        --red-15: rgba(231, 76, 60, 0.15);
        --green: #07BC0C;
        --green-15: rgba(7, 188, 12, 0.15);
        --yellow-15: rgba(241, 196, 15, 0.15);
        --yellow: #F1C40F;
        --purple: #7B61FF;
    }

    *{
        box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        font-family: 'Roboto';
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: var(--light);
        min-height: 100vh;
        min-width: 100%;
    }
    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    button{
        cursor: pointer;
    }
    a{
        cursor: pointer;
      &:hover{
        text-decoration: underline;

      }
    }
`;
