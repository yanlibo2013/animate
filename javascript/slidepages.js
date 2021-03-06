// JavaScript Document
            $(function() {
                var i = 0;
                var $btn = $('.section-btn li'),
                $wrap = $('.section-wrap'),
                $arrow = $('.arrow');

                /*当前页面赋值*/
                function up() {
                    i++;
                    if (i == $btn.length) {
                        i = 0
                    };
                }
                function down() {
                    i--;
                    if (i < 0) {
                        i = $btn.length - 1
                    };
                }

                /*页面滑动*/
                function run() {
                    $btn.eq(i).addClass('on').siblings().removeClass('on');
                    $wrap.attr("class", "section-wrap").addClass(function() {
                        return "put-section-" + i;
                    }).find('.section').eq(i).find('.title').addClass('active');
                    if (i == 0) {
                        $wrap.find('.section-1').css({
                            "display": "block"
                        });
                        $wrap.find('.section-1').addClass('active').siblings().removeClass('active');
                    }
                    if (i == 1) {
                        $wrap.find('.section-2').css({
                            "display": "block"
                        });
                        $wrap.find('.section-2').addClass('active').siblings().removeClass('active');
                    }
                    if (i == 2) {
                        $wrap.find('.section-3').css({
                            "display": "block"
                        });
                        $wrap.find('.section-3').addClass('active').siblings().removeClass('active');
                    }
                    if (i == 3) {
                        $wrap.find('.section-4').css({
                            "display": "block"
                        });
                        $wrap.find('.section-4').addClass('active').siblings().removeClass('active');
                    }
                    if (i == 4) {
                        $wrap.find('.section-5').css({
                            "display": "block"
                        });
                        $wrap.find('.section-5').addClass('active').siblings().removeClass('active');
                    }
                    if (i == 5) {
                        $wrap.find('.section-6').css({
                            "display": "block"
                        });
                        $wrap.find('.section-6').addClass('active').siblings().removeClass('active');
                    }

                    if (i == 6) {
                        $wrap.find('.section-7').css({
                            "display": "block"
                        });
                        $wrap.find('.section-7').addClass('active').siblings().removeClass('active');
                    }

                    if (i == 7) {
                        $wrap.find('.section-8').css({
                            "display": "block"
                        });
                        $wrap.find('.section-8').addClass('active').siblings().removeClass('active');
                    }

                    if (i == 8) {
                        $wrap.find('.section-9').css({
                            "display": "block"
                        });
                        $wrap.find('.section-9').addClass('active').siblings().removeClass('active');
                    }

                    if (i == 9) {
                        $wrap.find('.section-10').css({
                            "display": "block"
                        });
                        $wrap.find('.section-10').addClass('active').siblings().removeClass('active');
                    }


                };

                /*右侧按钮点击*/
                $btn.each(function(index) {
                    $(this).click(function() {
                        i = index;
                        run();
                    })
                });

                /*翻页按钮点击*/
                $arrow.one('click', go);
                function go() {
                    up();
                    run();
                    setTimeout(function() {
                        $arrow.one('click', go)
                    },
                    1000)
                };

                /*响应鼠标*/
                $wrap.one('mousewheel', mouse_);
                function mouse_(event) {
                    if (event.deltaY < 0) {
                        up()
                    } else {
                        down()
                    }
                    run();
                    setTimeout(function() {
                        $wrap.one('mousewheel', mouse_)
                    },
                    1000)
                };

                /*响应键盘上下键*/
                $(document).one('keydown', k);
                function k(event) {
                    var e = event || window.event;
                    var key = e.keyCode || e.which || e.charCode;
                    switch (key) {
                    case 38:
                        down();
                        run();
                        break;
                    case 40:
                        up();
                        run();
                        break;
                    };
                    setTimeout(function() {
                        $(document).one('keydown', k)
                    },
                    1000);
                }

            });