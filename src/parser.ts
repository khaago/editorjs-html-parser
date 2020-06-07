import * as _ from "lodash";
import {
  EditorJsDoc,
  Block,
  BlockTypes,
  Header,
  Paragraph,
  Image,
  Link,
  List,
  Raw,
  Warning,
  Quote,
} from "./types/editor.types";

export const parse = (data: EditorJsDoc): string => {
  // console.log(JSON.stringify(data.blocks[0].data, null, " "));
  const blocks = data.blocks;
  let html = "<div>";
  _.forEach(blocks, (block) => {
    html += parseBlock(block);
  });
  html += "</div>";
  console.log(html)
  return html;
};

function parseBlock(block?: Block<BlockTypes>): string {
    console.log("parsing block: " , block)
  if (!block) return "";
  switch (block.type) {
    case BlockTypes.HEADER: {
      const data = block.data as Header;
      const headerTag = "h" + data.level;
      return "<" + headerTag + ">" + data.text + "</" + headerTag + ">";
    }
    case BlockTypes.PARAGRAPH: {
      const data = block.data as Paragraph;
      return "<p>" + data.text + "</p>";
    }
    case BlockTypes.IMAGE: {
      const data = block.data as Image;
      let html = '<figure><img src="' + data.file.url + '"';
      if (data.withBorder) {
        html += ' style="border:solid 0.5px; color=gray"';
      }
      // TODO implement withBackground
      html += data.caption
        ? "><figcaption>" + data.caption + "</figcaption></figure>"
        : "></figure>";
      return html;
    }
    case BlockTypes.LINK: {
      const data = block.data as Link;
      return '<a href="' + data.link + '">' + data.meta.description + "</a>";
    }
    case BlockTypes.LIST: {
      const data = block.data as List;
      let html = data.style === "ordered" ? "<ol>" : "<ul>";
      _.forEach(data.items, (item) => {
        html += "<li>" + item + "</li>";
      });
      html += data.style === "ordered" ? "</ol>" : "</ul>";
      return html;
    }
    case BlockTypes.WARNING: {
      const data = block.data as Warning;
      const style =
        'style="white-space: pre-wrap; background: hsl(47,88%,65%);"';
      return `<strong> !! ${data.title} !! </strong>
            <br/>
            <span ${style}> ${data.message} <span>`;
    }
    case BlockTypes.RAW: {
      const data = block.data as Raw;
      const style =
        'style="white-space: pre-wrap; background: hsl(40,30%,85%);"';
      return `<div ${style}>${data.html}</div>`;
    }
    case BlockTypes.QUOTE: {
      const data = block.data as Quote;
      return `<blockquote>
        <p>${data.text}</p>
        <footer>${data.caption}</footer></blockquote>`;
    }
    default: {
      return "";
    }
  }
}
