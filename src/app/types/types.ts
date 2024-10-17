type BookType = {
  id: string;
  title: string;
  content: string;
  price: number;
  thumbnail: { url: string };
  createdAt: string;
  updatedAt: string;
};

type Purchase = {
  id: string;
  userId: string;
  bookId: string;
  createdAt: string;
  user: User;
};

type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export type { BookType, Purchase, User };
