import Jogador from "./modelos_jogadores";
import { Estado, Pais, Rede, Servidor } from "./enumeradores";

/**
 * A princípio, a chave de cada jogador no banco de dados será o index na lista
 * abaixo.
 */
export const jogadoresDB: Jogador[] = [
  {
    nome: "Philippe Fanaro",
    pais: Pais.brasil,
    estado: Estado.sp,
    cidade: "São Paulo",
    contato: {
      email: "philippefanaro@gmail.com",
      telefone: 5511970286739,
    },
    nascimento: Date.UTC(1992, 6, 27),
    nivel: {
      rank: "1d",
      elo: 2300,
    },
    foto: new URL("https://imgur.com/gallery/YtxsVTy"),
    perfis: [
      {
        servidor: Servidor.ogs,
        nome: "psygo",
      },
      {
        servidor: Servidor.kgs,
        nome: "psygo",
      },
    ],
    social: [
      {
        rede: Rede.facebook,
        perfil: new URL("https://facebook.com/philippe.fanaro"),
      },
      {
        rede: Rede.reddit,
        perfil: new URL("https://www.reddit.com/user/Fanaro009"),
      },
      {
        rede: Rede.youtube,
        perfil: new URL("https://www.youtube.com/c/PhilippeFanaro"),
      },
    ],
    professor_certificado: true,
  },
  {
    nome: "Laércio Pereira",
    pais: Pais.brasil,
    estado: Estado.parana,
    cidade: "Curitiba",
    contato: {
      email: "laercioskt@gmail.com",
      telefone: 5541996913524,
    },
    nascimento: Date.UTC(1987, 4, 20),
    nivel: {
      rank: "1d",
      elo: 2300,
    },
    foto: new URL("http://gravatar.com/avatar/3de834177016267783871ee24c3e9d8c"),
    perfis: [
      {
        servidor: Servidor.ogs,
        nome: "laercioskt",
      },
      {
        servidor: Servidor.kgs,
        nome: "laercioskt",
      },
    ],
    social: [
      {
        rede: Rede.facebook,
        perfil: new URL("https://www.facebook.com/laercioskt"),
      },
      {
        rede: Rede.twitch,
        perfil: new URL("https://www.twitch.tv/laercionogo")
      }
    ],
    professor_certificado: false,
  },
  {
    nome: "Elias Cardoso",
    pais: Pais.brasil,
    estado: Estado.rio,
    cidade: "São Gonçalo",
    contato: {
      email: "ebrc.2013@gmail.com",
      telefone: 5521969194896
    },
    nascimento: Date.UTC(1988, 5, 7),
    nivel: {
      rank: "1k",
      elo: 2200,
    },
    foto: new URL("https://media-exp1.licdn.com/dms/image/C5603AQEVTzZdChNZqA/profile-displayphoto-shrink_200_200/0/1517373616794?e=1619049600"),
    professor_certificado: false,
  },
];
