import { EditorJsDoc } from "types/editor.types";
import { parse } from ".";

const testDoc = {
  time: 1590972432078,
  blocks: [
    { type: "header", data: { text: "Stairway to heaven", level: 1 } },
    {
      type: "paragraph",
      data: {
        text:
          "There's a lady who's sure<br>All that glitters is gold<br>And she's buying a stairway to Heaven<br>When she gets there she knows<br>If the stores are all closed<br>With a word she can get what she came for<br>Oh oh oh oh and she's buying a stairway to Heaven",
      },
    },
    {
      type: "paragraph",
      data: {
        text:
          "There's a sign on the wall<br>But she wants to be sure<br>'Cause you know sometimes words have two meanings<br>In a tree by the brook<br>There's a songbird who sings<br>Sometimes all of our thoughts are misgiving",
      },
    },
    {
      type: "image",
      data: {
        file: {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stairway_to_Heaven_by_Led_Zeppelin_US_promotional_single.png",
        },
        caption: "Original Record",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
    },
    {
      type: "quote",
      data: {
        text: "Maile ta tannnnnnna pakayen!",
        caption: "Namrata Khanal",
        alignment: "left",
      },
    },
    {
      type: "raw",
      data: { html: "<span>\nDo whatever you want\n</span>" },
    },
    {
      type: "list",
      data: { style: "ordered", items: ["Happiness", "Bliss"] },
    },
    {
      type: "warning",
      data: {
        title: "This is a goddamn warning.",
        message:
          "Jab dharti main Kans aata hai, tab usko maarne ke liye Krishna ka bhi janm hota hai, bhosdike.",
      },
    },
    {
      type: "paragraph",
      data: {
        text:
          '<a href="https://genius.com/Nirvana-smells-like-teen-spirit-lyrics">This shit smells like teen spirit</a>',
      },
    },
    {
      type: "paragraph",
      data: {
        text:
          'I am going to mark the next two words: <mark class="cdx-marker">what the!</mark> ok I\'m done now.',
      },
    },
    {
      type: "paragraph",
      data: {
        text:
          'To clear the screen, just type <code class="inline-code">clear</code> and press enter on the prompt. And here\'s a damn unordered list:',
      },
    },
    {
      type: "list",
      data: {
        style: "unordered",
        items: ["bill", "boomhauer", "dale", "hank"],
      },
    },
  ],
  version: "2.17.0",
} as EditorJsDoc;

test("test sanity", () => {
  parse(testDoc);
});
