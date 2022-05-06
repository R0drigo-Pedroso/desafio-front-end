
function formulario(){
  document.getElementById('criar-topico').style.display='none';
  document.getElementById('enviar-topico').style.display='block';
}
function formulario2(){
  document.getElementById('enviar-topico').style.display='none';
  document.getElementById('criar-novo-topico').style.display='block';
  document.getElementById('feedback').style.display='block';
}
function formulario3(){
  document.getElementById('enviar-topico').style.display='none';
  document.getElementById('feedback').style.display='none';
  document.getElementById('enviar-topico').style.display='block';
}
function formularioComentario(){
  var comentario=document.getElementById('comentario');
  var btn_icon=document.getElementById('btn-icon');
  var btn_icon_2=document.getElementById('btn-icon-2');

  if(comentario.style.display === 'inline'){
      comentario.style.display='none';
      btn_icon.innerHTML='1 likes';
      btn_icon_2.innerHTML='1 respostas';
  }
  else{
      comentario.style.display='inline';
      btn_icon.innerHTML='4 likes';
      btn_icon_2.innerHTML='4 respostas';
  }
}

