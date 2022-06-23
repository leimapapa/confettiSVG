function confetti(flakes = 200) {
	const randInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	let hh = window.innerHeight;
	let ww = window.innerWidth;
	let animatedRects = '';
	flakes = !flakes ? flakes:200;
	for (let i = 0; i < flakes; i++) {
		let dur =`${randInt(40, 60)}`;
		animatedRects += `<g transform="translate(${randInt(ww * -0.1, ww * 0.1)} -25) scale(1.${randInt(0, 6)})">
		<rect id="confetti${i}" fill="rgb(${randInt(0,255)}, ${randInt(0,255)}, ${randInt(0,255)})" x="0" y="0" height="${randInt(6,18)}" width="${randInt(4,7)}" filter="url(#blur${randInt(1, 2)})">
		<animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 0 0"
                          to="${(Math.random() < 0.5 ? -1 : 1) * 360} 0 0"
                          dur="${randInt(10,15)/10}s"
													begin="${randInt(1,10)/10}s"
                          repeatCount="indefinite"/>
		</rect>
	</g>
	<animateMotion xlink:href="#confetti${i}" dur="${dur}s" begin="-${randInt(1,1000)/10}s" repeatCount="indefinite">
		<mpath xlink:href="#motionPath${randInt(1, 2)}" />
	</animateMotion>`;
	}
	let svg = `<svg id="confettiverlay" viewbox="0 0 ${ww} ${hh}" height="${hh}" width="${ww}" preserveAspectRatio="none" style="z-index:99999; user-select:none; pointer-events:none; top:50%;
	left:50%; position:fixed; transform:translate(-50%,-50%)">
	<filter id="blur1" x="-100%" y="-100%" width="300%" height="300%">
		<feGaussianBlur in="SourceGraphic" stdDeviation="0" />
	</filter>
	<filter id="blur2" x="-100%" y="-100%" width="300%" height="300%">
		<feGaussianBlur in="SourceGraphic" stdDeviation="1" />
	</filter>
	<path id="motionPath1" fill="none" stroke="none" d="M ${ww} -${hh * 0.1} Q ${ww * 0.8} ${hh * 0.25} ${ww} ${hh * 0.5} Q ${ww * 1.2} ${hh * 0.75} ${ww} ${hh * 1.1} M ${ww * 0.9} -${hh * 0.1} Q ${ww * 0.7} ${hh * 0.25} ${ww * 0.9
	} ${hh * 0.5} Q ${ww * 1.1} ${hh * 0.75} ${ww * 0.9} ${hh * 1.1} M ${ww * 0.8} -${hh * 0.1} Q ${ww * 0.6} ${hh * 0.25} ${ww * 0.8} ${hh * 0.5} Q ${ww} ${hh * 0.75} ${ww * 0.8} ${hh * 1.1}M ${ww * 0.7} -${hh * 0.1} Q ${ww * 0.5} ${hh * 0.25} ${ww * 0.7} ${hh * 0.5} Q ${ww * 0.9} ${hh * 0.75} ${ww * 0.7} ${hh * 1.1} M ${ww * 0.6} -${hh * 0.1} Q ${ww * 0.4} ${hh * 0.25} ${ww * 0.6} ${hh * 0.5} Q ${ww * 0.8} ${hh * 0.75} ${ww * 0.6} ${hh * 1.1} M ${ww * 0.5} -${hh * 0.1} Q ${ww * 0.3} ${hh * 0.25} ${ww * 0.5} ${hh * 0.5} Q ${ww * 0.7} ${hh * 0.75} ${ww * 0.5} ${hh * 1.1}M ${ww * 0.4} -${hh * 0.1} Q ${ww * 0.2} ${hh * 0.25} ${ww * 0.4} ${hh * 0.5} Q ${ww * 0.6} ${hh * 0.75} ${ww * 0.4} ${hh * 1.1} M ${ww * 0.3} -${hh * 0.1} Q ${ww * 0.1} ${hh * 0.25} ${ww * 0.3} ${hh * 0.5} Q ${ww * 0.5} ${hh * 0.75} ${ww * 0.3} ${hh * 1.1} M ${ww * 0.2} -${hh * 0.1} Q ${ww * 0} ${hh * 0.25} ${ww * 0.2} ${hh * 0.5} Q ${ww * 0.4} ${hh * 0.75} ${ww * 0.2} ${hh * 1.1} M ${ww * 0.1} -${hh * 0.1} Q ${ww * -0.1} ${hh * 0.25} ${ww * 0.1} ${hh * 0.5} Q ${ww * 0.3} ${hh * 0.75} ${ww * 0.1} ${hh * 1.1} M 0 -${hh * 0.1} Q ${ww * -0.2} ${hh * 0.25} ${ww * 0} ${hh * 0.5} Q ${ww * 0.2} ${hh * 0.75} ${ww * 0} ${hh * 1.1}" />
	<path id="motionPath2" fill="none" stroke="none" d="M ${ww * 0.0} -${hh * 0.1} Q ${ww * 0.2} ${hh * 0.25} ${ww * 0} ${hh * 0.5} Q ${ww * -0.2} ${hh * 0.75} ${ww * 0} ${hh * 1.1} M ${ww * 0.1} -${hh * 0.1} Q ${ww * 0.3} ${hh * 0.25} ${ww * 0.1} ${hh * 0.5} Q ${ww * -0.1} ${hh * 0.75} ${ww * 0.1} ${hh * 1.1} M ${ww * 0.2} -${hh * 0.1} Q ${ww * 0.4} ${hh * 0.25} ${ww * 0.2} ${hh * 0.5} Q ${ww * 0} ${hh * 0.75} ${ww * 0.2} ${hh * 1.1} M ${ww * 0.3} -${hh * 0.1} Q ${ww * 0.5} ${hh * 0.25} ${ww * 0.3} ${hh * 0.5} Q ${ww * 0.1} ${hh * 0.75} ${ww * 0.3} ${hh * 1.1} M ${ww * 0.4} -${hh * 0.1} Q ${ww * 0.6} ${hh * 0.25} ${ww * 0.4} ${hh * 0.5} Q ${ww * 0.2} ${hh * 0.75} ${ww * 0.4} ${hh * 1.1} M ${ww * 0.5} -${hh * 0.1} Q ${ww * 0.7} ${hh * 0.25} ${ww * 0.5} ${hh * 0.5} Q ${ww * 0.3} ${hh * 0.75} ${ww * 0.5} ${hh * 1.1} M ${ww * 0.6} -${hh * 0.1} Q ${ww * 0.8} ${hh * 0.25} ${ww * 0.6} ${hh * 0.5} Q ${ww * 0.4} ${hh * 0.75} ${ww * 0.6} ${hh * 1.1} M ${ww * 0.7} -${hh * 0.1} Q ${ww * 0.9} ${hh * 0.25} ${ww * 0.7} ${hh * 0.5} Q ${ww * 0.5} ${hh * 0.75} ${ww * 0.7} ${hh * 1.1} M ${ww * 0.8} -${hh * 0.1} Q ${ww} ${hh * 0.25} ${ww * 0.8} ${hh * 0.5} Q ${ww * 0.6} ${hh * 0.75} ${ww * 0.8} ${hh * 1.1} M ${ww * 0.9} -${hh * 0.1} Q ${ww * 1.1} ${hh * 0.25} ${ww * 0.9} ${hh * 0.5} Q ${ww * 0.7} ${hh * 0.75} ${ww * 0.9} ${hh * 1.1} M ${ww} -${hh * 0.1} Q ${ww * 1.2} ${hh * 0.25} ${ww} ${hh * 0.5} Q ${ww * 0.8} ${hh * 0.75} ${ww} ${hh * 1.1}" />
	${animatedRects}
</svg>`;
	
	//Make it a node to avoid the dangerous "document.body.innerHTML = svg"
	let wrapper = document.createElement("div");
	wrapper.innerHTML = svg;
	let doc = wrapper.firstChild;
	const element = document.getElementById("confettiverlay");
	element?.remove();
	document.body.appendChild(doc);
}
