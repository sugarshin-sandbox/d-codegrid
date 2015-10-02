// <ul>
//   <li><time>2015-09-01</time> <strong>[error] エラーが発生しました</strong></li>
//   <li><time>2015-09-02</time> <em>[warning] バッテリーが少なくなってます</em></li>
//   <li><time>2015-09-02</time> <span>[info] アクセスがありました</span></li>
// </ul>

import template from 'lodash.template';
import templateString from './message';

global.messages = [
  {
    date: "2015-09-01",
    type: "error",
    text: "エラーが発生しました"
  },
  {
    date: "2015-09-02",
    type: "warning",
    text: "バッテリーが少なくなってます"
  },
  {
    date: "2015-09-02",
    type: "info",
    text: "アクセスがありました"
  }
];

const mapTypeTag = messages => {
  return messages.map(msg => {
    switch (msg.type) {
    case 'error':
      msg.typeTag = 'strong';
      return msg;
    case 'warning':
      msg.typeTag = 'em';
      return msg;
    case 'info':
      msg.typeTag = 'span';
      return msg;
    }
  });
};

const compiled = template(templateString);
const ul = document.createElement('ul');
document.body.appendChild(ul);
mapTypeTag(messages).forEach(msg => {
  ul.insertAdjacentHTML('beforeend', compiled(msg));
});
