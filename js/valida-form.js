function validaFormulario(){
    let nome = formulario.nome.value;
    let email = formulario.email.value;
    let mensagem = formulario.mensagem.value;
   
    /*-----------------NOME-------------------***/
    if (nome == ""){
        document.getElementById('mensagem-nome').innerHTML='Erro no envio: Preenha o campo Nome.';
        formulario.nome.focus();
        return false;
    }
    /*-----------------EMAIL-------------------***/
    if (email == ""){
        document.getElementById('mensagem-email').innerHTML = 'Erro no envio: Preenha o campo Email.';
        formulario.email.focus();
        return false;
    }else{
        email = formulario.email.value;

        if (email.indexOf("@") >= 0  && email.indexOf(".com") >= 0){
            const emailSeparado = email.split("@");
    
            let usuario = emailSeparado[0];
            let separaDominio = emailSeparado[1].split(".com");
            let dominio = separaDominio[0];
    
            if (usuario.indexOf("&")>=0 || usuario.indexOf("=")>=0 || usuario.indexOf("%")>=0 || usuario.indexOf("!")>=0 || usuario.indexOf("#")>=0 ||
            usuario.indexOf("'")>=0 || usuario.indexOf("+")>=0 || usuario.indexOf(",")>=0 || usuario.indexOf("!")>=0 ||
            usuario.indexOf("<")>=0 || usuario.indexOf(">")>=0 || usuario.indexOf(" ")>=0 || usuario.indexOf("$")>=0){
                document.getElementById('mensagem-email').innerHTML = 'Erro no envio: Endereço de email inválido. O nome de usuário não pode conter caracteres especiais.';
                formulario.email.focus();
                return false;
            }
            
            if(usuario.length > 32){
                document.getElementById('mensagem-email').innerHTML ='Erro no envio: Endereço de email inválido. O nome de usuário não pode exceder a quantidade de 32 caracteres.';
                formulario.email.focus(); 
                return false;
            }
            
            if (dominio.indexOf("&")>=0 || dominio.indexOf("=")>=0 || dominio.indexOf("%")>=0 || dominio.indexOf("!")>=0 || dominio.indexOf("#")>=0 ||
            dominio.indexOf("'")>=0 || dominio.indexOf("+")>=0 || dominio.indexOf(",")>=0 || dominio.indexOf("!")>=0 ||
            dominio.indexOf("<")>=0 || dominio.indexOf(">")>=0 || dominio.indexOf(" ")>=0 || dominio.indexOf("$")>=0){
                document.getElementById('mensagem-email').innerHTML = 'Erro no envio: Endereço de email inválido. O nome de domínio não pode conter caracteres especiais.';
                formulario.email.focus();
                return false;
            }
            
            if(dominio.length > 16){
                document.getElementById('mensagem-email').innerHTML = 'Erro no envio: Endereço de email inválido. O nome de domínio não pode exceder a quantidade de 16 caracteres.';
                formulario.email.focus();
                return false;
            }
    
        }else{
            document.getElementById('mensagem-email').innerHTML = 'Erro no envio: Endereço de email inválido';
            formulario.email.focus();
            return false;
        }
    }
    /*-----------------MENSAGEM-------------------***/
    if (mensagem == ""){
        document.getElementById('mensagem-mensagem').innerHTML = 'Erro no envio: Insira uma mensagem.';
        formulario.mensagem.focus();
        return false;
    }

    else{
        if ((nome.length && email.length && mensagem.length)>0 ){
            document.getElementById('mensagem-nome').innerHTML='';
            document.getElementById('mensagem-email').innerHTML = ''; 
            document.getElementById('mensagem-mensagem').innerHTML = '';
        }

        alert(`Obrigado pelo contato, ${nome}!`)
        nome = formulario.nome.value="";
        email = formulario.email.value="";
        mensagem = formulario.mensagem.value="";
        return false;
    }
}
