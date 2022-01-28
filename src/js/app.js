import { loginFormChange, loginFormSubmit } from './login.js';
import render from './render.js';
import { todoOpenPopup, todoClosePopup } from './control/popup-control.js';
import { todoDeleteOnOff, todoDelete } from './control/delete-control.js';
import { todoAddSubmit } from './control/add-control.js';
import { todoCheckSubmit } from './control/check-control.js';

// [start]
// Event(input & form)
loginFormChange();
loginFormSubmit();
render();

// [popup]
// Event(button)
todoOpenPopup();
todoClosePopup();

// [delete]
// Event(button)
todoDeleteOnOff();
todoDelete();

// [add]
// Event(button)
todoAddSubmit();

// [check]
// Event(checkbox)
todoCheckSubmit();




// [잠간 짚고가기] ★★★
// ※ 항상 HTML을 다시 그릴 때 이벤트 재할당은
//    최상위 루트 즉, 최상위 요소에서 부터 버블링을 활용하여 해당 요소에 접근한 뒤 이벤트를 할당한다.