type Member = {
  id: number;
  first_name: string;
  last_name: string;
  class: string;
  subjects: string[];
  email: string;
};

export const members: Member[] = [
  {
    id: 1,
    first_name: 'Diego',
    last_name: 'Herrera Redondo',
    class: '2º DAM G2',
    subjects: ['FOL', 'Sistemas Operativos'],
    email: 'diegoherred@gmail.com',
  },
];
