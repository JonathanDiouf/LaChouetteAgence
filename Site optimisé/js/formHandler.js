$(function(){function n(n){var t="./includes/"+n.attr("id")+".php";return n.attr("template-path")&&(t=n.attr("template-path")+"/includes/"+n.attr("id")+".php"),t}$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitSuccess:function(t,i){if(!t.attr("action")){i.preventDefault();var u=n(t),r={};t.find("input, textarea, option:selected").each(function(){var n=$(this).val(),t=$(this).attr("id");$(this).is(":checkbox")?n=$(this).is(":checked"):$(this).is(":radio")?n=$(this).val()+" = "+$(this).is(":checked"):$(this).is("option:selected")&&(t=$(this).parent().attr("id"));r[t]=n});$.ajax({url:u,type:"POST",data:r,cache:!1,success:function(){t.is("[success-msg]")?t.append("<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;<\/button><strong>"+t.attr("success-msg")+"<\/strong><\/div><\/div>"):window.location.replace(t.attr("success-url"));t.trigger("reset")},error:function(){$("#form-alert").length==0&&t.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;<\/button><strong>"+t.attr("fail-msg")+"<\/strong><\/div><\/div>")}})}},filter:function(){return $(this).is(":visible")}})})