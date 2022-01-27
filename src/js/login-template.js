const template = (text, value) => `
  <input type="text" class="todo-user-input" name="username" value="${value}" autocomplete="off" placeholder="please input your name..." require>
  <p aria-label="에러 메세지">${text}</p>
`;

export default template;
