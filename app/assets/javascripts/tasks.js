// document.addEventListener('turbolinks:load', function() {

//   // タスクにホバーした際に背景色を変更する処理と離れたら元に戻す処理
//   document.querySelectorAll('td').forEach(function(td) {
//     td.addEventListener('mouseover', function(e) {
//       e.currentTarget.style.backgroundColor = '#eff';
//     });
//     td.addEventListener('mouseout', function(e) {
//       e.currentTarget.style.backgroundColor = '';
//     });
//   });

//   // ajx:successはlink_toにオプションを付与したremote: true(data-remote属性)とセット
//   // ajax:successイベントは非同期通信が成功した場合に処理されるイベント
//   // 成功しなかった場合はajax:errorイベントが処理される
//   document.querySelectorAll('.delete').forEach(function(a) { // aはdeleteクラスのタグa要素一つ
//     a.addEventListener('ajax:success',  function() {
//       console.log(a);

//       let td = a.parentNode;
//       let tr = td.parentNode;
//       tr.style.display = 'none';
//     });
//   });
// });


