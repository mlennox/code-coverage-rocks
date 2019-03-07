module.exports = bookRepository = ({ first, second } = {}) => {
  if (!first.list) {
    return `No books`;
  }

  if (second.value) {
    if (first.list.find(item => item.title === second.value)) {
      return second.value;
    } else {
      return `Book not found in repository`;
    }
  } else if (first.list) {
    return first.list.map((item, itemIndex) => {
      return {
        name: `Item ${itemIndex + 1} - ${item.title}`
      };
    });
  }
}