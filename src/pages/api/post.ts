import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const post = {
    id: `0`,
    title: `Sala de Jantar fofa`,
    img: `https://picsum.photos/seed/2/2000/1000`,
    comment: `realmente super fofa`,
    avatar: `https://i.pravatar.cc/150?img=3`,
    numberLike: 24,
    numberDislikes: 50,
    loves: 80,
    comments: 80,
  };

  res.status(200).json(post);
}