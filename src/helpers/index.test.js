import {
  generateFilters,
  convertResponseFilters,
  popBookList,
  updateBookList
} from './';

describe('Helpers', () => {
  describe('Shelf Data Processors', () => {
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

  describe('Book Data Processors', () => {
    const mockBooksData = [
      { id: '3874929', shelf: 'sh1' },
      { id: '0998983', shelf: 'sh2' },
      { id: '5354335', shelf: 'sh2' },
      { id: '0351399', shelf: 'sh3' }
    ];

    it('`generateFilters` should convert books to object with index set as shelf', () => {
      const converted = generateFilters(mockBooksData);

      expect(converted).toMatchObject({
        sh1: ['3874929'],
        sh2: ['0998983', '5354335'],
        sh3: ['0351399']
      });
    });

    it('`popBookList` should remove selected book from the list', () => {
      const list = popBookList(mockBooksData, { id: '3874929' });

      expect(list).toMatchObject([
        { id: '0998983', shelf: 'sh2' },
        { id: '5354335', shelf: 'sh2' },
        { id: '0351399', shelf: 'sh3' }
      ]);
    });

    it('`updateBookList` should update selected book from the list', () => {
      const list = updateBookList(mockBooksData, {
        id: '3874929',
        shelf: 'sh4'
      });

      expect(list.sort()).toMatchObject([
        { id: '0998983', shelf: 'sh2' },
        { id: '5354335', shelf: 'sh2' },
        { id: '0351399', shelf: 'sh3' },
        { id: '3874929', shelf: 'sh4' }
      ]);
    });
  });
});
