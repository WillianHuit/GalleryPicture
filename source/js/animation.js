//gsap.to(graphgraph, { duration: 2.52, ease: "power2.outout", y: -500 });
if(document.querySelector(".word")) {
	gsap.timeline({
		defaults:{
			duration: 2,
			delay: 1,
			stagger: 0.05,
			ease: "elastic.inOut(3)"
		}
	}).to('.word',{
		opacity:1,
		scale: 1.02,
		y:10
	})
	.to('.word',{
		opacity:1,
		scale: 1,
		y:0
	});
	/*gsap
  .timeline({
  	defaults: {
      duration: 0.5
    }
  })
  .to('.center-text', {
  	
  	y:10,
    scale: 0.9,
    ease: "back.inOut(3)"
  }).to('.center-text', {
  	x:0,
  	y:0,
    rotate: 0,
    scale: 1,
    ease: "back.inOut(3)"
  })
  .to('.principal-text', {
    scale: 1.3,
    ease: "bounce"
  })
  .to('.principal-text', {
    scale: 1,
    ease: "back.inOut(3)"
  })
  .to('.text', {
    scale: 1.3,
    ease: "bounce"
  })
  .to('.text', {
    scale: 1,
    ease: "back.inOut(3)"
  })
  .to('.text2', {
    scale: 1.3,
    ease: "bounce"
  })
  .to('.text2', {
    scale: 1,
    ease: "back.inOut(3)"
  })
  .to('.text3', {
    scale: 1.3,
    ease: "bounce"
  })
  .to('.text3', {
    scale: 1,
    ease: "back.inOut(3)"
  });*/
}
if(document.querySelector(".text-contact")) {


	gsap
  .timeline({
  	defaults: {
      duration: 0.4
    }
  })
  .to('.text-contact', {
  	
  	y:-10,
    scale: 1.5,
    ease: "back.inOut(3)"
  }).to('.form', {
  	borderRadius: 60,
    scale: 0.9,
    ease: "back.inOut(3)"
  })
  .to('.form', {
  	
  	borderRadius: 20,
    scale: 1,
    ease: "elastic",
    backgroundColor: "#d8e3e7"
  });
}