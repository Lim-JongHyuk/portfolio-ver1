

//01.스플리팅 호출
$(function(){
    Splitting();
}); 

//02. header영역 스크롤 방향 이벤트
$(function(){
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
        var nowScrollTop = $(window).scrollTop();

        if(nowScrollTop > prevScrollTop){
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
});

//03. scrolla.js
$(function(){
    $('.animate').scrolla({
        moblie:true,
        once: false
    });
});

//04.svg path 길이 구하기
$(function(){
    $('svgAni').find('#svgAni01').each(function(i, path){
        var length = path.getTotallLength();
        alert(length);
    });
});

/* each()메서드는 object와 배열 모두 사용할 수 있는 반복함수인데, Length속성을 갖는 배열과 유사배열객체들의 index를 기준으로 첫번째 매개변수로 배열이나 객체를 받고, 두번째 매개변수로 콜백함수 값을 인지로 ㅂ받음*/


//.ccon01 gsap 애니메이션
$(function(){
gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
        scrollTrigger: {
            trigger:'.con01',
            start:'0% 80%',
            end: '100% 100%',
            scrub: 1,
            markers:true
        }
    })

    .to('.wrap', {backgroundColor:'#fff', color:'#000', ease:'none', duration:5}, 0)
    .to('.svgAni path', {stroke:'#000', ease:'none', duration:5},0)
    .to('.scroll', {opacity:'0', ease:'none', duration:5},0)
    .fromTo('.videoWrap video', {'clip-path': 'inset(60% 60% 60% 60% round 30%)'},{'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease: 'none', duration:10},0)

//.con02 gsop animation
gsap.timeline({
    scrollTrigger:{
        trigger : ".con02",
        start: '0% 100%',
        end: '0% 20%',
        scrub: 1,
        markers: true
    }
})

.fromTo('.con02 .title .a', {x:'-100%'}, {x:'0%', ease:'none', duration:5},0 )
.fromTo('.con02 .title .b', {x:'100%'}, {x:'0%', ease:'none', duration:5},0 )

//worklist가 나타날 때 배경색 검정으로
gsap.timeline({
    scrollTrigger: {
        trigger: '.workList',
        start: '0% 100%',
        end: '0% 100%',
        scrub:1,
        //markers:true
    }
})

.to ('.wrap', {backgroundColor:"#000", color:"#fff", ease:"none", duration:5,},0)

//title글자 position:fixed 적용
.to ('.con02 .title', {position: 'fixed', ease:'none', left:'0', top:'0', width:'100%', duration:5},0)

//.worklist에 margin-top을 적용해서 애니를 자연스럽게 작성
.fromTo ('.workList',{margin: '0 auto'}, {margin: '100vh auto 0', position:'relative', zIndex:'10', duration:1},0)

//worklist가 끝날때 title 글자가 화면 밖으로 사라지도록
gsap.timeline({
    scrollTrigger: {
        trigger: '.workList',
        start: '100% 50%',
        end: '100% 0%',
        scrub:1,
        markers:true
    }
})

    .to('.con02 .title .a', {x:'-100%', ease:'none', duration:5},0 )
    .to('.con02 .title .b', {x:'100%', ease:'none', duration:5},0 )

})