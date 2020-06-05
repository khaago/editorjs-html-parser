import { EditorJsDoc } from "types/editor.types";
export const parse = (blocks: EditorJsDoc): string => {
    console.log(JSON.stringify(JSON.stringify(blocks), null, ' '))
    return "<div>Could not parse</div>";    
}


