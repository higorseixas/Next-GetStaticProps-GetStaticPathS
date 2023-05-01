import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = [
    {
      id: `0`,
      title: `Sala de Jantar fofa`,
      img: `https://picsum.photos/seed/2/2000/1000`,
      comment: `realmente super fofa`,
      avatar: `https://i.pravatar.cc/150?img=0`,
      numberLike: 24,
      numberDislikes: 50,
      loves: 80,
      comments: 80,
    },
    {
      id: `1`,
      title: `Avião teco teco`,
      img: `https://conteudo.imguol.com.br/blogs/125/files/2019/03/PR-FJC.jpg`,
      comment: `esse é antigo em`,
      avatar: `https://i.pravatar.cc/150?img=1`,
      numberLike: 30,
      numberDislikes: 10,
      loves: 50,
      comments: 60,
    },
    {
      id: `2`,
      title: `Máquina agrícola`,
      img: `https://www.comprerural.com/wp-content/uploads/2020/01/curso-de-mc3a1quinas-agrc3adcolas-online-academia-do-mecc3a2nico-em-90-dias-trator-5000-c2ae-artigo-pesquisapress-640x400.jpg`,
      comment: `da pra plantar com essa dai`,
      avatar: `https://i.pravatar.cc/150?img=2`,
      numberLike: 22,
      numberDislikes: 2,
      loves: 67,
      comments: 82,
    },
    {
      id: `3`,
      title: `Dinossauro bebê`,
      img: `https://static.paodeacucar.com/img/uploads/1/526/21383526.jpeg`,
      comment: `Babyossauro rex`,
      avatar: `https://i.pravatar.cc/150?img=3`,
      numberLike: 2,
      numberDislikes: 5,
      loves: 2,
      comments: 100,
    },
    {
      id: `4`,
      title: `Avião boeing`,
      img: `https://motorshow.com.br/wp-content/uploads/sites/2/2022/02/boeing-777-8f-3-1280x720.jpg`,
      comment: `esses voam em`,
      avatar: `https://i.pravatar.cc/150?img=4`,
      numberLike: 70,
      numberDislikes: 4,
      loves: 89,
      comments: 69,
    },
    {
      id: `5`,
      title: `Avião boeing 2`,
      img: `https://motorshow.com.br/wp-content/uploads/sites/2/2022/02/boeing-777-8f-3-1280x720.jpg`,
      comment: `esses voam em`,
      avatar: `https://i.pravatar.cc/150?img=4`,
      numberLike: 70,
      numberDislikes: 4,
      loves: 89,
      comments: 69,
    },
  ];

  res.status(200).json(posts);
}