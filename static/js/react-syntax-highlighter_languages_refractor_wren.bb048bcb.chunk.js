"use strict";(self.webpackChunkreact_book=self.webpackChunkreact_book||[]).push([[3702],{533:e=>{function t(e){e.languages.wren={comment:[{pattern:/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*))*\*\/)*\*\/)*\*\//,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"string-literal":null,hashbang:{pattern:/^#!\/.+/,greedy:!0,alias:"comment"},attribute:{pattern:/#!?[ \t\u3000]*\w+/,alias:"keyword"},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},/\b[A-Z][a-z\d_]*\b/],constant:/\b[A-Z][A-Z\d_]*\b/,null:{pattern:/\bnull\b/,alias:"keyword"},keyword:/\b(?:as|break|class|construct|continue|else|for|foreign|if|import|in|is|return|static|super|this|var|while)\b/,boolean:/\b(?:false|true)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,function:/\b[a-z_]\w*(?=\s*[({])/i,operator:/<<|>>|[=!<>]=?|&&|\|\||[-+*/%~^&|?:]|\.{2,3}/,punctuation:/[\[\](){}.,;]/},e.languages.wren["string-literal"]={pattern:/(^|[^\\"])"(?:[^\\"%]|\\[\s\S]|%(?!\()|%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\))*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\)/,lookbehind:!0,inside:{expression:{pattern:/^(%\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:e.languages.wren},"interpolation-punctuation":{pattern:/^%\(|\)$/,alias:"punctuation"}}},string:/[\s\S]+/}}}e.exports=t,t.displayName="wren",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_wren.bb048bcb.chunk.js.map