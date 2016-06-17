/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$44$$, $$$$42$$, $Hammer$$3$$) {
  $oj$$44$$.$IndexerModel$ = function $$oj$$44$$$$IndexerModel$$() {
  };
  $goog$exportPath_$$("IndexerModel", $oj$$44$$.$IndexerModel$, $oj$$44$$);
  $oj$$44$$.$IndexerModel$.PREFIX_OTHERS = "__others__";
  $goog$exportPath_$$("IndexerModel.PREFIX_OTHERS", $oj$$44$$.$IndexerModel$.PREFIX_OTHERS, $oj$$44$$);
  $oj$$44$$.$IndexerModel$.$EventType$ = {CHANGE:"change"};
  $goog$exportPath_$$("IndexerModel.EventType", $oj$$44$$.$IndexerModel$.$EventType$, $oj$$44$$);
  $oj$$44$$.$IndexerModel$.prototype.setPrefix = function $$oj$$44$$$$IndexerModel$$$setPrefix$() {
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.setPrefix", {setPrefix:$oj$$44$$.$IndexerModel$.prototype.setPrefix});
  $oj$$44$$.$IndexerModel$.prototype.getIndexablePrefixes = function $$oj$$44$$$$IndexerModel$$$getIndexablePrefixes$() {
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$44$$.$IndexerModel$.prototype.getIndexablePrefixes});
  $oj$$44$$.$IndexerModel$.prototype.getPrefixes = function $$oj$$44$$$$IndexerModel$$$getPrefixes$() {
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$44$$.$IndexerModel$.prototype.getPrefixes});
  $oj$$44$$.$ListViewIndexerModel$ = function $$oj$$44$$$$ListViewIndexerModel$$($listview$$) {
    this.$listview$ = $listview$$;
    this.Init();
  };
  $goog$exportPath_$$("ListViewIndexerModel", $oj$$44$$.$ListViewIndexerModel$, $oj$$44$$);
  $oj$$44$$.$Object$.$createSubclass$($oj$$44$$.$ListViewIndexerModel$, $oj$$44$$.$EventSource$, "oj.ListViewIndexerModel");
  $oj$$44$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes = function $$oj$$44$$$$ListViewIndexerModel$$$getIndexablePrefixes$() {
    return this.$listview$.$ojContext$.$getTranslatedString$("indexerCharacters").split("|");
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$44$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes});
  $oj$$44$$.$ListViewIndexerModel$.prototype.getPrefixes = function $$oj$$44$$$$ListViewIndexerModel$$$getPrefixes$() {
    null == this.$availablePrefixes$ && (this.$availablePrefixes$ = this.$_getAvailablePrefixes$());
    return this.$availablePrefixes$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$44$$.$ListViewIndexerModel$.prototype.getPrefixes});
  $oj$$44$$.$ListViewIndexerModel$.prototype.$_getAvailablePrefixes$ = function $$oj$$44$$$$ListViewIndexerModel$$$$_getAvailablePrefixes$$() {
    var $results$$11$$ = [], $groupItems$$5$$ = this.$listview$.$_getGroupItemsCache$();
    if (null != $groupItems$$5$$) {
      for (var $prefixes$$1$$ = this.getIndexablePrefixes(), $i$$368$$ = 0;$i$$368$$ < $prefixes$$1$$.length;$i$$368$$++) {
        var $prefix$$19$$ = $prefixes$$1$$[$i$$368$$];
        $groupItems$$5$$.each(function() {
          if (0 == $$$$42$$(this).text().indexOf($prefix$$19$$)) {
            return $results$$11$$.push($prefix$$19$$), !1;
          }
        });
      }
    }
    return $results$$11$$;
  };
  $oj$$44$$.$ListViewIndexerModel$.prototype.setPrefix = function $$oj$$44$$$$ListViewIndexerModel$$$setPrefix$($prefix$$20$$) {
    return $prefix$$20$$ == $oj$$44$$.$IndexerModel$.PREFIX_OTHERS ? this.$_setOtherPrefix$() : this.$_setPrefix$($prefix$$20$$);
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.setPrefix", {setPrefix:$oj$$44$$.$ListViewIndexerModel$.prototype.setPrefix});
  $oj$$44$$.$ListViewIndexerModel$.prototype.$_setOtherPrefix$ = function $$oj$$44$$$$ListViewIndexerModel$$$$_setOtherPrefix$$() {
    var $prefixes$$2$$, $self$$191$$ = this, $match$$22$$, $groupItems$$6$$, $content$$24$$, $i$$369$$, $prefix$$21$$;
    $prefixes$$2$$ = this.getIndexablePrefixes();
    return new Promise(function($resolve$$57$$) {
      $match$$22$$ = null;
      $groupItems$$6$$ = $self$$191$$.$listview$.$_getGroupItemsCache$();
      null != $groupItems$$6$$ && $groupItems$$6$$.each(function() {
        $content$$24$$ = $$$$42$$(this).text();
        for ($i$$369$$ = 0;$i$$369$$ < $prefixes$$2$$.length;$i$$369$$++) {
          if ($prefix$$21$$ = $prefixes$$2$$[$i$$369$$], 0 == $content$$24$$.indexOf($prefix$$21$$)) {
            return!0;
          }
        }
        $match$$22$$ = this;
        return!1;
      });
      $match$$22$$ ? ($self$$191$$.$listview$.$_scrollToGroupHeader$($match$$22$$), $resolve$$57$$($oj$$44$$.$IndexerModel$.PREFIX_OTHERS)) : $resolve$$57$$(null);
    });
  };
  $oj$$44$$.$ListViewIndexerModel$.prototype.$_setPrefix$ = function $$oj$$44$$$$ListViewIndexerModel$$$$_setPrefix$$($prefix$$22$$) {
    var $prefixes$$3$$, $index$$225$$, $self$$192$$ = this, $match$$23$$ = null, $groupHeader$$2$$;
    $prefixes$$3$$ = this.getIndexablePrefixes();
    $index$$225$$ = $prefixes$$3$$.indexOf($prefix$$22$$);
    return new Promise(function($resolve$$58$$) {
      if (-1 == $index$$225$$) {
        $resolve$$58$$(null);
      } else {
        for (;$index$$225$$ < $prefixes$$3$$.length;) {
          $prefix$$22$$ = $prefixes$$3$$[$index$$225$$];
          $groupHeader$$2$$ = $self$$192$$.$_findGroupHeader$($prefix$$22$$);
          if (null != $groupHeader$$2$$) {
            $self$$192$$.$listview$.$_scrollToGroupHeader$($groupHeader$$2$$);
            $match$$23$$ = $prefix$$22$$;
            break;
          }
          $index$$225$$++;
        }
        $resolve$$58$$($match$$23$$);
      }
    });
  };
  $oj$$44$$.$ListViewIndexerModel$.prototype.$_findGroupHeader$ = function $$oj$$44$$$$ListViewIndexerModel$$$$_findGroupHeader$$($prefix$$23$$) {
    var $match$$24$$, $groupItems$$7$$, $content$$25$$;
    $groupItems$$7$$ = this.$listview$.$_getGroupItemsCache$();
    null != $groupItems$$7$$ && $groupItems$$7$$.each(function() {
      $content$$25$$ = $$$$42$$(this).text();
      if (0 == $content$$25$$.indexOf($prefix$$23$$)) {
        return $match$$24$$ = this, !1;
      }
    });
    return $match$$24$$;
  };
  $oj$$44$$.$ListViewIndexerModel$.prototype.$fireChangeEvent$ = function $$oj$$44$$$$ListViewIndexerModel$$$$fireChangeEvent$$() {
    this.$availablePrefixes$ = null;
    this.handleEvent($oj$$44$$.$IndexerModel$.$EventType$.CHANGE, {});
  };
  (function() {
    $oj$$44$$.$__registerWidget$("oj.ojIndexer", $$$$42$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", version:"1.2", widgetEventPrefix:"oj", options:{data:null}, _ComponentCreate:function() {
      this._super();
      this.$_setup$();
    }, $_AfterCreate$:function() {
      var $container$$28$$;
      this._super();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$_createInstructionText$();
      $container$$28$$ = this.$_getIndexerContainer$()[0];
      this.$_registerResizeListener$($container$$28$$);
      this.$_registerTouchHandler$($container$$28$$);
    }, _destroy:function() {
      var $container$$29$$, $model$$85$$;
      this._super();
      this.$_unsetAriaProperties$();
      this.element.removeClass("oj-component-initnode");
      $container$$29$$ = this.$_getIndexerContainer$()[0];
      this.$_unregisterResizeListener$($container$$29$$);
      this.$_unregisterTouchHandler$($container$$29$$);
      $model$$85$$ = this.$_getIndexerModel$();
      null != $model$$85$$ && this.$m_indexerModelListener$ && $model$$85$$.off($oj$$44$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$);
      $oj$$44$$.$DomUtils$.unwrap(this.element, $$$$42$$($container$$29$$));
    }, _setOption:function($key$$159$$, $value$$267$$) {
      this._superApply(arguments);
      "data" == $key$$159$$ && this.refresh();
    }, widget:function() {
      return this.$_getIndexerContainer$();
    }, refresh:function() {
      this._super();
      this.element.empty();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$m_current$ = null;
    }, getNodeBySubId:function($locator$$41_prefix$$24$$) {
      var $prefixes$$4$$, $i$$370$$, $j$$44$$, $node$$90$$, $includes$$;
      if (null == $locator$$41_prefix$$24$$) {
        return this.element ? this.element[0] : null;
      }
      if ("oj-indexer-prefix" === $locator$$41_prefix$$24$$.subId) {
        for ($locator$$41_prefix$$24$$ = $locator$$41_prefix$$24$$.prefix, $prefixes$$4$$ = this.element.children("li"), $i$$370$$ = 0;$i$$370$$ < $prefixes$$4$$.length;$i$$370$$++) {
          $node$$90$$ = $prefixes$$4$$.get($i$$370$$);
          if ($$$$42$$($node$$90$$).attr("data-range") == $locator$$41_prefix$$24$$) {
            return $node$$90$$;
          }
          $includes$$ = $$$$42$$($node$$90$$).attr("data-includes");
          if (null != $includes$$) {
            for ($includes$$ = $includes$$.split("|"), $j$$44$$ = 0;$j$$44$$ < $includes$$.length;$j$$44$$++) {
              if ($includes$$[$j$$44$$] == $locator$$41_prefix$$24$$) {
                return $node$$90$$;
              }
            }
          }
        }
      }
      return null;
    }, getSubIdByNode:function($node$$91_prefix$$25$$) {
      return null != $node$$91_prefix$$25$$ && ($node$$91_prefix$$25$$ = $$$$42$$($node$$91_prefix$$25$$).attr("data-range"), null != $node$$91_prefix$$25$$) ? {subId:"oj-indexer-prefix", prefix:$node$$91_prefix$$25$$} : null;
    }, $_setAriaProperties$:function() {
      this.element.attr("role", "slider").attr("aria-orientation", "vertical").attr("aria-describedby", this.element.prop("id") + ":desc").attr("aria-valuemin", 0).attr("aria-valuemax", Math.max(0, this.element.children().length - 1));
    }, $_unsetAriaProperties$:function() {
      this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext");
    }, $_createInstructionText$:function() {
      var $key$$160$$, $text$$18$$;
      $key$$160$$ = $oj$$44$$.$DomUtils$.$isTouchSupported$() ? "ariaTouchInstructionText" : "ariaKeyboardInstructionText";
      $text$$18$$ = $$$$42$$(document.createElement("div"));
      $text$$18$$.prop("id", this.element.prop("id") + ":desc");
      $text$$18$$.addClass("oj-helper-hidden-accessible").text(this.$getTranslatedString$($key$$160$$));
      this.$_getIndexerContainer$().append($text$$18$$);
    }, $_getIndexerContainer$:function() {
      null == this.$m_container$ && (this.$m_container$ = this.$_createIndexerContainer$());
      return this.$m_container$;
    }, $_createIndexerContainer$:function() {
      var $container$$30$$ = $$$$42$$(document.createElement("div"));
      $container$$30$$.addClass("oj-indexer oj-component");
      this.element.parent()[0].replaceChild($container$$30$$[0], this.element[0]);
      $container$$30$$.prepend(this.element);
      return $container$$30$$;
    }, $_createIndexerContent$:function() {
      var $model$$86_prefixOthers$$, $root$$13$$, $last$$5_others_prefixes$$5$$, $availablePrefixes$$, $height$$28_max$$8_skip$$2$$, $first$$8_i$$371_itemHeight$$, $item$$115_prefix$$26$$;
      $model$$86_prefixOthers$$ = this.$_getIndexerModel$();
      if (null != $model$$86_prefixOthers$$) {
        $root$$13$$ = this.element;
        $last$$5_others_prefixes$$5$$ = $model$$86_prefixOthers$$.getIndexablePrefixes();
        $availablePrefixes$$ = $model$$86_prefixOthers$$.getPrefixes();
        $model$$86_prefixOthers$$ = this.$getTranslatedString$("indexerOthers");
        $height$$28_max$$8_skip$$2$$ = this.widget().outerHeight();
        $first$$8_i$$371_itemHeight$$ = this.$_createItem$($last$$5_others_prefixes$$5$$[0], $availablePrefixes$$);
        $root$$13$$.append($first$$8_i$$371_itemHeight$$);
        $first$$8_i$$371_itemHeight$$ = $first$$8_i$$371_itemHeight$$.outerHeight();
        $height$$28_max$$8_skip$$2$$ = Math.floor($height$$28_max$$8_skip$$2$$ / $first$$8_i$$371_itemHeight$$);
        this.$_getIndexerContainer$().removeClass("oj-indexer-abbr");
        $height$$28_max$$8_skip$$2$$ = Math.floor(($last$$5_others_prefixes$$5$$.length + 1) / $height$$28_max$$8_skip$$2$$) + 1;
        1 < $height$$28_max$$8_skip$$2$$ && this.$_getIndexerContainer$().addClass("oj-indexer-abbr");
        for ($first$$8_i$$371_itemHeight$$ = 1 + $height$$28_max$$8_skip$$2$$;$first$$8_i$$371_itemHeight$$ < $last$$5_others_prefixes$$5$$.length;$first$$8_i$$371_itemHeight$$ = $first$$8_i$$371_itemHeight$$ + $height$$28_max$$8_skip$$2$$ + 1) {
          1 < $height$$28_max$$8_skip$$2$$ ? ($item$$115_prefix$$26$$ = this.$_createSeparator$($last$$5_others_prefixes$$5$$, $first$$8_i$$371_itemHeight$$ - $height$$28_max$$8_skip$$2$$, $first$$8_i$$371_itemHeight$$ - 1), $root$$13$$.append($item$$115_prefix$$26$$)) : $first$$8_i$$371_itemHeight$$--, $item$$115_prefix$$26$$ = $last$$5_others_prefixes$$5$$[$first$$8_i$$371_itemHeight$$], $item$$115_prefix$$26$$ = this.$_createItem$($item$$115_prefix$$26$$, $availablePrefixes$$), $root$$13$$.append($item$$115_prefix$$26$$)
          ;
        }
        $last$$5_others_prefixes$$5$$ = this.$_createItem$($last$$5_others_prefixes$$5$$[$last$$5_others_prefixes$$5$$.length - 1], $availablePrefixes$$);
        $root$$13$$.append($last$$5_others_prefixes$$5$$);
        $last$$5_others_prefixes$$5$$ = this.$_createItem$($model$$86_prefixOthers$$);
        $last$$5_others_prefixes$$5$$.attr("data-others", "true");
        $root$$13$$.append($last$$5_others_prefixes$$5$$);
      }
    }, $_createItem$:function($prefix$$27$$, $availablePrefixes$$1$$) {
      var $item$$116$$ = $$$$42$$(document.createElement("li"));
      $item$$116$$.attr("data-range", $prefix$$27$$).text($prefix$$27$$);
      null != $availablePrefixes$$1$$ && -1 == $availablePrefixes$$1$$.indexOf($prefix$$27$$) && $item$$116$$.addClass("oj-disabled");
      return $item$$116$$;
    }, $_createSeparator$:function($indexString$$, $from$$3_i$$372$$, $to$$3$$) {
      var $item$$117$$, $includes$$1$$ = "";
      $item$$117$$ = $$$$42$$(document.createElement("li"));
      for ($item$$117$$.addClass("oj-indexer-ellipsis").attr("data-range", $indexString$$[$from$$3_i$$372$$ + Math.round(($to$$3$$ - $from$$3_i$$372$$) / 2)]);$from$$3_i$$372$$ < $to$$3$$;$from$$3_i$$372$$++) {
        $includes$$1$$ = $includes$$1$$ + $indexString$$[$from$$3_i$$372$$] + "|";
      }
      $includes$$1$$ += $indexString$$[$to$$3$$];
      $item$$117$$.attr("data-includes", $includes$$1$$);
      return $item$$117$$;
    }, $_setup$:function() {
      var $self$$193$$ = this, $model$$87$$;
      this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex", 0);
      this._on(this.element, {click:function($event$$491$$) {
        $self$$193$$.$_handleClick$($event$$491$$);
      }, keydown:function($event$$492$$) {
        $self$$193$$.$_handleKeyDown$($event$$492$$);
      }, focus:function($event$$493$$) {
        $self$$193$$.$_handleFocus$($event$$493$$);
      }, blur:function($event$$494$$) {
        $self$$193$$.$_handleBlur$($event$$494$$);
      }});
      $model$$87$$ = this.$_getIndexerModel$();
      null != $model$$87$$ && (this.$m_indexerModelListener$ = function $this$$m_indexerModelListener$$() {
        $self$$193$$.refresh();
      }, $model$$87$$.on($oj$$44$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$));
    }, $_handleClick$:function($event$$495_target$$89$$) {
      0 === $event$$495_target$$89$$.button && ($event$$495_target$$89$$ = $$$$42$$($event$$495_target$$89$$.target), this.$_setCurrent$($event$$495_target$$89$$));
    }, $_handleFocus$:function() {
      this.$_getIndexerContainer$().addClass("oj-focus-ancestor");
      null == this.$m_current$ && this.$_setFocus$(this.element.children("li").first());
    }, $_handleBlur$:function() {
      this.$_getIndexerContainer$().removeClass("oj-focus-ancestor");
    }, $_handleKeyDown$:function($event$$498$$) {
      var $next$$6$$, $processed$$7$$ = !1;
      switch($event$$498$$.keyCode) {
        case 38:
          $next$$6$$ = this.$m_current$.prev();
          break;
        case 40:
          $next$$6$$ = this.$m_current$.next();
          break;
        case 13:
          this.$_setCurrent$(this.$m_current$), $processed$$7$$ = !0;
      }
      null != $next$$6$$ && 0 < $next$$6$$.length && ($processed$$7$$ = !0, this.$_setFocus$($next$$6$$));
      $processed$$7$$ && $event$$498$$.preventDefault();
    }, $_setFocus$:function($item$$118$$) {
      null != this.$m_current$ && this.$m_current$.removeClass("oj-focus");
      $item$$118$$.addClass("oj-focus");
      this.$_updateAriaProperties$($item$$118$$);
      this.$m_current$ = $item$$118$$;
    }, $_getIndexerModel$:function() {
      var $model$$88$$ = this.option("data");
      if (null != $model$$88$$ && (void 0 == $model$$88$$.setPrefix || void 0 == $model$$88$$.getIndexablePrefixes || void 0 == $model$$88$$.getPrefixes)) {
        throw "Invalid IndexerModel";
      }
      return $model$$88$$;
    }, $_setCurrent$:function($item$$119$$) {
      var $prefix$$28$$ = $item$$119$$.attr("data-range");
      $item$$119$$.attr("data-others") && ($prefix$$28$$ = $oj$$44$$.$IndexerModel$.PREFIX_OTHERS);
      this.$_setCurrentPrefix$($prefix$$28$$);
    }, $_setCurrentPrefix$:function($prefix$$29$$) {
      var $self$$194$$ = this, $item$$120$$;
      this.$_getIndexerModel$().setPrefix($prefix$$29$$).then(function($val$$50$$) {
        null != $val$$50$$ && ($item$$120$$ = $self$$194$$.$_findItem$($val$$50$$), null != $item$$120$$ && $self$$194$$.$_setFocus$($item$$120$$));
      });
    }, $_updateAriaProperties$:function($item$$121$$) {
      var $includes$$2_val$$51$$, $valueText$$ = "";
      $includes$$2_val$$51$$ = $item$$121$$.attr("data-includes");
      null != $includes$$2_val$$51$$ ? ($includes$$2_val$$51$$ = $includes$$2_val$$51$$.split("|"), 0 < $includes$$2_val$$51$$.length && ($valueText$$ = this.$getTranslatedString$("ariaInBetweenText", {first:$includes$$2_val$$51$$[0], second:$includes$$2_val$$51$$[$includes$$2_val$$51$$.length - 1]}))) : ($includes$$2_val$$51$$ = $item$$121$$.attr("data-range"), $valueText$$ = $includes$$2_val$$51$$ === $oj$$44$$.$IndexerModel$.PREFIX_OTHERS ? this.$getTranslatedString$("ariaOthersLabel") : $includes$$2_val$$51$$);
      $item$$121$$.hasClass("oj-disabled") && ($valueText$$ = $valueText$$ + ". " + this.$getTranslatedString$("ariaDisabledLabel"));
      this.element.attr("aria-valuetext", $valueText$$);
      this.element.attr("aria-valuenow", $item$$121$$.index());
    }, $_findItem$:function($prefix$$30$$) {
      var $children$$11$$, $i$$373$$, $item$$122$$, $value$$268$$, $includes$$3$$;
      $children$$11$$ = this.element.children();
      for ($i$$373$$ = 0;$i$$373$$ < $children$$11$$.length;$i$$373$$++) {
        if ($item$$122$$ = $children$$11$$.get($i$$373$$), $value$$268$$ = $$$$42$$($item$$122$$).attr("data-range"), $includes$$3$$ = $$$$42$$($item$$122$$).attr("data-includes"), null != $value$$268$$ && $value$$268$$ == $prefix$$30$$ || null != $includes$$3$$ && -1 < $includes$$3$$.indexOf($prefix$$30$$)) {
          return $$$$42$$($item$$122$$);
        }
      }
      return null;
    }, $_unregisterResizeListener$:function($element$$123$$) {
      $element$$123$$ && this.$_resizeHandler$ && $oj$$44$$.$DomUtils$.$removeResizeListener$($element$$123$$, this.$_resizeHandler$);
    }, $_registerResizeListener$:function($element$$124$$) {
      $element$$124$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$44$$.$DomUtils$.$addResizeListener$($element$$124$$, this.$_resizeHandler$));
    }, $_unregisterTouchHandler$:function($element$$125$$) {
      $$$$42$$($element$$125$$).off("panstart panmove panend");
    }, $_registerTouchHandler$:function($element$$126$$) {
      var $self$$195$$ = this, $options$$347$$, $target$$90$$, $x$$55$$, $y$$39$$, $currentTarget$$, $currentPrefix$$, $currentY$$, $previousY$$, $delta$$6$$, $range$$19$$, $index$$227$$, $prefix$$31$$;
      $options$$347$$ = {recognizers:[[$Hammer$$3$$.Pan, {direction:$Hammer$$3$$.DIRECTION_VERTICAL}]]};
      $$$$42$$($element$$126$$).$ojHammer$($options$$347$$).on("panstart", function($event$$499$$) {
        $target$$90$$ = $event$$499$$.gesture.target;
        $x$$55$$ = $self$$195$$.element[0].getBoundingClientRect().left + 5;
        $y$$39$$ = $target$$90$$.getBoundingClientRect().top;
        $self$$195$$.$_setCurrent$($$$$42$$($target$$90$$));
        $currentTarget$$ = $target$$90$$;
        $currentPrefix$$ = $target$$90$$.getAttribute("data-range");
        $currentY$$ = $y$$39$$;
      }).on("panmove", function($event$$500$$) {
        $previousY$$ = $currentY$$;
        $currentY$$ = $y$$39$$ + $event$$500$$.gesture.deltaY;
        $target$$90$$ = document.elementFromPoint($x$$55$$, $currentY$$);
        null != $target$$90$$ && ($delta$$6$$ = $currentY$$ - $previousY$$, $currentTarget$$ == $target$$90$$ ? ($range$$19$$ = $target$$90$$.getAttribute("data-includes"), null != $range$$19$$ && ($range$$19$$ = $range$$19$$.split("|"), $index$$227$$ = $range$$19$$.indexOf($currentPrefix$$), $prefix$$31$$ = null, 0 < $delta$$6$$ && $index$$227$$ < $range$$19$$.length - 1 ? $prefix$$31$$ = $range$$19$$[$index$$227$$ + 1] : 0 > $delta$$6$$ && 0 < $index$$227$$ && ($prefix$$31$$ = $range$$19$$[$index$$227$$ - 
        1]), null != $prefix$$31$$ && ($currentPrefix$$ = $prefix$$31$$, $self$$195$$.$_setCurrentPrefix$($prefix$$31$$)))) : $target$$90$$.hasAttribute("data-range") && ($range$$19$$ = $target$$90$$.getAttribute("data-includes"), $prefix$$31$$ = null, null != $range$$19$$ && (0 < $delta$$6$$ && $target$$90$$ == $currentTarget$$.nextElementSibling ? $prefix$$31$$ = $range$$19$$[0] : 0 > $delta$$6$$ && $target$$90$$ == $currentTarget$$.previousElementSibling && ($prefix$$31$$ = $range$$19$$[$range$$19$$.length - 
        1])), null == $prefix$$31$$ && ($prefix$$31$$ = $target$$90$$.getAttribute("data-range")), $currentTarget$$ = $target$$90$$, $currentPrefix$$ = $prefix$$31$$, $self$$195$$.$_setCurrentPrefix$($currentPrefix$$)));
      }).on("panend", function() {
        $prefix$$31$$ = $currentY$$ = $currentPrefix$$ = $currentTarget$$ = null;
      });
    }, $_handleResize$:function($width$$30$$, $height$$29$$) {
      0 < $width$$30$$ && 0 < $height$$29$$ && this.refresh();
    }});
  })();
});
