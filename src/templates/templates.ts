import * as _ from "lodash";

export function header(level: number, text: string) : string {
    return `<h${level} class="ej-header">${text}</h${level}>`
}

export function paragraph(text: string): string {
    return `<p class="ej-paragraph">${text}</p>`
}

export function image(url:string, caption?:string): string {
    return `<figure class="ej-figure">
                <img src=${url}>
                <figcaption class="ej-figcaption">${caption}</figcaption>
            </figure>`
}

export function list(style?: "ordered"|"unordered", items?: Array<string>): string {
    let html = `<div class="ej-list"> ${style === "ordered" ? "<ol>" : "<ul>"}`;
    _.forEach(items, (item) => {
      html += "<li>" + item + "</li>";
    });
    html += style === "ordered" ? "</ol></div>" : "</ul></div>";
    return html;
}

export function link(link: string, description?: string ) : string {
    return `<a class="ej-link" href="${link}"> ${description} </a>`;
}

export function warning(title: string, message: string) : string {
    return `<div class="ej-warning"><h6>${title}</h6><p>${message}</p></div>`
}

export function raw(text: string) : string {
    return `<div class="ej-raw">${text}</div>`;
}

export function quote(text: string, caption:string):string  {
    return `<blockquote class="ej-blockquote">
    <p>${text}</p>
    <footer>${caption}</footer></blockquote>`;
}