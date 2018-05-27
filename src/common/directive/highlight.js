export default function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    });
}