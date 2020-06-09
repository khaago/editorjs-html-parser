import * as _ from "lodash";

export function header(level: number, text: string) : string {
    return `<h${level}>${text}</h${level}>`
}

export function paragraph(text: string): string {
    return `<p>${text}</p>`
}

export function image(url:string, caption?:string): string {
    return `<figure>
                <img src=${url}>
                <figcaption>${caption}</figcaption>
            </figure>`
}

export function list(style?: "ordered"|"unordered", items?: Array<string>): string {
    let html = `<div> ${style === "ordered" ? "<ol>" : "<ul>"}`;
    _.forEach(items, (item) => {
      html += "<li>" + item + "</li>";
    });
    html += style === "ordered" ? "</ol></div>" : "</ul></div>";
    return html;
}

export function link(link: string, description?: string ) : string {
    return `<a href="${link}"> ${description} </a>`;
}

export function warning(title: string, message: string) : string {
    return `<div class="ej-warning"><h3>${title}</h3><p>${message}</p></div>`
}

export function raw(text: string) : string {
    return `<pre class="ej-pre-code"><code>${text}</code></pre>`;
}

export function quote(text: string, caption:string):string  {
    return `<blockquote>
    <p>${text}</p>
    <footer>${caption}</footer></blockquote>`;
}