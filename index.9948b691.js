new class{constructor({selector:t,targetDate:e}){this.selector=t,this.targetDate=new Date(e),this.timerElement=document.querySelector(t),this.fields=this.timerElement.querySelectorAll(".field .value"),this.updateTimer(),setInterval(this.updateTimer.bind(this),1e3)}updateTimer(){let t=new Date,e=this.targetDate-t;if(e<=0){this.resetTimer();return}let i=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),s=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);this.fields[0].textContent=String(i).padStart(2,"0"),this.fields[1].textContent=String(r).padStart(2,"0"),this.fields[2].textContent=String(s).padStart(2,"0"),this.fields[3].textContent=String(n).padStart(2,"0")}resetTimer(){this.fields[0].textContent="00",this.fields[1].textContent="00",this.fields[2].textContent="00",this.fields[3].textContent="00"}}({selector:"#timer-1",targetDate:"Jul 17, 2025"});
//# sourceMappingURL=index.9948b691.js.map
