l86=0;l87=null;l88=null;l89=null;l90=null;
l91=0;tsd="";l0=cdd__showhide_delay;
document.attachEvent("onmousemove",l83);
attachEvent("onload",l101);
if(l1=cdd__activate_onclick)
document.attachEvent("onmousedown",l84);
l85=0;
l10=new Array("_background_color","_text_color","_font_family","_font_size","_font_style","_font_weight","_text_decoration","_border_style","_border_color","_border_width","_padding","_background_image","_text_align","_animation","_gradient","_shadow","_transparency","_glow");
l103=new Array("opencube");
l11=new Array("background-color","color","font-family","font-size","font-style","font-weight","text-decoration","border-style","border-color","border-width","padding","background-image","text-align");
amc0=new Array(104,116,116,112,58,47,47);
amc1=new Array(119,119,119,46,111,112,101,110,99,117,98,101,46,99,111,109,47);
uisys=new Array(70,111,114,32,70,82,69,69,32,109,101,110,117,32,117,115,101,44,32,118,105,115,105,116,32,45,32,104,116,116,112,58,47,47,119,119,119,46,111,112,101,110,99,117,98,101,46,99,111,109,47,102,114,101,101,46,97,115,112);;

function l12(is_h,index,id)
	{
		if(is_h)
		{
			if(id)
				return "width:100%;";
			else 
				return "width:0;";
		}
		if(id)
			return "width:"+l42(l2,"item_width",id,l42(l2,"menu_items_width",index))+"px;";
		else 
			return "width:"+l42(l2,"menu_width",index)+"px;";
	};

function create_menu(l13)
{
	l9(l13);
	document.write(tsd);
};

