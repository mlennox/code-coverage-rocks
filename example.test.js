const bookRepository = require('./example')

describe('example', () => {
  const getParams = ({ secondValue = null } = {}) => {
    return {
      first: {
        list: [
          { title: 'The seventh cross' },
          { title: 'The dispossessed' },
          { title: 'His dark materials' },
          { title: 'Homage to Catalunia' }
        ]
      },
      second: {
        value: secondValue
      }
    }
  }

  test('list of books generates formatted list of books', () => {
    const expected = [
      { "name": "Item 1 - The seventh cross" },
      { "name": "Item 2 - The dispossessed" },
      { "name": "Item 3 - His dark materials" },
      { "name": "Item 4 - Homage to Catalunia" }
    ];
    const value = bookRepository(getParams());

    expect(value).toEqual(expected);
  });

  test('passing name of book in list returns the book', () => {
    const expected = "His dark materials";
    const value = bookRepository(getParams({ secondValue: 'His dark materials' }));

    expect(value).toEqual(expected);
  });

  test('passing name of book not in list returns "not found" message', () => {
    const expected = "Book not found in repository";
    const value = bookRepository(getParams({ secondValue: 'How to win friends and influence people' }));

    expect(value).toEqual(expected);
  })
});