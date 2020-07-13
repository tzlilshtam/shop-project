<?php

if(isset($_POST["summary"])){
    echo '<header>
    <table class="tablehead">
        <thead>
        <tr>
            <td class="headerLeft">LZ Store</td>
            <td class="headerLeft"  id="cartIcon" onclick="openPopup()"><a><img src="https://image.flaticon.com/icons/svg/1170/1170576.svg" alt="cart" width="50" height="50" ><span id = "cart" class="headerLeft"></span><span class="popuptext" id="myPopup">  </span></a> </td>
            <td class="headerRight"><a class="highlight"href="main.php" >Back To The Store</a></td>
            
        </tr>
        </thead>
    </table>
</header>
';}

else{
  echo '<header>
    <table class="tablehead">
        <thead>
        <tr>
            <td class="headerLeft">LZ Store</td>
            <td class="headerLeft"  id="cartIcon" onclick="openPopup()"><a><img src="https://image.flaticon.com/icons/svg/1170/1170576.svg" alt="cart" width="50" height="50" ><span id = "cart" class="headerLeft"></span><span class="popuptext" id="myPopup">  </span></a> </td>
            <td class="headerRight"><a class="highlight" href="#con" target="Contact">Contact</a></td>
            <td class="headerRight"><a class="highlight" href="#art" target="section">About</a></td>
            <td class="headerRight"><a class="highlight" href="project1.html" target="_top">Home</a></td>
        </tr>
        </thead>
    </table>
</header>';
}

?>

