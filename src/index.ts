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
import { header, paragraph, image, link, list, warning, raw, quote } from "./templates/templates";

export const parse = (data: EditorJsDoc): string => {
  const blocks = data.blocks;
  let html = `<div class="ej-parsed-html">`;
  _.forEach(blocks, (block) => {
    html += parseBlock(block);
  });
  html += "</div>";
  return html;
};

function parseBlock(block?: Block<BlockTypes>): string {
    console.log("parsing block: " , block)
  if (!block) return "";
  switch (block.type) {
    case BlockTypes.HEADER: {
      const data = block.data as Header;
      return header(data.level, data.text);
    }
    case BlockTypes.PARAGRAPH: {
      const data = block.data as Paragraph;
      return paragraph(data.text);
    }
    case BlockTypes.IMAGE: {
      const data = block.data as Image;
      return image(data.file.url, data.caption);
    }
    case BlockTypes.LINK: {
      const data = block.data as Link;
      return link(data.link, data.meta.description);
    }
    case BlockTypes.LIST: {
      const data = block.data as List;
      return list(data.style, data.items);
    }
    case BlockTypes.WARNING: {
      const data = block.data as Warning;
      return warning(data.title, data. message);
    }
    case BlockTypes.RAW: {
      const data = block.data as Raw;
      return raw(data.html);
    }
    case BlockTypes.QUOTE: {
      const data = block.data as Quote;
      return quote(data.text, data.caption);
    }
    default: {
      return `Unparseable ${JSON.stringify(block.data)}`;
    }
  }
}
