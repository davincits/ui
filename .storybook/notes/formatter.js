import memoize from 'memoizerific';

export const formatter = memoize(2)((code) => {
  return code
    .split(/\n/)
    .reduce(
      (acc, i, index) => {
        const match = i.match(/^((:?\s|\t)+)/);
        const padding = match ? match[1] : '';

        if (acc.firstIndent === '' && padding && index < 3) {
          return { result: `${acc.result}\n${i.replace(padding, '')}`, firstIndent: padding };
        }
        return {
          result: `${acc.result}\n${i.replace(acc.firstIndent, '').replace(/\s*$/, '')}`,
          firstIndent: acc.firstIndent,
        };
      },
      { firstIndent: '', result: '' }
    )
    .result.trim();
});