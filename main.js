function sizes(){
 document.getElementById("ac").style.fontSize=document.getElementById("size").value  
}
function underline(){
    document.getElementById("ac").style.textDecoration="underline"
}
function italique(){
    document.getElementById("ac").style.fontStyle="italic"
}
function bolds(){
    document.getElementById("ac").style.fontWeight="bold"
}
function Find(){
    document.getElementById("ac").style.fontFamily=document.getElementById("fam").value ;
    console.log(document.getElementById("fam").value ) 
   }
    $(".fo").hover(function(){
        $(this).css("opacity", "0.5"); $(this).find("#btn").show()
        } , function(){
        $(this).css("opacity", "1"); $(this).find("#btn").hide()
      });
      $("#modal").onclick(function(){
        $(this).css("display","block")},function(){
            $(this).css("display","block")
        });
      