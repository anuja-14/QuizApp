sd="";
l86=0;
l87=null;
l88=null;
l89=null;
l90=null;
l91=0;
if(!window.l97)
	l97=new Object();
l0=cdd__showhide_delay;
document.addEventListener("mousemove",l83,0);
addEventListener("resize",cdd__hr,0);
if((l1=cdd__activate_onclick))
	document.addEventListener("mousedown",l84,0);
l85=0;
l10=new Array("_background_color","_text_color","_font_family","_font_size","_font_style","_font_weight","_text_decoration","_border_style","_border_color","_background_image","_text_align");
l95=new Array("background-color","color","font-family","font-size","font-style","font-weight","text-decoration","border-style","border-color","background-image","text-align");
l93=new Array("top","right","bottom","left");
l94=new Array("none");
cts=navigator.platform;
vq_ismac=0;
if((cts)&&(cts.toLowerCase().indexOf("mac")>-1))vq_ismac=1;
l40_loaded();;

function l40_loaded()
{
	l96=null;
	for(cm in l97)
	{
		if(l96==null)
			l96=l97[cm];
		else 
			l96 &=l97[cm];
		if(!l97[cm])
		{
			l98(cm+"");
			l97[cm]=1;
		}
	}
	if(!l96)
		setTimeout("l40_loaded()",200);
};

function cdd__hr()
{
	for(cm in l97)
		l98(cm+"");
};

function l98(id)
{
	this.fdo=document.getElementById("cdditem"+id+"_menu");
	this.l3=id;if(id.indexOf("_")==-1)this.l3="_main";
	if((this.pelm=document.getElementById(this.fdo.getAttribute("cddid"))))
	{
		this.l99=document.getElementById(this.pelm.getAttribute("cddid")+"_menu");
		tco=l79(this.pelm);
		this.addb=0;
		if(!this.l99.getAttribute("cddisroot"))
			this.addb=parseInt(this.l99.style.borderTopWidth);
		this.fdo.style.left=parseInt(this.pelm.getAttribute("cddx"))+this.pelm.offsetWidth+tco[0]+this.addb+"px";
		this.fdo.style.top=parseInt(this.pelm.getAttribute("cddy"))+this.pelm.offsetHeight+tco[1]+this.addb+"px";
	}
	this.j=0;
	while((this.fobj=document.getElementById("cdditem"+id+"_"+this.j)))
	{
		this.nid=id+"_"+this.j;
		if((this.tico=document.getElementById("cdditem"+this.nid+"l36_container")))
		{
			eval("this.tcxy=new Array("+this.tico.getAttribute("cddxy")+")");
			if(this.l3=="_main")
			{
				this.ixy=l79(this.fobj);
				this.ix=this.ixy[0];
				this.iy=this.ixy[1];
			}
			else 
			{
				this.ix=this.fobj.parentNode.offsetLeft+parseInt(this.fdo.style.paddingLeft);
				this.iy=this.fobj.parentNode.offsetTop+parseInt(this.fdo.style.paddingTop);
			}
			this.tico.style.top=this.iy+this.tcxy[1]+"px";
			this.tico.style.left=this.ix+this.fobj.offsetWidth+this.tcxy[0]+"px";
		}
			if(document.getElementById("cdditem"+this.nid+"_menu"))
				fdobj=new l98(this.nid,l2);
			this.j++;
	}
};

function create_menu(l13)
{
	l91=0;
	sd="";
	l2=new window["cdd_menu"+l13];
	generate_all_html(l2,l13,"","_main","cddisroot=1");
	document.write(sd);document.close();l97[l13]=0;
};

