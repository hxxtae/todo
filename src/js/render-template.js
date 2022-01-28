const template = (id, desc, chk) => `
  <li class="todo-item" id=${id}>
    <div class="todo-item-group">
      <i class="ic-close" aria-hidden></i>
      <input type="checkbox" ${chk} id="${id}">
      <label for=${id}>${desc}</label>  
    </div>
  </li>
`;

export default template;
