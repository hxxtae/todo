export const requireRule = {
  match: true,
  rule: /.+/,
  message: '필수 입력 항목입니다.'
};

export const textNotSpace = {
  match: false,
  rule: /\s/,
  message: '공백을 포함할 수 없습니다.'
};

export const textMinimumLength = (limit) => {
  return {
    match: true,
    rule: new RegExp(`(.){${limit}}`),
    message: `최소한 ${limit}글자 이상 이어야 합니다.`
  }
};
