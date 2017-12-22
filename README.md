# 以下為Computer Graphics Homework 的解說
   ##### 可以點選 [這裡](https://yuyeh.github.io/cghw/index.html) 跳轉到Homework首頁。
   ###### 如有任何問題，請發送信件到此信箱: a080044976@gmail.com
   
   各項狀態:&nbsp;&nbsp;✅:已完成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔄:待補中
   
 * ✅ [Time-based animation, button](https://yuyeh.github.io/cghw/Clock.html)
 
 * ✅ [Hierarchical model, Cannonball](https://yuyeh.github.io/cghw/Tank.html)
 
 * ✅ [OBJ model, Kinematic Drive, Rectangle-Circle Intersection, Dual Viewports](https://yuyeh.github.io/cghw/Car.html)
 * ✅ [Class, Raycaster, Shadow Map](https://yuyeh.github.io/cghw/Shadowmap.html)


#### Time-based animation, button

Time-based animation 主要是模擬一般鐘錶、石英錶以及扇形時鐘的運作，在進入到 Clock animation畫面時，上方兩顆按鈕分別為時鐘的啟動與暫停，以及時鐘種類切換。此外，可藉由按住不放移動視角，或者轉動滑鼠滾輪切換遠近的方式去觀察時鐘的運行，至於時鐘以及背景顏色的搭配，則是參考 [這裡](https://www.beforafter.org/blog/2016/50-color-combinations) 進行配色。


#### Hierarchical model, Cannonball

Hierarchical model 簡單來說就是模擬一台戰車的一些基本動作，[W] 和 [S] 分別是戰車的前進以及後退，[A] 和 [D]控制車身的轉動，[J] 和 [L] 控制炮塔的轉動，[I] 和 [K] 控制大砲的仰角 ，最後空白建 [SPACE] 是發射大砲，進入到 Tank的畫面時，畫面上發會有兩顆按鈕，左方的start按鈕按下去後可以在 x = 100 或 -100 這兩邊生成標靶，此時記得遵守規則，只能在    x = 0 這一條線上進行移動，調整砲台方向以及大砲仰角，確定後按下空白鍵發射砲彈，打中標靶後標靶會消失並隨機再生成一個標靶，若是覺得場地太亂，可以點選畫面上方的clear，點下去後會自動清除畫面上的標靶以及所有砲彈。


#### OBJ model, Kinematic Drive, Rectangle-Circle Intersection, Dual Viewports

駕駛&碰撞偵測 主要是模擬一般車子在路上行駛(車子需載入 OBJ model )，撞到障礙物後會停下來，還要能自己將車輛駛出，在進入到 Car.html 時，車子最初會以初速 5 的速度向+x軸行駛，[方向鍵上:up] 可以使車子加速、[方向鍵:down] 可以使車子減速，減到一定程度可以使車子倒退、[方向鍵:left] 可以使車子向左彎，[方向鍵:right] 則是可以使車子向右彎，撞到障礙物時車子會停止，此時可以轉動方向，直到偵測結果為未碰撞即可繼續行駛。

#### Class, Raycaster, Shadow Map

基本上此 Shadow Map 主要是模擬房間內書桌以及一些相關事物的模擬，書桌靠右邊有一個遙控器，上方按鈕控制室內的燈光，下方按鈕控制檯燈的燈光，就類似於物聯網靠一個app就能控制所有設備，使用者們可以藉由各個角度，去觀察各燈光開與關時，各個物件光影的變化(特別推薦地板)。椅子有點精緻，所以在載入時會比較慢出現，一開始若未看到椅子請等待一下(依顯卡效能而定)。