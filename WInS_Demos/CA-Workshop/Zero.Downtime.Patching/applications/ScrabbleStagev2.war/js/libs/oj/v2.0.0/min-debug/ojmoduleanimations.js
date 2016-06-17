/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$53$$, $ko$$8$$) {
  $oj$$53$$.$ModuleAnimations$ = {};
  $oj$$53$$.$ModuleAnimations$.$_DESCRIPTORS$ = {coverStart:{$oldViewClass$:"oj-animation-coverstart", $newViewClass$:"oj-animation-coverstart", $newViewOnTop$:!0}, coverUp:{$newViewClass$:"oj-animation-coverup", $newViewOnTop$:!0}, fade:{$oldViewClass$:"oj-animation-fade", $newViewClass$:"oj-animation-fade", $newViewOnTop$:!1}, revealDown:{$oldViewClass$:"oj-animation-revealdown", $newViewOnTop$:!1}, revealEnd:{$oldViewClass$:"oj-animation-revealend", $newViewClass$:"oj-animation-revealend", $newViewOnTop$:!1}, 
  zoomIn:{$newViewClass$:"oj-animation-zoomin", $newViewOnTop$:!0}, zoomOut:{$oldViewClass$:"oj-animation-zoomout", $newViewOnTop$:!1}};
  $oj$$53$$.$ModuleAnimations$.$_animateElement$ = function $$oj$$53$$$$ModuleAnimations$$$_animateElement$$($element$$135$$, $baseClass$$1$$, $action$$) {
    var $jelem$$8$$ = $($element$$135$$);
    return new Promise(function($resolve$$61$$) {
      function $endListener$$() {
        $resolve$$61$$(!0);
      }
      var $duration$$13_fromClass$$ = "oj-" + $action$$, $toClass$$ = $duration$$13_fromClass$$ + "-active";
      $jelem$$8$$.addClass($baseClass$$1$$);
      $jelem$$8$$.addClass($duration$$13_fromClass$$);
      window.requestAnimationFrame(function() {
        $jelem$$8$$.addClass($toClass$$);
      });
      if (($duration$$13_fromClass$$ = $jelem$$8$$.css("animationDuration") || $jelem$$8$$.css("webkitAnimationDuration")) && "0s" != $duration$$13_fromClass$$) {
        $jelem$$8$$.on("animationend webkitAnimationEnd", $endListener$$);
      } else {
        if (($duration$$13_fromClass$$ = $jelem$$8$$.css("transitionDuration") || $jelem$$8$$.css("webkitTransitionDuration")) && "0s" != $duration$$13_fromClass$$) {
          $jelem$$8$$.on("transitionend webkitTransitionEnd", $endListener$$);
        } else {
          $resolve$$61$$(!0);
        }
      }
    });
  };
  $oj$$53$$.$ModuleAnimations$.$_animateView$ = function $$oj$$53$$$$ModuleAnimations$$$_animateView$$($oldElement$$, $newElement$$, $animateName_descriptor$$1$$) {
    var $promises$$1$$ = [];
    $animateName_descriptor$$1$$ = $oj$$53$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName_descriptor$$1$$];
    $oldElement$$ && $animateName_descriptor$$1$$ && $animateName_descriptor$$1$$.$oldViewClass$ && $promises$$1$$.push($oj$$53$$.$ModuleAnimations$.$_animateElement$($oldElement$$, $animateName_descriptor$$1$$.$oldViewClass$, "leave"));
    $newElement$$ && $animateName_descriptor$$1$$ && $animateName_descriptor$$1$$.$newViewClass$ && $promises$$1$$.push($oj$$53$$.$ModuleAnimations$.$_animateElement$($newElement$$, $animateName_descriptor$$1$$.$newViewClass$, "enter"));
    return Promise.all($promises$$1$$);
  };
  $oj$$53$$.$ModuleAnimations$.$_addContainedElements$ = function $$oj$$53$$$$ModuleAnimations$$$_addContainedElements$$($node$$106$$, $roots$$) {
    for (var $child$$22$$ = $ko$$8$$.virtualElements.firstChild($node$$106$$);$child$$22$$;) {
      1 == $child$$22$$.nodeType ? $roots$$.push($child$$22$$) : 8 == $child$$22$$.nodeType && this.$_addContainedElements$($child$$22$$, $roots$$), $child$$22$$ = $ko$$8$$.virtualElements.nextSibling($child$$22$$);
    }
  };
  $oj$$53$$.$ModuleAnimations$.$_cacheVirtualViewRoot$ = function $$oj$$53$$$$ModuleAnimations$$$_cacheVirtualViewRoot$$($context$$119$$, $root$$14$$) {
    $context$$119$$._ojOldRoot = $root$$14$$;
  };
  $oj$$53$$.$ModuleAnimations$.$_getVirtualViewRoot$ = function $$oj$$53$$$$ModuleAnimations$$$_getVirtualViewRoot$$($context$$120$$) {
    return $context$$120$$._ojOldRoot;
  };
  $oj$$53$$.$ModuleAnimations$.$_defaultCanAnimate$ = function $$oj$$53$$$$ModuleAnimations$$$_defaultCanAnimate$$($context$$121$$) {
    if ($context$$121$$.isInitial) {
      return!1;
    }
    if (1 == $context$$121$$.node.nodeType) {
      return!0;
    }
    if (8 == $context$$121$$.node.nodeType) {
      var $children$$29$$ = [];
      $oj$$53$$.$ModuleAnimations$.$_addContainedElements$($context$$121$$.node, $children$$29$$);
      if ($children$$29$$ && 1 == $children$$29$$.length) {
        return $oj$$53$$.$ModuleAnimations$.$_cacheVirtualViewRoot$($context$$121$$, $children$$29$$[0]), !0;
      }
    }
    return!1;
  };
  $oj$$53$$.$ModuleAnimations$.$_getOldView$ = function $$oj$$53$$$$ModuleAnimations$$$_getOldView$$($context$$122$$) {
    var $oldView$$;
    1 == $context$$122$$.node.nodeType ? $oldView$$ = $context$$122$$.node : 8 == $context$$122$$.node.nodeType && ($oldView$$ = $oj$$53$$.$ModuleAnimations$.$_getVirtualViewRoot$($context$$122$$));
    return $oldView$$;
  };
  $oj$$53$$.$ModuleAnimations$.$_createViewParent$ = function $$oj$$53$$$$ModuleAnimations$$$_createViewParent$$($host_oldView$$1$$) {
    var $viewport$$ = $(document.createElement("div")), $cssStyle$$ = {position:"absolute", height:$host_oldView$$1$$.offsetHeight + "px", width:$host_oldView$$1$$.offsetWidth + "px", left:$host_oldView$$1$$.offsetLeft + "px", top:$host_oldView$$1$$.offsetTop + "px"};
    $viewport$$.appendTo($host_oldView$$1$$.offsetParent);
    $viewport$$.css($cssStyle$$);
    $viewport$$.addClass("oj-animation-host-viewport");
    $host_oldView$$1$$ = document.createElement("div");
    $host_oldView$$1$$.className = "oj-animation-host";
    $viewport$$.append($host_oldView$$1$$);
    return $host_oldView$$1$$;
  };
  $oj$$53$$.$ModuleAnimations$.$_defaultPrepareAnimation$ = function $$oj$$53$$$$ModuleAnimations$$$_defaultPrepareAnimation$$($context$$123$$, $animateName$$1$$) {
    var $viewParents$$ = {}, $descriptor$$2$$ = $oj$$53$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName$$1$$], $oldView$$2$$ = $oj$$53$$.$ModuleAnimations$.$_getOldView$($context$$123$$);
    $descriptor$$2$$ && ($descriptor$$2$$.$newViewClass$ && !$descriptor$$2$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$53$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$2$$.$oldViewClass$ && ($viewParents$$.oldViewParent = $oj$$53$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$2$$.$newViewClass$ && $descriptor$$2$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$53$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)));
    return $viewParents$$;
  };
  $oj$$53$$.$ModuleAnimations$.$_defaultAnimate$ = function $$oj$$53$$$$ModuleAnimations$$$_defaultAnimate$$($context$$124$$, $animateName$$2$$) {
    return $oj$$53$$.$ModuleAnimations$.$_animateView$($context$$124$$.oldViewParent, $context$$124$$.newViewParent, $animateName$$2$$).then(function() {
      $oj$$53$$.$ModuleAnimations$.$_postAnimationProcess$($context$$124$$);
    });
  };
  $oj$$53$$.$ModuleAnimations$.$_removeViewParent$ = function $$oj$$53$$$$ModuleAnimations$$$_removeViewParent$$($context$$125$$, $hostProp$$) {
    var $host$$1_viewport$$1$$ = $context$$125$$[$hostProp$$];
    $host$$1_viewport$$1$$ && ($host$$1_viewport$$1$$ = $host$$1_viewport$$1$$.parentNode) && $host$$1_viewport$$1$$.parentNode && $host$$1_viewport$$1$$.parentNode.removeChild($host$$1_viewport$$1$$);
  };
  $oj$$53$$.$ModuleAnimations$.$_postAnimationProcess$ = function $$oj$$53$$$$ModuleAnimations$$$_postAnimationProcess$$($context$$126$$) {
    $context$$126$$.removeOldView();
    $context$$126$$.insertNewView();
    $oj$$53$$.$ModuleAnimations$.$_removeViewParent$($context$$126$$, "newViewParent");
    $oj$$53$$.$ModuleAnimations$.$_removeViewParent$($context$$126$$, "oldViewParent");
  };
  $oj$$53$$.$ModuleAnimations$.$_getImplementation$ = function $$oj$$53$$$$ModuleAnimations$$$_getImplementation$$($animateName$$3$$) {
    return{canAnimate:$oj$$53$$.$ModuleAnimations$.$_defaultCanAnimate$, prepareAnimation:function($context$$127$$) {
      return $oj$$53$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$127$$, $animateName$$3$$);
    }, animate:function($context$$128$$) {
      return $oj$$53$$.$ModuleAnimations$.$_defaultAnimate$($context$$128$$, $animateName$$3$$);
    }};
  };
  $oj$$53$$.$ModuleAnimations$.$_getNavigateMethod$ = function $$oj$$53$$$$ModuleAnimations$$$_getNavigateMethod$$($navigationType$$) {
    null == $oj$$53$$.$ModuleAnimations$.$_navigateMethods$ && ($oj$$53$$.$ModuleAnimations$.$_navigateMethods$ = $oj$$53$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-animation-navigate-methods"));
    return $oj$$53$$.$ModuleAnimations$.$_navigateMethods$ ? $oj$$53$$.$ModuleAnimations$.$_navigateMethods$[$navigationType$$] : null;
  };
  $oj$$53$$.$ModuleAnimations$.$_navigateCanAnimate$ = function $$oj$$53$$$$ModuleAnimations$$$_navigateCanAnimate$$($context$$130$$, $navigationType$$1$$) {
    return $oj$$53$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$1$$) && $oj$$53$$.$ModuleAnimations$.$_defaultCanAnimate$($context$$130$$);
  };
  $oj$$53$$.$ModuleAnimations$.$_navigatePrepareAnimation$ = function $$oj$$53$$$$ModuleAnimations$$$_navigatePrepareAnimation$$($context$$131$$, $navigationType$$2$$) {
    var $animateName$$4$$ = $oj$$53$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$2$$);
    return $oj$$53$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$131$$, $animateName$$4$$);
  };
  $oj$$53$$.$ModuleAnimations$.$_navigateAnimate$ = function $$oj$$53$$$$ModuleAnimations$$$_navigateAnimate$$($context$$132$$, $navigationType$$3$$) {
    var $animateName$$5$$ = $oj$$53$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$3$$);
    return $oj$$53$$.$ModuleAnimations$.$_defaultAnimate$($context$$132$$, $animateName$$5$$);
  };
  $oj$$53$$.$ModuleAnimations$.$_getNavigateImplementation$ = function $$oj$$53$$$$ModuleAnimations$$$_getNavigateImplementation$$($navigationType$$4$$) {
    return{canAnimate:function($context$$133$$) {
      return $oj$$53$$.$ModuleAnimations$.$_navigateCanAnimate$($context$$133$$, $navigationType$$4$$);
    }, prepareAnimation:function($context$$134$$) {
      return $oj$$53$$.$ModuleAnimations$.$_navigatePrepareAnimation$($context$$134$$, $navigationType$$4$$);
    }, animate:function($context$$135$$) {
      return $oj$$53$$.$ModuleAnimations$.$_navigateAnimate$($context$$135$$, $navigationType$$4$$);
    }};
  };
  $oj$$53$$.$ModuleAnimations$.$coverStart$ = $oj$$53$$.$ModuleAnimations$.$_getImplementation$("coverStart");
  $goog$exportPath_$$("ModuleAnimations.coverStart", $oj$$53$$.$ModuleAnimations$.$coverStart$, $oj$$53$$);
  $oj$$53$$.$ModuleAnimations$.$revealEnd$ = $oj$$53$$.$ModuleAnimations$.$_getImplementation$("revealEnd");
  $goog$exportPath_$$("ModuleAnimations.revealEnd", $oj$$53$$.$ModuleAnimations$.$revealEnd$, $oj$$53$$);
  $oj$$53$$.$ModuleAnimations$.$coverUp$ = $oj$$53$$.$ModuleAnimations$.$_getImplementation$("coverUp");
  $goog$exportPath_$$("ModuleAnimations.coverUp", $oj$$53$$.$ModuleAnimations$.$coverUp$, $oj$$53$$);
  $oj$$53$$.$ModuleAnimations$.$revealDown$ = $oj$$53$$.$ModuleAnimations$.$_getImplementation$("revealDown");
  $goog$exportPath_$$("ModuleAnimations.revealDown", $oj$$53$$.$ModuleAnimations$.$revealDown$, $oj$$53$$);
  $oj$$53$$.$ModuleAnimations$.$zoomIn$ = $oj$$53$$.$ModuleAnimations$.$_getImplementation$("zoomIn");
  $goog$exportPath_$$("ModuleAnimations.zoomIn", $oj$$53$$.$ModuleAnimations$.$zoomIn$, $oj$$53$$);
  $oj$$53$$.$ModuleAnimations$.$zoomOut$ = $oj$$53$$.$ModuleAnimations$.$_getImplementation$("zoomOut");
  $goog$exportPath_$$("ModuleAnimations.zoomOut", $oj$$53$$.$ModuleAnimations$.$zoomOut$, $oj$$53$$);
  $oj$$53$$.$ModuleAnimations$.$fade$ = $oj$$53$$.$ModuleAnimations$.$_getImplementation$("fade");
  $goog$exportPath_$$("ModuleAnimations.fade", $oj$$53$$.$ModuleAnimations$.$fade$, $oj$$53$$);
  $oj$$53$$.$ModuleAnimations$.$drillIn$ = $oj$$53$$.$ModuleAnimations$.$_getNavigateImplementation$("drillIn");
  $goog$exportPath_$$("ModuleAnimations.drillIn", $oj$$53$$.$ModuleAnimations$.$drillIn$, $oj$$53$$);
  $oj$$53$$.$ModuleAnimations$.$drillOut$ = $oj$$53$$.$ModuleAnimations$.$_getNavigateImplementation$("drillOut");
  $goog$exportPath_$$("ModuleAnimations.drillOut", $oj$$53$$.$ModuleAnimations$.$drillOut$, $oj$$53$$);
  $oj$$53$$.$ModuleAnimations$.$switcher$ = function $$oj$$53$$$$ModuleAnimations$$$switcher$$($callback$$111$$) {
    return new function() {
      function $_getDelegateInvoker$$($name$$117$$) {
        return function($context$$136$$) {
          return $_delegate$$[$name$$117$$].call($_delegate$$, $context$$136$$);
        };
      }
      var $_delegate$$, $_self$$ = this;
      this.canAnimate = function $this$canAnimate$($context$$137$$) {
        var $methods$$4_type$$96$$ = $callback$$111$$($context$$137$$);
        $_delegate$$ = null == $methods$$4_type$$96$$ ? null : $oj$$53$$.ModuleAnimations[$methods$$4_type$$96$$];
        if (!$_delegate$$) {
          return!1;
        }
        for (var $methods$$4_type$$96$$ = ["prepareAnimation", "animate"], $i$$415$$ = 0;$i$$415$$ < $methods$$4_type$$96$$.length;$i$$415$$++) {
          var $method$$8$$ = $methods$$4_type$$96$$[$i$$415$$];
          $_self$$[$method$$8$$] = $_getDelegateInvoker$$($method$$8$$);
        }
        return $_getDelegateInvoker$$("canAnimate")($context$$137$$);
      };
    };
  };
  $goog$exportPath_$$("ModuleAnimations.switcher", $oj$$53$$.$ModuleAnimations$.$switcher$, $oj$$53$$);
});
