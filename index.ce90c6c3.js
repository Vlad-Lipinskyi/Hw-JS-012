new class{constructor(t){this.selector=t.selector,this.targetDate=t.targetDate,this.timerElement=document.querySelector(this.selector),this.fields={days:this.timerElement.querySelector('[data-value="days"]'),hours:this.timerElement.querySelector('[data-value="hours"]'),mins:this.timerElement.querySelector('[data-value="mins"]'),secs:this.timerElement.querySelector('[data-value="secs"]')},this.start()}start(){this.interval=setInterval(()=>{let t=new Date,e=this.targetDate-t;if(e<=0)clearInterval(this.interval),this.updateTimer(0,0,0,0);else{let t=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),r=Math.floor(e%36e5/6e4),a=Math.floor(e%6e4/1e3);this.updateTimer(t,s,r,a)}},1e3)}updateTimer(t,e,s,r){this.fields.days.textContent=t,this.fields.hours.textContent=String(e).padStart(2,"0"),this.fields.mins.textContent=String(s).padStart(2,"0"),this.fields.secs.textContent=String(r).padStart(2,"0")}}({selector:"#timer-1",targetDate:new Date("Jul 17, 2025 00:00:00")});
//# sourceMappingURL=index.ce90c6c3.js.map
