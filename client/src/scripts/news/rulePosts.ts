/* eslint-disable quotes,@typescript-eslint/quotes */
export interface RulesPost {
    date: number
    author: string
    title: string
    content: string
    longContent?: string
}

export const rules: RulesPost[] = [
    {
        date: 1690908230000,
        author: "Katloo",
        title: "Regras",
        content: `Ao jogar Zyan Royale, você concorda em cumprir as seguintes regras. Quebrar as regras pode resultar em banimento.`,
        longContent: `<ul>
  <li><strong>Nenhuma equipe solo.</strong> Não é permitido aliar-se a outros jogadores solo por longos períodos de tempo.</li>
  <li><strong>Sem hackers.</strong> É estritamente proibido o uso de scripts, plugins, extensões, etc. para modificar o jogo a fim de obter vantagem sobre os adversários.</li>
  <li><strong>Nenhum nome de usuário inapropriado.</strong> Nossas listas de bloqueio são muito brandas, mas algumas coisas ainda estão bloqueadas. Tentar escapar dos filtros para essas palavras específicas pode ter consequências.</li>
</ul>`
    },
    {
        date: 1690908230000,
        author: "Katloo",
        title: "Tutorial",
        content: `Se você é um jogador novo, confira este tutorial para aprender como jogar!`,
        longContent: `<h2>Controls</h2>
<p>Movimento - WASD ou teclas de seta</p>
<p>Mirar - Mouse</p>
<p>Ataque - Clique esquerdo</p>
<p>Alterar armas - 1 a 3 ou roda de rolagem</p>
<p>Capturar/Saquear/Interagir - F</p>
<p>Recarregar arma - R</p>
<p>Use Item de Cura - Clique com o botão esquerdo no item ou 7 a 0</p>
<p>Cancelar ação - X</p>
<p>Alternar mapa em tela cheia - G ou M</p>
<p>Alternar Minimapa - N</p>
<p>Use o emogi de gestos - segure, clique com o botão direito, arraste e solte</p>
<p>Soltar Item - Clique com o botão direito no item</p>
<p>Equipar Último Item - Q</p>
<p>Trocar slots de armas - T</p>
<p>Equipar outra arma - Espaço</p>
<p>Alterar zoom do escopo - clique com o botão esquerdo no escopo</p>

<h3>Os atalhos de teclado podem ser alterados nas configurações!</h3>

<h2>Como jogar</h2>
<p>O objetivo de Suroi é ser o último jogador sobrevivente. Você começará do nada, então mova-se pelo mapa para obter armas, miras, armaduras, itens de cura e munição. Se você vir outro jogador, elimine-o para saquear!</p>

<h2>Laranja = Ruim</h2>
<p>Você tem outro inimigo para ficar atento: um gás laranja mortal. O gás preenche lentamente o mapa conforme o jogo avança, tornando a zona segura cada vez menor. O dano aumenta cada vez que diminui.</p>

<h2>Jogos semelhantes</h2>
<p>Se você já jogou jogos como PUBG, Fortnite e Apex Legends, ou outros battle royales de navegador, talvez esteja familiarizado com o conceito do jogo!</p>
`
    }
];