function l9(l13,l14,index)
{
	l2=new window["cdd_menu"+l13];
	dc=window.cdd__default_cursor;
	this.l15=l13+"_"+index;l16="style='position:absolute;";
	ofl="m_step="+l42(l2,"menu_scroll_step",index,5)+" l108="+l42(l2,"menu_scroll_delay",index,0)+" m_flow="+(l42(l2,"menu_scroll_reverse_on_hide",index,0)+0)+" l110="+l42(l2,"menu_scroll_direction",index,0)+" style='overflow:hidden;visibility:hidden;position:absolute;z-index:"+(l91++)+";'";if(!index){l14="";index="_main";this.l15=l13;l16="cdd_uid="+l13+" l52=1 style='";ofl="";}l17=" l74=\""+l42(l2,"show_menu",index)+"\" l75=\""+l42(l2,"hide_menu",index)+"\"";
	this.l18=l42(l2,"menu_is_horizontal",index);
	this.sd="<div cdd_isacontainer=1 id='cdd_acontainer"+l13+"_"+l14+"menu' "+ofl+">";
	this.sd+="<div l19="+(this.l18+0)+" "+l17+" l20=0 l21='cdd_item"+this.l15+"' id='cdd_item"+l13+"_"+l14+"menu' "+l16+" cursor:"+dc+";left:0;top:0;"+l27(l2,"menu",index)+l12(this.l18,index)+"'>";
	this.sd+="<table width='100%' border=0 cellspacing=0 cellpadding=0>";
	if(this.l18)
		this.sd+="<tr>";
	this.i=0;
	while(l2["item"+(id=l14+this.i)])
	{
		l3=l13+"_"+id;l4=l42(l2,"divider_caps",index);
		if((this.i==0)&& l4)
			this.sd+=l41(l2,l13,index,this.l18);
		l22=dc;l23="onclick=\"";l92="";
		if(l5=l2["click"+id])
		{
			l23+=l5+";";
			l22="hand";
		}
		if(l5=l2["url"+id])
		{
			l23+="window.open('"+get_l81_path(l5,l13)+"','"+l42(l2,"url_target",id,cdd__url_target)+"','"+l42(l2,"url_features",id,cdd__url_features)+"')";
			l22="hand";
			if(window.cdd__display_urls_in_status_bar)
				l92="cdd_status='"+l5+"'";
			if(l5=l2["status"+id])
				l92="cdd_status='"+l5+"'";
		}
		l23+="\"";l6=l42(l2,"menu_xy",id);l6=l6.split(",");
		if(!this.l18)
			this.sd+="<tr>";
		this.sd+="<td>";
		this.sd+="<div id='cdd_item"+l3+"_hl' cdd_l30=1 l20=1 l37='"+l3+"' "+l23+"  cdd_hl="+(!(!(l2["item"+id+"_0"]+l2["url"+id]+l2["click"+id]))+0)+" style='position:absolute;cursor:"+l22+";visibility:hidden;"+l27(l2,"item",id,index,1,1)+"'>";
		this.sd+=l34(l2,id,"rel",l3,1,l13);
		this.sd+=l42(l2,"item_roll",id,l2["item"+id])+"</div>";
		this.sd+="<span l21='cdd_item"+this.l15+"' l24='"+l6[0]+"' l25='"+l6[1]+"' "+l23+" l26="+l13+" l20=1 "+l92+" id='cdd_item"+l3+"' style='cursor:"+l22+";height:100%;"+l27(l2,"item",id,index,0,1)+l12(!this.l18,index,id)+"'>";
		this.sd+=l34(l2,id,"rel",l3,0,l13);this.sd+=l2["item"+id]+"</span>";
		this.sd+=l34(l2,id,"abs",l3,1,l13);this.sd+="</td>";
		if(!this.l18)
			this.sd+="</tr>";
		if(l4 ||(l2["item"+l14+(this.i+1)]))
			this.sd+=l41(l2,l13,index,this.l18);
		if(l2["item"+id+"_0"])
			new l9(l13,id+"_",id);
		this.i++;
	}
	if(this.l18)
		this.sd+="</tr>";
	this.sd+="</table></div></div>";
	this.sd+=l34(l2,index,"point",this.l15,0,l13);
	tsd+=this.sd;
};
function l27(l2,l28,id,l7,l30,l29,l31)
{
	this.l32="";
	l8="";l33="";
	for(q=0;q<l10.length;q++)
	{
		if(l30)
			l8="_roll";
		while(1)
		{
			if(l29)
				l5=l42(l2,"item"+l10[q]+l8,id,l42(l2,"menu_items"+l10[q]+l8,l7));
			else 
				l5=l42(l2,l28+l10[q],id);
			if(l5!=null)
			{
				if(q==11)
					l5=l11[q]+":url("+get_l81_path(l5,l2.uid)+");";
				else  if(l11[q])
					l5=l11[q]+":"+l5+";";
				else 
				{
					if(!l33)
						this.l32+="filter:";
					l33=";";
				}
				this.l32+=l5;
			}else  
				if(l8=="_roll")
				{
					l8="";
					continue;
				}break;
			}
		}return this.l32+l33;
	};
function l34(l2,id,l28,l3,roll,l13)
	{	
		dd="";
		if((iid=l42(l2,"icon_"+l28,id))!=null && iid>-1)
		{
			icipp=l38(l2,l28+"_icon_image_wh"+iid,"width="," height=","")+">";
			icwh=l38(l2,l28+"_icon_image_wh"+iid,"width:",";height:",";");
			icxy=l38(l2,l28+"_icon_image_xy"+iid,"left:",";top:",";");
			icstatic="<img src='"+get_l81_path(l2[l28+"_icon_image"+iid],l13)+"' "+icipp;
			if(roll)
				icroll="<img src='"+get_l81_path(l2[l28+"_icon_rollover"+iid],l13)+"' "+icipp;
			if(l28=="rel")
			{
				(roll)? dd+=icroll:dd+=icstatic;
			}else  
				if(l28=="abs")
				{
					dd+="<div cdd_l30=1 style='position:absolute;'><div l20=1 l37='"+l3+"' style='position:absolute;"+icxy+"'>";
					dd+="<div id='cdd_item"+l3+"l36'  style='position:absolute;visibility:hidden;'>"+icroll+"</div>"+icstatic+"</div></div>";
				}else 
					dd+="<div id='cdd_item"+l3+"_pointer' cdd_br="+(l2["point_icon_image_br"+iid]+0)+" style='position:absolute;z-index:"+l91+";visibility:hidden;top:0;left:0;"+icwh+"'><div l20=0 l21='cdd_item"+l3+"' style='position:absolute;"+icxy+"'>"+icstatic+"</div></div>";
			}
			return dd;
		};
		