function l12(l2,is_h,index,id)
{
	if(id)
	{
		if(!is_h)
		{
			ttbs=l42(l2,"item_border_style",id,l42(l2,"menu_items_border_style",index));
			tav=0;
			if(ttbs!="none")
				tav+=parseInt(l42(l2,"item_border_width",id,l42(l2,"menu_items_border_width",index)))*2;
			tav+=get_padding(l2,id,index,1,1);
			return "width:"+(l42(l2,"item_width",id,l42(l2,"menu_items_width",index))-tav)+"px;";
		}
		else 
		{
			ttbs=l42(l2,"menu_border_style",index);
			tav=0;if(ttbs!="none")tav+=parseInt(l42(l2,"menu_border_width",index))*2;
			tav+=get_padding(l2,index,null,0,1);
			ttbs=l42(l2,"item_border_style",id,l42(l2,"menu_items_border_style",index));
			if(ttbs!="none")
				tav+=parseInt(l42(l2,"item_border_width",id,l42(l2,"menu_items_border_width",index)))*2;
			tav+=get_padding(l2,id,index,1,1);
			return "width:"+(l42(l2,"menu_width",index)-tav)+"px;";
		}
	}
	else 
	{
		if(!is_h)
		{
			ttbs=l42(l2,"menu_border_style",index);
			tav=0;if(ttbs!="none")tav+=parseInt(l42(l2,"menu_border_width",index))*2;
			tav+=get_padding(l2,index,null,0,1);
			return "width:"+(l42(l2,"menu_width",index)-tav)+"px;";
		}else 
		{
			qa=0;
			taw=0;
			tdw=l42(l2,"divider_width",index);
			if((l42(l2,"divider_border_style",index)!="none")&&(tdw))
				tdw+=(l42(l2,"divider_border_width",index)*2);
			tdex=index+"_";
			if(index=="_main")
				tdex="";
			while(l2["item"+(tnid=(tdex+qa))])
			{
				taw+=parseInt(l42(l2,"item_width",tnid,l42(l2,"menu_items_width",index)))+tdw;
				qa++;
			}
			if(l42(l2,"divider_caps",index))
				taw+=tdw;else taw-=tdw;
			return  "width:"+(taw)+"px;";
		}
		}};function generate_all_html(l2,l13,l14,index,is_root){this.child_id=new Object();if(window.cdd__default_cursor=="hand")this.dc="pointer";else this.dc="default";this.l15=l13;if(!is_root)this.l15=l13+"_"+index;this.l17=" cddesm=\""+l42(l2,"show_menu",index)+"\" cddehm=\""+l42(l2,"hide_menu",index)+"\"";this.l18=l42(l2,"menu_is_horizontal",index);if(is_root){sd+="<table uid="+l13+" border=0 cellspacing=0 cellpadding=0><tr><td>";sd+="<div l2id='"+index+"' cddish="+(this.l18+0)+" "+is_root+this.l17+" cddisitem=0 cddid='cdditem"+this.l15+"' id='cdditem"+l13+"_"+l14+"menu' style='z-index:"+(l91++)+";cursor:"+this.dc+";"+get_menu_styles(l2,"menu",index,l10,l95)+get_menu_styles(l2,"menu",index,l94,null,1)+l12(l2,this.l18,index)+get_padding(l2,index)+get_borders(l2,index)+"'>";}else sd+="<div l2id='"+index+"' cddish="+(this.l18+0)+" "+is_root+this.l17+" cddisitem=0 cddid='cdditem"+this.l15+"' id='cdditem"+l13+"_"+l14+"menu' style='z-index:"+(l91++)+";cursor:"+this.dc+";visibility:hidden;left:0;top:0;position:absolute;"+get_menu_styles(l2,"menu",index,l10,l95)+get_menu_styles(l2,"menu",index,l94,null,1)+l12(l2,this.l18,index)+get_padding(l2,index)+get_borders(l2,index)+"'>";staw="";staw="width='100%' ";sd+="<table "+staw+" border=0 cellspacing=0 cellpadding=0>";if(this.l18)sd+="<tr>";this.i=0;while(l2["item"+(this.id=l14+this.i)]){this.l3=l13+"_"+this.id;this.l4=l42(l2,"divider_caps",index);if((this.i==0)&& this.l4)l41(l2,l13,index,this.l18);this.l22=this.dc;this.l23="onclick=\"";this.l92="";if((this.l5=l2["click"+this.id])){this.l23+=this.l5+";";this.l22="hand";}if((this.l5=l2["url"+this.id])){this.l23+="window.open('"+get_l81_path(this.l5,l13)+"','"+l42(l2,"url_target",this.id,cdd__url_target)+"','"+l42(l2,"url_features",this.id,cdd__url_features)+"')";this.l22="hand";if(window.cdd__display_urls_in_status_bar)this.l92="cddstatus='"+this.l5+"'";if((this.l5=l2["status"+this.id]))this.l92="cddstatus='"+this.l5+"'";}this.l23+="\"";this.l6=l42(l2,"menu_xy",this.id);this.l6=this.l6.split(",");if(!this.l18)sd+="<tr>";sd+="<td>";this.udi=l12(l2,!this.l18,index,this.id,1);sd+="<div id='cdditem"+this.l3+"_hl' cddisroll=1 cddisitem=1 cddicobj='"+this.l3+"' "+this.l23+"  cddhl="+(!(!(l2["item"+this.id+"_0"]+l2["url"+this.id]+l2["click"+this.id]))+0)+" style='position:absolute;cursor:"+this.l22+";visibility:hidden;"+l27(l2,this.id,index,1,l10,l95)+l27(l2,this.id,index,1,l94,null,1)+this.udi+get_padding(l2,this.id,index,1)+get_borders(l2,this.id,index,1)+"'>";l34(l2,this.id,"rel",this.l3,1,l13);sd+=l42(l2,"item_roll",this.id,l2["item"+this.id])+"</div>";sd+="<div cddid='cdditem"+this.l15+"' cddx='"+this.l6[0]+"' cddy='"+this.l6[1]+"' "+this.l23+" l26="+l13+" cddisitem=1 "+this.l92+" id='cdditem"+this.l3+"' style='cursor:"+this.l22+"; "+l27(l2,this.id,index,0,l10,l95)+l27(l2,this.id,index,0,l94,null,1)+this.udi+get_padding(l2,this.id,index,1)+get_borders(l2,this.id,index,1)+"'>";l34(l2,this.id,"rel",this.l3,0,l13);sd+=l2["item"+this.id]+"</div>";l34(l2,this.id,"abs",this.l3,1,l13);sd+="</td>";if(!this.l18)sd+="</tr>";if(this.l4 ||(l2["item"+l14+(this.i+1)]))l41(l2,l13,index,this.l18);if(l2["item"+this.id+"_0"])this.child_id[this.id]=1;this.i++;}if(this.l18)sd+="</tr>";sd+="</table></div>";if(is_root)sd+="</td></tr></table>";if(!vq_ismac)l34(l2,index,"point",this.l15,0,l13);for(this.md in this.child_id)new generate_all_html(l2,l13,this.md+"_",this.md);};function get_menu_styles(l2,l28,id,t_params,t_names,is_effect){l32="";was_effect=0;if((is_effect)&&(id.toString()=="_main"))return "";for(q=0;q<t_params.length;q++){if((l5=l42(l2,l28+t_params[q],id))!=undefined){if(is_effect){was_effect=1;if(q==0)l32+="filter:";l32+=l5;}else {if(q==9)l32+=t_names[q]+":url("+get_l81_path(l5,l2.uid)+");";else l32+=t_names[q]+":"+l5+";";}}}if((is_effect)&&(was_effect))l32+=";";return l32;};function l27(l2,id,l7,l30,t_params,t_names,is_effect){l32="";l8="";was_effect=0;for(q=0;q<t_params.length;q++){if(l30)l8="_roll";while(1){if((l5=l42(l2,"item"+t_params[q]+l8,id,l42(l2,"menu_items"+t_params[q]+l8,l7)))!=undefined){if(is_effect){if(!was_effect)l32+="filter:";was_effect=1;l32+=l5;}else {if(q==9)l32+=t_names[q]+":url("+get_l81_path(l5,l2.uid)+");";else l32+=t_names[q]+":"+l5+";";}}else  if((l30)&&(l8=="_roll")){l8="";continue;}break;}}if((is_effect)&&(was_effect))l32+=";";return l32;};function get_borders(l2,index,l7,l29){if(l29)rval=l42(l2,"item_border_width",index,l42(l2,"menu_items_border_width",l7));else rval =l42(l2,"menu_border_width",index);if(!rval)rval=0;rt="";for(ra in l93)rt+="border-"+l93[ra]+"-width:"+rval+";";return rt;};function get_divider_borders(l2,index,is_h){hpart="height";if(is_h)hpart="width";rval=0;if(l42(l2,"divider_"+hpart,index))rval =l42(l2,"divider_border_width",index);if(!rval)rval=0;rt="";for(ra in l93)rt+="border-"+l93[ra]+"-width:"+rval+";";return rt;};function get_padding(l2,index,l7,l29,get_lr){if(l29)rval=l42(l2,"item_padding",index,l42(l2,"menu_items_padding",l7));else rval =l42(l2,"menu_padding",index);if(rval){eval("ra=new Array("+rval+")");rt="";if(ra.length){if(get_lr){return parseInt(ra[1])+parseInt(ra[3]);}else {for(ri in ra)rt+="padding-"+l93[ri]+":"+ra[ri]+";";}}return rt;}return "";};function l34(l2,id,l28,l3,roll,l13){if(((iid=l42(l2,"icon_"+l28,id))!=undefined)&&(iid>-1)){icipp=l38(l2,l28+"_icon_image_wh"+iid,"width="," height=","")+">";icwh=l38(l2,l28+"_icon_image_wh"+iid,"width:",";height:",";");icxy=l38(l2,l28+"_icon_image_xy"+iid,"left:",";top:",";");icstatic="<img src='"+get_l81_path(l2[l28+"_icon_image"+iid],l13)+"' "+icipp;if(roll)icroll="<img src='"+get_l81_path(l2[l28+"_icon_rollover"+iid],l13)+"' "+icipp;if(l28=="rel"){(roll)? sd+=icroll:sd+=icstatic;}else  if(l28=="abs"){sd+="<div id='cdditem"+l3+"l36_container' cddxy='"+l2["abs_icon_image_xy"+iid]+"' cddisitem=1 cddicobj='"+l3+"' style='position:absolute;"+icxy+"'>";sd+="<div id='cdditem"+l3+"l36' cddisroll=1 style='position:absolute;top:0;left:0;visibility:hidden;'>"+icroll+"</div>"+icstatic+"</div>";}else sd+="<div id='cdditem"+l3+"_pointer' cdd_br="+(l2["point_icon_image_br"+iid]+0)+" style='position:absolute;z-index:"+l91+";visibility:hidden;top:0;left:0;"+icwh+"'><div cddisitem=0 cddid='cdditem"+l3+"' style='position:absolute;"+icxy+"'>"+icstatic+"</div></div>";}};function l38(l2,l40,l,c,r){rval="";if((l39=l2[l40]))rval=l+l39.replace(",",c)+r;return rval;};function l41(l2,l13,hid,t_hor){p2=get_menu_styles(l2,"divider",hid,l10,l95)+get_divider_borders(l2,hid,t_hor)+"font-size:0px;";if(!(p3=l42(l2,"divider_html",hid)))p3="";if(t_hor){if((l5=l42(l2,"divider_width",hid)))sd+="<td height='100%'><table  border=0 cellspacing=0 cellpadding=0 height='100%' style='"+p2+"'><tr><td><div style='width:"+l5+";'>"+p3+"</div></td></tr></table></td>";}else {if((l5=l42(l2,"divider_height",hid)))sd+="<tr><td style=''><div style='"+p2+"height:"+l5+";'>"+p3+"</div></td></tr>";}};function l42(l2,l43,id,l44){if(l2[l43+id]!=undefined)return l2[l43+id];else  if(l2[l43]!=undefined)return l2[l43];else  if(l44!=undefined)return l44;else return undefined;};function l45(l46){return document.getElementById(l46.getAttribute("cddid")+"_menu");};function l47(l50,l48,l49){if(l50!=l48){if((this.l51=document.getElementById(l50.getAttribute("cddid"))))new l47(l45(this.l51),l48,l49);if((!l50.getAttribute("cddisroot"))&&(l50!=l49)&&(l50.style.visibility=="visible")){l50.style.visibility="hidden";if((abobj=document.getElementById(l50.getAttribute("cddid")+"l36")))abobj.style.visibility="hidden";eval(l50.getAttribute("cddehm"));}if(l50.getAttribute("menuhl")){document.getElementById(l50.getAttribute("menuhl")+"_hl").style.visibility="hidden";l50.removeAttribute("menuhl");}}};function l54(l55,top){this.l56=document.getElementById(l55.id+"_hl");if((this.l50=l45(l55)).getAttribute("menuhl")!=l55.id){if((l88)&&(l88.getAttribute("l26")!=l55.getAttribute("l26")))l47_hl(l45(l88));l47_hl(this.l50,top);if(top){l88=l55;if((l57=l55.getAttribute("cddstatus"))){window.status=l57;l86=1;}else l65();if((l89)&&(l89.id !=l88.getAttribute("cddid")+"_pointer"))l66();}if(parseInt(this.l56.getAttribute("cddhl")))this.l56.style.visibility="visible";this.l50.setAttribute("menuhl",l55.id);}if(!this.l50.getAttribute("cddisroot"))new l54(document.getElementById(this.l50.getAttribute("cddid")));};function l47_hl(l50,l40_forward){if(l50.getAttribute("menuhl")){if((l40_forward)&&(nobj=document.getElementById(l50.getAttribute("menuhl")+"_menu")))new l47_hl(nobj,l40_forward);document.getElementById(l50.getAttribute("menuhl")+"_hl").style.visibility="hidden";l50.removeAttribute("menuhl");}};function l84(e){l83(e,1);};function l83(e,click){clearTimeout(l90);l60=e.target;while(l60){if(l60.getAttribute){if((niq=l60.getAttribute("cddisitem"))){if(niq>0){if((sid=l60.getAttribute("cddicobj"))){l60=document.getElementById("cdditem"+sid);}l54(l60,1);l90=setTimeout("l72("+click+",document.getElementById('"+l60.id+"_menu'),l60,l45(l60))",100);}if((l61=document.getElementById(l60.getAttribute("cddid")+"_pointer"))){l50=l45(l60);l50=l45(l60);l62=l79(l50,1);l63=l79(l50);spt=document.body.scrollTop;spl=document.body.scrollLeft;if(parseInt(l50.getAttribute("cddish")))l67(l61,l50,e.clientX,l62[0],l63[0],l63[1],'left','top',spl,spt,'Width','Height');else l67(l61,l50,e.clientY,l62[1],l63[1],l63[0],'top','left',spt,spl,'Height','Width');if(l89!=l61)l66();l61.style.visibility="visible";l89=l61;}else l66();return;}}if(l60==document.getElementsByTagName("html")[0])break;l60=l60.parentNode;}l90=setTimeout("l72()",l0);if(l88)l47_hl(l45(l88));l66();l65();};function l65(){if(l86){window.status="";l86=0;}};function l66(l80){if(l89)l89.style.visibility="hidden";};function l67(l61,l50,cx,l62,l63,l64,s1,s2,l68,l69,l70,l71){l61.style[s1]=(cx-(l62-l63))-(parseInt(l61["offset"+l70]/2))+l68+"px";if(parseInt(l61.getAttribute("cdd_br")))l61.style[s2]=(l64+l50["offset"+l71])+"px";else l61.style[s2]=(l64-l61["offset"+l71])+"px";};function l72(click,l49,l73,call_menu){if((l1)&&(!click)&&(!l85))return;if(l87!=null)l47(l87,call_menu,l49);if((l49)&&(l49.style.visibility=="hidden")){eval(l49.getAttribute("cddesm"));l49.style.visibility="visible";l87=l49;l85=1;if((l55=document.getElementById(l73.id+"l36")))l55.style.visibility="visible";}l90=0;};function l79(l80,l81){rc=new Array(0,0);do{if((!l81)&&((!l80.getAttribute("cddisitem"))&&((l80.style.position=="absolute")||(l80.style.position=="relative"))))break;rc[0]+=l80.offsetLeft;rc[1]+=l80.offsetTop;}while((l80=l80.offsetParent))return rc;};function get_l81_path(fname,l13){if(fname.indexOf(':')>-1) return fname;else { if(window.cdd__is_live &&(riv=window["cdd__include_codebase"+l13]))return riv+fname;else return window["cdd__codebase"+l13]+fname;}}