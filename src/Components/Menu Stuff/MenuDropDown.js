import React, { Component } from "react";
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from "semantic-ui-react";

class MenuDrop extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    console.log(titleProps);
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          {this.props.title}
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          {this.props.content}
        </AccordionContent>
      </Accordion>
    );
  }
}

export default function CreateAccordion({ title, content }) {
  return <MenuDrop title={title} content={content} />;
}
