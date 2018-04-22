import React, { Component } from 'react';
var eleId=0;
export function addElement(event){
    if(event.key == 'Enter')
    {
        var html='';
        var id='subs'+eleId;
        for(var i=0;i<eleId;i++)
        {
            html+='<input type="text" id="subs'+i+'"placeholder="SubHeadings goes here !"/><br></br>';
        }

            html += '<input type="text" id="'+id+'" placeholder="SubHeadings goes here !"/><br></br>'
            document.getElementById("adds").innerHTML=html;
            setTimeout(function(){            
                document.getElementById(id).addEventListener('keypress', function (e) {
                    if (e.keyCode===13) {
                        addElement(e);
                    }                
                },false);
            },
            1000);
            eleId++;
    }
}