import { convertResponseFilters } from './';

describe('Helpers', () => {
  it('`convertResponseFilters` should transpose data from response', () => {
    const mockData = {
      currentlyReading: ['sJf1vQAACAAJ', 'xlp6NE2NWecC', 'HfbBDAAAQBAJ'],
      wantToRead: ['evuwdDLfAyYC'],
      read: ['jAUODAAAQBAJ']
    };

    const transposed = convertResponseFilters(mockData);

    expect(transposed).toMatchObject({
      sJf1vQAACAAJ: 'currentlyReading',
      xlp6NE2NWecC: 'currentlyReading',
      HfbBDAAAQBAJ: 'currentlyReading',
      evuwdDLfAyYC: 'wantToRead',
      jAUODAAAQBAJ: 'read'
    });
  });
});
