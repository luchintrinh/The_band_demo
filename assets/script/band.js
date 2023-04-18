var $=document.querySelector.bind(document);
var $$=document.querySelectorAll.bind(document);
var date_tour=$$("#content .row .memberList .buyTicket .date");
var buy_click=$$("#tour .memberList .buyTicket .buy");
var boxBuy=$("#pay");
var closeBox=$$(".pay .box_pay .close");
var open=$(".pay");
var input_contact=$$(".form_contact input");
var submit_contact=$("#contact .submit");
var input_name=$(".form_contact .top_contact input:first-child");
var input_email=$(".form_contact .top_contact input:last-child");
var input_content=$(".form_contact .bottom_contact input:first-child");
var open_menu=$("#header .phone");
var header_menu=$("#nav");

console.log(submit_contact);

function validator(value){
    if(value){
        value.submit_check.onclick=function(){
            console.log(input_name.value)
            if(!input_name.value){
                validate(value.isRequired(input_name).test(), input_name);
            }
            else if(!input_email.value){
                validate(value.isRequired(input_email).test(), input_email);
            }
            else if(!input_content.value){
                validate(value.isRequired(input_content).test(), input_content);
            }
        };
    }
    input_name.onfocus = function(){
        if(input_name.classList.contains("invalid")){
            this.value="";
        }
    }
    input_email.onfocus = function(){
        if(input_email.classList.contains("invalid")){
            this.value="";
        }
    }
    input_content.onfocus = function(){
        if(input_content.classList.contains("invalid")){
            this.value="";
        }
    }
    input_name.onblur=function(){
        if(input_name.value){
            this.classList.remove("invalid");
        }
    }
    input_email.onblur=function(){
        this.classList.remove("invalid");
        
    }
    input_content.onblur=function(){
        this.classList.remove("invalid");
        
    }
}

function validate(option, item){
        item.value = option;
        item.classList.add("invalid");
}


 