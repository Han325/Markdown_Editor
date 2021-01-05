import React from "react"
import ReactMarkdown from "react-markdown"
import {
    MarkdownIntroWrapper, 
    MarkdownH1, 
    MarkdownP, 
    MarkdownBg, 
    MarkdownContainer, 
    MarkdownInput, 
    MarkdownResult,
} from "./markdownEditorElements"
import placeholder from "./Placeholder"

class MarkdownEditor extends React.Component {
    constructor(){
        super()
        this.state={
            text:placeholder
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render(){
        return(
            <MarkdownBg>
                <MarkdownIntroWrapper>
                    <MarkdownH1>Markdown Editor</MarkdownH1>
                    <MarkdownP>Version 1.0</MarkdownP>
                </MarkdownIntroWrapper>
                <MarkdownContainer>
                    {/* <MarkdownLabel>Text</MarkdownLabel> */}
                    <MarkdownInput 
                        placeholder="I AM A NIGGER"
                        name= "text"
                        value={this.state.text}
                        onChange={this.handleChange}>
                    </MarkdownInput>
                    <MarkdownResult>
                        <ReactMarkdown
                            source={this.state.text}>
                        </ReactMarkdown>
                    </MarkdownResult>
                </MarkdownContainer>
            </MarkdownBg>
        )
    }
}

export default MarkdownEditor

