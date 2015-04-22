/*
 キーボードを入力した時に一番最初に呼び出される処理
 */
// document.body.onkeydown = function( e ) {
document.onkeydown = function( e ) {
  // キーに名前をセットする
  var keys = {
    37: 'left',  // ←
    39: 'right',  // →
    40: 'down',  // ↓
    38: 'rotate',  // ↑
    32: 'stop'  // space
  };

  if ( typeof keys[ e.keyCode ] != 'undefined' ) {
    
    e.preventDefault();
    
    // セットされたキーの場合はtetris.jsに記述された処理を呼び出す
    keyPress( keys[ e.keyCode ] );
    // 描画処理を行う
    render();
  }
};
