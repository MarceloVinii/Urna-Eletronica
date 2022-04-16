let etapas = [
  {
    titulo: 'VEREADOR', // Nome que vai aparecer na tela
    numeros: 5, // quantidade de digitos do titulo a ser preenchido
    candidatos: [
      {
        numero: '38111',
        nome: 'Fulado de tal',
        partido: 'ABC',
        fotos: [{ url: '38111.jpg', legenda: 'Vereador' }]
      },
      {
        numero: '77222',
        nome: 'Beltrano da Silva',
        partido: 'DEFG',
        fotos: [{ url: '77222.jpg', legenda: 'Vereador' }]
      }
    ]
  },
  {
    titulo: 'PREFEITO',
    numeros: 2,
    candidatos: [
      {
        numero: '56',
        nome: 'Ciclado',
        partido: 'ABC',
        vice: 'Cic',
        fotos: [
          { url: '56.jpg', legenda: 'Prefeito' },
          { url: '56_2.jpg', legenda: 'Vice-Prefeito', small: true }
        ]
      },
      {
        numero: '84',
        nome: 'Zulano',
        partido: 'DEFG',
        vice: 'Zul',
        fotos: [
          { url: '84.jpg', legenda: 'Prefeito' },
          { url: '84_2.jpg', legenda: 'Vice-Prefeito', small: true }
        ]
      }
    ]
  }
]
