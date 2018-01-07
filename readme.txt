CSS結構/BEM原則
SASS
  |----	_helpers 
  |			|---- _mixin 設定常用的mixin 如clearfix,text,width,rotation
  |			|---- _variables 定義參數包括顏色、字型大小、字型
  |			|---- _zindex 定義全站z-index，避免無限發散
  |
  |----	_base
  |      	|---- _reset 標準化瀏覽器格式
  |      	|---- _grid 為了表格建立固定的寬度框架，參考boostrap，使用12格框架
  |      	|---- _global 全站標準結構的css，如版面寬度、間距、靠左、靠右等。
  |
  |---- _components 將全站會用到的icon,button,hints,labels,tables元件化
  |			|---- _typography 所有的「品名」、「標價」尺寸，顏色，靠左/靠右/置中等。
  |
  |---- _layout header/footer/menu/overlay上的CSS，全站皆會引用
  |
  |---- _pages 依據頁面分別輸出每頁css
  |			|---- _block：配合react，將某些區塊component化，方便引用
  |
  |---- _status UI狀態改變時的設定
  |
  |---- _theme 佈景主題設定（全站引用的圖片）
  |
  |---- _vendor 修改現在套件的CSS

