export const assertNever = (x: never): never => {
  throw new Error('Unexpected value. Should have been never.');
};

export type testType = 'a' | 'b' | 'c';

const a: testType = 'a';

const test = (a: testType) => {
  switch (a) {
    case 'a':
      return 1;
    case 'b':
      return 2;
    case 'c':
      return 3;
    default:
      assertNever(a);
  }
};