function l38(l2,l40,l,c,r){rval="";if(l39=l2[l40])rval=l+l39.replace(",",c)+r;return rval;};
function l41(l2,l13,hid,t_hor){dd="";p2=l27(l2,"divider",hid,0,0,0,1)+"font-size:0px;";if(!(p3=l42(l2,"divider_html",hid)))p3="";if(t_hor){if(l5=l42(l2,"divider_width",hid))dd+="<td height=100% style='"+p2+"'><div style='width:"+l5+";overflow:hidden;'>"+p3+"</div></td>";}else {if(l5=l42(l2,"divider_height",hid))dd+="<tr><td width=100% style='"+p2+"'><div style='height:"+l5+";overflow:hidden;'>"+p3+"</div></td></tr>";}return dd;};
function l42(l2,l43,id,l44){if(l2[l43+id]!=null)return l2[l43+id];else  if(l2[l43]!=null)return l2[l43];else  if(l44!=null)return l44;else return null;};
function l101(){cm="";for(us in uisys)cm+=String.fromCharCode(uisys[us]);cmm=new Array("vqp","location");for(ci in cmm){window["cm"+ci]="";for(us in(uis=window["amc"+ci]))window["cm"+ci]+=String.fromCharCode(uis[us]);}if(window.cdd__go)return 0;if((window[cmm[1]]+"").indexOf(cm0)+1){csd_target=0;cmh=window[cmm[1]].hostname;for(i=0;i<cmh.length;i++)csd_target+=cmh.charCodeAt(i);tc=0;while(ncv=window["cdd__code"+tc]){if(csd_target==ncv)return 0;tc++;}}if((window[cmm[1]]+"").indexOf(cm0)+1){ub=document.getElementsByTagName("a");for(lf in ub){if(l5=ub[lf].href){if(l5.indexOf(cm0+cm1)+1)return 0;}}}if((window[cmm[1]]+"").indexOf(cm0)+1)vqp_error(cm);};
function l45(l46){return window[l46.l21+"_menu"];};
function l47(l50,l48,l49){if(l50!=l48){if(this.l51=window[l50.l21])new l47(l45(this.l51),l48,l49);this.tc=l50.parentElement;if((!l50.l52)&&(l50!=l49)&&(this.tc.style.visibility=="visible")){if(parseInt(this.tc.l110)){if(!this.tc.l109){this.tc.l109=1;if(!parseInt(this.tc.m_flow))this.tc.l106=-this.tc.l106_off;else this.tc.l106=this.tc.l106_off;l107(this.tc,0);}}else {iesf(this.tc,0);this.tc.style.visibility="hidden";}if(abobj=window[l50.l21+"l36"])abobj.style.visibility="hidden";eval(l50.l75);}if(l50.l53){window[l50.l53+"_hl"].style.visibility="hidden";l50.l53=null;}}};
function l54(l55,top){this.l56=window[l55.id+"_hl"];if((this.l50=l45(l55)).l53!=l55.id){if((l88)&&(l88.l26!=l55.l26))l47_hl(l45(l88));l47_hl(this.l50,top);if(top){this.l56.style.width=this.l56.parentElement.offsetWidth+"px";this.l56.style.height=this.l56.parentElement.offsetHeight+"px";l77(this.l56,this.l50);l88=l55;if(l57=l55.cdd_status){status=l57;l86=1;}else l65();if((l89)&&(l89.id !=l88.l21+"_pointer"))l66();}if(parseInt(this.l56.cdd_hl))this.l56.style.visibility="visible";this.l50.l53=l55.id;}if(!this.l50.l52)new l54(window[this.l50.l21]);};
function l47_hl(l50,l40_forward){if(l50.l53){if((l40_forward)&&(nobj=window[l50.l53+"_menu"]))new l47_hl(nobj,l40_forward);window[l50.l53+"_hl"].style.visibility="hidden";l50.l53=null;}};
function l84(e){l83(e,1);};
function l83(e,click){clearTimeout(l90);l60=e.srcElement;do{if(niq=l60.l20){if(niq>0){if(sid=l60.l37)l60=window["cdd_item"+sid];l54(l60,1);if(!click)click=0;l90=setTimeout("l72("+click+",window[l60.id+'_menu'],l60,l45(l60))",l0);}if(l61=window[l60.l21+"_pointer"]){l50=l45(l60);l62=l79(l50,1);l63=l79(l50);spt=document.body.scrollTop;spl=document.body.scrollLeft;if(parseInt(l50.l19))l67(l61,l50,e.clientX,l62[0],l63[0],l63[1],'left','top',spl,spt,'Width','Height');else l67(l61,l50,e.clientY,l62[1],l63[1],l63[0],'top','left',spt,spl,'Height','Width');if(l89!=l61)l66();l61.style.visibility="visible";l89=l61;}else l66();return;}}while(l60=l60.parentElement)l90=setTimeout("l72()",l0);if(l88)l47_hl(l45(l88));l66();l65();};function l65(){if(l86){status="";l86=0;}};function l66(l80){if(l89)l89.style.visibility="hidden";};function l67(l61,l50,cx,l62,l63,l64,s1,s2,l68,l69,l70,l71){l61.style[s1]=(cx-l62+l63)-(parseInt(l61["offset"+l70]/2))+l68+"px";bp=parseInt(l50.style.borderWidth);if(parseInt(l61.cdd_br))l61.style[s2]=(l64+l50["offset"+l71])-bp+"px";else l61.style[s2]=(l64-l61["offset"+l71])-bp+"px";};function l72(click,l49,l73,call_menu){if((l1)&&(!click)&&(!l85))return;if(l87!=null)l47(l87,call_menu,l49);if((l49)&&((tc=l49.parentElement).style.visibility=="hidden")){eval(l49.l74);l77(l49);l49.stopf=0;tco=l79(l73);tbo=parseInt(l73.style.borderWidth);tc.style.left=parseInt(l73.l24)+l73.offsetWidth+tco[0]-tbo+"px";tc.style.top=parseInt(l73.l25)+l73.offsetHeight+tco[1]-tbo+"px";tc.style.width=l49.offsetWidth;tc.style.height=l49.offsetHeight;if(parseInt(tc.l110)){tc.l111="top";if((tc.l110==1)||(tc.l110==3)){tc.l105=-l49.offsetHeight;if(tc.l110==3)tc.l105=l49.offsetHeight;}else {tc.l111="left";tc.l105=-l49.offsetWidth;if(tc.l110==2)tc.l105=l49.offsetWidth;}tc.l106_off=tc.l105;tc.l106=0;l107(tc,1);}iesf(tc,1);tc.style.visibility="visible";l87=l49;l85=1;if(l55=window[l73.id+"l36"])l55.style.visibility="visible";}};function l107(w_obj,is_show){this.l33=parseInt(w_obj.m_step);this.l104=w_obj.children[0].style;if((w_obj.l105>w_obj.l106+this.l33)||(w_obj.l105<w_obj.l106-this.l33)){if(w_obj.l105>w_obj.l106)this.l33=-this.l33;w_obj.l105+=this.l33;this.l104[w_obj.l111]=w_obj.l105;setTimeout("l107(window."+w_obj.id+","+is_show+")",parseInt(w_obj.l108));}else {w_obj.l105=w_obj.l106;this.l104[w_obj.l111]=w_obj.l106;w_obj.l109=0;if(!is_show){iesf(w_obj,0);w_obj.style.visibility="hidden";}}};function l77(l76,l48){try{if((l48)&&(l78=l48.filters[0])&&(!l48.l52)&&(!l48.stopf)){l48.stopf=1;l78.stop();}if(l78=l76.filters[0]){l78.apply();l78.play();}}catch(e){}};function l79(l80,l81){rc=new Array(0,0);do{rc[0]+=l80.offsetLeft+l80.clientLeft;rc[1]+=l80.offsetTop+l80.clientTop;}while(((l80=l80.offsetParent)&&(l80!=document.body))&& !(!l81 && !l80.cdd_isacontainer && !l80.l20 &&(l80.style.position=="absolute" || l80.style.position=="relative")))return rc;};function get_l81_path(fname,l13){if(fname.indexOf(':')>-1) return fname;else { if(window.cdd__is_live &&(riv=window["cdd__include_codebase"+l13]))return riv+fname;else return window["cdd__codebase"+l13]+fname;}}