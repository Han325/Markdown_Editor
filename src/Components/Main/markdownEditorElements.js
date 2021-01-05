import styled from "styled-components"

export const MarkdownBg = styled.div`
    height: 100vh;
    background-color: #2E4053;
`

export const MarkdownIntroWrapper = styled.div`
    background-color: #2E4053;
    color: white;
    position: relative;
    left: 50%;
    top:15%;
    width: 700px;
    text-align: center;
    transform: translate(-50%, -50%);
`


export const MarkdownH1 = styled.h1`
    font-family: monospace;
    font-size: 70px;
    
    `

export const MarkdownP = styled.p`
    font-family: monospace;
    font-size: 25px; 
    `

export const MarkdownContainer = styled.div`
    background-color: #2E4053;
    width:900px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    padding: 10px;
    display: flex;
    `

export const InputSeg = styled.div`
    /* display: flex;
    flex-direction:column;
    margin-left: 25px;
    z-index: -1; */

`
export const PreviewSeg = styled.div`

`
export const MarkdownLabel = styled.div`

`

export const MarkdownInput = styled.textarea`
    /* /* background-color: lightgreen;
    width: 250px;
    resize: none;
    flex:1;
    margin-right: 20px;

    ::placeholder{
        color: red;
    } */

    font-family: Lato;
    font-size:20px;
    color: white;
    border: 3px solid #45B39D;
    outline: none;
    resize: none;
    overflow: auto;
    padding: 25px 30px;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 25px;
    margin-right: 30px;
    background-color: #212F3D;
    width:450px;

    ::-webkit-scrollbar {
        width: 15px;
        background: #1C2833;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 0px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #45B39D; 
        border-radius: 0px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #0E6655; 
        cursor: pointer;

    }
`

export const MarkdownResult = styled.div`
    /* background-color: lightgoldenrodyellow;
    width: 250px;
    flex:1;
    border: none; */
    background-color: #212F3D;
    color: white;
    overflow: auto;
    padding: 1px 25px;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 30px;
    margin-right: 25px;
    width: 450px;
    overflow:auto;
    border: 3px solid #85C1E9;


    blockquote {
        border-left: 3px solid #2471A3;
        color: white;
        padding-left: 5px;
        margin-left: 25px;
    }

    code {
        background: #2471A3;
        padding: 1px 4px 2px 4px;
        font-size: 12px;
        font-weight: bold;
        font-family: Courier New;
    }

    pre {
        background: white;
        padding: 5px 0 5px 5px;
    }

    h1 {
        border-bottom: 2px solid $darkAccent;
    }

    h2 {
        border-bottom: 1px solid $darkAccent;
    }

    table {
        border-collapse: collapse;
    }

    td,
    th {
        border: 2px solid $darkAccent;
        padding-left: 5px;
        padding-right: 5px;
    }

    ::-webkit-scrollbar {
        width: 15px;
        background: #1C2833;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 0px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #85C1E9; 
        border-radius: 0px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #0E6655; 
    }

`