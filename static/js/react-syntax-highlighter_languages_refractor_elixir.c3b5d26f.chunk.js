"use strict";(self.webpackChunkreact_book=self.webpackChunkreact_book||[]).push([[2961],{5592:e=>{function n(e){e.languages.elixir={doc:{pattern:/@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,inside:{attribute:/^@\w+/,string:/['"][\s\S]+/}},comment:{pattern:/#.*/,greedy:!0},regex:{pattern:/~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,greedy:!0},string:[{pattern:/~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,greedy:!0,inside:{}},{pattern:/("""|''')[\s\S]*?\1/,greedy:!0,inside:{}},{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{}}],atom:{pattern:/(^|[^:]):\w+/,lookbehind:!0,alias:"symbol"},module:{pattern:/\b[A-Z]\w*\b/,alias:"class-name"},"attr-name":/\b\w+\??:(?!:)/,argument:{pattern:/(^|[^&])&\d+/,lookbehind:!0,alias:"variable"},attribute:{pattern:/@\w+/,alias:"variable"},function:/\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,number:/\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,keyword:/\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,boolean:/\b(?:false|nil|true)\b/,operator:[/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,{pattern:/([^<])<(?!<)/,lookbehind:!0},{pattern:/([^>])>(?!>)/,lookbehind:!0}],punctuation:/<<|>>|[.,%\[\]{}()]/},e.languages.elixir.string.forEach((function(n){n.inside={interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},rest:e.languages.elixir}}}}))}e.exports=n,n.displayName="elixir",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_elixir.c3b5d26f.chunk.js.map