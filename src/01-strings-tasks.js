function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getStringLength(value) {
  return value.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.split(', ')[1].split('!')[0];
}

function getFirstChar(value) {
  return value[0];
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function repeatString(value, count) {
  return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.slice(1, -1);
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';');
}

function getRectangleString(width, height) {
  let rect = '';
  rect += `┌${'─'.repeat(width - 2)}┐\n`;
  for (let i = 0; i < height - 2; i += 1) {
    rect += `│${' '.repeat(width - 2)}│\n`;
  }
  rect += `└${'─'.repeat(width - 2)}┘\n`;

  return rect;
}

function encodeToRot13(str) {
  return str.split('').map((x) => {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      if (x.charCodeAt() >= 78) {
        return String.fromCharCode(x.charCodeAt() - 13);
      }
      return String.fromCharCode(x.charCodeAt() + 13);
    }
    if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
      if (x.charCodeAt() >= 110) {
        return String.fromCharCode(x.charCodeAt() - 13);
      }
      return String.fromCharCode(x.charCodeAt() + 13);
    }
    return x;
  }).join('');
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const cardSuit = ['♣', '♦', '♥', '♠'];

  const number = cardValue.indexOf(value.slice(0, -1));
  const suit = cardSuit.indexOf(value[value.length - 1]) * 13;

  return number + suit;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
