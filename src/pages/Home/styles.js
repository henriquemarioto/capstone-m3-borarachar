import styled from "styled-components";

export const Container = styled.div`
    text-align: center;

    h1{
        font-size: 28px;
        background: -webkit-linear-gradient(var(--dark-blue), var(--darker-blue));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        padding-top: 20px;

        span{
            font-weight: normal;
        }
    }

    h2{
        font-weight: bold;
        font-size: 36px;
    }

    p{
        font-size: 14px;
    }
`;

export const ContainerDividir = styled.div`
    img{
        display: block;
        width: 100%;
        margin: auto;
    }
`
export const Dividir = styled.div`
    padding: 20px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    p{
        font-size: 14px;
    }

    span{
        font-weight: bold;
    }
`

export const ContainerRegister = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    Button{
        font-weight: normal;
    }

    p{

        display: flex;
        align-items: center;

        a{
            color: var(--blue);
            text-decoration: none;
        }
    }

    
`

export const ContainerScrollDown = styled.div`
    text-align: center;
    padding-top: 60px;

    a{
        display: block;
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`

export const ContainerVariosServicos = styled(Dividir)`
    padding: 20px;
    background-color: var(--white);
    
`

export const ContainerStreaming = styled.div`
    display: flex;
    justify-content: space-around;
    
`

export const ContainerPlataforma = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: var(--dark-blue);
    color: #fff;

    img{
        width: 70%;
        margin: auto;
    }
`

export const ContainerTime = styled.div`
    background-image: linear-gradient(var(--dark-blue), var(--darker-blue));
    color: #fff;
    padding: 15px 0 0 0 ;

    >p{
        padding: 0 15px;
    }
`

export const ContainerPessoas = styled.div`
    padding: 20px;
    display: flex;
    gap: 20px;

    overflow-x: visible;
    overflow-y: hidden;
`

export const CardPessoa = styled.div`
    width: 100px;

    div{
        width: 100px;
        height: 100px;
        background-color: var(--gray);
        border-radius: 50%;
    }

    p{
        font-weight: bold;
        padding-top: 10px;
    }

    span{
        font-size: 12px;
    }
`

export const Footer = styled.footer`
    background-color: var(--darker-blue);
    color: #fff;
    padding-bottom: 10px;

    p:nth-of-type(1){
        font-size: 12px;

        a{
            color: #fff;
        }
    }

    p:nth-of-type(2){
        font-size: 10px;
        padding-top: 5px;
    }
`
