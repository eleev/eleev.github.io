document.addEventListener("DOMContentLoaded",function()
	{
		// for(var e=document.getElementById("sound-bars"),n=0;n<100;n++)
		// 	{
		// 		var a=document.createElement("div");
		// 		e.appendChild(a)
		// 	}
particlesJS("particles",{
	particles:{
		number:{
			value:90,density:{
				enable:!0,value_area:700
			}
		},color:{
			value:"#fff"
		},shape:{
			type:"circle",stroke:{
				width:0,color:"#000"
			},polygon:{
				nb_sides:15
			}
		},opacity:{
			value:.5,random:!1,anim:{enable:!1,speed:1.5,opacity_min:.15,sync:!1
			}
		},size:{
			value:2.5,random:!1,anim:{enable:!0,speed:2,size_min:.15,sync:!1
			}
		},line_linked:{
			enable:!0,distance:110,color:"#fff",opacity:.25,width:1
		},move:{
			enable:!0,speed:1.6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!0,attract:{
				enable:!1,rotateX:600,rotateY:1200
			}
		}
	},interactivity:{
		detect_on:"canvas",events:{
		onhover:{
			enable:!1,mode:"repulse"
		},onclick:{
			enable:!1,mode:"push"
		},resize:!0
	},modes:{
		grab:{
			distance:400,line_linked:{
				opacity:1
			}
		},bubble:{
			distance:400,size:40,duration:2,opacity:8,speed:3
		},repulse:{
			distance:200,duration:.4
		},push:{
			particles_nb:4
		},remove:{
			particles_nb:2
		}
	}
},retina_detect:!0
})},!1);