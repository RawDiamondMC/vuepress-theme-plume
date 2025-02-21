import{_ as u,c as g,d as i,e as t,b as e,w as a,a as o,r as n,o as c}from"./app-cgaSl2_b.js";const m={};function y(b,s){const l=n("RouteLink"),d=n("AudioReader"),r=n("VPIcon"),p=n("CodeTabs");return c(),g("div",null,[s[13]||(s[13]=i("h2",{id:"概述",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#概述"},[i("span",null,"概述")])],-1)),s[14]||(s[14]=i("p",null,"主题支持在文档中嵌入 音频阅读 。",-1)),i("p",null,[s[1]||(s[1]=t("该功能由 ")),e(l,{to:"/notes/theme/config/plugins/markdownPower.html"},{default:a(()=>s[0]||(s[0]=[t("vuepress-plugin-md-power")])),_:1}),s[2]||(s[2]=t(" 提供支持。"))]),i("p",null,[s[3]||(s[3]=i("strong",null,"音频阅读",-1)),s[4]||(s[4]=t(" 并不是一个音乐播放器，它仅是在内容中嵌入一个（ ")),e(d,{src:"https://sensearch.baidu.com/gettts?lan=en&spd=3&source=alading&text=audio"}),s[5]||(s[5]=t(" ）按钮，点击后播放一段音频。"))]),s[15]||(s[15]=i("p",null,[t("它适合用于播放一些短时间的音频，比如 "),i("strong",null,"单词标音"),t(" 。")],-1)),s[16]||(s[16]=i("h2",{id:"配置",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#配置"},[i("span",null,"配置")])],-1)),s[17]||(s[17]=i("p",null,"该功能默认不启用。你需要在主题配置中开启。",-1)),e(p,{id:"21",data:[{id:".vuepress/config.ts"}]},{title0:a(({value:h,isActive:k})=>[e(r,{name:"vscode-icons:file-type-typescript"}),s[6]||(s[6]=i("span",null,".vuepress/config.ts",-1))]),tab0:a(({value:h,isActive:k})=>s[7]||(s[7]=[i("div",{class:"language-ts","data-ext":"ts","data-title":"ts"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," default"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," defineUserConfig"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  theme"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"plumeTheme"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    plugins"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      markdownPower"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"        audioReader"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"true"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      },")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  })")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])])],-1)])),_:1}),s[18]||(s[18]=o('<h2 id="markdown-语法" tabindex="-1"><a class="header-anchor" href="#markdown-语法"><span>markdown 语法</span></a></h2><p>音频嵌入 markdown 语法是一个 行内语法，因此你可以在 markdown 的任何地方中使用。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">audioReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>添加配置项：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">audioReader type=&quot;audio/mpeg&quot; title=&quot;title&quot; autoplay start-time=&quot;0&quot; end-time=&quot;10&quot; volume=&quot;0.7&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p><strong>配置说明：</strong></p><ul><li><code>type</code>：音频类型，格式如：<code>audio/mpeg</code> , 默认根据音频链接地址的文件扩展名推断，如果链接地址中不包含扩展名，请手动声明。</li><li><code>title</code>： 音频标题，显示在音频图标之前。</li><li><code>autoplay</code>：是否自动播放，不建议启用。</li><li><code>start-time</code>：音频起始播放时间点，单位为 秒。</li><li><code>end-time</code>：音频结束播放时间点，单位为 秒。</li><li><code>volume</code>：音频播放音量，范围为 <code>0 ~ 1</code> 。</li></ul><h2 id="全局组件" tabindex="-1"><a class="header-anchor" href="#全局组件"><span>全局组件</span></a></h2><p>主题提供了全局组件 <code>&lt;AudioReader /&gt;</code> 以支持更灵活丰富的使用方式。</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>src</td><td><code>string</code></td><td>必填，音频播放地址</td></tr><tr><td>type</td><td><code>string</code></td><td>选填，音频格式，默认从 <code>src</code> 中截取</td></tr><tr><td>autoplay</td><td><code>boolean</code></td><td>选填，是否自动播放，不建议启用</td></tr><tr><td>startTime</td><td><code>number</code></td><td>选填，音频起始播放时间点，单位为 秒</td></tr><tr><td>endTime</td><td><code>number</code></td><td>选填，音频结束播放时间点，单位为 秒</td></tr><tr><td>volume</td><td><code>number</code></td><td>选填，音频播放音量，范围为 <code>0 ~ 1</code></td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">audio 美 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ˈɔːdioʊ</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> @</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">audioReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">/audio/audio.mp3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p><strong>输出：</strong></p>',15)),i("p",null,[s[8]||(s[8]=t("audio 美 [ˈɔːdioʊ] ")),e(d,{src:"https://sensearch.baidu.com/gettts?lan=en&spd=3&source=alading&text=audio"})]),s[19]||(s[19]=o('<p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">audio 美 @</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">audioReader title=&quot;[ˈɔːdioʊ]&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-light-text-decoration:underline;--shiki-dark:#DEDCD590;--shiki-dark-text-decoration:underline;">/audio/audio.mp3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p><strong>输出：</strong></p>',3)),i("p",null,[s[10]||(s[10]=t("audio 美 ")),e(d,{src:"https://sensearch.baidu.com/gettts?lan=en&spd=3&source=alading&text=audio"},{default:a(()=>s[9]||(s[9]=[t("[ˈɔːdioʊ]")])),_:1})]),s[20]||(s[20]=o('<p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">audio 美 </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">AudioReader</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/audio/audio.mp3</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ˈɔːdioʊ</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">AudioReader</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>',3)),i("p",null,[s[12]||(s[12]=t("audio 美 ")),e(d,{src:"https://sensearch.baidu.com/gettts?lan=en&spd=3&source=alading&text=audio"},{default:a(()=>s[11]||(s[11]=[t("[ˈɔːdioʊ]")])),_:1})])])}const A=u(m,[["render",y],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/guide/embed/audio/reader/","title":"Audio Reader 音频","lang":"zh-CN","frontmatter":{"title":"Audio Reader 音频","icon":"rivet-icons:audio","createTime":"2024/12/24 22:31:01","permalink":"/guide/embed/audio/reader/","description":"概述 主题支持在文档中嵌入 音频阅读 。 该功能由 提供支持。 音频阅读 并不是一个音乐播放器，它仅是在内容中嵌入一个（ ）按钮，点击后播放一段音频。 它适合用于播放一些短时间的音频，比如 单词标音 。 配置 该功能默认不启用。你需要在主题配置中开启。 markdown 语法 音频嵌入 markdown 语法是一个 行内语法，因此你可以在 markdo...","head":[["meta",{"property":"og:url","content":"https://theme-plume.vuejs.press/guide/embed/audio/reader/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"Audio Reader 音频"}],["meta",{"property":"og:description","content":"概述 主题支持在文档中嵌入 音频阅读 。 该功能由 提供支持。 音频阅读 并不是一个音乐播放器，它仅是在内容中嵌入一个（ ）按钮，点击后播放一段音频。 它适合用于播放一些短时间的音频，比如 单词标音 。 配置 该功能默认不启用。你需要在主题配置中开启。 markdown 语法 音频嵌入 markdown 语法是一个 行内语法，因此你可以在 markdo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-24T16:30:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-24T16:30:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Audio Reader 音频\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-24T16:30:24.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.79,"words":538},"git":{"updatedTime":1735057824000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":2,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"c276a77d4e788bd09e3936af9cbe7bddb2ba7697","date":1735057038000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"feat(plugin-md-power): add <code v-pre>audioReader</code> support (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/398\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#398</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/c276a77d4e788bd09e3936af9cbe7bddb2ba7697"},{"hash":"067d0e2264b10846ecbb0bead7389033008b62cc","date":1735057824000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update doc","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/067d0e2264b10846ecbb0bead7389033008b62cc"}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/嵌入/audioReader.md","bulletin":false}');export{A as comp,D as data};
