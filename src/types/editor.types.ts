export enum BlockTypes {
  HEADER = "header",
  PARAGRAPH = "paragraph",
  IMAGE = "image",
  QUOTE = "quote",
  RAW = "raw",
  LIST = "list",
  WARNING = "warning",
  LINK = "linkTool",
}

export interface Header {
  text?: string;
  level?: 1 | 2| 3 | 4 | 5 | 6;
}

export interface Paragraph {
  text?: string;
}

export interface Quote {
  text?: string;
  caption?: string;
  alignment?: "left" | "center";
}

export interface Link {
  link?: string; // url
  meta?: {
    title?: string;
    description?: string;
    image?: {
      url?: string;
    };
  };
}

export interface Raw {
  html?: string;
}

export interface Image {
  file?: {
    url?: string;
  };
  caption?: string;
  withBorder?: boolean;
  withBackground?: boolean;
  stretched?: boolean;
}

export interface List {
  style?: "ordered" | "unordered";
  items?: string[];
}

export interface Warning {
  title?: string;
  message?: string;
}

export interface Block<BlockTypes> {
  type: BlockTypes;
  data: Header | Paragraph | Image | Quote | Raw | List | Warning | List | Record<string, unknown>;
}

export interface EditorJsDoc {
  version: string;
  blocks: Array<Block<BlockTypes>>;
  time: number;
}
