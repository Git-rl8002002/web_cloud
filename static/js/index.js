
function logout2(){
        
        // scroll to top 
        jQuery("html,body").animate({scrollTop:0},1000);

        $.ajax({
                type:"GET",
                url:"/logout2",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                      alert(ajaxError);
                },
                success:function(res){
                        alert("超過10分鐘沒任何度動作 , 系統已將您已自動登出 !");
                        window.location.href="/login"
                        //$("#add_account_form").show(1000).html(res);
                },
                beforeSend:function(){
                        $('#status').html("now logout...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });
}

function check_account_user(){
        var a_user = $("#a_user").val();

        if(a_user.length != 0)
                $.ajax({
                        type:"POST",
                        url:"/submit_check_account_user",
                        data:{
                                'a_user':a_user,
                        },
                        datatype:"html",
                                error:function(xhr , ajaxError , throwError){
                                alert(xhr.status);
                                alert(xhr.responseText);
                                alert(throwError);
                                alert(ajaxError)
                        },
                        success:function(res){
                                
                                $("#check_account_user").show(1000).html(res);
                                
                                // scroll page bottom to page top
                                goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("刪除帳號資料 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                }); 

}

function change_account_status(){
        var val = $("#change_account_status").val();
        $("#a_status").val(val);
}

function del_account_form(){
        var a_user = $("#a_user").val();
        var a_pwd = $("#a_pwd").val();
        var a_status = $("#a_status").val();
        var a_lv = $("#a_lv").val();

        var check_del = prompt("刪除 " + a_user + " , 確定刪除 , 再按一次 y ");
        
	if(check_del == 'y'){	
                $.ajax({
                        type:"POST",
                        url:"/submit_del_account_form",
                        data:{
                                'a_user':a_user,
                                'a_pwd':a_pwd,
                                'a_status':a_status,
                                'a_lv':a_lv
                        },
                        datatype:"html",
                                error:function(xhr , ajaxError , throwError){
                                alert(xhr.status);
                                alert(xhr.responseText);
                                alert(throwError);
                                alert(ajaxError)
                        },
                        success:function(res){
                                
                                $("#account_manager").show(1000).html(res);

                                $("#staticBackdrop").modal('hide');
                                
                                //cancel_account_form();
                                
                                // scroll page bottom to page top
                                goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("刪除帳號資料 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                }); 
        }
}



function submit_alter_account_form(){
        
        var a_user   = $("#a_user").val();
        var a_pwd    = $("#a_pwd").val();
        var a_status = $("#a_status").val();
        var a_lv     = $("#a_lv").val();

        $.ajax({
                type:"POST",
                url:"/submit_alter_account_form",
                data:{
                        'a_user':a_user,
                        'a_pwd':a_pwd,
                        'a_status':a_status,
                        'a_lv':a_lv
                },
                datatype:"html",
                        error:function(xhr , ajaxError , throwError){
                        alert(xhr.status);
                        alert(xhr.responseText);
                        alert(throwError);
                        alert(ajaxError)
                },
                success:function(res){
                        
                        $("#account_manager").show(1000).html(res);
                        
                        $('#staticBackdrop').modal('hide');

                        //cancel_account_form();
                        
                        // scroll page bottom to page top
                        goto_top();
                        
                        //location.reload(true);
                },
                beforeSend:function(){
                        $('#status').html("修改帳號資料 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        }); 
}

function submit_account_form(){
        var a_user = $("#a_user").val();
        var a_pwd = $("#a_pwd").val();
        var a_lv = $("#a_lv").val();

        if (a_user.length == 0){
                $("#a_user").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 帳號不能空白 !");
	        exit;
        }
        else if(a_pwd.length == 0){
                $("#a_pwd").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 密碼不能空白 !");
	        exit;
        }
        else{
                $.ajax({
                        type:"POST",
                        url:"/submit_add_account_form",
                        data:{
                                'a_user':a_user,
                                'a_pwd':a_pwd,
                                'a_lv':a_lv
                        },
                        datatype:"html",
                        error:function(xhr , ajaxError , throwError){
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(xhr.responseText);
                        },
                        success:function(res){
                                
                                $("#account_manager").show(1000).html(res);

                                // reload account list by modal
                                //$('#click_show_msg').click();
                                //$('#show_msg').hide(1000);
                                $("#staticBackdrop").modal("hide");
                                
                                //cancel_account_form();
                                
                                // scroll page bottom to page top
                                goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("新增帳號表格 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                }); 
        }
}

function cancel_account_form(){
        $("#add_account_form").hide(1000);
}

function add_account_form(){
        $.ajax({
                type:"POST",
                url:"/load_add_account_form",
                data:{
                        
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
                        
                        //$("#account_content").show(1000).html(res);

                        // show add account by modal
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                        
                        // scroll page bottom to page top
                        goto_top();
                        
                        //location.reload(true);
                },
                beforeSend:function(){
                        $('#status').html("新增帳號表格 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        }); 
}

function account_detail(val){
        var a_user = val;
        
        if(a_user.length > 0){
                $.ajax({
                        type:"POST",
                        url:"/load_alter_account_form",
                        data:{
                                'a_user':a_user
                        },
                        datatype:"html",
                        error:function(xhr , ajaxError , throwError){
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(xhr.responseText);
                        },
                        success:function(res){
                                
                                //$("#account_content").show(1000).html(res);

                                // show account detail by modal
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(res);
                                
                                // scroll page bottom to page top
                                goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("載入帳號資料 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                }); 
        }
}

function load_menu_money_record_by_kind(val){
        
        var kind = val;

        $.ajax({
                type:"POST",
                url:"/load_menu_money_record_by_kind",
                data:{
                        'kind':kind
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
                        
                        //$("#menu_money_record_list").show(1000).html(res);
                        
                        // show money detail content by modal
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                        
                        // scroll page bottom to page top
                        //goto_top();
                        
                        //location.reload(true);
                },
                beforeSend:function(){
                        $('#status').html("loading " + kind + " 種類記帳本清單 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });
}

function load_menu_money_record_by_day(val){
        var day = val;
        
        $.ajax({
                type:"POST",
                url:"/load_menu_money_record_by_day",
                data:{
                        'day':day
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
                        
                        //$("#menu_money_record_list").show(1000).html(res);

                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                        
                        // scroll page bottom to page top
                        goto_top();
                        
                        //location.reload(true);
                },
                beforeSend:function(){
                        $('#status').html("loading " + day + " 記帳本 - 每日清單 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });

}

function load_menu_money_record_by_month(val){
        var month = val;
        
                $.ajax({
                        type:"POST",
                        url:"/load_menu_money_record_by_month",
                        data:{
                                'month':month
                        },
                        datatype:"html",
                        error:function(xhr , ajaxError , throwError){
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(xhr.responseText);
                        },
                        success:function(res){
                                
                                //$("#menu_money_record_list").show(1000).html(res);

                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(res);
                                
                                // scroll page bottom to page top
                                goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("loading " + month + " 記帳本 - 每月清單 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                });

}

function load_menu_car_record_by_day(val){
        var day = val;
        
                $.ajax({
                        type:"POST",
                        url:"/load_menu_car_record_by_day",
                        data:{
                                'day':day
                        },
                        datatype:"html",
                        error:function(xhr , ajaxError , throwError){
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(xhr.responseText);
                        },
                        success:function(res){
                                
                                //$("#menu_car_record_list").show(1000).html(res);
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(res);
                                
                                // scroll page bottom to page top
                                goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("loading " + day + " 日用車記錄 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                });

}

function load_menu_car_record_by_month(val){
        var month = val;
        
                $.ajax({
                        type:"POST",
                        url:"/load_menu_car_record_by_month",
                        data:{
                                'month':month
                        },
                        datatype:"html",
                        error:function(xhr , ajaxError , throwError){
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(xhr.responseText);
                        },
                        success:function(res){
                                
                                //$("#menu_car_record_list").show(1000).html(res);

                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(res);
                                
                                // scroll page bottom to page top
                                goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("loading " + month + " 月用車記錄 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                });

}

function load_menu_car_record_by_year(val){
        var year = val;
        
                $.ajax({
                        type:"POST",
                        url:"/load_menu_car_record_by_year",
                        data:{
                                'year':year
                        },
                        datatype:"html",
                        error:function(xhr , ajaxError , throwError){
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(xhr.responseText);
                        },
                        success:function(res){
                                
                                //$("#menu_car_record_list").show(1000).html(res);
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(res);
                                // scroll page bottom to page top
                                goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("loading " + year + " 年用車記錄 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                });

}

function load_menu_money_record_by_year(val){
        var year = val;
        
                $.ajax({
                        type:"POST",
                        url:"/load_menu_money_record_by_year",
                        data:{
                                'year':year
                        },
                        datatype:"html",
                        error:function(xhr , ajaxError , throwError){
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(xhr.responseText);
                        },
                        success:function(res){
                                
                                //$("#menu_money_record_list").show(1000).html(res);
                                
                                // show money detail list by modal
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(res);
                                
                                // scroll page bottom to page top
                                goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("loading " + year + " 年記帳本清單 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                });

}

function load_menu_calendar_record_by_year(val){
        var year = val;

        $.ajax({
                type:"POST",
                url:"/load_menu_calendar_record_by_year",
                data:{
                        'year':year
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
                        
                        //$("#menu_calendar_record_content").show(1000).html(res);

                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                        
                        // scroll page bottom to page top
                        goto_top();
                        
                        //location.reload(true);
                },
                beforeSend:function(){
                        $('#status').html("loading " + year + " 年工作日誌 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });

}

function load_menu_calendar_record_by_month(val){
        var month = val;
        
        $.ajax({
                type:"POST",
                url:"/load_menu_calendar_record_by_month",
                data:{
                        'month':month
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
                        
                        //$("#menu_calendar_record_content").show(1000).html(res);

                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                        
                        // scroll page bottom to page top
                        goto_top();
                        
                        //location.reload(true);
                },
                beforeSend:function(){
                        $('#status').html("loading " + month + " 月工作日誌 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });

}

function load_menu_work_record_by_kind(val){
        var kind = val;
        
                $.ajax({
                        type:"POST",
                        url:"/load_menu_work_record_by_kind",
                        data:{
                                'kind':kind
                        },
                        datatype:"html",
                        error:function(xhr , ajaxError , throwError){
                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(xhr.responseText);
                        },
                        success:function(res){
                                
                                //$("#menu_work_record_content2").show(1000).html(res);

                                $('#click_show_msg').click();
                                $('#show_msg').show(1000).html(res);
                                
                                // scroll page bottom to page top
                                //goto_top();
                                
                                //location.reload(true);
                        },
                        beforeSend:function(){
                                $('#status').html("loading " + kind + " 工作記錄 ...").css({'color':'blue'});
                        },
                        complete:function(){
                                $('#status').css({'color':'white'});
                        }
                });

}

function del_menu_car_record(val){
        
        var del_no = val;
        
        var check_del = prompt("刪除 No." + del_no + " , 確定刪除 , 再按一次 y ");
        
	if(check_del == 'y'){	
                $.ajax({
                        type:"POST",
                        url:"/del_menu_car_record",
                        data:{
                                'del_no':del_no
                        },
                        datatype:"html",
                                error:function(xhr , ajaxError , throwError){
         	                alert(xhr.status);
               	                alert(xhr.responseText);
	                        alert(throwError);
                                alert(ajaxError)
                        },
                        success:function(res){
                                location.reload(true);
                        },
                        beforeSend:function(){
                                $('#menu_money_record_list').show(1000);
                        },
                        complete:function(){
                        }
                });
	}else{
                exit();
        }
}

function del_menu_money_record(val){
        
        var del_no = val;
        
        var check_del = prompt("刪除 No." + del_no + " , 確定刪除 , 再按一次 y ");
        
	if(check_del == 'y'){	
                $.ajax({
                        type:"POST",
                        url:"/del_menu_money_record",
                        data:{
                                'del_no':del_no
                        },
                        datatype:"html",
                                error:function(xhr , ajaxError , throwError){
         	                alert(xhr.status);
               	                alert(xhr.responseText);
	                        alert(throwError);
                                alert(ajaxError)
                        },
                        success:function(res){
                                
                                //$('#menu_money_record_list').show(1000).html(res);
                                
                                // reload menu money record
                                reload_menu_money_record();
                        },
                        beforeSend:function(){
                                //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                                $('#menu_money_record_list').show(1000);
                        },
                        complete:function(){
                                //$('#show_msg').hide();
                        }
                });
	}else{
                exit();
        }
}

function goto_top(){
        
        // scroll page bottom to page top
        jQuery("html,body").animate({scrollTop:0},1000);
        $('#goto_top').css({'cursor':'pointer'});

}

function submit_alter_calendar_record_form(){
        
        var no      = $('#no').val();
        var r_time  = $('#record_time').val();
        var title   = $('#title').val();
        var content = CKEDITOR.instances.content.getData();

        $.ajax({
                type:"POST",
                url:"/submit_alter_calendar_record",
                data:{
                        'no':no,
                        'r_time':r_time,
                        'title':title,
                        'content':content
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			
                        alert(title + '  , 修改完成。');
                        location.reload(true);
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#detail_calendar_record_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });
}

function submit_alter_work_record_form(){
        
        var no      = $('#no').val();
        var r_time  = $('#record_time').val();
        var kind    = $('#kind').val();
        var title   = $('#title').val();
        var content = CKEDITOR.instances.content.getData();

        $.ajax({
                type:"POST",
                url:"/submit_alter_work_record",
                data:{
                        'no':no,
                        'r_time':r_time,
                        'kind':kind,
                        'title':title,
                        'content':content
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			//$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#detail_work_record_content").show(1000).html(res);
                        
                        alert(kind + ' - ' + title + '  , 修改完成。');

                        location.reload(true);
                        // load alter  detail work record
                        //detail_work_record(no);

                        // reload menu work record
                        //reload_menu_work_record();
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#detail_work_record_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });
        

}

function detail_calendar_record3(val){
        
        let no   = val;
        
        // scroll to top 
        jQuery("html,body").animate({scrollTop:0},1000);

        $.ajax({
                type:"POST",
                url:"/detail_calendar_record",
                data:{
                        'no':no
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			//$("#content").css({'border':'#cccccc 1px solid'});
                        
        	       	//$("#detail_calendar_record_content").show(1000).html(res);

                        //$('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#detail_calendar_record_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });
}


function detail_calendar_record2(val){
        
        let data = val.split('/')
        var no   = data[2];
        
        // scroll to top 
        jQuery("html,body").animate({scrollTop:0},1000);

        $.ajax({
                type:"POST",
                url:"/detail_calendar_record",
                data:{
                        'no':no
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			//$("#content").css({'border':'#cccccc 1px solid'});
                        
        	       	//$("#detail_calendar_record_content").show(1000).html(res);

                        //$('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#detail_calendar_record_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });
}

function detail_calendar_record(val){
        
        var no = val;
        
        // scroll to top 
        jQuery("html,body").animate({scrollTop:0},1000);

        $.ajax({
                type:"POST",
                url:"/detail_calendar_record",
                data:{
                        'no':no
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			
                        //$("#content").css({'border':'#cccccc 1px solid'});
                        //$("#detail_calendar_record_content").show(1000).html(res);

                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#detail_calendar_record_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });
}

function detail_work_record2(val){

        var no = val;
        
        // scroll to top 
        jQuery("html,body").animate({scrollTop:0},1000);

        $.ajax({
                type:"POST",
                url:"/detail_work_record",
                data:{
                        'no':no
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			//$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#detail_work_record_content").show(1000).html(res);
                        
                        // show work detail by modal
                        //$('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                },
                beforeSend:function(){
                        $('#status').html("loading " + no + " 工作記錄 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });
}

function detail_work_record(val){

        var no = val;
        
        // scroll to top 
        jQuery("html,body").animate({scrollTop:0},1000);

        $.ajax({
                type:"POST",
                url:"/detail_work_record",
                data:{
                        'no':no
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			//$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#detail_work_record_content").show(1000).html(res);
                        
                        // show work detail by modal
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                },
                beforeSend:function(){
                        $('#status').html("loading " + no + " 工作記錄 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });
}

function load_menu_website_record_by_kind(val){

        var kind = val;
        
        // scroll to top 
        jQuery("html,body").animate({scrollTop:0},1000);

        $.ajax({
                type:"POST",
                url:"/load_menu_website_record_by_kind",
                data:{
                        'kind':kind
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			//$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#detail_work_record_content").show(1000).html(res);
                        
                        // show work detail by modal
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                },
                beforeSend:function(){
                        $('#status').html("loading " + kind + " 網站書籤記錄 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });
}

function submit_add_calendar_record_form(){
        
        var user = $('#user').val();
        var date = $('#date').val();
        var title = $('#title').val();
        var content = CKEDITOR.instances.content.getData();
        var data = date.split('-')
        var r_year = data[0];
        var r_month = data[1];

        //alert(user + ' / ' + date + ' / ' + content + ' / ' + title + ' / ' + r_year + ' / ' + r_month)

        // check title
	if(title.length == 0){
	        /// show msg
                $("#title").css({'border-bottom-color':'red'});
		$("#show_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 工作日誌標體不能空白 !!!");
	        exit;
	}
        // check content 
	if(content.length == 0){
	        /// show msg
                $("#content").css({'border-bottom-color':'red'});
		$("#show_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 工作日誌內容不能空白 !!!");
	        exit;
	}

        $.ajax({
                type:"POST",
                url:"/submit_add_calendar_record_form",
                data:{
                        'user':user,
                        'date':date,
                        'title':title,
                        'content':content,
                        'r_year':r_year,
                        'r_month':r_month
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                      alert(ajaxError)
                },
                success:function(res){
                        //console.log(res.validate);
			//$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#add_content").show(1000).html(res);
                        
                        // clean value
                        $("#show_msg").val('');
                        $('#title').val('');
                        $('#content').val('');
                        
                        // reload menu calendar record
                        reload_menu_calendar_record();
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#add_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });     
}

function submit_add_work_record_form(){
        
        var user = $('#user').val();
        var date = $('#date').val();
        var kind = $('#kind').val();
        var title = $('#title').val();
        var content = CKEDITOR.instances.content.getData();

        //alert(user + ' / ' + date + ' / ' + kind + ' / ' + money + ' / ' + content + ' / ' + record_year + ' / ' + record_month + ' / ' + record_day)
        
        // check kind 
	if(kind.length == 0){
	        /// show msg
                $("#kind").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 工作記錄種類不能空白 !!!");
	        exit;
	}
        // check title
	if(title.length == 0){
	        /// show msg
                $("#title").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 工作記錄標體不能空白 !!!");
	        exit;
	}
        // check content 
	if(content.length == 0){
	        /// show msg
                $("#content").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 工作記錄內容不能空白 !!!");
	        exit;
	}

        $.ajax({
                type:"POST",
                url:"/submit_add_work_record_form",
                data:{
                        'user':user,
                        'date':date,
                        'kind':kind,
                        'title':title,
                        'content':content
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                      alert(ajaxError)
                },
                success:function(res){
                        //console.log(res.validate);
			//$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#add_content").show(1000).html(res);
                        
                        // clean show msg value
                        $("#show_msg").val('');
                        
                        // reload menu work record
                        reload_menu_work_record();
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#add_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });        

}

function submit_add_car_record_form(){
        
        var user = $('#user').val();
        var date = $('#date').val();
        var kind = $('#kind').val();
        var go_out_km = $('#go_out_km').val();
        var go_home_km = $('#go_home_km').val();
        var total_used_km = go_home_km - go_out_km;
        var destination = $('#destination').val();
        var data = date.split('-');
        var r_year = data[0];
        var r_month = data[0]+'-'+data[1];
        var r_day = data[2];

        
        // check kind 
	if(kind.length == 0){
	        /// show msg
                $("#kind").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 用車種類不能空白 !!!");
	        exit;
	}
        // check go_home_km
	if(go_home_km.length == 0){
	        /// show msg
                $("#go_home_km").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 入庫里程不能空白 !!!");
	        exit;
	}
        // check destination
	if(destination.length == 0){
	        /// show msg
                $("#destination").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 用車記錄內容不能空白 !!!");
	        exit;
	}



        $.ajax({
                type:"POST",
                url:"/submit_add_car_record_form",
                data:{
                        'user':user,
                        'date':date,
                        'kind':kind,
                        'go_out_km':go_out_km,
                        'go_home_km':go_home_km,
                        'total_used_km':total_used_km,
                        'destination':destination,
                        'r_year':r_year,
                        'r_month':r_month,
                        'r_day':r_day
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                      alert(ajaxError)
                },
                success:function(res){
                        
                        //alert('ok');
                        //$("#add_content").show(1000).html(res);
                        
                        // clean show msg value
                        //$("#show_msg").val('');
                        
                        // reload menu money record
                        //reload_menu_money_record();
                        location.reload(true);
                        
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#add_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });        

}

function submit_add_website_record_form(){
        
        var user = $('#w_user').val();
        var date = $('#w_date').val();
        var kind = $('#w_kind').val();
        var name = $('#w_name').val();
        var url  = $('#w_url').val();

        var data1 = date.split(' ')
        var data2 = data1[0].split('-')
        var record_year = data2[0];
        var record_month = data2[1];
        var record_day = data2[2];

        //alert(user + ' / ' + date + ' / ' + kind + ' / ' + money + ' / ' + content + ' / ' + record_year + ' / ' + record_month + ' / ' + record_day)
        
        // check kind 
	if(kind.length == 0){
	        /// show msg
                $("#kind").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 網站書籤種類不能空白 !!!");
	        exit;
	}
        // check name
	if(name.length == 0){
	        /// show msg
                $("#money").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 網站書籤名稱不能空白 !!!");
	        exit;
	}
        // check url 
	if(url.length == 0){
	        /// show msg
                $("#content").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 網站書籤網址不能空白 !!!");
	        exit;
	}

        $.ajax({
                type:"POST",
                url:"/submit_add_website_record_form",
                data:{
                        'user':user,
                        'date':date,
                        'kind':kind,
                        'name':name,
                        'url':url
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
                        
                        $("#add_content").show(1000).html(res);
                        
                        // clean show msg value
                        $("#show_msg").val('新增網站書籤 : ' + name + ' , 完成.');
                        
                        // reload menu money record
                        //reload_menu_money_record();

                        location.reload(true);
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#add_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });        

}

function submit_add_money_record_form(){
        
        var user = $('#user').val();
        var date = $('#date').val();
        var kind = $('#kind').val();
        var money = $('#money').val();
        var content = $('#content').val();
        var data1 = date.split(' ')
        var data2 = data1[0].split('-')
        var record_year = data2[0];
        var record_month = data2[1];
        var record_day = data2[2];

        //alert(user + ' / ' + date + ' / ' + kind + ' / ' + money + ' / ' + content + ' / ' + record_year + ' / ' + record_month + ' / ' + record_day)
        
        // check kind 
	if(kind.length == 0){
	        /// show msg
                $("#kind").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 記帳表種類不能空白 !!!");
	        exit;
	}
        // check money
	if(money.length == 0){
	        /// show msg
                $("#money").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 記帳表花費不能空白 !!!");
	        exit;
	}
        // check content 
	if(content.length == 0){
	        /// show msg
                $("#content").css({'border-bottom-color':'red'});
		$("#error_msg").css({'color':'red'}).html("<i class='bi bi-x-circle-fill'></i> 記帳表內容不能空白 !!!");
	        exit;
	}

        $.ajax({
                type:"POST",
                url:"/submit_add_money_record_form",
                data:{
                        'user':user,
                        'date':date,
                        'kind':kind,
                        'money':money,
                        'content':content,
                        'record_year':record_year,
                        'record_month':record_month,
                        'record_day':record_day
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                      alert(ajaxError)
                },
                success:function(res){
                        
                        $("#add_content").show(1000).html(res);
                        
                        // clean show msg value
                        $("#show_msg").val('');
                        
                        // reload menu money record
                        //reload_menu_money_record();

                        location.reload(true);
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#add_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });        

}

function reload_menu_money_record_by_day(){
        $.ajax({
                type:"GET",
                url:"/reload_menu_money_record_by_day",
                //url:"/menu_calendar_record",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                },
                success:function(res){
                        
                        location.reload(true);
                        $("#money_record_by_day").show(1000).html(res);  
                },
                beforeSend:function(){
                        $('#status').html("loading 記帳本 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });                
}

function reload_menu_car_record(){
        $.ajax({
                type:"GET",
                url:"/reload_menu_car_record",
                //url:"/menu_calendar_record",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                },
                success:function(res){
                        
                        location.reload(true);
                        $("#menu_car_record_list").show(1000).html(res);  
                },
                beforeSend:function(){
                        $('#status').html("loading 用車記錄 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });                
}

function reload_menu_money_record(){
        $.ajax({
                type:"GET",
                url:"/reload_menu_money_record",
                //url:"/menu_calendar_record",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                },
                success:function(res){
                        
                        location.reload(true);
                        $("#menu_money_record_list").show(1000).html(res);  
                },
                beforeSend:function(){
                        $('#status').html("loading 記帳本 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });                
}

function reload_menu_calendar_record(){
        $.ajax({
                type:"GET",
                url:"/reload_menu_calendar_record",
                //url:"/menu_calendar_record",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                },
                success:function(res){
                        
                        location.reload(true);
                        $("#main_content").show(1000).html(res);  
                },
                beforeSend:function(){
                        $('#status').html("loading 工作日誌 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });                
}

function reload_menu_work_record(){
        $.ajax({
                type:"GET",
                url:"/reload_menu_work_record",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                },
                success:function(res){
                        
                        $("#menu_work_record_content").html(res);  
                        location.reload(true);
                },
                beforeSend:function(){
                        $('#status').html("loading 工作記錄 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });                
}

function select_car_record_kind(val){
        var data = val;
        $('#kind').val(data);

        // select go out km 
        $.ajax({
                type:"POST",
                url:"/select_car_record_by_go_out_km",
                data:{
                        'kind':val
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                      alert(ajaxError)
                },
                success:function(res){

                        $('#go_out_km').val(res);
                },
                beforeSend:function(){
                        $('#detail_calendar_record_content').show(1000);
                },
                complete:function(){
                        
                }
        });

}


function select_website_record_kind(val){
        var data = val;
        $('#w_kind').val(data);
}

function select_money_record_kind(val){
        var data = val;
        $('#kind').val(data);
}

function del_website_record(val){
        
        let data = val.split('/');
        let kind = data[0];
        let name = data[1];

        var check_del = prompt("刪除 " + kind + "-" + name + " ， 確定請再按一次 y : ");
	if(check_del != 'y'){	
                exit();
	}else{

                $.ajax({
                type:"POST",
                url:"/del_website_record",
                data:{
                        'kind':kind,
                        'name':name
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                      alert(ajaxError)
                },
                success:function(res){

                        $('#detail_calendar_record_content').hide(1000);
                        
                        // reload menu calendar record
                        reload_menu_calendar_record();
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#detail_calendar_record_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
                });
        }
}

function del_alter_calendar_record_form(){
        
        var no = $('#no').val();

        var check_del = prompt("刪除 No." + no + " ， 確定請再按一次 y : ");
	if(check_del != 'y'){	
                exit();
	}else{

                $.ajax({
                type:"POST",
                url:"/del_alter_calendar_record_form",
                data:{
                        'no':no
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	      alert(xhr.status);
               	      alert(xhr.responseText);
	              alert(throwError);
                      alert(ajaxError)
                },
                success:function(res){

                        $('#detail_calendar_record_content').hide(1000);
                        
                        // reload menu calendar record
                        reload_menu_calendar_record();
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#detail_calendar_record_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
                });
        }
}

function cancel_add_work_record_form(){
        $('#kind').val('');
        $('#content').val('');
        $('#title').val('');

        $("#add_work_form").hide(1000);
        location.reload(true);
}

function cancel_add_money_record_form(){
        $('#kind').val('');
        $('#content').val('');
        $('#money').val('');

        $("#add_money_form").hide(1000);
        location.reload(true);
}

function add_calendar_record(){
        
        // scroll page bottom to page top 
        jQuery("html,body").animate({scrollTop:0},1000);

        $.ajax({
                type:"GET",
                url:"/add_calendar_record_form",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			
                        //$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#add_content").show(1000).html(res);

                        // hide alter work record form content
                        //$('#detail_work_record_content').hide(1000);

                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);

                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        //$('#add_content').show(1000);
                        $('#status').html("loading 工作日誌表 ...").css({'color':'blue'});
                },
                complete:function(){
                        //$('#show_msg').hide();
                        $('#status').css({'color':'white'});
                }
        });        
}

function add_work_record(){
        
        // scroll to top 
        jQuery("html,body").animate({scrollTop:0},1000);

        $.ajax({
                type:"GET",
                url:"/add_work_record_form",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			
                        //$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#add_content").show(1000).html(res);

                        // hide alter work record form content
                        //$('#detail_work_record_content').hide(1000);

                        // show add form by modal
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        //$('#add_content').show(1000);
                        $('#status').html("loading 工作記錄表 ...").css({'color':'blue'});
                },
                complete:function(){
                        $('#status').css({'color':'white'});
                }
        });        
}

function add_car_record(){
        $.ajax({
                type:"GET",
                url:"/add_car_record_form",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			//$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#add_content").show(1000).html(res);

                        // show car list by modal
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                               
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        //$('#add_content').show(1000);
                        //$('#add_content').show(1000);
                        $('#status').html("loading 用車記錄表 ...").css({'color':'blue'});
                },
                complete:function(){
                        //$('#show_msg').hide();
                        $('#status').css({'color':'white'});
                }
        });        
}

function add_website_record(){
        $.ajax({
                type:"GET",
                url:"/add_website_record_form",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
         	        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			//$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#add_content").show(1000).html(res);

                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                        
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        $('#add_content').show(1000);
                },
                complete:function(){
                        //$('#show_msg').hide();
                }
        });        
}


function search_money_record_kind(){
        
        let kind = $('#kind').val();

        $.ajax({
                type:"POST",
                url:"/search_money_record_form_kind",
                data:{
                        'kind':kind
                },
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                      $('#click_show_msg').click();
                      $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			
                        //$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#add_content").show(1000).html(res);

                        // show add form by modal
                        //$('#click_show_msg').click();
                        $('#search_money_record_form_kind').show(1000).html(res);
                               
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        //$('#add_content').show(1000);
                        
                        $('#status').html("loading 記帳表種類 ...").css({'color':'blue'});
                        
                },
                complete:function(){
                        //$('#show_msg').hide();
                        $('#status').css({'color':'white'});
                }
        });    
}

function add_money_record(){
        $.ajax({
                type:"GET",
                url:"/add_money_record_form",
                data:{},
                datatype:"html",
                error:function(xhr , ajaxError , throwError){
                      $('#click_show_msg').click();
                      $('#show_msg').show(1000).html(xhr.responseText);
                },
                success:function(res){
			
                        //$("#content").css({'border':'#cccccc 1px solid'});
        	       	//$("#add_content").show(1000).html(res);

                        // show add form by modal
                        $('#click_show_msg').click();
                        $('#show_msg').show(1000).html(res);
                               
                },
                beforeSend:function(){
                        //$('#show_msg').html('載入操作紀錄管理中...').css({'color':'blue'}).show();
                        //$('#add_content').show(1000);
                        
                        $('#status').html("loading 記帳表 ...").css({'color':'blue'});
                        
                },
                complete:function(){
                        //$('#show_msg').hide();
                        $('#status').css({'color':'white'});
                }
        });        
}
