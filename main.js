const filmesStudioGhibli = [
    {
      id: 1,
      estúdio: 'Studio Ghibli',
      nome: 'A Viagem de Chihiro',
      imagem: 'Poster-1'
    },
    {
      id: 2,
      estúdio: 'Studio Ghibli',
      nome: 'Meu Amigo Totoro',
      imagem: 'Poster-2'
    },
    {
      id: 3,
      estúdio: 'Studio Ghibli',
      nome: 'O Castelo Animado',
      imagem: 'Poster-3'
    },
    {
      id: 4,
      estúdio: 'Studio Ghibli',
      nome: 'O Castelo No Céu',
      imagem: 'Poster-4'
    },
    {
      id: 5,
      estúdio: 'Studio Ghibli',
      nome: 'Pricena Mononoke',
      imagem: 'Poster-5'
    },
    {
      id: 6,
      estúdio: 'Studio Ghibli',
      nome: 'O Serviço de Entregas da Kiki',
      imagem: 'Poster-6'
    },
    {
      id: 7,
      estúdio: 'Studio Ghibli',
      nome: 'O Túmulo dos Vagalumes',
      imagem: 'Poster-7'
    },
    {
      id: 8,
      estúdio: 'Studio Ghibli',
      nome: 'O Mundo dos Pequeninos',
      imagem: 'Poster-8'
    },
    {
      id: 9,
      estúdio: 'Studio Ghibli',
      nome: 'Porco Rosso: O Último Herói Romântico',
      imagem: 'Poster-9'
    },
    {
      id: 10,
      estúdio: 'Studio Ghibli',
      nome: 'Meus Vizinhos, os Yamadas',
      imagem: 'Poster-10'
    },
    {
      id: 11,
      estúdio: 'Studio Ghibli',
      nome: 'O Mundo Secreto de Arrietty',
      imagem: 'Poster-11'
    },
    {
      id: 12,
      estúdio: 'Studio Ghibli',
      nome: 'Ponyo - Uma Amizade que Veio do Mar',
      imagem: 'Poster-12'
    }
  ];

  const descrições = {
    1: "Chihiro, uma jovem garota, se depara com um mundo mágico cheio de espíritos e deuses após seus pais serem transformados em porcos. Ela precisa trabalhar em um spa para espíritos e encontrar uma maneira de resgatá-los.",
    2: "Duas irmãs, Satsuki e Mei, se mudam para o campo com seu pai e descobrem um mundo encantador de criaturas mágicas, incluindo o adorável Totoro, enquanto enfrentam preocupações familiares.",
    3: "O Castelo Animado segue a história de Sophie, uma jovem transformada em idosa por uma bruxa malvada e sua jornada mágica ao encontrar o misterioso castelo errante do mago Howl.",
    4: "Pazu e Sheeta se unem para encontrar a lendária cidade flutuante de Laputa, enquanto são perseguidos por piratas do céu e agentes do governo que desejam controlar seu poder.",
    5: "Ashitaka se envolve em uma luta épica entre a natureza e a industrialização quando se torna aliado de San, a Princesa Mononoke, na luta contra os deuses da floresta e os humanos.",
    6: "Kiki, uma jovem bruxa, embarca em uma jornada de autodescoberta enquanto administra um serviço de entregas em uma cidade costeira, acompanhada de seu gato preto Jiji.",
    7: "Durante a Segunda Guerra Mundial, dois irmãos, Setsuko e Seita, lutam pela sobrevivência em meio à destruição e à fome no Japão, em uma história comovente sobre a infância e a tragédia.",
    8: "Arietty e sua família são seres minúsculos que vivem secretamente em uma casa humana. Quando Arietty faz amizade com um humano, sua existência pacífica é ameaçada.",
    9: "Marco Pagot, um piloto transformado em porco antropomórfico, luta como caçador de recompensas no Adriático entre as guerras mundiais, enquanto busca sua humanidade perdida.",
    10: "Esta é uma série de pequenas histórias que exploram a vida cotidiana da família Yamada de maneira hilariante e comovente.",
    11: "Baseado no mesmo livro que 'O Mundo dos Pequeninos,' este filme segue a história de Arietty, uma jovem que se aventura pelo mundo dos humanos.",
    12: "Um peixe dourado chamado Ponyo deseja se tornar humano após conhecer Sosuke, um menino que vive à beira-mar. Juntos, eles embarcam em uma aventura mágica e perigosa."
};


  function renderizarCatalogo() {
    let galeriaHTML = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">';

    for (const filme of filmesStudioGhibli) {
        const cardHTML = `
            <div class="bg-sky-100 border-solid w-64 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg">
                <img
                    src="./assets/img/${filme.imagem}.jpg"
                    alt="${filme.nome}"
                    class="rounded-lg flex flex-col w-full h-auto object-cover mt-2"
                />
                <div class="p-4">
                    <p class="text-lg font-semibold my-3">${filme.nome}</p>
                    <p class="text-sm text-gray-600 pb-2">${filme.estúdio}</p>
                    <p class="text-sm text-gray-800">${descrições[filme.id]}</p>
                </div>
            </div>
        `;

        galeriaHTML += cardHTML;
    }

    galeriaHTML += '</div>';
    document.getElementById("container-post").innerHTML = galeriaHTML;
}



renderizarCatalogo();