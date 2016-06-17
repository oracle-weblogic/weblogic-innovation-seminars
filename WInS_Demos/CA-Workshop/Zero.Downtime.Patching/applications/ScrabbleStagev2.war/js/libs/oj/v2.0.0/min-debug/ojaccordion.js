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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$22$$, $$$$21$$) {
  (function() {
    $oj$$22$$.$__registerWidget$("oj.ojAccordion", $$$$21$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{multiple:!1, expanded:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.options.expanded = this.$_expandedIndexToId$(this.options.expanded);
      this.$_refresh$();
    }, $_NotifyContextMenuGesture$:function($menu$$9$$, $event$$345$$, $eventType$$39$$) {
      this.$_OpenContextMenu$($event$$345$$, $eventType$$39$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy");
    }, _setOption:function($key$$129$$, $value$$249$$, $flags$$33$$) {
      if ("multiple" === $key$$129$$) {
        !1 == $value$$249$$ && !0 == this.options.multiple && this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse", !1);
      } else {
        if ("expanded" === $key$$129$$) {
          this.$_setExpandedOption$($value$$249$$);
          return;
        }
      }
      this._super($key$$129$$, $value$$249$$, $flags$$33$$);
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this.$_internalSetExpanded$ = !0;
      this._setOption("expanded", this.options.expanded);
      this.$_internalSetExpanded$ = !1;
      this.$_setupEvents$();
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$21$$(this).ojCollapsible("option", "expandArea", "header");
      });
      this.$collapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible");
    }, $_setupEvents$:function() {
      var $events$$2$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojcollapse:this.$_collapseHandler$};
      this._off(this.$collapsibles$);
      this._on(this.$collapsibles$, $events$$2$$);
    }, $_keydown$:function($event$$346$$) {
      if (!$event$$346$$.altKey && !$event$$346$$.ctrlKey && ($$$$21$$($event$$346$$.target).hasClass("oj-collapsible-header") || $$$$21$$($event$$346$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$17$$ = $$$$21$$.ui.keyCode, $enabledCollapsibles$$ = this.$collapsibles$.not(".oj-disabled"), $length$$17$$ = $enabledCollapsibles$$.length, $target$$87$$ = $$$$21$$($event$$346$$.target).closest(".oj-collapsible"), $currentIndex$$3$$ = $enabledCollapsibles$$.index($target$$87$$), $toFocus$$ = !1;
        if (0 <= $currentIndex$$3$$) {
          switch($event$$346$$.keyCode) {
            case $keyCode$$17$$.RIGHT:
            ;
            case $keyCode$$17$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$3$$ + 1) % $length$$17$$];
              break;
            case $keyCode$$17$$.LEFT:
            ;
            case $keyCode$$17$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$3$$ - 1 + $length$$17$$) % $length$$17$$];
              break;
            case $keyCode$$17$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$17$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$17$$ - 1];
          }
        }
        $toFocus$$ && ($target$$87$$ && $$$$21$$($target$$87$$).trigger("ojfocusout"), $$$$21$$($toFocus$$).trigger("ojfocus"), $event$$346$$.preventDefault());
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$347$$) {
      return!this.options.multiple && ($closestCollapsible_event$$347$$ = $$$$21$$($closestCollapsible_event$$347$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$347$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$347$$.siblings(".oj-collapsible.oj-expanded").map(function() {
        return $$$$21$$(this).data("oj-ojCollapsible");
      }) : $$$$21$$();
    }, $_beforeExpandHandler$:function($event$$348$$) {
      if (!this.$_isTargetMyCollapsible$($event$$348$$)) {
        return!0;
      }
      var $result$$55$$, $self$$140$$ = this, $newData$$1$$;
      this.$_findTargetSiblings$($event$$348$$).each(function() {
        var $beforeCollapsedData_collapsible$$ = this.element;
        $newData$$1$$ = $self$$140$$.$_initEventData$($beforeCollapsedData_collapsible$$, $$$$21$$($event$$348$$.target));
        $beforeCollapsedData_collapsible$$ = {header:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-header"), content:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-content")};
        return $result$$55$$ = this._trigger("beforeCollapse", $event$$348$$, $beforeCollapsedData_collapsible$$);
      });
      $newData$$1$$ || ($newData$$1$$ = $self$$140$$.$_initEventData$(null, $$$$21$$($event$$348$$.target)));
      this.options.multiple || this._trigger("beforeExpand", $event$$348$$, $newData$$1$$);
      return $result$$55$$;
    }, $_expandHandler$:function($event$$349$$, $eventData$$9$$) {
      if (this.$_isTargetMyCollapsible$($event$$349$$) && !this.$_duringSetExpandedOption$) {
        var $newData$$2$$, $self$$141$$ = this;
        this.$_findTargetSiblings$($event$$349$$).each(function() {
          this.collapse(!1, $event$$349$$, $eventData$$9$$);
          $newData$$2$$ = $self$$141$$.$_initEventData$(this.element, $$$$21$$($event$$349$$.target));
        });
        $newData$$2$$ || ($newData$$2$$ = $self$$141$$.$_initEventData$(null, $$$$21$$($event$$349$$.target)));
        this.options.multiple || this._trigger("expand", $event$$349$$, $newData$$2$$);
        this.$_updateExpanded$();
      }
    }, $_beforeCollapseHandler$:function($event$$350$$, $eventData$$10$$) {
      return this.$_isTargetMyCollapsible$($event$$350$$) && !this.options.multiple ? this._trigger("beforeCollapse", $event$$350$$, this.$_initCollapseEventData$($event$$350$$, $eventData$$10$$)) : !0;
    }, $_collapseHandler$:function($event$$351$$, $eventData$$11$$) {
      if (!this.$_duringSetExpandedOption$ && this.$_isTargetMyCollapsible$($event$$351$$)) {
        var $newData$$3$$ = this.$_initCollapseEventData$($event$$351$$, $eventData$$11$$);
        this.options.multiple || this._trigger("collapse", $event$$351$$, $newData$$3$$);
        this.$_updateExpanded$();
      }
    }, $_initEventData$:function($fromC$$, $toC$$) {
      return{fromCollapsible:$fromC$$, toCollapsible:$toC$$};
    }, $_initCollapseEventData$:function($event$$352$$, $eventData$$13$$) {
      var $newData$$4$$;
      if ($eventData$$13$$.toCollapsible) {
        $newData$$4$$ = $eventData$$13$$;
      } else {
        if ($event$$352$$.originalEvent && $event$$352$$.originalEvent.target) {
          var $collapsible$$1$$ = $$$$21$$($event$$352$$.originalEvent.target);
          $collapsible$$1$$.hasClass("oj-collapsible") && ($newData$$4$$ = this.$_initEventData$($$$$21$$($event$$352$$.target), $collapsible$$1$$));
        }
        $newData$$4$$ || ($newData$$4$$ = this.$_initEventData$($$$$21$$($event$$352$$.target), null));
      }
      return $newData$$4$$;
    }, $_isTargetMyCollapsible$:function($event$$353$$) {
      return $$$$21$$($event$$353$$.target).is(this.$collapsibles$);
    }, $_updateExpanded$:function() {
      var $cid$$8$$, $result$$56$$ = [];
      this.$collapsibles$.each(function($index$$176$$) {
        $$$$21$$(this).ojCollapsible("option", "expanded") && ($cid$$8$$ = $$$$21$$(this).attr("id"), $result$$56$$.push($cid$$8$$ ? $cid$$8$$ : $index$$176$$));
      });
      $oj$$22$$.$Object$.$_compareSet$(this.options.expanded, $result$$56$$) || this.option("expanded", $result$$56$$, {_context:{$internalSet$:!0, $writeback$:!0}});
    }, $_expandedIndexToId$:function($expanded$$10$$) {
      if (Array.isArray($expanded$$10$$)) {
        var $id$$30$$, $newExp$$ = [];
        this.element.children().each(function($index$$177$$) {
          ($id$$30$$ = $$$$21$$(this).attr("id")) ? -1 != $expanded$$10$$.indexOf($id$$30$$) ? $newExp$$.push($id$$30$$) : -1 != $expanded$$10$$.indexOf($index$$177$$) && $newExp$$.push($id$$30$$) : -1 != $expanded$$10$$.indexOf($index$$177$$) && $newExp$$.push($index$$177$$);
        });
        !this.options.multiple && 1 < $newExp$$.length && ($newExp$$ = [$newExp$$[$newExp$$.length - 1]]);
        return $newExp$$;
      }
      return null;
    }, $_setExpandedOption$:function($expanded$$11$$) {
      this.$_internalSetExpanded$ || ($expanded$$11$$ = this.$_expandedIndexToId$($expanded$$11$$));
      if ($expanded$$11$$) {
        var $self$$142$$ = this, $child$$7$$, $childId$$, $parentExp$$, $iexp$$ = 0;
        this.$collapsibles$.each(function($index$$178$$) {
          $child$$7$$ = $$$$21$$(this);
          $childId$$ = $child$$7$$.attr("id");
          $parentExp$$ = !1;
          $childId$$ ? $childId$$ == $expanded$$11$$[$iexp$$] && ($parentExp$$ = !0) : $index$$178$$ == $expanded$$11$$[$iexp$$] && ($parentExp$$ = !0);
          $parentExp$$ && $iexp$$++;
          $child$$7$$.ojCollapsible("option", "expanded") !== $parentExp$$ && ($oj$$22$$.$Logger$.warn("JET Accordion: override collapsible " + $index$$178$$ + " expanded setting"), $self$$142$$.$_duringSetExpandedOption$ = !0, $child$$7$$.ojCollapsible("option", "expanded", $parentExp$$), $self$$142$$.$_duringSetExpandedOption$ = !1);
        });
      }
      this.$_updateExpanded$();
    }, getNodeBySubId:function($collapsible$$2_index$$179_locator$$31$$) {
      if (null == $collapsible$$2_index$$179_locator$$31$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$35$$ = $collapsible$$2_index$$179_locator$$31$$.subId;
      $collapsible$$2_index$$179_locator$$31$$ = $collapsible$$2_index$$179_locator$$31$$.index;
      if ("number" !== typeof $collapsible$$2_index$$179_locator$$31$$ || 0 > $collapsible$$2_index$$179_locator$$31$$ || $collapsible$$2_index$$179_locator$$31$$ >= this.$collapsibles$.length) {
        return null;
      }
      $collapsible$$2_index$$179_locator$$31$$ = this.$collapsibles$[$collapsible$$2_index$$179_locator$$31$$];
      switch($subId$$35$$) {
        case "oj-accordion-content":
          $subId$$35$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$35$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-disclosure":
        ;
        case "oj-accordion-header-icon":
          $subId$$35$$ = "oj-collapsible-disclosure";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$2_index$$179_locator$$31$$;
        default:
          return null;
      }
      return $$$$21$$($collapsible$$2_index$$179_locator$$31$$).ojCollapsible("getNodeBySubId", {subId:$subId$$35$$});
    }, getSubIdByNode:function($collapsibleSubId_node$$79$$) {
      for (var $collapsibleIndex$$ = -1, $currentNode_subId$$36$$ = $collapsibleSubId_node$$79$$;$currentNode_subId$$36$$;) {
        $collapsibleIndex$$ = Array.prototype.indexOf.call(this.$collapsibles$, $currentNode_subId$$36$$);
        if (-1 != $collapsibleIndex$$) {
          break;
        }
        $currentNode_subId$$36$$ = $currentNode_subId$$36$$.parentElement;
      }
      $currentNode_subId$$36$$ = null;
      if (-1 != $collapsibleIndex$$) {
        switch($collapsibleSubId_node$$79$$ = ($collapsibleSubId_node$$79$$ = $$$$21$$(this.$collapsibles$[$collapsibleIndex$$]).ojCollapsible("getSubIdByNode", $collapsibleSubId_node$$79$$)) ? $collapsibleSubId_node$$79$$ : {}, $collapsibleSubId_node$$79$$.subId) {
          case "oj-collapsible-content":
            $currentNode_subId$$36$$ = "oj-accordion-content";
            break;
          case "oj-collapsible-header":
            $currentNode_subId$$36$$ = "oj-accordion-header";
            break;
          case "oj-collapsible-disclosure":
          ;
          case "oj-collapsible-header-icon":
            $currentNode_subId$$36$$ = "oj-accordion-disclosure";
            break;
          default:
            $currentNode_subId$$36$$ = "oj-accordion-collapsible";
        }
      }
      return $currentNode_subId$$36$$ ? {subId:$currentNode_subId$$36$$, index:$collapsibleIndex$$} : null;
    }});
  })();
});
