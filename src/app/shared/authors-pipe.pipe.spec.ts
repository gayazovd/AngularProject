import { AuthorsPipePipe } from './authors-pipe.pipe';

describe('AuthorsPipePipe', () => {
  it('create an instance', () => {
    const pipe = new AuthorsPipePipe();
    expect(pipe).toBeTruthy();
  });
});
