/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtTimelineOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTimeUtils$$ = {$supportsTouch$:function() {
  return(0,D.$DvtAgent$isTouchDevice$$)()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$1_startTime$$4$$, $endTime$$4$$, $number$$2_time$$15$$, $width$$136$$) {
  $number$$2_time$$15$$ = ($number$$2_time$$15$$ - $denominator$$1_startTime$$4$$) * $width$$136$$;
  $denominator$$1_startTime$$4$$ = $endTime$$4$$ - $denominator$$1_startTime$$4$$;
  return 0 == $number$$2_time$$15$$ || 0 == $denominator$$1_startTime$$4$$ ? 0 : $number$$2_time$$15$$ / $denominator$$1_startTime$$4$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$5$$, $endTime$$5_number$$3$$, $pos$$66$$, $width$$137$$) {
  $endTime$$5_number$$3$$ = $pos$$66$$ * ($endTime$$5_number$$3$$ - $startTime$$5$$);
  return 0 == $endTime$$5_number$$3$$ || 0 == $width$$137$$ ? $startTime$$5$$ : $endTime$$5_number$$3$$ / $width$$137$$ + $startTime$$5$$
};
D.$DvtTimeComponent$$ = function $$DvtTimeComponent$$$($context$$613$$, $callback$$167$$, $callbackObj$$112$$) {
  this.Init($context$$613$$, $callback$$167$$, $callbackObj$$112$$)
};
(0,D.$goog$exportPath_$$)("DvtTimeComponent", D.$DvtTimeComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponent$$, D.$DvtBaseComponent$$, "DvtTimeComponent");
D.$DvtTimeComponent$$.prototype.Init = function $$DvtTimeComponent$$$$Init$($context$$614$$, $callback$$168$$, $callbackObj$$113$$) {
  D.$DvtTimeComponent$$.$superclass$.Init.call(this, $context$$614$$);
  this.$_callback$ = $callback$$168$$;
  this.$_callbackObj$ = $callbackObj$$113$$;
  this.$_virtualize$ = !1
};
D.$DvtTimeComponent$$.prototype.$render$ = function $$DvtTimeComponent$$$$$render$$($props$$6_width$$162$$, $height$$146$$, $options$$277$$) {
  $options$$277$$ && this.$SetOptions$($options$$277$$);
  this.$Width$ = $props$$6_width$$162$$;
  this.$Height$ = $height$$146$$;
  this.$Options$ && ($props$$6_width$$162$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($props$$6_width$$162$$))
};
D.$DvtTimeComponent$$.prototype.render = D.$DvtTimeComponent$$.prototype.$render$;
D.$DvtTimeComponent$$.prototype.$SetOptions$ = function $$DvtTimeComponent$$$$$SetOptions$$($options$$278$$) {
  this.$Options$ = D.$DvtJSONUtils$$.$clone$($options$$278$$)
};
D.$DvtTimeComponent$$.prototype.$addTick$ = function $$DvtTimeComponent$$$$$addTick$$($container$$193$$, $line$$17_x1$$54$$, $x2$$50$$, $y1$$44$$, $y2$$41$$, $stroke$$117$$, $id$$303$$) {
  $line$$17_x1$$54$$ = new D.$DvtLine$$(this.$getCtx$(), $line$$17_x1$$54$$, $y1$$44$$, $x2$$50$$, $y2$$41$$, $id$$303$$);
  $line$$17_x1$$54$$.$setStroke$($stroke$$117$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$17_x1$$54$$);
  $container$$193$$.$addChild$($line$$17_x1$$54$$);
  return $line$$17_x1$$54$$
};
D.$JSCompiler_StaticMethods_addAxisLabel$$ = function $$JSCompiler_StaticMethods_addAxisLabel$$$($container$$194$$, $label$$106$$, $x$$297$$, $y$$265$$, $maxLength$$) {
  $label$$106$$.$setX$($x$$297$$);
  $label$$106$$.$setY$($y$$265$$);
  $label$$106$$.$isTruncated$() && $label$$106$$.$setTextString$($label$$106$$.$getUntruncatedTextString$());
  D.$DvtTextUtils$$.$fitText$($label$$106$$, $maxLength$$, window.Infinity, $container$$194$$);
  $label$$106$$.$alignCenter$()
};
D.$DvtTimeComponent$$.prototype.$addLabel$ = function $$DvtTimeComponent$$$$$addLabel$$($container$$195$$, $backgroundRect$$1_pos$$74$$, $label$$107_text$$113$$, $maxLength$$1$$, $y$$266$$, $labelStyle$$22$$, $id$$304$$, $renderBackground_width$$163$$, $labelPadding$$, $labelList$$, $isRTL$$42$$) {
  $label$$107_text$$113$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$107_text$$113$$, $backgroundRect$$1_pos$$74$$, 0, $id$$304$$);
  null != $labelStyle$$22$$ && $label$$107_text$$113$$.$setCSSStyle$($labelStyle$$22$$);
  $container$$195$$.$addChild$($label$$107_text$$113$$);
  var $dim$$85$$ = $label$$107_text$$113$$.$getDimensions$();
  $container$$195$$.removeChild($label$$107_text$$113$$);
  $y$$266$$ -= $dim$$85$$.$h$;
  $label$$107_text$$113$$.$setY$($y$$266$$);
  $isRTL$$42$$ && $label$$107_text$$113$$.$setX$($backgroundRect$$1_pos$$74$$ - $dim$$85$$.$w$);
  $renderBackground_width$$163$$ && ($renderBackground_width$$163$$ = window.Math.min($dim$$85$$.$w$ + 2 * $labelPadding$$, $maxLength$$1$$), $backgroundRect$$1_pos$$74$$ = new D.$DvtRect$$(this.$getCtx$(), ($isRTL$$42$$ ? $backgroundRect$$1_pos$$74$$ - $renderBackground_width$$163$$ + 2 * $labelPadding$$ : $backgroundRect$$1_pos$$74$$) - $labelPadding$$, $y$$266$$ - $labelPadding$$, $renderBackground_width$$163$$, $dim$$85$$.$h$ + 2 * $labelPadding$$, "ob_" + $id$$304$$), $backgroundRect$$1_pos$$74$$.$setCSSStyle$($labelStyle$$22$$), 
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($backgroundRect$$1_pos$$74$$, 3), $container$$195$$.$addChild$($backgroundRect$$1_pos$$74$$), $labelList$$ && $labelList$$.push($backgroundRect$$1_pos$$74$$));
  D.$DvtTextUtils$$.$fitText$($label$$107_text$$113$$, $maxLength$$1$$, window.Infinity, $container$$195$$);
  $labelList$$ && $labelList$$.push($label$$107_text$$113$$);
  return $label$$107_text$$113$$
};
D.$DvtTimeComponent$$.prototype.$_applyParsedProperties$ = function $$DvtTimeComponent$$$$$_applyParsedProperties$$($props$$7$$) {
  this.$_origStart$ = $props$$7$$.$origStart$;
  this.$_origEnd$ = $props$$7$$.$origEnd$;
  this.$_start$ = $props$$7$$.start;
  this.$_end$ = $props$$7$$.end;
  this.$_inlineStyle$ = $props$$7$$.$inlineStyle$;
  this.$_scale$ = $props$$7$$.scale;
  this.$_converter$ = $props$$7$$.$converter$;
  this.$applyStyleValues$()
};
D.$DvtTimeComponent$$.prototype.$applyStyleValues$ = function $$DvtTimeComponent$$$$$applyStyleValues$$() {
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, this.$_inlineStyle$)
};
D.$JSCompiler_StaticMethods_setContentLength$$ = function $$JSCompiler_StaticMethods_setContentLength$$$($JSCompiler_StaticMethods_setContentLength$self$$, $length$$24$$) {
  $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$ < $length$$24$$ ? $length$$24$$ : $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$;
  $JSCompiler_StaticMethods_setContentLength$self$$.$_virtualize$ || ($JSCompiler_StaticMethods_setContentLength$self$$.$_fetchStartPos$ = 0, $JSCompiler_StaticMethods_setContentLength$self$$.$_fetchEndPos$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$)
};
D.$DvtTimeComponent$$.prototype.$isRTL$ = function $$DvtTimeComponent$$$$$isRTL$$() {
  return(0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$())
};
D.$DvtTimeComponent$$.prototype.$isVertical$ = (0,D.$JSCompiler_get$$)("$_isVertical$");
D.$DvtTimeComponentAxis$$ = function $$DvtTimeComponentAxis$$$($context$$615$$, $callback$$169$$, $callbackObj$$114$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$) {
  this.Init($context$$615$$, $callback$$169$$, $callbackObj$$114$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentAxis$$, D.$DvtContainer$$, "DvtTimeComponentAxis");
D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ = 50;
D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$ = 21;
D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$ = 2;
D.$DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$ = 1;
D.$DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$ = 1;
D.$DvtTimeComponentAxis$$.$_VALID_SCALES$ = "seconds minutes hours days weeks months quarters years".split(" ");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeComponentAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$616$$, $callback$$170$$, $callbackObj$$115$$, $isVertical$$2$$, $zoomOrder$$1$$, $dateFormatStrings$$) {
  D.$DvtTimeComponentAxis$$.$superclass$.Init.call(this, $context$$616$$);
  this.$_calendar$ = new D.$DvtTimeComponentCalendar$$;
  this.$_formatter$ = new D.$DvtTimeComponentAxisFormatter$$(D.$DvtTimeComponentAxisFormatter$$.SHORT, $dateFormatStrings$$);
  this.$_contentSize$ = $isVertical$$2$$ ? D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ : D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
  this.$_borderWidth$ = D.$DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$;
  this.$_zoomOrder$ = $zoomOrder$$1$$;
  this.$_dateToIsoConverter$ = $context$$616$$.$getLocaleHelpers$().dateToIsoConverter
};
D.$JSCompiler_prototypeAlias$$.$setScale$ = (0,D.$JSCompiler_set$$)("$_scale$");
D.$JSCompiler_prototypeAlias$$.$getTimeAxisWidth$ = function $$JSCompiler_prototypeAlias$$$$getTimeAxisWidth$$() {
  null == this.$_timeAxisWidth$ && (this.$_timeAxisWidth$ = 30);
  return this.$_timeAxisWidth$
};
D.$JSCompiler_prototypeAlias$$.$setBorderWidth$ = (0,D.$JSCompiler_set$$)("$_borderWidth$");
D.$JSCompiler_prototypeAlias$$.$getBorderWidth$ = (0,D.$JSCompiler_get$$)("$_borderWidth$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$_contentSize$ + 2 * this.$_borderWidth$
};
D.$JSCompiler_prototypeAlias$$.$setType$ = function $$JSCompiler_prototypeAlias$$$$setType$$($type$$244$$, $dateFormatStrings$$1$$) {
  this.$_formatter$ = new D.$DvtTimeComponentAxisFormatter$$($type$$244$$, $dateFormatStrings$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$adjustDate$ = function $$JSCompiler_prototypeAlias$$$$adjustDate$$($date$$11$$) {
  return this.$_calendar$.$adjustDate$(new window.Date($date$$11$$), this.$_scale$)
};
D.$JSCompiler_prototypeAlias$$.$getNextDate$ = function $$JSCompiler_prototypeAlias$$$$getNextDate$$($time$$17$$) {
  return this.$_calendar$.$getNextDate$($time$$17$$, this.$_scale$)
};
D.$JSCompiler_StaticMethods_formatDate$$ = function $$JSCompiler_StaticMethods_formatDate$$$($JSCompiler_StaticMethods_formatDate$self$$, $date$$12$$) {
  if($JSCompiler_StaticMethods_formatDate$self$$.$_converter$) {
    var $converter$$9$$;
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$;
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$12$$) : $date$$12$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$12$$)
    }
  }
  if($JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$ && $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$]) {
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$];
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$12$$) : $date$$12$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$12$$)
    }
  }
  return $JSCompiler_StaticMethods_formatDate$self$$.$_formatter$.$format$($date$$12$$, $JSCompiler_StaticMethods_formatDate$self$$.$_scale$)
};
D.$DvtTimeComponentAxisFormatter$$ = function $$DvtTimeComponentAxisFormatter$$$($type$$245$$, $locale$$6$$) {
  this.Init($type$$245$$, $locale$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentAxisFormatter$$, D.$DvtObj$$, "DvtTimeComponentAxisFormatter");
D.$DvtTimeComponentAxisFormatter$$.$LONG$ = 0;
D.$DvtTimeComponentAxisFormatter$$.SHORT = 1;
D.$DvtTimeComponentAxisFormatter$$.prototype.Init = function $$DvtTimeComponentAxisFormatter$$$$Init$($type$$246$$, $dateFormatStrings$$2$$) {
  this.$_type$ = $type$$246$$;
  this.$_dateFormatStrings$ = $dateFormatStrings$$2$$;
  this.$_formats$ = [];
  this.$_formats$[0] = {};
  this.$_formats$[0].seconds = "HH:MM:ss";
  this.$_formats$[0].minutes = "HH:MM";
  this.$_formats$[0].hours = "HH:MM";
  this.$_formats$[0].days = "dddd";
  this.$_formats$[0].weeks = "m/dd";
  this.$_formats$[0].months = "mmmm";
  this.$_formats$[0].quarters = "mmmm";
  this.$_formats$[0].halfyears = "yyyy";
  this.$_formats$[0].years = "yyyy";
  this.$_formats$[0].twoyears = "yyyy";
  this.$_formats$[1] = {};
  this.$_formats$[1].seconds = "HH:MM:ss";
  this.$_formats$[1].minutes = "HH:MM";
  this.$_formats$[1].hours = "HH:MM";
  this.$_formats$[1].days = "m/dd";
  this.$_formats$[1].weeks = "m/dd";
  this.$_formats$[1].months = "mmm";
  this.$_formats$[1].quarters = "mmm";
  this.$_formats$[1].halfyears = "yy";
  this.$_formats$[1].years = "yy";
  this.$_formats$[1].twoyears = "yy"
};
D.$DvtTimeComponentAxisFormatter$$.prototype.$format$ = function $$DvtTimeComponentAxisFormatter$$$$$format$$($date$$13$$, $scale$$67$$) {
  var $mask$$7$$ = this.$_formats$[this.$_type$][$scale$$67$$];
  if(null != $mask$$7$$) {
    if(-1 != $mask$$7$$.indexOf(":")) {
      var $separator$$3$$ = ":"
    }else {
      -1 != $mask$$7$$.indexOf("/") && ($separator$$3$$ = "/")
    }
    if($separator$$3$$) {
      for(var $mask$$7$$ = $mask$$7$$.split($separator$$3$$), $newString$$1$$ = (0,D.$JSCompiler_StaticMethods_getDateFormatValue$$)(this, $date$$13$$, $mask$$7$$[0]), $i$$844$$ = 1;$i$$844$$ < $mask$$7$$.length;$i$$844$$++) {
        $newString$$1$$ += $separator$$3$$ + (0,D.$JSCompiler_StaticMethods_getDateFormatValue$$)(this, $date$$13$$, $mask$$7$$[$i$$844$$])
      }
      return $newString$$1$$
    }
    return(0,D.$JSCompiler_StaticMethods_getDateFormatValue$$)(this, $date$$13$$, $mask$$7$$)
  }
  return $date$$13$$.toLocaleString()
};
D.$JSCompiler_StaticMethods_getDateFormatValue$$ = function $$JSCompiler_StaticMethods_getDateFormatValue$$$($JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$, $date$$14$$, $mask$$8$$) {
  switch($mask$$8$$) {
    case "ss":
      return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ = $date$$14$$.getSeconds(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$;
    case "HH":
      return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ = $date$$14$$.getHours(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$;
    case "MM":
      return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ = $date$$14$$.getMinutes(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$;
    case "dd":
      return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ = $date$$14$$.getDate(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$;
    case "dddd":
      return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$.$_dateFormatStrings$.$dayNames$[$date$$14$$.getDay() + 7];
    case "m":
      return $date$$14$$.getMonth() + 1;
    case "mmm":
      return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getMonth()];
    case "mmmm":
      return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$190$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getMonth() + 12];
    case "yy":
      return $date$$14$$.getFullYear().toString().substring(2, 4);
    default:
      return $date$$14$$.getFullYear()
  }
};
D.$DvtTimeComponentCalendar$$ = function $$DvtTimeComponentCalendar$$$($options$$279$$) {
  this.Init($options$$279$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeComponentCalendar$$, D.$DvtObj$$, "DvtTimeComponentCalendar");
D.$DvtTimeComponentCalendar$$.prototype.Init = function $$DvtTimeComponentCalendar$$$$Init$() {
  this.$_dayInMillis$ = 864E5
};
D.$DvtTimeComponentCalendar$$.prototype.$adjustDate$ = function $$DvtTimeComponentCalendar$$$$$adjustDate$$($date$$15$$, $scale$$68$$) {
  var $_adjustedDate$$ = new window.Date($date$$15$$.getTime());
  if("weeks" == $scale$$68$$) {
    $_adjustedDate$$.setHours(0, 0, 0);
    var $roll_amt$$ = ($date$$15$$.getDay() - 0 + 7) % 7;
    0 < $roll_amt$$ && $_adjustedDate$$.setTime($_adjustedDate$$.getTime() - $roll_amt$$ * this.$_dayInMillis$)
  }else {
    "months" == $scale$$68$$ ? $_adjustedDate$$.setDate(1) : "days" == $scale$$68$$ ? $_adjustedDate$$.setHours(0, 0, 0) : "hours" == $scale$$68$$ ? $_adjustedDate$$.setMinutes(0, 0, 0) : "minutes" == $scale$$68$$ ? $_adjustedDate$$.setSeconds(0, 0) : "seconds" == $scale$$68$$ ? $_adjustedDate$$.setMilliseconds(0) : "quarters" == $scale$$68$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 2 - ($date$$15$$.getMonth() + 11) % 3, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + 
    $roll_amt$$)) : "halfyears" == $scale$$68$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 5 - ($date$$15$$.getMonth() + 11) % 6, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + $roll_amt$$)) : "years" == $scale$$68$$ ? ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1)) : "twoyears" == $scale$$68$$ && ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1))
  }
  return $_adjustedDate$$
};
D.$DvtTimeComponentCalendar$$.prototype.$getNextDate$ = function $$DvtTimeComponentCalendar$$$$$getNextDate$$($time$$18$$, $scale$$69$$) {
  if("seconds" == $scale$$69$$) {
    return new window.Date($time$$18$$ + 1E3)
  }
  if("minutes" == $scale$$69$$) {
    return new window.Date($time$$18$$ + 6E4)
  }
  if("hours" == $scale$$69$$) {
    return new window.Date($time$$18$$ + 36E5)
  }
  var $_nextDate$$ = new window.Date($time$$18$$);
  "days" == $scale$$69$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 1) : "weeks" == $scale$$69$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 7) : "months" == $scale$$69$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 1) : "quarters" == $scale$$69$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 3) : "halfyears" == $scale$$69$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 6) : "years" == $scale$$69$$ ? $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 1) : "twoyears" == $scale$$69$$ ? 
  $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 2) : $_nextDate$$.setYear($_nextDate$$.getYear() + 1);
  return $_nextDate$$
};
D.$DvtTimelineKeyboardHandler$$ = function $$DvtTimelineKeyboardHandler$$$($manager$$32$$) {
  this.Init($manager$$32$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtTimelineKeyboardHandler");
D.$DvtTimelineKeyboardHandler$$.prototype.Init = function $$DvtTimelineKeyboardHandler$$$$Init$($manager$$33$$) {
  D.$DvtTimelineKeyboardHandler$$.$superclass$.Init.call(this, $manager$$33$$)
};
D.$DvtTimelineKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isSelectionEvent$$($event$$805$$) {
  return this.$isNavigationEvent$($event$$805$$) && !$event$$805$$.ctrlKey
};
D.$DvtTimelineKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isMultiSelectEvent$$($event$$806$$) {
  return 32 == $event$$806$$.keyCode && $event$$806$$.ctrlKey
};
D.$DvtTimelineKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtTimelineKeyboardHandler$$$$$processKeyDown$$($event$$807$$) {
  var $keyCode$$52$$ = $event$$807$$.keyCode;
  (0,D.$DvtKeyboardEvent$isEquals$$)($event$$807$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($event$$807$$) ? this.$_eventManager$.$zoomBy$(1 / 1.5) : (0,D.$DvtKeyboardEvent$isMinus$$)($event$$807$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($event$$807$$) ? this.$_eventManager$.$zoomBy$(1.5) : 33 == $keyCode$$52$$ ? ($event$$807$$.shiftKey ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$807$$)) : 34 == $keyCode$$52$$ && 
  ($event$$807$$.shiftKey ? this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$807$$));
  return D.$DvtTimelineKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$807$$)
};
D.$DvtTimelineKeyboardHandler$getNextNavigable$$ = function $$DvtTimelineKeyboardHandler$getNextNavigable$$$($currentNavigable$$19$$, $event$$808$$, $navigableItems$$6$$) {
  var $isVertical$$3_series$$25$$ = $currentNavigable$$19$$.$getSeries$(), $seriesIndex$$123$$ = $currentNavigable$$19$$.$getSeriesIndex$(), $isRTL$$43$$ = (0,D.$DvtAgent$isRightToLeft$$)($isVertical$$3_series$$25$$.$getCtx$()), $isVertical$$3_series$$25$$ = $isVertical$$3_series$$25$$.$isVertical$(), $isDualSeries$$ = 1 < $navigableItems$$6$$.length;
  if(!$isRTL$$43$$ && 39 == $event$$808$$.keyCode || $isRTL$$43$$ && 37 == $event$$808$$.keyCode) {
    if($isVertical$$3_series$$25$$) {
      if($isDualSeries$$ && 1 != $seriesIndex$$123$$) {
        return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$19$$, $navigableItems$$6$$[1])
      }
    }else {
      return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$19$$, $navigableItems$$6$$[$seriesIndex$$123$$], !0)
    }
  }else {
    if(!$isRTL$$43$$ && 37 == $event$$808$$.keyCode || $isRTL$$43$$ && 39 == $event$$808$$.keyCode) {
      if($isVertical$$3_series$$25$$) {
        if($isDualSeries$$ && 0 != $seriesIndex$$123$$) {
          return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$19$$, $navigableItems$$6$$[0])
        }
      }else {
        return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$19$$, $navigableItems$$6$$[$seriesIndex$$123$$], !1)
      }
    }else {
      if(40 == $event$$808$$.keyCode) {
        if($isVertical$$3_series$$25$$) {
          return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$19$$, $navigableItems$$6$$[$seriesIndex$$123$$], !0)
        }
        if($isDualSeries$$ && 1 != $seriesIndex$$123$$) {
          return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$19$$, $navigableItems$$6$$[1])
        }
      }else {
        if(38 == $event$$808$$.keyCode) {
          if($isVertical$$3_series$$25$$) {
            return(0,D.$DvtTimelineKeyboardHandler$getNextItem$$)($currentNavigable$$19$$, $navigableItems$$6$$[$seriesIndex$$123$$], !1)
          }
          if($isDualSeries$$ && 0 != $seriesIndex$$123$$) {
            return(0,D.$DvtTimelineKeyboardHandler$getClosestItem$$)($currentNavigable$$19$$, $navigableItems$$6$$[0])
          }
        }
      }
    }
  }
  return null
};
D.$DvtTimelineKeyboardHandler$getNextItem$$ = function $$DvtTimelineKeyboardHandler$getNextItem$$$($item$$61_nextIndex$$6$$, $navigableItems$$7$$, $isNext$$) {
  $item$$61_nextIndex$$6$$ = D.$DvtArrayUtils$$.$getIndex$($navigableItems$$7$$, $item$$61_nextIndex$$6$$) + ($isNext$$ ? 1 : -1);
  return 0 <= $item$$61_nextIndex$$6$$ && $item$$61_nextIndex$$6$$ < $navigableItems$$7$$.length ? $navigableItems$$7$$[$item$$61_nextIndex$$6$$] : null
};
D.$DvtTimelineKeyboardHandler$getClosestItem$$ = function $$DvtTimelineKeyboardHandler$getClosestItem$$$($item$$62$$, $navigableItems$$8$$) {
  if(0 < $navigableItems$$8$$.length) {
    for(var $closest$$ = $navigableItems$$8$$[0], $itemLoc$$ = $item$$62$$.$_loc$, $dist$$2$$ = window.Math.abs($itemLoc$$ - $closest$$.$_loc$), $i$$858$$ = 1;$i$$858$$ < $navigableItems$$8$$.length;$i$$858$$++) {
      var $testDist$$ = window.Math.abs($itemLoc$$ - $navigableItems$$8$$[$i$$858$$].$_loc$);
      $testDist$$ < $dist$$2$$ && ($dist$$2$$ = $testDist$$, $closest$$ = $navigableItems$$8$$[$i$$858$$])
    }
    return $closest$$
  }
  return null
};
D.$DvtTimelineEventManager$$ = function $$DvtTimelineEventManager$$$($timeline$$2$$) {
  this.Init($timeline$$2$$.$getCtx$(), $timeline$$2$$.$processEvent$, $timeline$$2$$);
  this.$_timeline$ = $timeline$$2$$;
  this.$_isPinchZoom$ = this.$_isDragPanning$ = !1
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineEventManager$$, D.$DvtEventManager$$, "DvtTimelineEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$111_stage$$20$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$111_stage$$20$$);
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_timeline$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$111_stage$$20$$.$addEvtListener$("wheel", this.$OnMouseWheel$, !1, this) : $displayable$$111_stage$$20$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, !1, this), (0,D.$DvtAgent$isPlatformIE$$)() && ($displayable$$111_stage$$20$$ = this.$getCtx$().$_stage$, $displayable$$111_stage$$20$$.$addEvtListener$("mouseenter", this.$OnMouseEnter$, !1, this), $displayable$$111_stage$$20$$.$addEvtListener$("mouseleave", 
  this.$OnMouseLeave$, !1, this)))
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$112_stage$$21$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$112_stage$$21$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$112_stage$$21$$.$removeEvtListener$("wheel", this.$OnMouseWheel$, !1, this) : $displayable$$112_stage$$21$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, !1, this), (0,D.$DvtAgent$isPlatformIE$$)() && ($displayable$$112_stage$$21$$ = this.$getCtx$().$_stage$, $displayable$$112_stage$$21$$.$removeEvtListener$("mouseenter", this.$OnMouseEnter$, !1, this), $displayable$$112_stage$$21$$.$removeEvtListener$("mouseleave", 
  this.$OnMouseLeave$, !1, this)))
};
D.$JSCompiler_prototypeAlias$$.$OnKeyDown$ = function $$JSCompiler_prototypeAlias$$$$OnKeyDown$$($event$$784$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$OnKeyDown$.call(this, $event$$784$$);
  this.$_timeline$.$HandleKeyDown$($event$$784$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$785$$) {
  this.$_isDragPanning$ || (D.$DvtTimelineEventManager$$.$superclass$.$OnClick$.call(this, $event$$785$$), (0,D.$JSCompiler_StaticMethods_handleShapeClick$$)(this.$_timeline$, $event$$785$$))
};
D.$JSCompiler_prototypeAlias$$.$PreOnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOver$$($event$$786$$) {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  D.$DvtTimelineEventManager$$.$superclass$.$PreOnMouseOver$.call(this, $event$$786$$);
  !(0,D.$DvtAgent$isPlatformIE$$)() && !this.$isMouseOver$ && (this.$isMouseOver$ = !0, (0,D.$JSCompiler_StaticMethods_isAnimating$$)(this.$_timeline$) || (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this.$_timeline$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseEnter$ = function $$JSCompiler_prototypeAlias$$$$OnMouseEnter$$() {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  this.$isMouseOver$ || (this.$isMouseOver$ = !0, (0,D.$JSCompiler_StaticMethods_isAnimating$$)(this.$_timeline$) || (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this.$_timeline$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseLeave$ = function $$JSCompiler_prototypeAlias$$$$OnMouseLeave$$() {
  this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new D.$DvtTimer$$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1));
  this.$_mouseOutTimer$.reset();
  this.$_mouseOutTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$PreOnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOut$$($event$$789$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$PreOnMouseOut$.call(this, $event$$789$$);
  (0,D.$DvtAgent$isPlatformIE$$)() || (this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new D.$DvtTimer$$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1)), this.$_mouseOutTimer$.reset(), this.$_mouseOutTimer$.start())
};
D.$JSCompiler_prototypeAlias$$.$_onMouseOutTimerEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseOutTimerEnd$$() {
  this.$isMouseOver$ = !1
};
D.$JSCompiler_prototypeAlias$$.$PreOnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseDown$$($event$$790$$) {
  this.$_isDragPanning$ = !1;
  D.$DvtTimelineEventManager$$.$superclass$.$PreOnMouseDown$.call(this, $event$$790$$);
  this.$_timeline$.$HandleMouseDown$($event$$790$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($compLoc$$inline_8837_event$$791$$) {
  var $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$ = this.$_timeline$;
  (0,D.$DvtEventManager$consumeEvent$$)($compLoc$$inline_8837_event$$791$$);
  var $wheelDelta$$inline_8835$$ = $compLoc$$inline_8837_event$$791$$.wheelDelta;
  if((0,D.$JSCompiler_StaticMethods_hasValidOptions$$)($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$) && $wheelDelta$$inline_8835$$) {
    var $compPagePos$$inline_8836_time$$inline_8838$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$.$getCtx$());
    $compLoc$$inline_8837_event$$791$$ = $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$.$_isVertical$ ? $compLoc$$inline_8837_event$$791$$.pageY - $compPagePos$$inline_8836_time$$inline_8838$$.y : $compLoc$$inline_8837_event$$791$$.pageX - $compPagePos$$inline_8836_time$$inline_8838$$.x;
    $compPagePos$$inline_8836_time$$inline_8838$$ = ($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$.$_end$ - $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$.$_start$) / $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$.$_contentLength$ * $compLoc$$inline_8837_event$$791$$ + $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$.$_viewStartTime$;
    (0,D.$JSCompiler_StaticMethods_handleZoomWheel$$)($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$, $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_8833$$.$_contentLength$ * (0.02 * $wheelDelta$$inline_8835$$ + 1), $compPagePos$$inline_8836_time$$inline_8838$$, $compLoc$$inline_8837_event$$791$$, !0)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnTouchStartBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchStartBubble$$($event$$792$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$OnTouchStartBubble$.call(this, $event$$792$$);
  this.$_timeline$.$HandleTouchStart$($event$$792$$);
  this.$_timeline$.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus()
};
D.$JSCompiler_prototypeAlias$$.$OnTouchEndBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchEndBubble$$($event$$793$$) {
  D.$DvtTimelineEventManager$$.$superclass$.$OnTouchEndBubble$.call(this, $event$$793$$);
  this.$_timeline$.$HandleTouchEnd$($event$$793$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$794$$) {
  if((0,D.$JSCompiler_StaticMethods_hasValidOptions$$)(this.$_timeline$)) {
    return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$794$$) : this.$_onMouseDragStart$($event$$794$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$795$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$795$$) : this.$_onMouseDragMove$($event$$795$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$796$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$796$$) : this.$_onMouseDragEnd$($event$$796$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$13$$, $pageY$$13$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$13$$ - this.$_stageAbsolutePosition$.x, $pageY$$13$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$797_relPos$$65$$) {
  return 2 != $event$$797_relPos$$65$$.button ? ($event$$797_relPos$$65$$ = this.$_getRelativePosition$($event$$797_relPos$$65$$.pageX, $event$$797_relPos$$65$$.pageY), this.$_timeline$.$beginDragPan$($event$$797_relPos$$65$$.x, $event$$797_relPos$$65$$.y), !0) : !1
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$798_relPos$$66$$) {
  $event$$798_relPos$$66$$ = this.$_getRelativePosition$($event$$798_relPos$$66$$.pageX, $event$$798_relPos$$66$$.pageY);
  this.$_timeline$.$contDragPan$($event$$798_relPos$$66$$.x, $event$$798_relPos$$66$$.y) && (this.$_isDragPanning$ = !0)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$() {
  this.$_timeline$.$endDragPan$();
  this.$_stageAbsolutePosition$ = null
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$800_relPos$$67$$) {
  var $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$ = $event$$800_relPos$$67$$.touches;
  if(1 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.length) {
    return $event$$800_relPos$$67$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$[0].pageY), this.$_timeline$.$beginDragPan$($event$$800_relPos$$67$$.x, $event$$800_relPos$$67$$.y), !0
  }
  if(2 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.length) {
    this.$_timeline$.$endDragPan$();
    this.$_isPinchZoom$ = !0;
    var $relPos1$$4_y1$$inline_8842$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$[0].pageY), $relPos2$$4_y2$$inline_8844$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$[1].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$[1].pageY), $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$ = 
    this.$_timeline$, $x1$$inline_8841$$ = $relPos1$$4_y1$$inline_8842$$.x, $relPos1$$4_y1$$inline_8842$$ = $relPos1$$4_y1$$inline_8842$$.y, $x2$$inline_8843$$ = $relPos2$$4_y2$$inline_8844$$.x, $relPos2$$4_y2$$inline_8844$$ = $relPos2$$4_y2$$inline_8844$$.y;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_initialPinchZoomLoc$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_isVertical$ ? window.Math.sqrt(($relPos1$$4_y1$$inline_8842$$ - $relPos2$$4_y2$$inline_8844$$) * ($relPos1$$4_y1$$inline_8842$$ - $relPos2$$4_y2$$inline_8844$$)) + ($relPos1$$4_y1$$inline_8842$$ < $relPos2$$4_y2$$inline_8844$$ ? $relPos1$$4_y1$$inline_8842$$ : $relPos2$$4_y2$$inline_8844$$) : window.Math.sqrt(($x1$$inline_8841$$ - 
    $x2$$inline_8843$$) * ($x1$$inline_8841$$ - $x2$$inline_8843$$)) + ($x1$$inline_8841$$ < $x2$$inline_8843$$ ? $x1$$inline_8841$$ : $x2$$inline_8843$$);
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_initialPinchZoomTime$ = ($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_end$ - $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_start$) / $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_contentLength$ * $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_initialPinchZoomLoc$ + $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_viewStartTime$;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_initialPinchZoomDist$ = window.Math.sqrt(($x1$$inline_8841$$ - $x2$$inline_8843$$) * ($x1$$inline_8841$$ - $x2$$inline_8843$$) + ($relPos1$$4_y1$$inline_8842$$ - $relPos2$$4_y2$$inline_8844$$) * ($relPos1$$4_y1$$inline_8842$$ - $relPos2$$4_y2$$inline_8844$$));
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_initialPinchZoomLength$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_8840_touches$$16$$.$_contentLength$;
    (0,D.$DvtEventManager$consumeEvent$$)($event$$800_relPos$$67$$);
    return!0
  }
  return!1
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$801$$) {
  var $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$ = $event$$801$$.touches;
  if(1 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.length) {
    $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$[0].pageY), this.$_timeline$.$contDragPan$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.x, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.y), 
    $event$$801$$.preventDefault()
  }else {
    if(2 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.length) {
      var $relPos1$$5_y1$$inline_8848$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$[0].pageY), $relPos2$$5_y2$$inline_8850$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$[1].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$[1].pageY), 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$ = this.$_timeline$, $currPinchZoomDist$$inline_8851_x1$$inline_8847$$ = $relPos1$$5_y1$$inline_8848$$.x, $relPos1$$5_y1$$inline_8848$$ = $relPos1$$5_y1$$inline_8848$$.y, $x2$$inline_8849$$ = $relPos2$$5_y2$$inline_8850$$.x, $relPos2$$5_y2$$inline_8850$$ = $relPos2$$5_y2$$inline_8850$$.y, $currPinchZoomDist$$inline_8851_x1$$inline_8847$$ = window.Math.sqrt(($currPinchZoomDist$$inline_8851_x1$$inline_8847$$ - $x2$$inline_8849$$) * 
      ($currPinchZoomDist$$inline_8851_x1$$inline_8847$$ - $x2$$inline_8849$$) + ($relPos1$$5_y1$$inline_8848$$ - $relPos2$$5_y2$$inline_8850$$) * ($relPos1$$5_y1$$inline_8848$$ - $relPos2$$5_y2$$inline_8850$$));
      $currPinchZoomDist$$inline_8851_x1$$inline_8847$$ != $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.$_initialPinchZoomDist$ && ($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.$_triggerViewportChange$ = !0);
      (0,D.$JSCompiler_StaticMethods_handleZoomWheel$$)($JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$, $currPinchZoomDist$$inline_8851_x1$$inline_8847$$ / $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.$_initialPinchZoomDist$ * $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.$_initialPinchZoomLength$, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.$_initialPinchZoomTime$, 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_8846_relPos$$68_touches$$17$$.$_initialPinchZoomLoc$, !1);
      $event$$801$$.preventDefault()
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$802$$) {
  if(this.$_isPinchZoom$) {
    this.$_isPinchZoom$ = !1;
    var $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$ = this.$_timeline$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.$_initialPinchZoomDist$ = null;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.$_initialPinchZoomLoc$ = null;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.$_initialPinchZoomLength$ = null;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.$_initialPinchZoomTime$ = null;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.$_triggerViewportChange$ = !1, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.dispatchEvent(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_8853$$.$_scale$)))
  }else {
    this.$_timeline$.$endDragPan$()
  }
  $event$$802$$.preventDefault();
  this.$_stageAbsolutePosition$ = null
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$14$$) {
  this.$_timeline$.$zoomBy$($dz$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$33$$, $dy$$36$$) {
  var $deltaX$$27$$ = $dx$$33$$ * this.$_timeline$.$_canvasLength$ * ((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? -1 : 1), $deltaY$$30$$ = $dy$$36$$ * this.$_timeline$.$_seriesSize$;
  0 != $deltaX$$27$$ && (this.$_timeline$.$_triggerViewportChange$ = !0);
  var $focusObj$$4$$ = this.$getFocus$();
  $focusObj$$4$$ && (this.$_timeline$.$_dragPanSeries$ = $focusObj$$4$$.$_series$);
  this.$_timeline$.$panBy$($deltaX$$27$$, $deltaY$$30$$);
  (0,D.$JSCompiler_StaticMethods_endPan$$)(this.$_timeline$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  this.$_timeline$.$zoomBy$(1 / 1.5)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  this.$_timeline$.$zoomBy$(1.5)
};
D.$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = (0,D.$JSCompiler_returnArg$$)("touchHold");
D.$DvtTimeline$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtTimeline", D.$DvtTimeline$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimeline$$, D.$DvtTimeComponent$$, "DvtTimeline");
D.$DvtTimeline$$.newInstance = function $$DvtTimeline$$$newInstance$($context$$617$$, $callback$$171$$, $callbackObj$$116$$) {
  var $timeline$$ = new D.$DvtTimeline$$;
  $timeline$$.Init($context$$617$$, $callback$$171$$, $callbackObj$$116$$);
  return $timeline$$
};
D.$DvtTimeline$$.prototype.Init = function $$DvtTimeline$$$$Init$($context$$618$$, $callback$$172$$, $callbackObj$$117$$) {
  D.$DvtTimeline$$.$superclass$.Init.call(this, $context$$618$$, $callback$$172$$, $callbackObj$$117$$);
  this.$Defaults$ = new D.$DvtTimelineDefaults$$;
  this.$EventManager$ = new D.$DvtTimelineEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_keyboardHandler$ = null : (this.$_keyboardHandler$ = new D.$DvtTimelineKeyboardHandler$$(this.$EventManager$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$_keyboardHandler$))
};
D.$DvtTimeline$$.prototype.$SetOptions$ = function $$DvtTimeline$$$$$SetOptions$$($options$$280$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$280$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtTimeline$$.prototype.$Parse$ = function $$DvtTimeline$$$$$Parse$$($options$$281$$) {
  this.$_parser$ = new D.$DvtTimelineParser$$;
  return this.$_parser$.parse($options$$281$$)
};
D.$DvtTimeline$$.prototype.$_applyParsedProperties$ = function $$DvtTimeline$$$$$_applyParsedProperties$$($props$$8$$) {
  var $orientation$$3$$ = $props$$8$$.orientation;
  this.$_isVertical$ = $orientation$$3$$ && "vertical" == $orientation$$3$$ ? !0 : !1;
  this.$_hasOverview$ = $props$$8$$.$hasOverview$;
  this.$_viewStartTime$ = $props$$8$$.$viewStart$;
  this.$_viewEndTime$ = $props$$8$$.$viewEnd$;
  this.$_selectionMode$ = $props$$8$$.$selectionMode$;
  this.$SelectionHandler$ = "single" == this.$_selectionMode$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == this.$_selectionMode$ ? new D.$DvtSelectionHandler$$("m") : null;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  this.$_axisInlineStyle$ = $props$$8$$.$axisStyle$;
  this.$_shortDesc$ = $props$$8$$.$shortDesc$;
  this.$_id$ = $props$$8$$.id;
  this.$_referenceObjects$ = $props$$8$$.$referenceObjects$;
  this.$_zoomOrder$ = $props$$8$$.$zoomOrder$;
  this.$_seriesScale$ = $props$$8$$.$seriesScale$;
  this.$_dateFormatStrings$ = {$dayNames$:[(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_SUNDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_MONDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_TUESDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_WEDNESDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_THURSDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "DAY_SHORT_FRIDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SHORT_SATURDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SUNDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_MONDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_TUESDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_WEDNESDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_THURSDAY", null), 
  (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_FRIDAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DAY_SATURDAY", null)], $monthNames$:[(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_JANUARY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_FEBRUARY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MARCH", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_APRIL", 
  null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_JUNE", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_JULY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_AUGUST", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_SEPTEMBER", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_OCTOBER", 
  null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_NOVEMBER", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_DECEMBER", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_JANUARY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_FEBRUARY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_MARCH", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_APRIL", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_MAY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_JUNE", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_JULY", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_AUGUST", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SEPTEMBER", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_OCTOBER", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_NOVEMBER", null), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_DECEMBER", null)]};
  this.$_seriesScale$ ? (this.$_seriesConverter$ = $props$$8$$.$seriesConverter$, this.$_seriesTimeAxis$ = new D.$DvtTimeComponentAxis$$(this.$getCtx$(), null, null, this.$_isVertical$), this.$_seriesTimeAxis$.$setScale$(this.$_seriesScale$), this.$_seriesTimeAxis$.$_converter$ = this.$_seriesConverter$, this.$_isVertical$ ? (this.$_seriesTimeAxis$.$setType$(D.$DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = this.$_resources$.converterVert) : 
  (this.$_seriesTimeAxis$.$setType$(D.$DvtTimeComponentAxisFormatter$$.$LONG$, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = this.$_resources$.converter)) : this.$_seriesTimeAxis$ = null;
  this.$_defaultInversions$ = [!1, !0];
  D.$DvtTimeline$$.$superclass$.$_applyParsedProperties$.call(this, $props$$8$$)
};
D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$ = function $$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$$($JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$, $seriesCount$$25$$) {
  return!$JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_hasOverview$ && 1 == $seriesCount$$25$$ ? $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$() - $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getBorderWidth$() : $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$()
};
D.$DvtTimeline$$.prototype.select = function $$DvtTimeline$$$$select$($selection$$38$$) {
  this.$Options$.selection = D.$DvtJSONUtils$$.$clone$($selection$$38$$);
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_applyInitialSelections$$)(this)
};
D.$DvtTimeline$$.prototype.select = D.$DvtTimeline$$.prototype.select;
D.$DvtTimeline$$.prototype.$render$ = function $$DvtTimeline$$$$$render$$($context$$inline_8745_i$$inline_8771_options$$282_props$$9$$, $series$$inline_8769_startTime$$inline_8743_width$$164$$, $endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$) {
  if($context$$inline_8745_i$$inline_8771_options$$282_props$$9$$) {
    this.$SetOptions$($context$$inline_8745_i$$inline_8771_options$$282_props$$9$$);
    this.$Options$ && (this.$_resources$ = this.$Options$._resources, null == this.$_resources$ && (this.$_resources$ = []));
    this.$Width$ = $series$$inline_8769_startTime$$inline_8743_width$$164$$;
    this.$Height$ = $endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$;
    $context$$inline_8745_i$$inline_8771_options$$282_props$$9$$ = this.$Parse$(this.$Options$);
    this.$_applyParsedProperties$($context$$inline_8745_i$$inline_8771_options$$282_props$$9$$);
    this.$_fetchStartPos$ = 0;
    this.$_fetchEndPos$ = this.$_isVertical$ ? $endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$ : $series$$inline_8769_startTime$$inline_8743_width$$164$$;
    this.$Options$.styleDefaults && (this.$_axisStyleDefaults$ = this.$Options$.styleDefaults.minorAxis, this.$_majorAxisStyleDefaults$ = this.$Options$.styleDefaults.majorAxis, this.$_seriesStyleDefaults$ = this.$Options$.styleDefaults.series);
    (0,D.$JSCompiler_StaticMethods_prepareViewportLength$$)(this);
    if(this.$_scale$) {
      $series$$inline_8769_startTime$$inline_8743_width$$164$$ = this.$_start$;
      $endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$ = this.$_end$;
      $context$$inline_8745_i$$inline_8771_options$$282_props$$9$$ = this.$getCtx$();
      var $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$ = D.$DvtTimelineStyleUtils$$.$getAxisLabelStyle$(this.$Options$);
      this.$_timeAxis$ = new D.$DvtTimeComponentAxis$$($context$$inline_8745_i$$inline_8771_options$$282_props$$9$$, null, null, this.$_isVertical$, this.$_zoomOrder$);
      this.$_timeAxis$.$_converter$ = this.$_converter$;
      this.$_timeAxis$.$setType$(D.$DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$);
      this.$_dates$ = [];
      this.$_labels$ = [];
      this.$_zoomLevelLengths$ = [];
      if(this.$_isVertical$) {
        var $defaultLength$$inline_8747$$ = D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
        this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converterVert
      }else {
        $defaultLength$$inline_8747$$ = D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$, this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converter
      }
      for(var $i$$inline_8748$$ = 0;$i$$inline_8748$$ < this.$_timeAxis$.$_zoomOrder$.length;$i$$inline_8748$$++) {
        var $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ = this.$_timeAxis$.$_zoomOrder$[$i$$inline_8748$$];
        this.$_timeAxis$.$setScale$($scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$);
        var $JSCompiler_StaticMethods_setContentSize$self$$inline_11489_axis$$inline_8750$$ = new D.$DvtRect$$($context$$inline_8745_i$$inline_8771_options$$282_props$$9$$, 0, 0, 0, 0, "tempAxis"), $minLength$$inline_8751_zoomLevelLength$$inline_8764$$ = window.Infinity, $contentSize$$inline_11490_maxSize$$inline_8752$$ = 0, $dates$$inline_8753$$ = [], $labels$$inline_8754$$ = [], $currentTime$$inline_8755_lengthFactor$$inline_8763$$ = this.$_timeAxis$.$adjustDate$($series$$inline_8769_startTime$$inline_8743_width$$164$$).getTime();
        for($dates$$inline_8753$$.push($currentTime$$inline_8755_lengthFactor$$inline_8763$$);$currentTime$$inline_8755_lengthFactor$$inline_8763$$ < $endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$;) {
          var $labelText$$inline_8756_nextTime$$inline_8758$$ = (0,D.$JSCompiler_StaticMethods_formatDate$$)(this.$_timeAxis$, new window.Date($currentTime$$inline_8755_lengthFactor$$inline_8763$$)), $label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$ = new D.$DvtOutputText$$($context$$inline_8745_i$$inline_8771_options$$282_props$$9$$, $labelText$$inline_8756_nextTime$$inline_8758$$, 0, 0, "s_label" + $currentTime$$inline_8755_lengthFactor$$inline_8763$$);
          $label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$.$setCSSStyle$($axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$);
          $label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$.time = $currentTime$$inline_8755_lengthFactor$$inline_8763$$;
          $labels$$inline_8754$$.push($label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$);
          $labelText$$inline_8756_nextTime$$inline_8758$$ = this.$_timeAxis$.$getNextDate$($currentTime$$inline_8755_lengthFactor$$inline_8763$$).getTime();
          $JSCompiler_StaticMethods_setContentSize$self$$inline_11489_axis$$inline_8750$$.$addChild$($label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$);
          var $dim$$inline_8759_sizeDim$$inline_8761$$ = $label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$.$getDimensions$();
          $JSCompiler_StaticMethods_setContentSize$self$$inline_11489_axis$$inline_8750$$.removeChild($label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$);
          this.$_isVertical$ ? ($label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$ = $dim$$inline_8759_sizeDim$$inline_8761$$.$h$, $dim$$inline_8759_sizeDim$$inline_8761$$ = $dim$$inline_8759_sizeDim$$inline_8761$$.$w$) : ($label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$ = $dim$$inline_8759_sizeDim$$inline_8761$$.$w$, $dim$$inline_8759_sizeDim$$inline_8761$$ = $dim$$inline_8759_sizeDim$$inline_8761$$.$h$);
          $label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$ = window.Math.max($defaultLength$$inline_8747$$, $label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$ + 2 * D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$);
          $currentTime$$inline_8755_lengthFactor$$inline_8763$$ = ($labelText$$inline_8756_nextTime$$inline_8758$$ - $currentTime$$inline_8755_lengthFactor$$inline_8763$$) / $label$$inline_8757_labelLength$$inline_8762_lengthDim$$inline_8760$$;
          $currentTime$$inline_8755_lengthFactor$$inline_8763$$ < $minLength$$inline_8751_zoomLevelLength$$inline_8764$$ && ($minLength$$inline_8751_zoomLevelLength$$inline_8764$$ = $currentTime$$inline_8755_lengthFactor$$inline_8763$$);
          $dim$$inline_8759_sizeDim$$inline_8761$$ > $contentSize$$inline_11490_maxSize$$inline_8752$$ && ($contentSize$$inline_11490_maxSize$$inline_8752$$ = $dim$$inline_8759_sizeDim$$inline_8761$$);
          $currentTime$$inline_8755_lengthFactor$$inline_8763$$ = $labelText$$inline_8756_nextTime$$inline_8758$$;
          $dates$$inline_8753$$.push($currentTime$$inline_8755_lengthFactor$$inline_8763$$)
        }
        $JSCompiler_StaticMethods_setContentSize$self$$inline_11489_axis$$inline_8750$$ = this.$_timeAxis$;
        $contentSize$$inline_11490_maxSize$$inline_8752$$ += 2 * D.$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$;
        $contentSize$$inline_11490_maxSize$$inline_8752$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_11489_axis$$inline_8750$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_11489_axis$$inline_8750$$.$_contentSize$ = $contentSize$$inline_11490_maxSize$$inline_8752$$);
        this.$_dates$.push($dates$$inline_8753$$);
        this.$_labels$.push($labels$$inline_8754$$);
        $minLength$$inline_8751_zoomLevelLength$$inline_8764$$ = ($endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$ - $series$$inline_8769_startTime$$inline_8743_width$$164$$) / $minLength$$inline_8751_zoomLevelLength$$inline_8764$$;
        this.$_zoomLevelLengths$.push($minLength$$inline_8751_zoomLevelLength$$inline_8764$$);
        $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ == this.$_scale$ && (this.$_zoomLevelOrder$ = $i$$inline_8748$$, this.$_setLength$ && ((0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $minLength$$inline_8751_zoomLevelLength$$inline_8764$$), this.$_setLength$ = !1, null == this.$_viewStartTime$ ? null != this.$_viewEndTime$ ? (this.$_viewStartTime$ = this.$_viewEndTime$ - this.$_canvasLength$ / $minLength$$inline_8751_zoomLevelLength$$inline_8764$$ * ($endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$ - 
        $series$$inline_8769_startTime$$inline_8743_width$$164$$), this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$), $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ = this.$_canvasLength$ / $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$, (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ * 
        (this.$_end$ - this.$_start$)), this.$_startPos$ = $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$)) : (this.$_viewStartTime$ = this.$_start$, this.$_startPos$ = 0, this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), this.$_viewEndTime$ = 
        this.$_canvasLength$ / $minLength$$inline_8751_zoomLevelLength$$inline_8764$$ * ($endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$ - $series$$inline_8769_startTime$$inline_8743_width$$164$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$)) : (this.$_viewEndTime$ = this.$_canvasLength$ / $minLength$$inline_8751_zoomLevelLength$$inline_8764$$ * ($endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$ - $series$$inline_8769_startTime$$inline_8743_width$$164$$) + 
        this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$), $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ = this.$_canvasLength$ / $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$, (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ * 
        (this.$_end$ - this.$_start$)), this.$_startPos$ = $scale$$inline_8749_viewTime$$inline_8765_widthFactor$$inline_8766$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$))));
        0 == $i$$inline_8748$$ && (this.$_maxContentLength$ = $labels$$inline_8754$$.length * this.$_canvasLength$)
      }
      this.$_timeAxis$.$setScale$(this.$_scale$);
      (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)(this)
    }
    if($series$$inline_8769_startTime$$inline_8743_width$$164$$ = this.$Options$.series) {
      $endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$ = window.Math.min($series$$inline_8769_startTime$$inline_8743_width$$164$$.length, 2);
      this.$_seriesOptions$ = [];
      if(this.$_series$) {
        if($endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$ != this.$_series$.length) {
          for($context$$inline_8745_i$$inline_8771_options$$282_props$$9$$ = 0;$context$$inline_8745_i$$inline_8771_options$$282_props$$9$$ < this.$_series$.length;$context$$inline_8745_i$$inline_8771_options$$282_props$$9$$++) {
            this.$_innerCanvas$.removeChild(this.$_series$[$context$$inline_8745_i$$inline_8771_options$$282_props$$9$$])
          }
          this.$_series$ = []
        }
      }else {
        this.$_series$ = []
      }
      for($context$$inline_8745_i$$inline_8771_options$$282_props$$9$$ = 0;$context$$inline_8745_i$$inline_8771_options$$282_props$$9$$ < $endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$;$context$$inline_8745_i$$inline_8771_options$$282_props$$9$$++) {
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$ = $series$$inline_8769_startTime$$inline_8743_width$$164$$[$context$$inline_8745_i$$inline_8771_options$$282_props$$9$$];
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.start = this.$_start$;
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.end = this.$_end$;
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.inverted = this.$_defaultInversions$[$context$$inline_8745_i$$inline_8771_options$$282_props$$9$$];
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.orientation = this.$Options$.orientation;
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.referenceObjects = this.$_referenceObjects$;
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.timeline = this;
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.index = $context$$inline_8745_i$$inline_8771_options$$282_props$$9$$;
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.animationOnDisplay = this.$Options$.animationOnDisplay;
        $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.animationOnDataChange = this.$Options$.animationOnDataChange;
        this.$Options$.majorAxis && ($axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.scale = this.$Options$.majorAxis.scale, $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.timeAxis = this.$_seriesTimeAxis$);
        if($axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.styleDefaults = this.$Options$.styleDefaults) {
          $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.seriesStyleDefaults = this.$_seriesStyleDefaults$, $axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$.axisStyleDefaults = this.$_majorAxisStyleDefaults$
        }
        this.$_seriesOptions$.push($axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$);
        null == this.$_series$[$context$$inline_8745_i$$inline_8771_options$$282_props$$9$$] && ($axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$ = new D.$DvtTimelineSeries$$(this.$getCtx$(), this.$HandleEvent$, this), this.$_series$.push($axisLabelStyle$$inline_8746_s$$inline_8773_seriesOptions$$inline_8772$$))
      }
    }else {
      this.$_series$ = []
    }
    D.$DvtTimelineRenderer$$.$renderTimeline$(this);
    this.$UpdateAriaAttributes$();
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this])
  }else {
    this.$_handleResize$($series$$inline_8769_startTime$$inline_8743_width$$164$$, $endTime$$inline_8744_height$$147_seriesCount$$inline_8770$$)
  }
};
D.$DvtTimeline$$.prototype.render = D.$DvtTimeline$$.prototype.$render$;
D.$JSCompiler_StaticMethods_hasValidOptions$$ = function $$JSCompiler_StaticMethods_hasValidOptions$$$($JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$) {
  var $hasValidScale$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$ && -1 != D.$DvtArrayUtils$$.$getIndex$(D.$DvtTimeComponentAxis$$.$_VALID_SCALES$, $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$), $hasValidStartAndEnd$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ > 
  $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$, $hasValidSeries$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_series$ && 0 < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_series$.length, $JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$;
  if($hasValidSeries$$) {
    a: {
      for($JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$ = 0;$JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$ < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesOptions$.length;$JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$++) {
        var $hasValidSeriesScale_seriesOptions$$inline_8781$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesOptions$[$JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$];
        if($hasValidSeriesScale_seriesOptions$$inline_8781$$.$items$) {
          for(var $hasValidViewport_j$$inline_8782$$ = 0;$hasValidViewport_j$$inline_8782$$ < $hasValidSeriesScale_seriesOptions$$inline_8781$$.$items$.length;$hasValidViewport_j$$inline_8782$$++) {
            var $end$$inline_8785_item$$inline_8783$$ = $hasValidSeriesScale_seriesOptions$$inline_8781$$.$items$[$hasValidViewport_j$$inline_8782$$], $hasValidViewStart_start$$inline_8784$$ = (new window.Date($end$$inline_8785_item$$inline_8783$$.start)).getTime();
            if(!$hasValidViewStart_start$$inline_8784$$) {
              $JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$ = !1;
              break a
            }
            if($end$$inline_8785_item$$inline_8783$$.hasOwnProperty("end") && ($end$$inline_8785_item$$inline_8783$$ = (new window.Date($end$$inline_8785_item$$inline_8783$$.end)).getTime(), !($end$$inline_8785_item$$inline_8783$$ && $end$$inline_8785_item$$inline_8783$$ > $hasValidViewStart_start$$inline_8784$$))) {
              $JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$ = !1;
              break a
            }
          }
        }
      }
      $JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$ = !0
    }
  }else {
    $JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$ = !1
  }
  $hasValidSeriesScale_seriesOptions$$inline_8781$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$ ? -1 != D.$DvtArrayUtils$$.$getIndex$(D.$DvtTimeComponentAxis$$.$_VALID_SCALES$, $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$) : !0;
  $hasValidViewport_j$$inline_8782$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ > $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ : !0;
  $hasValidViewStart_start$$inline_8784$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ >= $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ : !0;
  $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ > $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ <= $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ : !0;
  return $hasValidScale$$ && $hasValidStartAndEnd$$ && $hasValidSeries$$ && $JSCompiler_temp$$264_hasValidSeriesItems_i$$inline_8780$$ && $hasValidSeriesScale_seriesOptions$$inline_8781$$ && $hasValidViewport_j$$inline_8782$$ && $hasValidViewStart_start$$inline_8784$$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$
};
D.$DvtTimeline$$.prototype.$GetComponentDescription$ = function $$DvtTimeline$$$$$GetComponentDescription$$() {
  return this.$_shortDesc$ ? this.$_shortDesc$ : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "TIMELINE")
};
D.$JSCompiler_StaticMethods_isAnimating$$ = function $$JSCompiler_StaticMethods_isAnimating$$$($JSCompiler_StaticMethods_isAnimating$self$$) {
  for(var $i$$846$$ = 0;$i$$846$$ < $JSCompiler_StaticMethods_isAnimating$self$$.$_series$.length;$i$$846$$++) {
    if($JSCompiler_StaticMethods_isAnimating$self$$.$_series$[$i$$846$$].$_isAnimating$) {
      return!0
    }
  }
  return!1
};
D.$JSCompiler_StaticMethods_showThenHideHotspots$$ = function $$JSCompiler_StaticMethods_showThenHideHotspots$$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$, $series$$18$$) {
  if((0,D.$JSCompiler_StaticMethods_hasValidOptions$$)($JSCompiler_StaticMethods_showThenHideHotspots$self$$)) {
    for(var $animator$$136$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$getCtx$(), D.$DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, D.$DvtEasing$linear$$), $i$$847$$ = 0;$i$$847$$ < $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$.length;$i$$847$$++) {
      var $hotspot$$ = $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$[$i$$847$$], $id$$305$$ = $hotspot$$.getId(), $show$$2$$ = !0;
      if($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_contentLength$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_canvasLength$ && ("lhs" == $id$$305$$ || "rhs" == $id$$305$$)) {
        $show$$2$$ = !1
      }
      var $pId$$1_parentSeries$$ = $hotspot$$.getParent().getId();
      if($pId$$1_parentSeries$$ && ($pId$$1_parentSeries$$ = $pId$$1_parentSeries$$.substring($pId$$1_parentSeries$$.length - 1), null != $series$$18$$ && $series$$18$$ != $pId$$1_parentSeries$$ && ($show$$2$$ = !1), $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_series$[$pId$$1_parentSeries$$].$_maxOverflowValue$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_seriesSize$ && ("ths" == $id$$305$$ || "bhs" == $id$$305$$))) {
        $show$$2$$ = !1
      }
      $show$$2$$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$136$$, "typeNumber", $hotspot$$, $hotspot$$.$getAlpha$, $hotspot$$.$setAlpha$, D.$DvtTimelineStyleUtils$$.$getHotspotOpacity$())
    }
    (0,D.$DvtPlayable$appendOnEnd$$)($animator$$136$$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$hideHotspots$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$);
    $animator$$136$$.play()
  }
};
D.$DvtTimeline$$.prototype.$hideHotspots$ = function $$DvtTimeline$$$$$hideHotspots$$() {
  var $hotSpotsLength$$ = this.$_scrollHotspots$.length;
  if(0 != $hotSpotsLength$$) {
    for(var $animator$$137$$ = new D.$DvtAnimator$$(this.$getCtx$(), D.$DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, D.$DvtEasing$linear$$), $i$$848$$ = 0;$i$$848$$ < $hotSpotsLength$$;$i$$848$$++) {
      var $hotspot$$1$$ = this.$_scrollHotspots$[$i$$848$$];
      (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$137$$, "typeNumber", $hotspot$$1$$, $hotspot$$1$$.$getAlpha$, $hotspot$$1$$.$setAlpha$, 0)
    }
    $animator$$137$$.play()
  }
};
D.$DvtTimeline$$.prototype.$applyStyleValues$ = function $$DvtTimeline$$$$$applyStyleValues$$() {
  this.$_style$ = new D.$DvtCSSStyle$$(D.$DvtTimelineStyleUtils$$.$getTimelineStyle$());
  if(this.$Options$.styleDefaults) {
    var $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$ = this.$Options$.styleDefaults.borderColor;
    $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, "border-color:" + $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$ + ";")
  }
  if(this.$_hasOverview$ && (this.$_overviewSize$ = this.$_isVertical$ ? D.$DvtTimelineStyleUtils$$.$getOverviewWidth$() : D.$DvtTimelineStyleUtils$$.$getOverviewHeight$(), $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$ = this.$Options$.overview.style)) {
    for(var $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$ = $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$.split(";"), $doubleBorderWidth_i$$849$$ = 0;$doubleBorderWidth_i$$849$$ < $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$.length;$doubleBorderWidth_i$$849$$++) {
      var $s$$161$$ = $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$[$doubleBorderWidth_i$$849$$];
      if($s$$161$$ && 0 < $s$$161$$.length) {
        var $colonIndex$$3$$ = $s$$161$$.indexOf(":");
        if(-1 < $colonIndex$$3$$) {
          var $attrName$$4$$ = D.$DvtStringUtils$$.trim($s$$161$$.substring(0, $colonIndex$$3$$));
          if(this.$_isVertical$ && "width" == $attrName$$4$$ || !this.$_isVertical$ && "height" == $attrName$$4$$) {
            this.$_overviewSize$ = (0,window.parseInt)(D.$DvtStringUtils$$.trim($s$$161$$.substring($colonIndex$$3$$ + 1)), 10);
            break
          }
        }
      }
    }
  }
  D.$DvtTimeline$$.$superclass$.$applyStyleValues$.call(this);
  $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$ = this.$_style$.$getBorderWidth$();
  $doubleBorderWidth_i$$849$$ = 2 * $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$;
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, "border:" + $doubleBorderWidth_i$$849$$ + "px;");
  this.$_startY$ = this.$_startX$ = $borderWidth$$18_overviewStyle$$6_splits$$2_style$$118$$;
  this.$_backgroundWidth$ = this.$Width$;
  this.$_backgroundHeight$ = this.$Height$;
  this.$_isVertical$ ? (this.$_canvasLength$ = this.$_backgroundHeight$ - $doubleBorderWidth_i$$849$$, this.$_hasOverview$ ? (this.$_canvasSize$ = this.$_backgroundWidth$ - this.$_overviewSize$ - $doubleBorderWidth_i$$849$$, this.$isRTL$() && (this.$_startX$ += this.$_overviewSize$)) : this.$_canvasSize$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$849$$) : (this.$_canvasLength$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$849$$, this.$_canvasSize$ = this.$_hasOverview$ ? this.$Height$ - 
  this.$_overviewSize$ - $doubleBorderWidth_i$$849$$ : this.$Height$ - $doubleBorderWidth_i$$849$$)
};
D.$JSCompiler_StaticMethods_applyAxisStyleValues$$ = function $$JSCompiler_StaticMethods_applyAxisStyleValues$$$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$) {
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$ = new D.$DvtCSSStyle$$(D.$DvtTimelineStyleUtils$$.$getAxisStyle$());
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$) {
    var $axisStyles_r$$93$$ = "", $g$$29_style$$119$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.backgroundColor;
    $g$$29_style$$119$$ && ($axisStyles_r$$93$$ = $axisStyles_r$$93$$ + "background-color:" + $g$$29_style$$119$$ + ";");
    ($g$$29_style$$119$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderColor) && ($axisStyles_r$$93$$ = $axisStyles_r$$93$$ + "border-color:" + $g$$29_style$$119$$ + ";");
    ($g$$29_style$$119$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderWidth) && ($axisStyles_r$$93$$ = $axisStyles_r$$93$$ + "border-width:" + $g$$29_style$$119$$ + ";");
    (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$, $axisStyles_r$$93$$)
  }
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$, $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisInlineStyle$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$getBorderWidth$();
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$, "border:" + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ + "px;");
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_timeAxis$.$setBorderWidth$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisLength$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_contentLength$ + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ - D.$DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$;
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$ && $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor) {
    var $b$$66_bgColor$$16$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor, $axisStyles_r$$93$$ = D.$DvtColorUtils$$.$getRed$($b$$66_bgColor$$16$$), $g$$29_style$$119$$ = D.$DvtColorUtils$$.$getGreen$($b$$66_bgColor$$16$$), $b$$66_bgColor$$16$$ = D.$DvtColorUtils$$.$getBlue$($b$$66_bgColor$$16$$);
    $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesBackgroundOverlayStyle$ = "background-color:rgba(" + $axisStyles_r$$93$$ + "," + $g$$29_style$$119$$ + "," + $b$$66_bgColor$$16$$ + ",0.8);"
  }
};
D.$JSCompiler_StaticMethods_prepareViewportLength$$ = function $$JSCompiler_StaticMethods_prepareViewportLength$$$($JSCompiler_StaticMethods_prepareViewportLength$self$$) {
  $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_setLength$ = !0;
  $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$ = 0;
  $JSCompiler_StaticMethods_prepareViewportLength$self$$.$isRTL$() && !$JSCompiler_StaticMethods_prepareViewportLength$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_contentLength$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$);
  if($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ && $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$) {
    var $viewTime_widthFactor$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$;
    0 < $viewTime_widthFactor$$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_setLength$ = !1, $viewTime_widthFactor$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / $viewTime_widthFactor$$, (0,D.$JSCompiler_StaticMethods_setContentLength$$)($JSCompiler_StaticMethods_prepareViewportLength$self$$, $viewTime_widthFactor$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$)), $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$ = 
    $viewTime_widthFactor$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$), $JSCompiler_StaticMethods_prepareViewportLength$self$$.$isRTL$() && !$JSCompiler_StaticMethods_prepareViewportLength$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_contentLength$ - 
    $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$))
  }
};
D.$DvtTimeline$$.prototype.$HandleTouchStart$ = function $$DvtTimeline$$$$$HandleTouchStart$$($event$$775$$) {
  if(1 == $event$$775$$.touches.length) {
    if(this.$_dragPanSeries$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)(this, $event$$775$$.target)) {
      var $series$$20$$ = this.$_series$[0] == this.$_dragPanSeries$ ? 0 : 1
    }
    (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this, $series$$20$$)
  }
};
D.$JSCompiler_StaticMethods_handleZoomWheel$$ = function $$JSCompiler_StaticMethods_handleZoomWheel$$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$, $compLoc$$1_s$$inline_8797_s$$inline_8800$$, $triggerViewportChangeEvent$$) {
  $newLength_viewTime$$2$$ > $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$, (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, !0)) : (0,D.$JSCompiler_StaticMethods_enableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, !0);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$ > $newLength_viewTime$$2$$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$, (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, !1)) : (0,D.$JSCompiler_StaticMethods_enableZoomButton$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, !1);
  var $zoomIn$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ <= $newLength_viewTime$$2$$, $viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$) / ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) * $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$;
  (0,D.$JSCompiler_StaticMethods_setContentLength$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$);
  $newLength_viewTime$$2$$ = $viewLength_widthFactor$$4$$ / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$);
  $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$ ? ($viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$ - 
  $compLoc$$1_s$$inline_8797_s$$inline_8800$$ * $viewLength_widthFactor$$4$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ > 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$)), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = 1 / $viewLength_widthFactor$$4$$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$)) : ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + 
  $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = 0);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$isRTL$() && !$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Height$ : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Width$);
  if($zoomIn$$) {
    for(;0 < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ - 1], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ >= $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$--;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_8797_s$$inline_8800$$ = 1;$compLoc$$1_s$$inline_8797_s$$inline_8800$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_zoomOrder$.length;$compLoc$$1_s$$inline_8797_s$$inline_8800$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_zoomOrder$[$compLoc$$1_s$$inline_8797_s$$inline_8800$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_zoomOrder$[$compLoc$$1_s$$inline_8797_s$$inline_8800$$ - 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }else {
    for(;$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$.length - 1;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$++;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_8797_s$$inline_8800$$ = 0;$compLoc$$1_s$$inline_8797_s$$inline_8800$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_zoomOrder$.length - 1;$compLoc$$1_s$$inline_8797_s$$inline_8800$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_zoomOrder$[$compLoc$$1_s$$inline_8797_s$$inline_8800$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_8796_JSCompiler_StaticMethods_increaseScale$self$$inline_8799_minLength$$1_time$$20$$.$_zoomOrder$[$compLoc$$1_s$$inline_8797_s$$inline_8800$$ + 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }
  (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  D.$DvtTimelineRenderer$$.$_renderAxis$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$);
  (0,D.$JSCompiler_StaticMethods_updateSeries$$)($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startY$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$) : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startX$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$);
  $triggerViewportChangeEvent$$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.dispatchEvent(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$))
};
D.$DvtTimeline$$.prototype.$zoomBy$ = function $$DvtTimeline$$$$$zoomBy$$($dz$$13$$) {
  var $compLoc$$2$$ = this.$_isVertical$ ? this.$Height$ / 2 : this.$Width$ / 2;
  (0,D.$JSCompiler_StaticMethods_handleZoomWheel$$)(this, this.$_contentLength$ * ((1 / $dz$$13$$ - 1) / 2 + 1), (this.$_end$ - this.$_start$) / this.$_contentLength$ * $compLoc$$2$$ + this.$_viewStartTime$, $compLoc$$2$$, !0)
};
D.$JSCompiler_StaticMethods_updateSeries$$ = function $$JSCompiler_StaticMethods_updateSeries$$$($JSCompiler_StaticMethods_updateSeries$self$$) {
  if($JSCompiler_StaticMethods_updateSeries$self$$.$_series$) {
    var $seriesCount$$28$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length, $axisSize$$1$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($JSCompiler_StaticMethods_updateSeries$self$$, $seriesCount$$28$$);
    $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ = ($JSCompiler_StaticMethods_updateSeries$self$$.$_canvasSize$ - $axisSize$$1$$) / $seriesCount$$28$$;
    for(var $i$$853$$ = 0;$i$$853$$ < $seriesCount$$28$$;$i$$853$$++) {
      var $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$[$i$$853$$];
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$, null);
      var $cp$$9_width$$inline_8803$$ = new D.$DvtClipPath$$;
      if($JSCompiler_StaticMethods_updateSeries$self$$.$_isVertical$) {
        var $height$$148_height$$inline_8804_key$$128$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() ? window.Math.abs($i$$853$$ - 1) : $i$$853$$;
        if($JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() && 1 == $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length) {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$9_width$$inline_8803$$, $axisSize$$1$$, 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$);
          var $posMatrix$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $axisSize$$1$$, 0)
        }else {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$9_width$$inline_8803$$, $height$$148_height$$inline_8804_key$$128$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$), $posMatrix$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $height$$148_height$$inline_8804_key$$128$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), 
          0)
        }
        var $width$$165$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $height$$148_height$$inline_8804_key$$128$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$
      }else {
        (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$9_width$$inline_8803$$, 0, $i$$853$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$), $posMatrix$$ = new D.$DvtMatrix$$(1, 0, 0, 1, 0, $i$$853$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$)), $width$$165$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, 
        $height$$148_height$$inline_8804_key$$128$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$
      }
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$, $cp$$9_width$$inline_8803$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$setMatrix$($posMatrix$$);
      $cp$$9_width$$inline_8803$$ = $width$$165$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_canvas$.$setTranslateY$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_canvas$.$setTranslateX$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$Width$ = $cp$$9_width$$inline_8803$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$Height$ = $height$$148_height$$inline_8804_key$$128$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_fetchStartPos$ = 0;
      $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_isVertical$ ? ($JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_fetchEndPos$ = $height$$148_height$$inline_8804_key$$128$$, $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_maxOverflowValue$ = $cp$$9_width$$inline_8803$$, $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_length$ = $height$$148_height$$inline_8804_key$$128$$, $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_size$ = 
      $cp$$9_width$$inline_8803$$) : ($JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_fetchEndPos$ = $cp$$9_width$$inline_8803$$, $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_maxOverflowValue$ = $height$$148_height$$inline_8804_key$$128$$, $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_length$ = $cp$$9_width$$inline_8803$$, $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_size$ = $height$$148_height$$inline_8804_key$$128$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_background$.$setWidth$($cp$$9_width$$inline_8803$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$.$_background$.$setHeight$($height$$148_height$$inline_8804_key$$128$$);
      D.$DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$($JSCompiler_StaticMethods_reRender$self$$inline_8802_series$$21$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeline$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_handleResize$ = function $$JSCompiler_prototypeAlias$$$$_handleResize$$($width$$166$$, $height$$149$$) {
  this.$Width$ = $width$$166$$;
  this.$Height$ = $height$$149$$;
  this.$applyStyleValues$();
  this.$_fetchStartPos$ = 0;
  this.$_fetchEndPos$ = this.$_isVertical$ ? $height$$149$$ : $width$$166$$;
  (0,D.$JSCompiler_StaticMethods_prepareViewportLength$$)(this);
  D.$DvtTimelineRenderer$$.$_renderBackground$(this);
  if((0,D.$JSCompiler_StaticMethods_hasValidOptions$$)(this)) {
    if(D.$DvtTimelineRenderer$$.$_renderInnerCanvas$(this, this.$_canvas$), (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)(this), (0,D.$JSCompiler_StaticMethods_updateSeries$$)(this), D.$DvtTimelineRenderer$$.$_renderAxis$(this, this.$_innerCanvas$), D.$DvtTimelineRenderer$$.$_renderSeriesLabels$(this), D.$DvtTimelineRenderer$$.$_renderScrollHotspots$(this), D.$DvtTimelineRenderer$$.$_renderZoomControls$(this), this.$_hasOverview$ && (D.$DvtTimelineRenderer$$.$_renderOverview$(this), this.$SelectionHandler$)) {
      var $selection$$39$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$SelectionHandler$);
      if($selection$$39$$ && 0 != $selection$$39$$.length) {
        for(var $i$$854$$ = 0;$i$$854$$ < $selection$$39$$.length;$i$$854$$++) {
          var $JSCompiler_StaticMethods_selSelectItem$self$$inline_8806$$ = this.$_overview$, $drawable$$inline_8808$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_selSelectItem$self$$inline_8806$$, $selection$$39$$[$i$$854$$]);
          null != $drawable$$inline_8808$$ && (0,D.$JSCompiler_StaticMethods_addSelectedMarker$$)($JSCompiler_StaticMethods_selSelectItem$self$$inline_8806$$, $drawable$$inline_8808$$)
        }
      }
    }
  }else {
    D.$DvtTimelineRenderer$$.$_renderEmptyText$(this)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$777$$) {
  (39 == $event$$777$$.keyCode || 37 == $event$$777$$.keyCode || 40 == $event$$777$$.keyCode || 38 == $event$$777$$.keyCode) && (0,D.$JSCompiler_StaticMethods_updateScrollForItemNavigation$$)(this, this.$EventManager$.$getFocus$())
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$778$$) {
  this.$_dragPanSeries$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)(this, $event$$778$$.target)
};
D.$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($compX$$2$$, $compY$$2$$) {
  this.$_currentX$ = $compX$$2$$;
  this.$_currentY$ = $compY$$2$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$779$$) {
  "none" != this.$_selectionMode$ && (0,D.$JSCompiler_StaticMethods_handleShapeClick$$)(this, $event$$779$$)
};
D.$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  this.$_dragPanSeries$ = null;
  (0,D.$JSCompiler_StaticMethods_endPan$$)(this)
};
D.$JSCompiler_StaticMethods_endPan$$ = function $$JSCompiler_StaticMethods_endPan$$$($JSCompiler_StaticMethods_endPan$self$$) {
  $JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ = !1, $JSCompiler_StaticMethods_endPan$self$$.dispatchEvent(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_endPan$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPan$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPan$self$$.$_scale$)))
};
D.$DvtTimeline$$.prototype.$contDragPan$ = function $$DvtTimeline$$$$$contDragPan$$($compX$$3$$, $compY$$3$$) {
  if(this.$_currentX$ && this.$_currentY$) {
    var $deltaX$$25$$ = this.$_currentX$ - $compX$$3$$, $deltaY$$28$$ = this.$_currentY$ - $compY$$3$$;
    if(0 == $deltaX$$25$$ && 0 == $deltaY$$28$$) {
      return!1
    }
    this.$_triggerViewportChange$ = !0;
    this.$_currentX$ = $compX$$3$$;
    this.$_currentY$ = $compY$$3$$;
    this.$panBy$($deltaX$$25$$, $deltaY$$28$$);
    return!0
  }
  return!1
};
D.$DvtTimeline$$.prototype.$panBy$ = function $$DvtTimeline$$$$$panBy$$($deltaX$$26$$, $deltaY$$29$$) {
  var $axisSize$$2_maxTranslateY$$1$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)(this, this.$_series$.length);
  if(this.$_isVertical$) {
    var $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$;
    if(this.$_dragPanSeries$) {
      var $newTranslateX$$ = this.$_dragPanSeries$.$getTranslateX$() - $deltaX$$26$$;
      1 < this.$_series$.length && (!this.$isRTL$() && this.$_dragPanSeries$.$_isInverted$ || this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$) ? ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$2_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_dragPanSeries$.$Width$ + $axisSize$$2_maxTranslateY$$1$$) : this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$ ? 
      ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$ + $axisSize$$2_maxTranslateY$$1$$, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = $axisSize$$2_maxTranslateY$$1$$) : ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = 0, $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Width$);
      $newTranslateX$$ < $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ ? $newTranslateX$$ = $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ : $newTranslateX$$ > $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ && ($newTranslateX$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$);
      this.$_dragPanSeries$.$setTranslateX$($newTranslateX$$)
    }
    $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_innerCanvas$.$getTranslateY$() - $deltaY$$29$$;
    $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startY$);
    $axisSize$$2_maxTranslateY$$1$$ = this.$_startY$;
    $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ < $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ ? $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ : $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ > $axisSize$$2_maxTranslateY$$1$$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$2_maxTranslateY$$1$$);
    this.$_innerCanvas$.$setTranslateY$($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$);
    this.$_startPos$ = $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ - this.$_startY$;
    $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$);
    $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    this.$_viewStartTime$ = this.$_start$ - this.$_startPos$ / $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$;
    this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$;
    this.$_hasOverview$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_overview$.$Height$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$))
  }else {
    $newTranslateX$$ = this.$_innerCanvas$.$getTranslateX$() - $deltaX$$26$$, $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startX$), $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_startX$, $newTranslateX$$ < $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ ? $newTranslateX$$ = $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ : $newTranslateX$$ > $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ && 
    ($newTranslateX$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$), this.$_innerCanvas$.$setTranslateX$($newTranslateX$$), this.$_startPos$ = $newTranslateX$$ - this.$_startX$, this.$isRTL$() && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$, 
    this.$_viewStartTime$ = this.$_start$ - this.$_startPos$ / $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$, this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$, this.$isRTL$() && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), this.$_hasOverview$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_overview$.$Width$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, 
    this.$_viewEndTime$, $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$)), this.$_dragPanSeries$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_dragPanSeries$.$getTranslateY$() - $deltaY$$29$$, this.$_dragPanSeries$.$_isInverted$ ? ($maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = $axisSize$$2_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Height$ - this.$_dragPanSeries$.$_maxOverflowValue$, $axisSize$$2_maxTranslateY$$1$$ = this.$_dragPanSeries$.$Height$ + 
    $axisSize$$2_maxTranslateY$$1$$) : ($maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ = 0, $axisSize$$2_maxTranslateY$$1$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Height$), $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ < $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ ? $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $maxTranslateX$$1_minTranslateY$$1_viewTime$$3$$ : $minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ > 
    $axisSize$$2_maxTranslateY$$1$$ && ($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$2_maxTranslateY$$1$$), this.$_dragPanSeries$.$setTranslateY$($minTranslateX$$1_newTranslateY_overviewLength$$2_widthFactor$$6$$))
  }
};
D.$DvtTimeline$$.prototype.$HandleEvent$ = function $$DvtTimeline$$$$$HandleEvent$$($event$$781_i$$855_isMultiSelect$$inline_8811$$) {
  var $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getType$();
  if("selection" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ || "dvtAct" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
    D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$781_i$$855_isMultiSelect$$inline_8811$$)
  }else {
    if("overview" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
      $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getSubType$();
      if("rangeChanging" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ || "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
        var $item$$58_oldViewTime$$1_zoomLevelOrder$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        this.$_viewStartTime$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getParamValue$("newStartTime");
        this.$_viewEndTime$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getParamValue$("newEndTime");
        var $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        if(0 < $isMultiSelect$$2_minLength$$2_viewTime$$4$$) {
          var $s$$163_viewSize$$inline_8815_widthFactor$$7$$ = this.$_canvasLength$ / $isMultiSelect$$2_minLength$$2_viewTime$$4$$;
          (0,D.$JSCompiler_StaticMethods_setContentLength$$)(this, $s$$163_viewSize$$inline_8815_widthFactor$$7$$ * (this.$_end$ - this.$_start$));
          this.$_startPos$ = $s$$163_viewSize$$inline_8815_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$);
          this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
          if($item$$58_oldViewTime$$1_zoomLevelOrder$$ > $isMultiSelect$$2_minLength$$2_viewTime$$4$$) {
            $item$$58_oldViewTime$$1_zoomLevelOrder$$ = this.$_zoomLevelLengths$.length;
            for($isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$58_oldViewTime$$1_zoomLevelOrder$$ - 1];this.$_contentLength$ >= $isMultiSelect$$2_minLength$$2_viewTime$$4$$ && 0 < $item$$58_oldViewTime$$1_zoomLevelOrder$$;) {
              $item$$58_oldViewTime$$1_zoomLevelOrder$$--, $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$58_oldViewTime$$1_zoomLevelOrder$$ - 1]
            }
            $item$$58_oldViewTime$$1_zoomLevelOrder$$ == this.$_zoomLevelLengths$.length && $item$$58_oldViewTime$$1_zoomLevelOrder$$--
          }else {
            $item$$58_oldViewTime$$1_zoomLevelOrder$$ = 0;
            for($isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$58_oldViewTime$$1_zoomLevelOrder$$];this.$_contentLength$ < $isMultiSelect$$2_minLength$$2_viewTime$$4$$ && $item$$58_oldViewTime$$1_zoomLevelOrder$$ < this.$_zoomLevelLengths$.length - 1;) {
              $item$$58_oldViewTime$$1_zoomLevelOrder$$++, $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$58_oldViewTime$$1_zoomLevelOrder$$]
            }
          }
          this.$_zoomLevelOrder$ = $item$$58_oldViewTime$$1_zoomLevelOrder$$;
          this.$_timeAxis$.$setScale$(this.$_timeAxis$.$_zoomOrder$[$item$$58_oldViewTime$$1_zoomLevelOrder$$]);
          this.$_scale$ = this.$_timeAxis$.$_scale$;
          (0,D.$JSCompiler_StaticMethods_applyAxisStyleValues$$)(this);
          D.$DvtTimelineRenderer$$.$_renderAxis$(this, this.$_innerCanvas$);
          (0,D.$JSCompiler_StaticMethods_updateSeries$$)(this);
          this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$)
        }
        "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ && this.dispatchEvent(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
      if("scrollPos" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ || "scrollTime" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
        this.$_viewStartTime$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getParamValue$("newStartTime"), this.$_viewEndTime$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getParamValue$("newEndTime"), $s$$163_viewSize$$inline_8815_widthFactor$$7$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), this.$_startPos$ = $s$$163_viewSize$$inline_8815_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - 
        this.$_contentLength$ - this.$_startPos$), this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$), this.dispatchEvent(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
    }else {
      if($itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getSubType$(), "selection" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
        $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getItemId$();
        $event$$781_i$$855_isMultiSelect$$inline_8811$$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getParamValue$("multiSelect");
        $isMultiSelect$$2_minLength$$2_viewTime$$4$$ = (null != $event$$781_i$$855_isMultiSelect$$inline_8811$$ ? $event$$781_i$$855_isMultiSelect$$inline_8811$$ : !1) && "multiple" == this.$_selectionMode$;
        for($event$$781_i$$855_isMultiSelect$$inline_8811$$ = 0;$event$$781_i$$855_isMultiSelect$$inline_8811$$ < this.$_series$.length;$event$$781_i$$855_isMultiSelect$$inline_8811$$++) {
          for(var $s$$163_viewSize$$inline_8815_widthFactor$$7$$ = this.$_series$[$event$$781_i$$855_isMultiSelect$$inline_8811$$], $j$$122$$ = 0;$j$$122$$ < $s$$163_viewSize$$inline_8815_widthFactor$$7$$.$_items$.length;$j$$122$$++) {
            if($item$$58_oldViewTime$$1_zoomLevelOrder$$ = $s$$163_viewSize$$inline_8815_widthFactor$$7$$.$_items$[$j$$122$$], $item$$58_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
              (0,D.$JSCompiler_StaticMethods__addToSelection$$)(this.$SelectionHandler$, $item$$58_oldViewTime$$1_zoomLevelOrder$$, $isMultiSelect$$2_minLength$$2_viewTime$$4$$);
              (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, $item$$58_oldViewTime$$1_zoomLevelOrder$$);
              $s$$163_viewSize$$inline_8815_widthFactor$$7$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
              this.$_viewStartTime$ = $item$$58_oldViewTime$$1_zoomLevelOrder$$.$_startTime$ - $s$$163_viewSize$$inline_8815_widthFactor$$7$$ / 2;
              this.$_viewStartTime$ < this.$_start$ ? this.$_viewStartTime$ = this.$_start$ : this.$_viewStartTime$ + $s$$163_viewSize$$inline_8815_widthFactor$$7$$ > this.$_end$ && (this.$_viewStartTime$ = this.$_end$ - $s$$163_viewSize$$inline_8815_widthFactor$$7$$);
              this.$_viewEndTime$ = this.$_viewStartTime$ + $s$$163_viewSize$$inline_8815_widthFactor$$7$$;
              this.$_startPos$ = this.$_contentLength$ / (this.$_end$ - this.$_start$) * (this.$_start$ - this.$_viewStartTime$);
              this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
              this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$);
              this.dispatchEvent(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$));
              break
            }
          }
        }
      }else {
        if("highlight" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
          $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getItemId$();
          for($event$$781_i$$855_isMultiSelect$$inline_8811$$ = 0;$event$$781_i$$855_isMultiSelect$$inline_8811$$ < this.$_series$.length;$event$$781_i$$855_isMultiSelect$$inline_8811$$++) {
            $s$$163_viewSize$$inline_8815_widthFactor$$7$$ = this.$_series$[$event$$781_i$$855_isMultiSelect$$inline_8811$$];
            for($j$$122$$ = 0;$j$$122$$ < $s$$163_viewSize$$inline_8815_widthFactor$$7$$.$_items$.length;$j$$122$$++) {
              if($item$$58_oldViewTime$$1_zoomLevelOrder$$ = $s$$163_viewSize$$inline_8815_widthFactor$$7$$.$_items$[$j$$122$$], $item$$58_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
                $item$$58_oldViewTime$$1_zoomLevelOrder$$.$showHoverEffect$(!0);
                break
              }
            }
          }
        }else {
          if("unhighlight" == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
            $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$ = $event$$781_i$$855_isMultiSelect$$inline_8811$$.$getItemId$();
            for($event$$781_i$$855_isMultiSelect$$inline_8811$$ = 0;$event$$781_i$$855_isMultiSelect$$inline_8811$$ < this.$_series$.length;$event$$781_i$$855_isMultiSelect$$inline_8811$$++) {
              $s$$163_viewSize$$inline_8815_widthFactor$$7$$ = this.$_series$[$event$$781_i$$855_isMultiSelect$$inline_8811$$];
              for($j$$122$$ = 0;$j$$122$$ < $s$$163_viewSize$$inline_8815_widthFactor$$7$$.$_items$.length;$j$$122$$++) {
                if($item$$58_oldViewTime$$1_zoomLevelOrder$$ = $s$$163_viewSize$$inline_8815_widthFactor$$7$$.$_items$[$j$$122$$], $item$$58_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$10_type$$247$$) {
                  $item$$58_oldViewTime$$1_zoomLevelOrder$$.$hideHoverEffect$(!0);
                  break
                }
              }
            }
          }
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_enableZoomButton$$ = function $$JSCompiler_StaticMethods_enableZoomButton$$$($JSCompiler_StaticMethods_enableZoomButton$self$$, $isZoomIn$$) {
  $isZoomIn$$ ? ((0,D.$JSCompiler_StaticMethods_setEnabled$$)($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$, !0), (0,D.$JSCompiler_StaticMethods_drawUpState$$)($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$)) : ((0,D.$JSCompiler_StaticMethods_setEnabled$$)($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$, !0), (0,D.$JSCompiler_StaticMethods_drawUpState$$)($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$))
};
D.$JSCompiler_StaticMethods_disableZoomButton$$ = function $$JSCompiler_StaticMethods_disableZoomButton$$$($JSCompiler_StaticMethods_disableZoomButton$self$$, $isZoomIn$$1$$) {
  $isZoomIn$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setEnabled$$)($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$, !1), (0,D.$JSCompiler_StaticMethods_drawDisabledState$$)($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.setCursor(null)) : ((0,D.$JSCompiler_StaticMethods_setEnabled$$)($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$, !1), (0,D.$JSCompiler_StaticMethods_drawDisabledState$$)($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$), 
  $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.setCursor(null))
};
D.$JSCompiler_StaticMethods_updateScrollForItemNavigation$$ = function $$JSCompiler_StaticMethods_updateScrollForItemNavigation$$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$, $item$$60$$) {
  var $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $item$$60$$.getHeight() : $item$$60$$.getWidth(), $endPos$$5_itemHoverStrokeWidth$$ = D.$DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $itemStart_widthFactor$$9$$ = $item$$60$$.$_loc$ - ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $itemEnd_itemSize_viewTime$$5$$ / 2 + $endPos$$5_itemHoverStrokeWidth$$ : D.$DvtTimelineStyleUtils$$.$getBubbleOffset$() + 
  $endPos$$5_itemHoverStrokeWidth$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($itemStart_widthFactor$$9$$ -= $endPos$$5_itemHoverStrokeWidth$$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $itemEnd_itemSize_viewTime$$5$$ = $itemStart_widthFactor$$9$$ + $itemEnd_itemSize_viewTime$$5$$ + 2 * $endPos$$5_itemHoverStrokeWidth$$;
  $endPos$$5_itemHoverStrokeWidth$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$;
  -$itemStart_widthFactor$$9$$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = -$itemStart_widthFactor$$9$$ : -$itemEnd_itemSize_viewTime$$5$$ < $endPos$$5_itemHoverStrokeWidth$$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = -$itemEnd_itemSize_viewTime$$5$$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$);
  $itemStart_widthFactor$$9$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ / ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$);
  $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ / $itemStart_widthFactor$$9$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * 
  $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ + $itemEnd_itemSize_viewTime$$5$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $itemEnd_itemSize_viewTime$$5$$, 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startY$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$) : $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startX$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Height$ : 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Width$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.dispatchEvent(new D.$DvtTimelineViewportChangeEvent$$("viewportChange", $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_scale$))
};
D.$JSCompiler_StaticMethods_handleShapeClick$$ = function $$JSCompiler_StaticMethods_handleShapeClick$$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $event$$782$$) {
  if($event$$782$$) {
    var $drawable$$6_event$$inline_8820_item$$inline_8818$$ = $JSCompiler_StaticMethods_handleShapeClick$self$$.$_findDrawable$($event$$782$$.target);
    if($drawable$$6_event$$inline_8820_item$$inline_8818$$) {
      var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8817_series$$22$$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_8820_item$$inline_8818$$);
      if($drawable$$6_event$$inline_8820_item$$inline_8818$$.$_node$) {
        var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8817_series$$22$$ = (0,D.$JSCompiler_StaticMethods__findSeries$$)($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_8820_item$$inline_8818$$), $drawable$$6_event$$inline_8820_item$$inline_8818$$ = $drawable$$6_event$$inline_8820_item$$inline_8818$$.$_node$, $action$$inline_8819$$ = $drawable$$6_event$$inline_8820_item$$inline_8818$$.$getAction$();
        $action$$inline_8819$$ && ($drawable$$6_event$$inline_8820_item$$inline_8818$$ = new D.$DvtTimelineSeriesActionEvent$$($action$$inline_8819$$, $drawable$$6_event$$inline_8820_item$$inline_8818$$.getId()), D.$DvtEventDispatcher$$.dispatchEvent($JSCompiler_StaticMethods_HandleItemAction$self$$inline_8817_series$$22$$.$_callback$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8817_series$$22$$.$_callbackObj$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_8817_series$$22$$, 
        $drawable$$6_event$$inline_8820_item$$inline_8818$$))
      }
    }
  }
};
D.$JSCompiler_StaticMethods_applyInitialSelections$$ = function $$JSCompiler_StaticMethods_applyInitialSelections$$$($JSCompiler_StaticMethods_applyInitialSelections$self$$) {
  if($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection) {
    for(var $items$$41$$ = [], $i$$856$$ = 0;$i$$856$$ < $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$.length;$i$$856$$++) {
      for(var $s$$164$$ = $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$[$i$$856$$], $j$$123$$ = 0;$j$$123$$ < $s$$164$$.$_items$.length;$j$$123$$++) {
        $items$$41$$.push($s$$164$$.$_items$[$j$$123$$])
      }
    }
  }
  (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($JSCompiler_StaticMethods_applyInitialSelections$self$$.$SelectionHandler$, $JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection, $items$$41$$)
};
D.$DvtTimeline$$.prototype.$processEvent$ = function $$DvtTimeline$$$$$processEvent$$($event$$783$$) {
  $event$$783$$ && this.dispatchEvent($event$$783$$)
};
D.$JSCompiler_StaticMethods__findSeries$$ = function $$JSCompiler_StaticMethods__findSeries$$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$125$$) {
  if((0,D.$JSCompiler_StaticMethods_hasValidOptions$$)($JSCompiler_StaticMethods__findSeries$self$$) && $target$$125$$ && $target$$125$$ != $JSCompiler_StaticMethods__findSeries$self$$) {
    var $id$$306$$ = $target$$125$$.getId();
    return $target$$125$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] || 1 < $JSCompiler_StaticMethods__findSeries$self$$.$_series$.length && $target$$125$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] ? $target$$125$$ : $id$$306$$ && "_s0" == $id$$306$$.substring($id$$306$$.length - 3, $id$$306$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] : $id$$306$$ && "_s1" == $id$$306$$.substring($id$$306$$.length - 3, $id$$306$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] : 
    (0,D.$JSCompiler_StaticMethods__findSeries$$)($JSCompiler_StaticMethods__findSeries$self$$, $target$$125$$.getParent())
  }
  return null
};
D.$DvtTimeline$$.prototype.$_findDrawable$ = function $$DvtTimeline$$$$$_findDrawable$$($grandParent_target$$126$$) {
  if($grandParent_target$$126$$) {
    var $id$$307$$ = $grandParent_target$$126$$.getId();
    if($id$$307$$ && "_duration_" == $id$$307$$.substring(0, 10) && $grandParent_target$$126$$.$_node$) {
      return $grandParent_target$$126$$
    }
    var $parent$$90$$ = $grandParent_target$$126$$.getParent();
    if($parent$$90$$) {
      if($id$$307$$ && "zoom" == $id$$307$$.substring(0, 4)) {
        return $grandParent_target$$126$$
      }
      if($id$$307$$ && "_bubble_" == $id$$307$$.substring(0, 8) && $parent$$90$$.$_node$) {
        return $parent$$90$$
      }
      if($grandParent_target$$126$$ = $parent$$90$$.getParent()) {
        if($id$$307$$ && "_bubble_" == $id$$307$$.substring(0, 8) && $grandParent_target$$126$$.$_node$) {
          return $grandParent_target$$126$$
        }
        if(($id$$307$$ = $grandParent_target$$126$$.getId()) && "_bubble_" == $id$$307$$.substring(0, 8) && $grandParent_target$$126$$.getParent()) {
          return $grandParent_target$$126$$.getParent()
        }
      }
    }
  }
  return null
};
D.$DvtTimeline$$.prototype.$getAutomation$ = function $$DvtTimeline$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtTimelineAutomation$$(this));
  return this.$Automation$
};
D.$DvtTimeline$$.prototype.getAutomation = D.$DvtTimeline$$.prototype.$getAutomation$;
D.$DvtTimeline$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_StaticMethods_clearOverview$$ = function $$JSCompiler_StaticMethods_clearOverview$$$($JSCompiler_StaticMethods_clearOverview$self$$) {
  $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ && ($JSCompiler_StaticMethods_clearOverview$self$$.removeChild($JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$), $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ = null)
};
D.$DvtTimelineAutomation$$ = (0,D.$JSCompiler_set$$)("$_timeline$");
(0,D.$goog$exportPath_$$)("DvtTimelineAutomation", D.$DvtTimelineAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineAutomation$$, D.$DvtAutomation$$, "DvtTimelineAutomation");
D.$DvtTimelineAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineAutomation$$$$$GetSubIdForDomElement$$($displayable$$110_logicalObj$$17$$) {
  if(($displayable$$110_logicalObj$$17$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_timeline$.$EventManager$, $displayable$$110_logicalObj$$17$$)) && $displayable$$110_logicalObj$$17$$ instanceof D.$DvtTimelineSeriesNode$$) {
    for(var $i$$857$$ = 0;$i$$857$$ < this.$_timeline$.$_series$.length;$i$$857$$++) {
      var $itemIndex$$11$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_timeline$.$_series$[$i$$857$$].$_items$, $displayable$$110_logicalObj$$17$$);
      if(-1 != $itemIndex$$11$$) {
        return"timelineItem[" + $i$$857$$ + "][" + $itemIndex$$11$$ + "]"
      }
    }
  }
  return null
};
D.$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineAutomation$$$$$getDomElementForSubId$$($series$$24_subId$$32$$) {
  if($series$$24_subId$$32$$) {
    var $parenIndex$$ = $series$$24_subId$$32$$.indexOf("[");
    if(0 < $parenIndex$$ && "timelineItem" === $series$$24_subId$$32$$.substring(0, $parenIndex$$)) {
      var $endParenIndex$$ = $series$$24_subId$$32$$.indexOf("]");
      if(0 < $endParenIndex$$) {
        var $itemIndex$$12_node$$310$$ = (0,window.parseInt)($series$$24_subId$$32$$.substring($endParenIndex$$ + 2, $series$$24_subId$$32$$.length - 1));
        if($series$$24_subId$$32$$ = this.$_timeline$.$_series$[(0,window.parseInt)($series$$24_subId$$32$$.substring($parenIndex$$ + 1, $endParenIndex$$))]) {
          if($itemIndex$$12_node$$310$$ = $series$$24_subId$$32$$.$_items$[$itemIndex$$12_node$$310$$]) {
            return $itemIndex$$12_node$$310$$.$getDisplayables$()[0].$getElem$()
          }
        }
      }
    }
  }
  return null
};
D.$DvtTimelineAutomation$$.prototype.getDomElementForSubId = D.$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtTimelineDefaults$$ = function $$DvtTimelineDefaults$$$() {
  this.Init({alta:D.$DvtTimelineDefaults$VERSION_1$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtTimelineDefaults");
D.$DvtTimelineDefaults$VERSION_1$$ = {animationOnDataChange:"none", animationOnDisplay:"none", orientation:"horizontal", overview:{rendered:"off"}, selectionMode:"none", styleDefaults:{animationDuration:500, borderColor:"#d9dfe3", item:{backgroundColor:"#ffffff", borderColor:"#648baf", descriptionStyle:new D.$DvtCSSStyle$$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #084B8A; white-space: nowrap;"), hoverBorderColor:"#85bbe7", selectedBorderColor:"#000000", 
titleStyle:new D.$DvtCSSStyle$$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #000000; white-space: nowrap;")}, majorAxis:{labelStyle:new D.$DvtCSSStyle$$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; color: #4f4f4f; background-color: rgba(249,249,249,0.8); white-space: nowrap;"), separatorColor:"#bcc7d2"}, minorAxis:{backgroundColor:"#f9f9f9", borderColor:"#d9dfe3", labelStyle:new D.$DvtCSSStyle$$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #333333;"), 
separatorColor:"#bcc7d2"}, overview:{backgroundColor:"#e6ecf3", labelStyle:new D.$DvtCSSStyle$$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #4f4f4f;"), window:{backgroundColor:"#ffffff", borderColor:"#4f4f4f"}}, referenceObject:{color:"#ff591f"}, series:{backgroundColor:"#f9f9f9", colors:D.$DvtCSSStyle$COLORS_ALTA$$, emptyTextStyle:new D.$DvtCSSStyle$$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #333333; white-space: nowrap;"), 
labelStyle:new D.$DvtCSSStyle$$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: bold; color: #252525; background-color: rgba(249,249,249,0.8); white-space: nowrap;")}}};
D.$DvtTimelineParser$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineParser$$, D.$DvtObj$$, "DvtTimelineParser");
D.$DvtTimelineParser$$.prototype.parse = function $$DvtTimelineParser$$$$parse$($options$$283_overview$$7$$) {
  this.$_itemSelection$ = $options$$283_overview$$7$$.selectionMode;
  $options$$283_overview$$7$$.viewportStart && (this.$_viewStartTime$ = new window.Date($options$$283_overview$$7$$.viewportStart));
  $options$$283_overview$$7$$.viewportEnd && (this.$_viewEndTime$ = new window.Date($options$$283_overview$$7$$.viewportEnd));
  this.$_startTime$ = new window.Date($options$$283_overview$$7$$.start);
  this.$_endTime$ = new window.Date($options$$283_overview$$7$$.end);
  var $ret$$100$$ = this.$ParseRootAttributes$();
  $ret$$100$$.$inlineStyle$ = $options$$283_overview$$7$$.style;
  var $majorAxis_minorAxis_referenceObjects$$3$$ = $options$$283_overview$$7$$.minorAxis;
  if($majorAxis_minorAxis_referenceObjects$$3$$) {
    var $referenceObjectsValueArray_scale$$71$$ = $majorAxis_minorAxis_referenceObjects$$3$$.scale;
    $ret$$100$$.scale = $referenceObjectsValueArray_scale$$71$$;
    var $i$$876_zoomOrder$$3$$ = $majorAxis_minorAxis_referenceObjects$$3$$.zoomOrder;
    null == $i$$876_zoomOrder$$3$$ ? $i$$876_zoomOrder$$3$$ = [$referenceObjectsValueArray_scale$$71$$] : $i$$876_zoomOrder$$3$$.reverse();
    $ret$$100$$.$zoomOrder$ = $i$$876_zoomOrder$$3$$;
    $ret$$100$$.$converter$ = $majorAxis_minorAxis_referenceObjects$$3$$.converter;
    $ret$$100$$.$axisStyle$ = $majorAxis_minorAxis_referenceObjects$$3$$.style
  }
  if($majorAxis_minorAxis_referenceObjects$$3$$ = $options$$283_overview$$7$$.majorAxis) {
    $ret$$100$$.$seriesScale$ = $majorAxis_minorAxis_referenceObjects$$3$$.scale, $ret$$100$$.$seriesConverter$ = $majorAxis_minorAxis_referenceObjects$$3$$.converter
  }
  $ret$$100$$.$shortDesc$ = $options$$283_overview$$7$$.shortDesc;
  $ret$$100$$.id = $options$$283_overview$$7$$.id;
  $ret$$100$$.orientation = $options$$283_overview$$7$$.orientation;
  if(($majorAxis_minorAxis_referenceObjects$$3$$ = $options$$283_overview$$7$$.referenceObjects) && 0 < $majorAxis_minorAxis_referenceObjects$$3$$.length) {
    $referenceObjectsValueArray_scale$$71$$ = [];
    for($i$$876_zoomOrder$$3$$ = 0;$i$$876_zoomOrder$$3$$ < $majorAxis_minorAxis_referenceObjects$$3$$.length;$i$$876_zoomOrder$$3$$++) {
      $referenceObjectsValueArray_scale$$71$$.push(new window.Date($majorAxis_minorAxis_referenceObjects$$3$$[$i$$876_zoomOrder$$3$$].value))
    }
    $ret$$100$$.$referenceObjects$ = $referenceObjectsValueArray_scale$$71$$
  }
  $options$$283_overview$$7$$ = $options$$283_overview$$7$$.overview;
  $ret$$100$$.$hasOverview$ = null != $options$$283_overview$$7$$ && "on" == $options$$283_overview$$7$$.rendered ? !0 : !1;
  return $ret$$100$$
};
D.$DvtTimelineParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimelineParser$$$$$ParseRootAttributes$$() {
  var $ret$$101$$ = {};
  $ret$$101$$.$origStart$ = this.$_startTime$;
  $ret$$101$$.$origEnd$ = this.$_endTime$;
  $ret$$101$$.orientation = "horizontal";
  $ret$$101$$.start = this.$_startTime$.getTime();
  $ret$$101$$.end = this.$_endTime$.getTime();
  this.$_viewStartTime$ && ($ret$$101$$.$viewStart$ = this.$_viewStartTime$.getTime());
  this.$_viewEndTime$ && ($ret$$101$$.$viewEnd$ = this.$_viewEndTime$.getTime());
  $ret$$101$$.$selectionMode$ = "none";
  null != this.$_itemSelection$ && ($ret$$101$$.$selectionMode$ = this.$_itemSelection$);
  return $ret$$101$$
};
D.$DvtTimelineRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineRenderer$$, D.$DvtObj$$, "DvtTimelineRenderer");
D.$DvtTimelineRenderer$$.$renderTimeline$ = function $$DvtTimelineRenderer$$$$renderTimeline$$($timeline$$3$$) {
  D.$DvtTimelineRenderer$$.$_renderBackground$($timeline$$3$$);
  D.$DvtTimelineRenderer$$.$_renderScrollableCanvas$($timeline$$3$$);
  if((0,D.$JSCompiler_StaticMethods_hasValidOptions$$)($timeline$$3$$)) {
    D.$DvtTimelineRenderer$$.$_renderInnerCanvas$($timeline$$3$$, $timeline$$3$$.$_canvas$);
    D.$DvtTimelineRenderer$$.$_renderSeries$($timeline$$3$$, $timeline$$3$$.$_innerCanvas$);
    D.$DvtTimelineRenderer$$.$_renderSeriesLabels$($timeline$$3$$);
    D.$DvtTimelineRenderer$$.$_renderAxis$($timeline$$3$$, $timeline$$3$$.$_innerCanvas$);
    $timeline$$3$$.$_hasOverview$ ? D.$DvtTimelineRenderer$$.$_renderOverview$($timeline$$3$$) : (0,D.$JSCompiler_StaticMethods_clearOverview$$)($timeline$$3$$);
    if($timeline$$3$$.$_keyboardHandler$) {
      for(var $i$$877$$ = 0;$i$$877$$ < $timeline$$3$$.$_series$.length;$i$$877$$++) {
        var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$ = $timeline$$3$$.$_series$[$i$$877$$];
        if($JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_items$ && 0 < $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_items$.length) {
          (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($timeline$$3$$.$EventManager$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_items$[0]);
          break
        }
      }
    }
    D.$DvtTimelineRenderer$$.$_renderScrollHotspots$($timeline$$3$$);
    D.$DvtTimelineRenderer$$.$_renderZoomControls$($timeline$$3$$);
    $timeline$$3$$.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_applyInitialSelections$$)($timeline$$3$$);
    D.$DvtTimeUtils$$.$supportsTouch$() && (0,D.$JSCompiler_StaticMethods__setAriaProperty$$)($timeline$$3$$, "flowto", $timeline$$3$$.$_series$[0].getId());
    for($i$$877$$ = 0;$i$$877$$ < $timeline$$3$$.$_series$.length;$i$$877$$++) {
      var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$ = $timeline$$3$$.$_series$[$i$$877$$], $context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$ = $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$getCtx$();
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_rmAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_rmAnimationElems$.length ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_isAnimating$ = !0, $context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$ = new D.$DvtParallelPlayable$$($context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$, 
      new D.$DvtAnimFadeOut$$($context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_rmAnimationElems$, D.$DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$Options$))), $context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$.play(), (0,D.$DvtPlayable$appendOnEnd$$)($context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_onRmAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_mvAnimator$ ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_isAnimating$ = !0, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_mvAnimator$.play(), (0,D.$DvtPlayable$appendOnEnd$$)($JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_mvAnimator$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_onMvAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_frAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_frAnimationElems$.length && ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_isAnimating$ = !0, $context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$ = 
      new D.$DvtParallelPlayable$$($context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$, new D.$DvtAnimFadeIn$$($context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_frAnimationElems$, D.$DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$Options$), 0)), $context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$.play(), 
      (0,D.$DvtPlayable$appendOnEnd$$)($context$$inline_8957_fadeInAnimator$$inline_8959_fadeOutAnimator$$inline_8958$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$.$_onAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_8956_series$$26$$))
    }
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() && !(0,D.$JSCompiler_StaticMethods_isAnimating$$)($timeline$$3$$) && (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)($timeline$$3$$)
  }else {
    D.$DvtTimelineRenderer$$.$_renderEmptyText$($timeline$$3$$)
  }
};
D.$DvtTimelineRenderer$$.$_renderBackground$ = function $$DvtTimelineRenderer$$$$_renderBackground$$($timeline$$4$$) {
  $timeline$$4$$.$_background$ ? ((0,D.$JSCompiler_StaticMethods_setClipPath$$)($timeline$$4$$.$_background$, null), $timeline$$4$$.$_background$.$setWidth$($timeline$$4$$.$_backgroundWidth$), $timeline$$4$$.$_background$.$setHeight$($timeline$$4$$.$_backgroundHeight$)) : $timeline$$4$$.$_background$ = new D.$DvtRect$$($timeline$$4$$.$getCtx$(), 0, 0, $timeline$$4$$.$_backgroundWidth$, $timeline$$4$$.$_backgroundHeight$, "bg");
  $timeline$$4$$.$_background$.$setCSSStyle$($timeline$$4$$.$_style$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($timeline$$4$$.$_background$);
  var $cp$$10$$ = new D.$DvtClipPath$$;
  (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$10$$, 0, 0, $timeline$$4$$.$_backgroundWidth$, $timeline$$4$$.$_backgroundHeight$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($timeline$$4$$.$_background$, $cp$$10$$);
  $timeline$$4$$.$_background$.getParent() != $timeline$$4$$ && $timeline$$4$$.$addChild$($timeline$$4$$.$_background$)
};
D.$DvtTimelineRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineRenderer$$$$_renderScrollableCanvas$$($timeline$$5$$) {
  $timeline$$5$$.$_canvas$ || ($timeline$$5$$.$_canvas$ = new D.$DvtContainer$$($timeline$$5$$.$getCtx$(), "canvas"), $timeline$$5$$.$addChild$($timeline$$5$$.$_canvas$))
};
D.$DvtTimelineRenderer$$.$_renderInnerCanvas$ = function $$DvtTimelineRenderer$$$$_renderInnerCanvas$$($timeline$$6$$, $container$$196$$) {
  $timeline$$6$$.$_innerCanvas$ ? (0,D.$JSCompiler_StaticMethods_setClipPath$$)($timeline$$6$$.$_innerCanvas$, null) : $timeline$$6$$.$_innerCanvas$ = new D.$DvtContainer$$($timeline$$6$$.$getCtx$(), "iCanvas");
  var $cp$$11$$ = new D.$DvtClipPath$$;
  $timeline$$6$$.$isVertical$() ? ((0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$11$$, $timeline$$6$$.$_startX$, $timeline$$6$$.$_startY$, $timeline$$6$$.$_canvasSize$, $timeline$$6$$.$_canvasLength$), $timeline$$6$$.$_innerCanvas$.$setTranslateX$($timeline$$6$$.$_startX$), $timeline$$6$$.$_innerCanvas$.$setTranslateY$($timeline$$6$$.$_startY$ + $timeline$$6$$.$_startPos$)) : ((0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$11$$, $timeline$$6$$.$_startX$, $timeline$$6$$.$_startY$, $timeline$$6$$.$_canvasLength$, 
  $timeline$$6$$.$_canvasSize$), $timeline$$6$$.$_innerCanvas$.$setTranslateX$($timeline$$6$$.$_startX$ + $timeline$$6$$.$_startPos$), $timeline$$6$$.$_innerCanvas$.$setTranslateY$($timeline$$6$$.$_startY$));
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($container$$196$$, $cp$$11$$);
  $timeline$$6$$.$_innerCanvas$.getParent() != $container$$196$$ && $container$$196$$.$addChild$($timeline$$6$$.$_innerCanvas$)
};
D.$DvtTimelineRenderer$$.$_renderSeries$ = function $$DvtTimelineRenderer$$$$_renderSeries$$($timeline$$7$$, $container$$197$$) {
  if($timeline$$7$$.$_series$) {
    var $isRTL$$44$$ = (0,D.$DvtAgent$isRightToLeft$$)($timeline$$7$$.$getCtx$()), $seriesCount$$30$$ = $timeline$$7$$.$_series$.length, $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($timeline$$7$$, $seriesCount$$30$$);
    if(!$timeline$$7$$.$isVertical$() && 1 < $seriesCount$$30$$ && $timeline$$7$$.$_canvasSize$ % 2 != $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$ % 2) {
      var $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$ = $timeline$$7$$.$_timeAxis$, $contentSize$$inline_11529_i$$878$$ = $timeline$$7$$.$_timeAxis$.$_contentSize$ + 1;
      $contentSize$$inline_11529_i$$878$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$.$_contentSize$ = $contentSize$$inline_11529_i$$878$$);
      $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($timeline$$7$$, $seriesCount$$30$$)
    }
    $timeline$$7$$.$_seriesSize$ = ($timeline$$7$$.$_canvasSize$ - $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$) / $seriesCount$$30$$;
    for($contentSize$$inline_11529_i$$878$$ = 0;$contentSize$$inline_11529_i$$878$$ < $seriesCount$$30$$;$contentSize$$inline_11529_i$$878$$++) {
      var $series$$27$$ = $timeline$$7$$.$_series$[$contentSize$$inline_11529_i$$878$$];
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($series$$27$$, null);
      var $cp$$12$$ = new D.$DvtClipPath$$;
      if($timeline$$7$$.$isVertical$()) {
        var $key$$129_posMatrix$$1$$ = $isRTL$$44$$ ? window.Math.abs($contentSize$$inline_11529_i$$878$$ - 1) : $contentSize$$inline_11529_i$$878$$;
        $isRTL$$44$$ && 1 == $timeline$$7$$.$_series$.length ? ((0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$12$$, $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$, 0, $timeline$$7$$.$_seriesSize$, $timeline$$7$$.$_contentLength$), $key$$129_posMatrix$$1$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$, 0)) : ((0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$12$$, $key$$129_posMatrix$$1$$ * ($timeline$$7$$.$_seriesSize$ + 
        $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$), 0, $timeline$$7$$.$_seriesSize$, $timeline$$7$$.$_contentLength$), $key$$129_posMatrix$$1$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $key$$129_posMatrix$$1$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$), 0));
        var $width$$176$$ = $timeline$$7$$.$_seriesSize$, $height$$158$$ = $timeline$$7$$.$_contentLength$
      }else {
        (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$12$$, 0, $contentSize$$inline_11529_i$$878$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$), $timeline$$7$$.$_contentLength$, $timeline$$7$$.$_seriesSize$), $key$$129_posMatrix$$1$$ = new D.$DvtMatrix$$(1, 0, 0, 1, 0, $contentSize$$inline_11529_i$$878$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_11528_axisSize$$3$$)), $width$$176$$ = $timeline$$7$$.$_contentLength$, 
        $height$$158$$ = $timeline$$7$$.$_seriesSize$
      }
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($series$$27$$, $cp$$12$$);
      $series$$27$$.$setMatrix$($key$$129_posMatrix$$1$$);
      $series$$27$$.getParent() != $container$$197$$ && $container$$197$$.$addChild$($series$$27$$);
      $series$$27$$.$render$($timeline$$7$$.$_seriesOptions$[$contentSize$$inline_11529_i$$878$$], $width$$176$$, $height$$158$$)
    }
  }
};
D.$DvtTimelineRenderer$$.$_renderSeriesLabels$ = function $$DvtTimelineRenderer$$$$_renderSeriesLabels$$($timeline$$8$$) {
  if($timeline$$8$$.$_series$) {
    var $context$$624$$ = $timeline$$8$$.$getCtx$(), $isRTL$$45$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$624$$);
    if($timeline$$8$$.$_seriesLabels$) {
      for(var $i$$879$$ = 0;$i$$879$$ < $timeline$$8$$.$_seriesLabels$.length;$i$$879$$++) {
        $timeline$$8$$.removeChild($timeline$$8$$.$_seriesLabels$[$i$$879$$])
      }
    }
    $timeline$$8$$.$_seriesLabels$ = [];
    for(var $seriesCount$$31$$ = $timeline$$8$$.$_series$.length, $labelSpacing$$ = D.$DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$(), $doubleLabelSpacing$$ = 2 * $labelSpacing$$, $i$$879$$ = 0;$i$$879$$ < $seriesCount$$31$$;$i$$879$$++) {
      var $series$$28_seriesEmptyText_seriesEmptyTextElem$$ = $timeline$$8$$.$_series$[$i$$879$$], $seriesLabel$$2_seriesLabelElem$$ = $series$$28_seriesEmptyText_seriesEmptyTextElem$$.$getLabel$();
      if(null != $seriesLabel$$2_seriesLabelElem$$) {
        var $posX$$5_seriesLabelStyle$$ = D.$DvtTimelineStyleUtils$$.$getSeriesLabelStyle$($timeline$$8$$.$Options$), $seriesLabel$$2_seriesLabelElem$$ = new D.$DvtOutputText$$($context$$624$$, $seriesLabel$$2_seriesLabelElem$$, 0, 0, "sl_s" + $i$$879$$);
        $seriesLabel$$2_seriesLabelElem$$.$setCSSStyle$($posX$$5_seriesLabelStyle$$);
        $timeline$$8$$.$addChild$($seriesLabel$$2_seriesLabelElem$$);
        var $dim$$87_posMatrix$$2$$ = $seriesLabel$$2_seriesLabelElem$$.$getDimensions$();
        $timeline$$8$$.removeChild($seriesLabel$$2_seriesLabelElem$$);
        var $totalSpace$$2_width$$177$$ = $timeline$$8$$.$isVertical$() ? $timeline$$8$$.$_seriesSize$ : $timeline$$8$$.$_canvasLength$, $totalSpace$$2_width$$177$$ = window.Math.min($dim$$87_posMatrix$$2$$.$w$, $totalSpace$$2_width$$177$$ - -38 * ($i$$879$$ - 1) - $doubleLabelSpacing$$), $seriesLabelPadding$$ = D.$DvtTimelineStyleUtils$$.$getSeriesLabelPadding$(), $backgroundRect$$2$$ = new D.$DvtRect$$($context$$624$$, 0, 0, $totalSpace$$2_width$$177$$ + 2 * $seriesLabelPadding$$, $dim$$87_posMatrix$$2$$.$h$ + 
        2 * $seriesLabelPadding$$, "slb_s" + $i$$879$$);
        $backgroundRect$$2$$.$setCSSStyle$($posX$$5_seriesLabelStyle$$);
        (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($backgroundRect$$2$$, 3);
        if($timeline$$8$$.$isVertical$()) {
          $posX$$5_seriesLabelStyle$$ = $isRTL$$45$$ ? window.Math.abs($i$$879$$ - 1) * ($timeline$$8$$.$_canvasSize$ - $totalSpace$$2_width$$177$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$8$$.$_startX$ + 38 * ($i$$879$$ - 1) : $i$$879$$ * ($timeline$$8$$.$_canvasSize$ - $totalSpace$$2_width$$177$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$8$$.$_startX$ + -38 * ($i$$879$$ - 1), $posY$$4$$ = $timeline$$8$$.$_startY$ + $labelSpacing$$
        }else {
          var $posX$$5_seriesLabelStyle$$ = $isRTL$$45$$ ? $timeline$$8$$.$_canvasLength$ - $totalSpace$$2_width$$177$$ - $labelSpacing$$ - -38 * ($i$$879$$ - 1) : $timeline$$8$$.$_startX$ + $labelSpacing$$ + -38 * ($i$$879$$ - 1), $posY$$4$$ = $i$$879$$ * ($timeline$$8$$.$_canvasSize$ - $dim$$87_posMatrix$$2$$.$h$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$8$$.$_startY$
        }
        $dim$$87_posMatrix$$2$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $posX$$5_seriesLabelStyle$$, $posY$$4$$);
        $seriesLabel$$2_seriesLabelElem$$.$setMatrix$($dim$$87_posMatrix$$2$$);
        $dim$$87_posMatrix$$2$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $posX$$5_seriesLabelStyle$$ - $seriesLabelPadding$$, $posY$$4$$ - $seriesLabelPadding$$);
        $backgroundRect$$2$$.$setMatrix$($dim$$87_posMatrix$$2$$);
        $timeline$$8$$.$addChild$($backgroundRect$$2$$);
        D.$DvtTextUtils$$.$fitText$($seriesLabel$$2_seriesLabelElem$$, $totalSpace$$2_width$$177$$, window.Infinity, $timeline$$8$$);
        $timeline$$8$$.$_seriesLabels$.push($backgroundRect$$2$$);
        $timeline$$8$$.$_seriesLabels$.push($seriesLabel$$2_seriesLabelElem$$)
      }
      $series$$28_seriesEmptyText_seriesEmptyTextElem$$.$_isEmpty$ && ($series$$28_seriesEmptyText_seriesEmptyTextElem$$ = $series$$28_seriesEmptyText_seriesEmptyTextElem$$.$getEmptyText$(), null != $series$$28_seriesEmptyText_seriesEmptyTextElem$$ && ($series$$28_seriesEmptyText_seriesEmptyTextElem$$ = new D.$DvtOutputText$$($context$$624$$, $series$$28_seriesEmptyText_seriesEmptyTextElem$$, 0, 0, "et_s" + $i$$879$$), $series$$28_seriesEmptyText_seriesEmptyTextElem$$.$setCSSStyle$(D.$DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$8$$.$Options$)), 
      $timeline$$8$$.$addChild$($series$$28_seriesEmptyText_seriesEmptyTextElem$$), $dim$$87_posMatrix$$2$$ = $series$$28_seriesEmptyText_seriesEmptyTextElem$$.$getDimensions$(), $timeline$$8$$.removeChild($series$$28_seriesEmptyText_seriesEmptyTextElem$$), $dim$$87_posMatrix$$2$$ = new D.$DvtMatrix$$(1, 0, 0, 1, ($timeline$$8$$.$_canvasLength$ - $dim$$87_posMatrix$$2$$.$w$) / 2 + $timeline$$8$$.$_startX$, $i$$879$$ * ($timeline$$8$$.$_seriesSize$ + (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($timeline$$8$$, 
      $seriesCount$$31$$)) + ($timeline$$8$$.$_seriesSize$ - $dim$$87_posMatrix$$2$$.$h$) / 2 + $timeline$$8$$.$_startY$), $series$$28_seriesEmptyText_seriesEmptyTextElem$$.$setMatrix$($dim$$87_posMatrix$$2$$), $timeline$$8$$.$addChild$($series$$28_seriesEmptyText_seriesEmptyTextElem$$), $timeline$$8$$.$_seriesLabels$.push($series$$28_seriesEmptyText_seriesEmptyTextElem$$)))
    }
  }
};
D.$DvtTimelineRenderer$$.$_renderAxis$ = function $$DvtTimelineRenderer$$$$_renderAxis$$($timeline$$9$$, $container$$198$$) {
  var $context$$625$$ = $timeline$$9$$.$getCtx$(), $cp$$13_isRTL$$46$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$625$$), $axisStart_seriesCount$$32$$ = $timeline$$9$$.$_series$.length, $axisSize$$4$$ = $timeline$$9$$.$_timeAxis$.$getSize$(), $axisVisibleSize$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($timeline$$9$$, $axisStart_seriesCount$$32$$), $axisStart_seriesCount$$32$$ = 1 == $axisStart_seriesCount$$32$$ ? $timeline$$9$$.$_canvasSize$ - $axisVisibleSize$$ : $timeline$$9$$.$_canvasSize$ / 
  $axisStart_seriesCount$$32$$ - $axisVisibleSize$$ / 2;
  $cp$$13_isRTL$$46$$ && ($timeline$$9$$.$isVertical$() && 1 == $timeline$$9$$.$_series$.length) && ($axisStart_seriesCount$$32$$ = 0);
  null == $timeline$$9$$.$_axis$ ? ($cp$$13_isRTL$$46$$ = new D.$DvtClipPath$$, $timeline$$9$$.$isVertical$() ? ($timeline$$9$$.$_axis$ = new D.$DvtRect$$($context$$625$$, $axisStart_seriesCount$$32$$, -$timeline$$9$$.$_axisBorderWidth$, $axisSize$$4$$, $timeline$$9$$.$_axisLength$, "axis"), (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$46$$, $axisStart_seriesCount$$32$$, 0, $axisSize$$4$$, $timeline$$9$$.$_contentLength$)) : ($timeline$$9$$.$_axis$ = new D.$DvtRect$$($context$$625$$, 
  -$timeline$$9$$.$_axisBorderWidth$, $axisStart_seriesCount$$32$$, $timeline$$9$$.$_axisLength$, $axisSize$$4$$, "axis"), (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$46$$, 0, $axisStart_seriesCount$$32$$, $timeline$$9$$.$_contentLength$, $axisSize$$4$$)), $timeline$$9$$.$_axis$.$setCSSStyle$($timeline$$9$$.$_axisStyle$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($timeline$$9$$.$_axis$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($timeline$$9$$.$_axis$, $cp$$13_isRTL$$46$$), 
  $container$$198$$.$addChild$($timeline$$9$$.$_axis$)) : ((0,D.$JSCompiler_StaticMethods_setClipPath$$)($timeline$$9$$.$_axis$, null), $cp$$13_isRTL$$46$$ = new D.$DvtClipPath$$, $timeline$$9$$.$isVertical$() ? ($timeline$$9$$.$_axis$.$setX$($axisStart_seriesCount$$32$$), $timeline$$9$$.$_axis$.$setY$(-$timeline$$9$$.$_axisBorderWidth$), $timeline$$9$$.$_axis$.$setWidth$($axisSize$$4$$), $timeline$$9$$.$_axis$.$setHeight$($timeline$$9$$.$_axisLength$), (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$46$$, 
  $axisStart_seriesCount$$32$$, 0, $axisSize$$4$$, $timeline$$9$$.$_contentLength$)) : ($timeline$$9$$.$_axis$.$setX$(-$timeline$$9$$.$_axisBorderWidth$), $timeline$$9$$.$_axis$.$setY$($axisStart_seriesCount$$32$$), $timeline$$9$$.$_axis$.$setWidth$($timeline$$9$$.$_axisLength$), $timeline$$9$$.$_axis$.$setHeight$($axisSize$$4$$), (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$13_isRTL$$46$$, 0, $axisStart_seriesCount$$32$$, $timeline$$9$$.$_contentLength$, $axisSize$$4$$)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($timeline$$9$$.$_axis$, 
  $cp$$13_isRTL$$46$$));
  D.$DvtTimelineRenderer$$.$_renderSeriesTicks$($timeline$$9$$, $axisStart_seriesCount$$32$$)
};
D.$DvtTimelineRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineRenderer$$$$_renderSeriesTicks$$($timeline$$10$$, $axisStartPos$$) {
  $timeline$$10$$.$_axis$.$removeChildren$();
  var $axisStart$$1_separatorStyle$$ = new D.$DvtCSSStyle$$(D.$DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$());
  if($timeline$$10$$.$_axisStyleDefaults$) {
    var $separatorColor$$ = $timeline$$10$$.$_axisStyleDefaults$.separatorColor;
    $separatorColor$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($axisStart$$1_separatorStyle$$, "color:" + $separatorColor$$ + ";")
  }
  $timeline$$10$$.$_separatorStroke$ = new D.$DvtSolidStroke$$($axisStart$$1_separatorStyle$$.$getStyle$("color"));
  $axisStart$$1_separatorStyle$$ = $axisStartPos$$ + $timeline$$10$$.$_timeAxis$.$_borderWidth$;
  D.$DvtTimelineRenderer$$.$_renderTimeAxis$($timeline$$10$$, $timeline$$10$$.$_fetchStartPos$, $timeline$$10$$.$_fetchEndPos$, $timeline$$10$$.$_axis$, $timeline$$10$$.$_contentLength$, $axisStart$$1_separatorStyle$$ + $timeline$$10$$.$_timeAxis$.$_contentSize$, $axisStart$$1_separatorStyle$$, $axisStart$$1_separatorStyle$$);
  D.$DvtTimelineRenderer$$.$_renderSeriesTimeAxis$($timeline$$10$$, $timeline$$10$$.$_fetchStartPos$, $timeline$$10$$.$_fetchEndPos$, $timeline$$10$$.$_innerCanvas$, $timeline$$10$$.$_contentLength$)
};
D.$DvtTimelineRenderer$$.$_renderTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderTimeAxis$$($timeline$$11$$, $dates$$1_startPos$$3$$, $endPos$$6_labels$$31$$, $container$$199_i$$880$$, $length$$26$$, $axisEnd$$1$$, $tickStart$$, $labelStart$$) {
  var $block_context$$626$$ = $timeline$$11$$.$getCtx$(), $isRTL$$47$$ = (0,D.$DvtAgent$isRightToLeft$$)($block_context$$626$$), $block_context$$626$$ = new D.$DvtContainer$$($block_context$$626$$, "block_" + $dates$$1_startPos$$3$$ + "_" + $endPos$$6_labels$$31$$);
  $block_context$$626$$.$startPos$ = $dates$$1_startPos$$3$$;
  $block_context$$626$$.$endPos$ = $endPos$$6_labels$$31$$;
  $container$$199_i$$880$$.$addChild$($block_context$$626$$);
  $dates$$1_startPos$$3$$ = $timeline$$11$$.$_dates$[$timeline$$11$$.$_zoomLevelOrder$];
  $endPos$$6_labels$$31$$ = $timeline$$11$$.$_labels$[$timeline$$11$$.$_zoomLevelOrder$];
  for($container$$199_i$$880$$ = 0;$container$$199_i$$880$$ < $dates$$1_startPos$$3$$.length - 1;$container$$199_i$$880$$++) {
    var $date$$16$$ = $dates$$1_startPos$$3$$[$container$$199_i$$880$$], $next$$18_nextPos$$ = $dates$$1_startPos$$3$$[$container$$199_i$$880$$ + 1], $currentPos$$1$$ = D.$DvtTimeUtils$$.$getDatePosition$($timeline$$11$$.$_start$, $timeline$$11$$.$_end$, $date$$16$$, $length$$26$$), $next$$18_nextPos$$ = D.$DvtTimeUtils$$.$getDatePosition$($timeline$$11$$.$_start$, $timeline$$11$$.$_end$, $next$$18_nextPos$$, $length$$26$$), $maxLength$$2$$ = $next$$18_nextPos$$ - $currentPos$$1$$;
    0 != $currentPos$$1$$ && (($timeline$$11$$.$isVertical$() ? $timeline$$11$$.$addTick$($block_context$$626$$, $axisEnd$$1$$, $tickStart$$, $currentPos$$1$$, $currentPos$$1$$, $timeline$$11$$.$_separatorStroke$, "s_tick" + $date$$16$$) : $isRTL$$47$$ ? $timeline$$11$$.$addTick$($block_context$$626$$, $length$$26$$ - $currentPos$$1$$, $length$$26$$ - $currentPos$$1$$, $axisEnd$$1$$, $tickStart$$, $timeline$$11$$.$_separatorStroke$, "s_tick" + $date$$16$$) : $timeline$$11$$.$addTick$($block_context$$626$$, 
    $currentPos$$1$$, $currentPos$$1$$, $axisEnd$$1$$, $tickStart$$, $timeline$$11$$.$_separatorStroke$, "s_tick" + $date$$16$$)).time = $date$$16$$);
    $timeline$$11$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_addAxisLabel$$)($block_context$$626$$, $endPos$$6_labels$$31$$[$container$$199_i$$880$$], $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 2, $currentPos$$1$$ + ($next$$18_nextPos$$ - $currentPos$$1$$) / 2 - 7, $axisEnd$$1$$ - $labelStart$$) : $isRTL$$47$$ ? (0,D.$JSCompiler_StaticMethods_addAxisLabel$$)($block_context$$626$$, $endPos$$6_labels$$31$$[$container$$199_i$$880$$], $length$$26$$ - ($currentPos$$1$$ + ($next$$18_nextPos$$ - 
    $currentPos$$1$$) / 2), $labelStart$$ + 2, $maxLength$$2$$) : (0,D.$JSCompiler_StaticMethods_addAxisLabel$$)($block_context$$626$$, $endPos$$6_labels$$31$$[$container$$199_i$$880$$], $currentPos$$1$$ + ($next$$18_nextPos$$ - $currentPos$$1$$) / 2, $labelStart$$ + 2, $maxLength$$2$$)
  }
};
D.$DvtTimelineRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderSeriesTimeAxis$$($timeline$$12$$, $currentDate$$1_startDate$$1_startPos$$4$$, $endPos$$7$$, $container$$200$$, $length$$27$$) {
  var $isRTL$$48$$ = (0,D.$DvtAgent$isRightToLeft$$)($timeline$$12$$.$getCtx$());
  if($timeline$$12$$.$_majorAxisLabels$) {
    for(var $i$$881_start$$53$$ = 0;$i$$881_start$$53$$ < $timeline$$12$$.$_majorAxisLabels$.length;$i$$881_start$$53$$++) {
      $container$$200$$.removeChild($timeline$$12$$.$_majorAxisLabels$[$i$$881_start$$53$$])
    }
  }
  $timeline$$12$$.$_majorAxisLabels$ = [];
  if($timeline$$12$$.$_seriesScale$) {
    var $i$$881_start$$53$$ = $timeline$$12$$.$_start$, $end$$37$$ = $timeline$$12$$.$_end$;
    $currentDate$$1_startDate$$1_startPos$$4$$ = D.$DvtTimeUtils$$.$getPositionDate$($i$$881_start$$53$$, $end$$37$$, $currentDate$$1_startDate$$1_startPos$$4$$, $length$$27$$);
    $currentDate$$1_startDate$$1_startPos$$4$$ = $timeline$$12$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$1_startDate$$1_startPos$$4$$);
    for(var $currentPos$$2$$ = D.$DvtTimeUtils$$.$getDatePosition$($i$$881_start$$53$$, $end$$37$$, $currentDate$$1_startDate$$1_startPos$$4$$, $length$$27$$);$currentPos$$2$$ < $endPos$$7$$;) {
      var $label$$110$$ = (0,D.$JSCompiler_StaticMethods_formatDate$$)($timeline$$12$$.$_seriesTimeAxis$, $currentDate$$1_startDate$$1_startPos$$4$$), $nextDate$$1$$ = $timeline$$12$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$1_startDate$$1_startPos$$4$$.getTime()), $next_time_pos$$2$$ = D.$DvtTimeUtils$$.$getDatePosition$($i$$881_start$$53$$, $end$$37$$, $nextDate$$1$$, $length$$27$$), $maxLength$$3$$ = $next_time_pos$$2$$ - $currentPos$$2$$, $time_pos$$2$$ = $currentPos$$2$$;
      ($isRTL$$48$$ ? $timeline$$12$$.$isVertical$() ? $timeline$$12$$.$addLabel$($container$$200$$, $timeline$$12$$.$_canvasSize$ - 5, $label$$110$$, $maxLength$$3$$, $time_pos$$2$$ + 18, D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), "o_label" + $currentPos$$2$$ + "_s0", !0, D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, $isRTL$$48$$) : $timeline$$12$$.$addLabel$($container$$200$$, $length$$27$$ - ($time_pos$$2$$ + 
      5), $label$$110$$, $maxLength$$3$$, $timeline$$12$$.$_seriesSize$ - 2, D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), "o_label" + $currentPos$$2$$ + "_s0", !0, D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, $isRTL$$48$$) : $timeline$$12$$.$isVertical$() ? $timeline$$12$$.$addLabel$($container$$200$$, 5, $label$$110$$, $maxLength$$3$$, $time_pos$$2$$ + 18, D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), 
      "o_label" + $currentPos$$2$$ + "_s0", !0, D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, $isRTL$$48$$) : $timeline$$12$$.$addLabel$($container$$200$$, $time_pos$$2$$ + 5, $label$$110$$, $maxLength$$3$$, $timeline$$12$$.$_seriesSize$ - 2, D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), "o_label" + $currentPos$$2$$ + "_s0", !0, D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, 
      $isRTL$$48$$)).time = $currentDate$$1_startDate$$1_startPos$$4$$.getTime();
      $currentDate$$1_startDate$$1_startPos$$4$$ = $nextDate$$1$$;
      $currentPos$$2$$ = $next_time_pos$$2$$
    }
  }
};
D.$DvtTimelineRenderer$$.$_renderOverview$ = function $$DvtTimelineRenderer$$$$_renderOverview$$($timeline$$13$$) {
  var $JSCompiler_temp_const$$9306_JSCompiler_temp_const$$9372_context$$628_sizing$$inline_8962$$ = $timeline$$13$$.$getCtx$(), $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_temp_const$$9306_JSCompiler_temp_const$$9372_context$$628_sizing$$inline_8962$$);
  if(null == $timeline$$13$$.$_overviewCanvas$) {
    var $addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$ = !0;
    $timeline$$13$$.$_overviewCanvas$ = new D.$DvtContainer$$($JSCompiler_temp_const$$9306_JSCompiler_temp_const$$9372_context$$628_sizing$$inline_8962$$, "oCanvas")
  }else {
    $timeline$$13$$.$_overviewCanvas$.$removeChildren$()
  }
  var $borderWidth$$20_height$$159$$ = $timeline$$13$$.$_style$.$getBorderWidth$(), $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$ = $borderWidth$$20_height$$159$$ / 2;
  if($timeline$$13$$.$isVertical$()) {
    var $width$$178$$ = $timeline$$13$$.$_overviewSize$, $borderWidth$$20_height$$159$$ = $timeline$$13$$.$Height$ - $borderWidth$$20_height$$159$$;
    $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ ? $timeline$$13$$.$_overviewCanvas$.$setTranslateX$($end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$) : $timeline$$13$$.$_overviewCanvas$.$setTranslateX$($timeline$$13$$.$Width$ - $timeline$$13$$.$_overviewSize$ - $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$);
    $timeline$$13$$.$_overviewCanvas$.$setTranslateY$($end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$)
  }else {
    $width$$178$$ = $timeline$$13$$.$Width$ - $borderWidth$$20_height$$159$$, $borderWidth$$20_height$$159$$ = $timeline$$13$$.$_overviewSize$, $timeline$$13$$.$_overviewCanvas$.$setTranslateY$($timeline$$13$$.$Height$ - $timeline$$13$$.$_overviewSize$ - $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$), $timeline$$13$$.$_overviewCanvas$.$setTranslateX$($end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$)
  }
  $addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$ && $timeline$$13$$.$addChild$($timeline$$13$$.$_overviewCanvas$);
  $timeline$$13$$.$_overview$ = new D.$DvtTimelineOverview$$($JSCompiler_temp_const$$9306_JSCompiler_temp_const$$9372_context$$628_sizing$$inline_8962$$, $timeline$$13$$.$HandleEvent$, $timeline$$13$$);
  $timeline$$13$$.$_overviewCanvas$.$addChild$($timeline$$13$$.$_overview$);
  var $JSCompiler_temp_const$$9306_JSCompiler_temp_const$$9372_context$$628_sizing$$inline_8962$$ = $timeline$$13$$.$_isVertical$ ? "" : '_ds\x3d"square" _dsx\x3d"1.3d" _dsy\x3d"0.9d" ', $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ = D.$DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$($timeline$$13$$.$Options$), $addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$ = D.$DvtTimelineStyleUtils$$.$getOverviewLabelStyle$($timeline$$13$$.$Options$), 
  $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$ = D.$DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$($timeline$$13$$.$Options$), $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$ = D.$DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$($timeline$$13$$.$Options$), $currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$ = D.$DvtTimelineStyleUtils$$.$getReferenceObjectColor$($timeline$$13$$.$Options$), 
  $JSCompiler_temp_const$$9306_JSCompiler_temp_const$$9372_context$$628_sizing$$inline_8962$$ = '\x3ctimelineOverview renstart\x3d"' + $timeline$$13$$.$_viewStartTime$ + '" start\x3d"' + $timeline$$13$$.$_start$ + '" end\x3d"' + $timeline$$13$$.$_end$ + '" width\x3d"' + $timeline$$13$$.$_contentLength$ + '" orn\x3d"' + ($timeline$$13$$.$_isVertical$ ? "vertical" : "horizontal") + ($timeline$$13$$.$_referenceObjects$ && 0 < $timeline$$13$$.$_referenceObjects$.length && $timeline$$13$$.$_referenceObjects$[0] ? 
  '" ocd\x3d"' + $timeline$$13$$.$_referenceObjects$[0].getTime() : "") + '" _hbi\x3d"' + ($timeline$$13$$.$_isVertical$ ? $timeline$$13$$.$_resources$.overviewHandleVert + '" _hw\x3d"15" _hh\x3d"3"' : $timeline$$13$$.$_resources$.overviewHandleHor + '" _hw\x3d"3" _hh\x3d"15"') + ' ovp\x3d"below" selmode\x3d"' + $timeline$$13$$.$_selectionMode$ + '" rtl\x3d"' + $timeline$$13$$.$isRTL$() + '" sid\x3d"ts1" _bts\x3d"none" _btc\x3d"#4f4f4f" _fc\x3d"#aadd77" ' + $JSCompiler_temp_const$$9306_JSCompiler_temp_const$$9372_context$$628_sizing$$inline_8962$$ + 
  '_do\x3d"0" _wbc\x3d"' + $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$ + '" _wbts\x3d"solid" _wbrs\x3d"solid" _wbbs\x3d"solid" _wbls\x3d"solid" _wbtc\x3d"' + $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$ + '" _wbrc\x3d"' + $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$ + '" _wbbc\x3d"' + $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$ + '" _wblc\x3d"' + $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$ + 
  '" _hfc\x3d"' + $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$ + '" _obc\x3d"' + $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ + '" _ctic\x3d"' + $currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$ + '" _ls\x3d"' + $addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$ + '" _tic\x3d"#BCC7D2" _tabc\x3d"#D9DFE3" _tabo\x3d"0" _bs\x3d"solid" _bc\x3d"#648BAF" _bw\x3d"1px" _bof\x3d"0px" _dbs\x3d"solid" _dbc\x3d"#648BAF" _dbw\x3d"1px" _hbs\x3d"solid" _hbc\x3d"#85bbe7" _hbw\x3d"2px" _hbof\x3d"0px" _hgc\x3d"#ebeced" _hgo\x3d"1" _hdbs\x3d"solid" _hdbc\x3d"#85bbe7" _hdbw\x3d"2px" _sbs\x3d"solid" _sbc\x3d"#000000" _sbw\x3d"2px" _sbof\x3d"0px" _sbo\x3d"1" _sdbs\x3d"solid" _sdbc\x3d"#000000" _sdbw\x3d"2px" _asbs\x3d"solid" _asbc\x3d"#000000" _asbw\x3d"2px" _asbof\x3d"0px" _asbo\x3d"1" _asgc\x3d"#e4f0fa" _asgo\x3d"1" _asdbs\x3d"solid" _asdbc\x3d"#000000" _asdbw\x3d"2px" _aoc\x3d"off"\x3e', 
  $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ = "\x3cticks\x3e";
  if($timeline$$13$$.$_seriesTimeAxis$) {
    for(var $addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$ = $timeline$$13$$.$_start$, $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$ = $timeline$$13$$.$_end$, $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$ = $timeline$$13$$.$_isVertical$ ? $timeline$$13$$.$Height$ : $timeline$$13$$.$Width$, $currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$ = 
    D.$DvtTimeUtils$$.$getPositionDate$($addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$, $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$, $timeline$$13$$.$_fetchStartPos$, $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$), $currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$ = $timeline$$13$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$), 
    $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$ = D.$DvtTimeUtils$$.$getDatePosition$($addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$, $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$, $currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$, $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$);$currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$ < 
    $timeline$$13$$.$_fetchEndPos$;) {
      var $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$ = (0,D.$JSCompiler_StaticMethods_formatDate$$)($timeline$$13$$.$_seriesTimeAxis$, $currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$), $endTime$$inline_11550_nextDate$$inline_11540$$ = $timeline$$13$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$.getTime()), 
      $next_time_pos$$inline_11541$$ = D.$DvtTimeUtils$$.$getDatePosition$($addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$, $end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$, $endTime$$inline_11550_nextDate$$inline_11540$$, $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$), $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ = 
      $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ + ('\x3ctick time\x3d"' + $currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$.getTime() + '" label\x3d"' + $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$ + '"/\x3e'), $currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$ = 
      $endTime$$inline_11550_nextDate$$inline_11540$$, $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$ = $next_time_pos$$inline_11541$$
    }
  }
  $JSCompiler_temp_const$$9306_JSCompiler_temp_const$$9372_context$$628_sizing$$inline_8962$$ += $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ + "\x3c/ticks\x3e";
  if($timeline$$13$$.$_series$) {
    $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ = "\x3cmarkers\x3e";
    $addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$ = $timeline$$13$$.$_series$.length;
    for($end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$ = 0;$end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$ < $addOverviewCanvas_labelStyle$$inline_8964_seriesCount$$inline_11545_start$$inline_11533$$;$end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$++) {
      $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$ = $timeline$$13$$.$_series$[$end$$inline_11534_halfBorderWidth$$2_i$$inline_11546_windowBackgroundColor$$inline_8965$$].$_items$;
      for($currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$ = 0;$currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$ < $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$.length;$currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$++) {
        $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$ = $items$$inline_11547_length$$inline_11535_windowBorderColor$$inline_8966$$[$currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$];
        $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ += '\x3cti rk\x3d"' + $currentDate$$inline_11537_j$$inline_11548_referenceObjectColor$$inline_8967_startDate$$inline_11536$$;
        $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ += '" tid\x3d"' + $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$.getId();
        $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ += '" t\x3d"' + $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$.$_startTime$;
        if($endTime$$inline_11550_nextDate$$inline_11540$$ = $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$.$_endTime$) {
          $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ += '" et\x3d"' + $endTime$$inline_11550_nextDate$$inline_11540$$, ($currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$ = $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$.$_durationFillColor$) && ($JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ += 
          '" dfc\x3d"' + $currentPos$$inline_11538_durationFillColor$$inline_11551_item$$inline_11549_label$$inline_11539$$)
        }
        $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ += '" _sd\x3d"true"/\x3e'
      }
    }
    $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ += "\x3c/markers\x3e"
  }else {
    $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ = void 0
  }
  $timeline$$13$$.$_overview$.$render$($JSCompiler_temp_const$$9306_JSCompiler_temp_const$$9372_context$$628_sizing$$inline_8962$$ + $JSCompiler_inline_result$$9373_backgroundColor$$inline_8963_isRTL$$49_overviewMarkers$$inline_11544_xml$$inline_11532$$ + "\x3c/timelineOverview\x3e", $width$$178$$, $borderWidth$$20_height$$159$$)
};
D.$DvtTimelineRenderer$$.$_renderScrollHotspots$ = function $$DvtTimelineRenderer$$$$_renderScrollHotspots$$($timeline$$14$$) {
  if($timeline$$14$$.$_series$) {
    var $context$$629$$ = $timeline$$14$$.$getCtx$(), $isRTL$$50$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$629$$), $seriesCount$$33$$ = $timeline$$14$$.$_series$.length, $axisSize$$6$$ = (0,D.$JSCompiler_StaticMethods_getTimeAxisVisibleSize$$)($timeline$$14$$, $seriesCount$$33$$);
    if($timeline$$14$$.$_scrollHotspotsContainers$) {
      for(var $i$$882$$ = 0;$i$$882$$ < $timeline$$14$$.$_scrollHotspotsContainers$.length;$i$$882$$++) {
        $timeline$$14$$.$_scrollHotspotsContainers$[$i$$882$$].$removeChildren$()
      }
    }else {
      var $addHotspotsContainers$$ = !0;
      $timeline$$14$$.$_scrollHotspotsContainers$ = []
    }
    $timeline$$14$$.$_scrollHotspots$ = [];
    for(var $hotspotPadding$$ = D.$DvtTimelineStyleUtils$$.$getHotspotPadding$(), $hotspotWidth$$ = D.$DvtTimelineStyleUtils$$.$getHotspotWidth$(), $hotspotHeight$$ = D.$DvtTimelineStyleUtils$$.$getHotspotHeight$(), $hotspotArrowWidth$$ = D.$DvtTimelineStyleUtils$$.$getHotspotArrowWidth$(), $hotspotArrowHeight$$ = D.$DvtTimelineStyleUtils$$.$getHotspotArrowHeight$(), $hotspotBackgroundColor$$ = D.$DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$(), $hotspotBorderRadius$$ = D.$DvtTimelineStyleUtils$$.$getHotspotBorderRadius$(), 
    $i$$882$$ = 0;$i$$882$$ < $seriesCount$$33$$;$i$$882$$++) {
      if($addHotspotsContainers$$) {
        var $scrollHotspots$$ = new D.$DvtContainer$$($context$$629$$, "hotspots_s" + $i$$882$$);
        $timeline$$14$$.$addChild$($scrollHotspots$$);
        $timeline$$14$$.$_scrollHotspotsContainers$.push($scrollHotspots$$)
      }else {
        $scrollHotspots$$ = $timeline$$14$$.$_scrollHotspotsContainers$[$i$$882$$]
      }
      if($timeline$$14$$.$isVertical$()) {
        var $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ = $isRTL$$50$$ ? window.Math.abs($i$$882$$ - 1) : $i$$882$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + ($timeline$$14$$.$_seriesSize$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + $hotspotPadding$$, $bottomY$$3_forwardY$$ = 
        $timeline$$14$$.$_startY$ + $timeline$$14$$.$_canvasLength$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $bottomY$$3_forwardY$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollUp, 
        $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollDown
      }else {
        var $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$14$$.$_startX$ + $timeline$$14$$.$_canvasLength$ - $hotspotWidth$$ - $hotspotPadding$$, $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + $i$$882$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + ($timeline$$14$$.$_seriesSize$ - $hotspotHeight$$) / 2, $bottomY$$3_forwardY$$ = $backY_topY$$1$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + 
        $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $arrowBackY_arrowTopY$$, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollRight
      }
      $backX_leftHotspot_topHotspot_topX$$ = new D.$DvtRect$$($context$$629$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "lhs");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($backX_leftHotspot_topHotspot_topX$$, $hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$(!1);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new D.$DvtImage$$($context$$629$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "lhs_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new D.$DvtRect$$($context$$629$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$3_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "rhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($bottomHotspot_bottomX_forwardX_rightHotspot$$, $hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$(!1);
      $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ = new D.$DvtImage$$($context$$629$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "rhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$14$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$14$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$14$$.$isVertical$() ? ($arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ = $isRTL$$50$$ ? window.Math.abs($i$$882$$ - 1) : $i$$882$$, $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$14$$.$_startX$ + ($arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ + 1) * 
      $timeline$$14$$.$_seriesSize$ + $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ * $axisSize$$6$$ - $hotspotWidth$$ - $hotspotPadding$$, $bottomY$$3_forwardY$$ = $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + ($timeline$$14$$.$_canvasLength$ - $hotspotHeight$$) / 2, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + 
      $hotspotArrowWidth$$ / 2, $arrowBottomY_arrowForwardY$$ = $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollRight) : ($bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + ($timeline$$14$$.$_canvasLength$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + 
      $i$$882$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + $hotspotPadding$$, $bottomY$$3_forwardY$$ = $timeline$$14$$.$_startY$ + ($i$$882$$ + 1) * $timeline$$14$$.$_seriesSize$ + $i$$882$$ * $axisSize$$6$$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, 
      $arrowBottomY_arrowForwardY$$ = $bottomY$$3_forwardY$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollDown);
      $backX_leftHotspot_topHotspot_topX$$ = new D.$DvtRect$$($context$$629$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "ths");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($backX_leftHotspot_topHotspot_topX$$, $hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$(!1);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new D.$DvtImage$$($context$$629$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "ths_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new D.$DvtRect$$($context$$629$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$3_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "bhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($bottomHotspot_bottomX_forwardX_rightHotspot$$, $hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$(!1);
      $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$ = new D.$DvtImage$$($context$$629$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "bhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$131_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$14$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$14$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$)
    }
  }
};
D.$DvtTimelineRenderer$$.$_renderZoomControls$ = function $$DvtTimelineRenderer$$$$_renderZoomControls$$($timeline$$15$$) {
  var $contentLength_context$$630$$ = $timeline$$15$$.$getCtx$(), $isRTL$$51$$ = (0,D.$DvtAgent$isRightToLeft$$)($contentLength_context$$630$$), $upState$$24$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($contentLength_context$$630$$, $timeline$$15$$.$_resources$.zoomIn), $overState$$21$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($contentLength_context$$630$$, $timeline$$15$$.$_resources$.zoomIn_h), $downState$$21$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($contentLength_context$$630$$, 
  $timeline$$15$$.$_resources$.zoomIn_a), $disabledState$$5$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($contentLength_context$$630$$, $timeline$$15$$.$_resources$.zoomIn_d);
  null == $timeline$$15$$.$zoomin$ ? ($timeline$$15$$.$zoomin$ = new D.$DvtTransientButton$$($contentLength_context$$630$$, $upState$$24$$, $overState$$21$$, $downState$$21$$, $disabledState$$5$$, $timeline$$15$$.$EventManager$, $timeline$$15$$.$EventManager$.$HandleZoomInClick$), $timeline$$15$$.$EventManager$.$associate$($timeline$$15$$.$zoomin$, $timeline$$15$$.$zoomin$)) : ((0,D.$JSCompiler_StaticMethods_setUpState$$)($timeline$$15$$.$zoomin$, $upState$$24$$), (0,D.$JSCompiler_StaticMethods_setOverState$$)($timeline$$15$$.$zoomin$, 
  $overState$$21$$), (0,D.$JSCompiler_StaticMethods_setDownState$$)($timeline$$15$$.$zoomin$, $downState$$21$$), (0,D.$JSCompiler_StaticMethods_setDisabledState$$)($timeline$$15$$.$zoomin$, $disabledState$$5$$));
  $upState$$24$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($contentLength_context$$630$$, $timeline$$15$$.$_resources$.zoomOut);
  $overState$$21$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($contentLength_context$$630$$, $timeline$$15$$.$_resources$.zoomOut_h);
  $downState$$21$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($contentLength_context$$630$$, $timeline$$15$$.$_resources$.zoomOut_a);
  $disabledState$$5$$ = (0,D.$DvtTransientButton$getStateFromURL$$)($contentLength_context$$630$$, $timeline$$15$$.$_resources$.zoomOut_d);
  null == $timeline$$15$$.$zoomout$ ? ($timeline$$15$$.$zoomout$ = new D.$DvtTransientButton$$($contentLength_context$$630$$, $upState$$24$$, $overState$$21$$, $downState$$21$$, $disabledState$$5$$, $timeline$$15$$.$EventManager$, $timeline$$15$$.$EventManager$.$HandleZoomOutClick$), $timeline$$15$$.$EventManager$.$associate$($timeline$$15$$.$zoomout$, $timeline$$15$$.$zoomout$)) : ((0,D.$JSCompiler_StaticMethods_setUpState$$)($timeline$$15$$.$zoomout$, $upState$$24$$), (0,D.$JSCompiler_StaticMethods_setOverState$$)($timeline$$15$$.$zoomout$, 
  $overState$$21$$), (0,D.$JSCompiler_StaticMethods_setDownState$$)($timeline$$15$$.$zoomout$, $downState$$21$$), (0,D.$JSCompiler_StaticMethods_setDisabledState$$)($timeline$$15$$.$zoomout$, $disabledState$$5$$));
  $timeline$$15$$.$zoomin$.$setTooltip$((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ZOOM_IN", null));
  $timeline$$15$$.$zoomout$.$setTooltip$((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ZOOM_OUT", null));
  $timeline$$15$$.$zoomin$.$hide$();
  $timeline$$15$$.$zoomout$.$hide$();
  D.$DvtTimeUtils$$.$supportsTouch$() && (D.$DvtToolkitUtils$$.$setAttrNullNS$($timeline$$15$$.$zoomin$.$getElem$(), "role", "button"), D.$DvtToolkitUtils$$.$setAttrNullNS$($timeline$$15$$.$zoomin$.$getElem$(), "aria-label", (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ZOOM_IN", null)), D.$DvtToolkitUtils$$.$setAttrNullNS$($timeline$$15$$.$zoomout$.$getElem$(), "role", "button"), D.$DvtToolkitUtils$$.$setAttrNullNS$($timeline$$15$$.$zoomout$.$getElem$(), "aria-label", (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "ZOOM_OUT", null)));
  $isRTL$$51$$ ? ($timeline$$15$$.$zoomin$.$setTranslateX$($timeline$$15$$.$_backgroundWidth$ - 44), $timeline$$15$$.$zoomout$.$setTranslateX$($timeline$$15$$.$_backgroundWidth$ - 44)) : ($timeline$$15$$.$zoomin$.$setTranslateX$($timeline$$15$$.$_startX$ + 11), $timeline$$15$$.$zoomout$.$setTranslateX$($timeline$$15$$.$_startX$ + 11));
  $timeline$$15$$.$zoomin$.$setTranslateY$($timeline$$15$$.$_startY$ + 11);
  $timeline$$15$$.$zoomout$.$setTranslateY$($timeline$$15$$.$_startY$ + 48);
  $timeline$$15$$.$zoomin$.getParent() != $timeline$$15$$.$_canvas$ && $timeline$$15$$.$_canvas$.$addChild$($timeline$$15$$.$zoomin$);
  $timeline$$15$$.$zoomout$.getParent() != $timeline$$15$$.$_canvas$ && $timeline$$15$$.$_canvas$.$addChild$($timeline$$15$$.$zoomout$);
  $contentLength_context$$630$$ = $timeline$$15$$.$_contentLength$;
  $contentLength_context$$630$$ >= $timeline$$15$$.$_maxContentLength$ && (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)($timeline$$15$$, !0);
  $timeline$$15$$.$_canvasLength$ >= $contentLength_context$$630$$ && (0,D.$JSCompiler_StaticMethods_disableZoomButton$$)($timeline$$15$$, !1)
};
D.$DvtTimelineRenderer$$.$_renderEmptyText$ = function $$DvtTimelineRenderer$$$$_renderEmptyText$$($timeline$$16$$) {
  var $emptyTextStr$$4$$ = $timeline$$16$$.$Options$.series ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "INVALID_DATA", null) : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NO_DATA", null);
  $timeline$$16$$.$_canvas$ && $timeline$$16$$.$_canvas$.$removeChildren$();
  (0,D.$JSCompiler_StaticMethods_clearOverview$$)($timeline$$16$$);
  D.$DvtTextUtils$$.$renderEmptyText$($timeline$$16$$.$_canvas$, $emptyTextStr$$4$$, new D.$DvtRectangle$$(0, 0, $timeline$$16$$.$_backgroundWidth$, $timeline$$16$$.$_backgroundHeight$), $timeline$$16$$.$EventManager$, D.$DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$16$$.$Options$))
};
D.$DvtTimelineStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineStyleUtils$$, D.$DvtObj$$, "DvtTimelineStyleUtils");
D.$DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$ = "border:1px #d9dfe3;background-color:#f9f9f9;";
D.$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$ = "background-color:#f9f9f9;border:1px #d9dfe3;";
D.$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2;";
D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$ = "background-color:#f9f9f9;";
D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$ = 20;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$ = 2;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2";
D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$ = 1;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$ = 60;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$ = 100;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$ = "#000000";
D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$ = 2;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$ = 0.6;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$ = 28;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$ = 28;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$ = 3;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$ = 14;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$ = 14;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$ = 0.3;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$ = 1;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$ = 2;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$ = 2;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$ = "rgba(249,249,249,0)";
D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$ = "#e4f0fa";
D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$ = "rgba(249,249,249,0)";
D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$ = 2;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$ = 20;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$ = 15;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$ = 10;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$ = 32;
D.$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$ = 32;
D.$DvtTimelineStyleUtils$$.$getItemDescriptionStyle$ = function $$DvtTimelineStyleUtils$$$$getItemDescriptionStyle$$($cssStyle$$40_item$$90_style$$122$$) {
  var $descriptionStyle$$ = $cssStyle$$40_item$$90_style$$122$$.$_series$.$getOptions$().styleDefaults.item.descriptionStyle;
  if($cssStyle$$40_item$$90_style$$122$$ = $cssStyle$$40_item$$90_style$$122$$.$getStyle$()) {
    $cssStyle$$40_item$$90_style$$122$$ = new D.$DvtCSSStyle$$($cssStyle$$40_item$$90_style$$122$$), (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($descriptionStyle$$, $cssStyle$$40_item$$90_style$$122$$)
  }
  return $descriptionStyle$$
};
D.$DvtTimelineStyleUtils$$.$getItemTitleStyle$ = function $$DvtTimelineStyleUtils$$$$getItemTitleStyle$$($cssStyle$$41_item$$91_style$$123$$) {
  var $titleStyle$$3$$ = $cssStyle$$41_item$$91_style$$123$$.$_series$.$getOptions$().styleDefaults.item.titleStyle;
  if($cssStyle$$41_item$$91_style$$123$$ = $cssStyle$$41_item$$91_style$$123$$.$getStyle$()) {
    $cssStyle$$41_item$$91_style$$123$$ = new D.$DvtCSSStyle$$($cssStyle$$41_item$$91_style$$123$$), (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($titleStyle$$3$$, $cssStyle$$41_item$$91_style$$123$$)
  }
  return $titleStyle$$3$$
};
D.$DvtTimelineStyleUtils$$.$getReferenceObjectColor$ = function $$DvtTimelineStyleUtils$$$$getReferenceObjectColor$$($options$$291$$) {
  return $options$$291$$.styleDefaults.referenceObject.color
};
D.$DvtTimelineStyleUtils$$.$getSeriesLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelStyle$$($options$$292$$) {
  return $options$$292$$.styleDefaults.series.labelStyle
};
D.$DvtTimelineStyleUtils$$.$getSeriesLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelPadding$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$
};
D.$DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelSpacing$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$
};
D.$DvtTimelineStyleUtils$$.$getEmptyTextStyle$ = function $$DvtTimelineStyleUtils$$$$getEmptyTextStyle$$($options$$293$$) {
  return $options$$293$$.styleDefaults.series.emptyTextStyle
};
D.$DvtTimelineStyleUtils$$.$getBubbleOffset$ = function $$DvtTimelineStyleUtils$$$$getBubbleOffset$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$
};
D.$DvtTimelineStyleUtils$$.$getBubbleSpacing$ = function $$DvtTimelineStyleUtils$$$$getBubbleSpacing$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$
};
D.$DvtTimelineStyleUtils$$.$getItemFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemFillColor$$($item$$92$$) {
  var $fillColor$$11_style$$124$$ = $item$$92$$.$getStyle$();
  return $fillColor$$11_style$$124$$ && ($fillColor$$11_style$$124$$ = (new D.$DvtCSSStyle$$($fillColor$$11_style$$124$$)).$getStyle$("background-color")) ? $fillColor$$11_style$$124$$ : $item$$92$$.$_series$.$getOptions$().styleDefaults.item.backgroundColor
};
D.$DvtTimelineStyleUtils$$.$getItemStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeColor$$($item$$93$$) {
  var $strokeColor$$6_style$$125$$ = $item$$93$$.$getStyle$();
  return $strokeColor$$6_style$$125$$ && ($strokeColor$$6_style$$125$$ = (new D.$DvtCSSStyle$$($strokeColor$$6_style$$125$$)).$getStyle$("border-color")) ? $strokeColor$$6_style$$125$$ : $item$$93$$.$_series$.$getOptions$().styleDefaults.item.borderColor
};
D.$DvtTimelineStyleUtils$$.$getItemStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeWidth$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$
};
D.$DvtTimelineStyleUtils$$.$getItemHoverFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverFillColor$$($item$$94$$) {
  var $hoverDefault$$ = $item$$94$$.$_series$.$getOptions$().styleDefaults.item.hoverBackgroundColor;
  return $hoverDefault$$ ? $hoverDefault$$ : D.$DvtTimelineStyleUtils$$.$getItemFillColor$($item$$94$$)
};
D.$DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeColor$$($item$$95$$) {
  var $hoverDefault$$1$$ = $item$$95$$.$_series$.$getOptions$().styleDefaults.item.hoverBorderColor;
  return $hoverDefault$$1$$ ? $hoverDefault$$1$$ : D.$DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$95$$)
};
D.$DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeWidth$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$
};
D.$DvtTimelineStyleUtils$$.$getItemSelectedFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedFillColor$$($item$$96$$) {
  var $selectedDefault$$ = $item$$96$$.$_series$.$getOptions$().styleDefaults.item.selectedBackgroundColor;
  return $selectedDefault$$ ? $selectedDefault$$ : D.$DvtTimelineStyleUtils$$.$getItemFillColor$($item$$96$$)
};
D.$DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeColor$$($item$$97$$) {
  var $selectedDefault$$1$$ = $item$$97$$.$_series$.$getOptions$().styleDefaults.item.selectedBorderColor;
  return $selectedDefault$$1$$ ? $selectedDefault$$1$$ : D.$DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$97$$)
};
D.$DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeWidth$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$
};
D.$DvtTimelineStyleUtils$$.$getSeriesStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesStyle$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$
};
D.$DvtTimelineStyleUtils$$.$getColorsArray$ = function $$DvtTimelineStyleUtils$$$$getColorsArray$$($options$$300$$) {
  return $options$$300$$.styleDefaults.series.colors
};
D.$DvtTimelineStyleUtils$$.$getDurationFeelerOffset$ = function $$DvtTimelineStyleUtils$$$$getDurationFeelerOffset$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$
};
D.$DvtTimelineStyleUtils$$.$getThumbnailWidth$ = function $$DvtTimelineStyleUtils$$$$getThumbnailWidth$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$
};
D.$DvtTimelineStyleUtils$$.$getThumbnailHeight$ = function $$DvtTimelineStyleUtils$$$$getThumbnailHeight$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$
};
D.$DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisSeparatorStyle$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$
};
D.$DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerActiveStrokeColor$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$
};
D.$DvtTimelineStyleUtils$$.$getItemInnerFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerFillColor$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$
};
D.$DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeColor$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$
};
D.$DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeWidth$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$
};
D.$DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getHotspotAnimationDuration$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$
};
D.$DvtTimelineStyleUtils$$.$getHotspotOpacity$ = function $$DvtTimelineStyleUtils$$$$getHotspotOpacity$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$
};
D.$DvtTimelineStyleUtils$$.$getTimelineStyle$ = function $$DvtTimelineStyleUtils$$$$getTimelineStyle$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$
};
D.$DvtTimelineStyleUtils$$.$getOverviewWidth$ = function $$DvtTimelineStyleUtils$$$$getOverviewWidth$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$
};
D.$DvtTimelineStyleUtils$$.$getOverviewHeight$ = function $$DvtTimelineStyleUtils$$$$getOverviewHeight$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$
};
D.$DvtTimelineStyleUtils$$.$getAxisStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisStyle$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$
};
D.$DvtTimelineStyleUtils$$.$getAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisLabelStyle$$($options$$301$$) {
  return $options$$301$$.styleDefaults.minorAxis.labelStyle
};
D.$DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBackgroundColor$$($options$$302$$) {
  return $options$$302$$.styleDefaults.overview.window.backgroundColor
};
D.$DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBorderColor$$($options$$303$$) {
  return $options$$303$$.styleDefaults.overview.window.borderColor
};
D.$DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewBackgroundColor$$($options$$304$$) {
  return $options$$304$$.styleDefaults.overview.backgroundColor
};
D.$DvtTimelineStyleUtils$$.$getOverviewLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getOverviewLabelStyle$$($options$$305$$) {
  return $options$$305$$.styleDefaults.overview.labelStyle
};
D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelStyle$$($options$$306$$) {
  return $options$$306$$.styleDefaults.majorAxis.labelStyle
};
D.$DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisSeparatorStyle$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$
};
D.$DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelPadding$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$
};
D.$DvtTimelineStyleUtils$$.$getHotspotPadding$ = function $$DvtTimelineStyleUtils$$$$getHotspotPadding$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$
};
D.$DvtTimelineStyleUtils$$.$getHotspotWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotWidth$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$
};
D.$DvtTimelineStyleUtils$$.$getHotspotHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotHeight$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$
};
D.$DvtTimelineStyleUtils$$.$getHotspotArrowWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowWidth$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$
};
D.$DvtTimelineStyleUtils$$.$getHotspotArrowHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowHeight$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$
};
D.$DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getHotspotBackgroundColor$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$
};
D.$DvtTimelineStyleUtils$$.$getHotspotBorderRadius$ = function $$DvtTimelineStyleUtils$$$$getHotspotBorderRadius$$() {
  return D.$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$
};
D.$DvtTimelineStyleUtils$$.$getAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getAnimationDuration$$($options$$307$$) {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$307$$.styleDefaults.animationDuration) / 1E3
};
D.$DvtTimelineSeries$$ = function $$DvtTimelineSeries$$$($context$$631$$, $callback$$175$$, $callbackObj$$120$$) {
  this.Init($context$$631$$, $callback$$175$$, $callbackObj$$120$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeries$$, D.$DvtTimeComponent$$, "DvtTimelineSeries");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeries$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$632$$, $callback$$176$$, $callbackObj$$121$$) {
  D.$DvtTimelineSeries$$.$superclass$.Init.call(this, $context$$632$$, $callback$$176$$, $callbackObj$$121$$);
  this.$_blocks$ = [];
  this.$_renderedReferenceObjects$ = [];
  this.$_seriesTicksArray$ = [];
  this.$_itemListeners$ = []
};
D.$JSCompiler_prototypeAlias$$.$_onRmAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onRmAnimationEnd$$() {
  for(var $i$$883$$ = 0;$i$$883$$ < this.$_rmAnimationElems$.length;$i$$883$$++) {
    var $elem$$67$$ = this.$_rmAnimationElems$[$i$$883$$];
    $elem$$67$$.getParent().removeChild($elem$$67$$)
  }
  this.$_mvAnimator$ && this.$_hasMvAnimations$ ? (this.$_mvAnimator$.play(), (0,D.$DvtPlayable$appendOnEnd$$)(this.$_mvAnimator$, this.$_onMvAnimationEnd$, this)) : this.$_onMvAnimationEnd$()
};
D.$JSCompiler_prototypeAlias$$.$_onMvAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMvAnimationEnd$$() {
  if(this.$_frAnimationElems$ && 0 != this.$_frAnimationElems$.length) {
    var $fadeInAnimator$$1$$ = new D.$DvtParallelPlayable$$(this.$getCtx$(), new D.$DvtAnimFadeIn$$(this.$getCtx$(), this.$_frAnimationElems$, D.$DvtTimelineStyleUtils$$.$getAnimationDuration$(this.$Options$), 0));
    $fadeInAnimator$$1$$.play();
    (0,D.$DvtPlayable$appendOnEnd$$)($fadeInAnimator$$1$$, this.$_onAnimationEnd$, this)
  }else {
    this.$_onAnimationEnd$()
  }
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_isAnimating$ = !1;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() && (0,D.$JSCompiler_StaticMethods_showThenHideHotspots$$)(this.$_callbackObj$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$284_orientation$$5_props$$15$$, $desc$$28_width$$179$$, $height$$160$$) {
  $options$$284_orientation$$5_props$$15$$ && this.$SetOptions$($options$$284_orientation$$5_props$$15$$);
  this.$_isInitialRender$ = this.$Width$ ? !1 : !0;
  this.$Width$ = $desc$$28_width$$179$$;
  this.$Height$ = $height$$160$$;
  ($options$$284_orientation$$5_props$$15$$ = this.$Options$.orientation) && "vertical" == $options$$284_orientation$$5_props$$15$$ ? (this.$_allowUpdates$ = !1 == this.$_isVertical$ ? !1 : !0, this.$_isVertical$ = !0) : (this.$_allowUpdates$ = this.$_isVertical$ ? !1 : !0, this.$_isVertical$ = !1);
  this.$Options$ && ($options$$284_orientation$$5_props$$15$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($options$$284_orientation$$5_props$$15$$));
  this.$_fetchStartPos$ = 0;
  this.$_isVertical$ ? (this.$_fetchEndPos$ = $height$$160$$, this.$_maxOverflowValue$ = $desc$$28_width$$179$$, this.$_length$ = $height$$160$$, this.$_size$ = $desc$$28_width$$179$$) : (this.$_fetchEndPos$ = $desc$$28_width$$179$$, this.$_maxOverflowValue$ = $height$$160$$, this.$_length$ = $desc$$28_width$$179$$, this.$_size$ = $height$$160$$);
  this.$_isInverted$ = this.$Options$.inverted;
  this.$_maxDurationSize$ = this.$_colorCount$ = 0;
  D.$DvtTimelineSeriesRenderer$$.$renderSeries$(this, $desc$$28_width$$179$$, $height$$160$$);
  D.$DvtTimeUtils$$.$supportsTouch$() && 0 < this.$_items$.length && (0,D.$JSCompiler_StaticMethods__setAriaProperty$$)(this, "flowto", "_bt_" + this.$_items$[0].getId());
  if($desc$$28_width$$179$$ = this.$GetComponentDescription$()) {
    D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$getElem$(), "role", "group"), D.$DvtToolkitUtils$$.$setAttrNullNS$(this.$getElem$(), "aria-label", D.$DvtStringUtils$$.$processAriaLabel$($desc$$28_width$$179$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  var $seriesDescArray$$ = [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "TIMELINE_SERIES")];
  this.$_label$ ? $seriesDescArray$$.push(this.$_label$) : $seriesDescArray$$.push(this.$Options$.index + 1);
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", $seriesDescArray$$)
};
D.$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new D.$DvtCSSStyle$$(D.$DvtTimelineStyleUtils$$.$getSeriesStyle$());
  this.$_seriesStyleDefaults$ = this.$Options$.seriesStyleDefaults;
  this.$_axisStyleDefaults$ = this.$Options$.axisStyleDefaults;
  this.$_colors$ = D.$DvtTimelineStyleUtils$$.$getColorsArray$(this.$Options$);
  this.$_referenceObjects$ = this.$Options$.referenceObjects;
  if(this.$_seriesStyleDefaults$) {
    var $style$$121$$ = this.$_seriesStyleDefaults$.backgroundColor;
    $style$$121$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_style$, "background-color:" + $style$$121$$ + ";")
  }
  D.$DvtTimeline$$.$superclass$.$applyStyleValues$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = (0,D.$JSCompiler_set$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$286$$) {
  this.$_parser$ = new D.$DvtTimelineSeriesParser$$;
  return this.$_parser$.parse($options$$286$$, this.$_items$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$16$$) {
  this.$_items$ && (this.$_oldItems$ = this.$_items$);
  this.$_isEmpty$ = (this.$_items$ = $props$$16$$.$items$) && 0 < this.$_items$.length ? !1 : !0;
  this.$_isIRAnimationEnabled$ = $props$$16$$.$isIRAnimationEnabled$;
  this.$_isDCAnimationEnabled$ = $props$$16$$.$isDCAnimationEnabled$;
  this.$_label$ = $props$$16$$.label;
  this.$_timeAxis$ = $props$$16$$.$timeAxis$;
  this.$_emptyText$ = $props$$16$$.$emptyText$;
  null == this.$_emptyText$ && (this.$_emptyText$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NO_DATA", null));
  D.$DvtTimelineSeries$$.$superclass$.$_applyParsedProperties$.call(this, $props$$16$$)
};
D.$JSCompiler_StaticMethods_calculateSpacing$$ = function $$JSCompiler_StaticMethods_calculateSpacing$$$($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$64$$, $index$$250$$) {
  if(!(null == $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$ || 0 == $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$.length)) {
    var $x$$302$$ = $item$$64$$.$_loc$, $y$$269$$ = $item$$64$$.$_spacing$;
    null == $y$$269$$ && ($y$$269$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
    var $maxOverflowValue$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$;
    if($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isVertical$) {
      for($i$$884$$ = 0;$i$$884$$ < $index$$250$$;$i$$884$$++) {
        $currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$[$i$$884$$], $currWidth$$ = $currItem$$1_curry$$1$$.getWidth() + 10, $maxOverflowValue$$ < $y$$269$$ + $currWidth$$ && ($maxOverflowValue$$ = $y$$269$$ + $currWidth$$)
      }
    }else {
      for(var $hOffset$$2$$ = D.$DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $i$$884$$ = 0;$i$$884$$ < $index$$250$$;$i$$884$$++) {
        var $currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$[$i$$884$$], $currWidth$$ = $currItem$$1_curry$$1$$.getWidth() + 10, $currHeight$$ = $currItem$$1_curry$$1$$.getHeight();
        if(null != $currItem$$1_curry$$1$$.$_loc$ && $currItem$$1_curry$$1$$ != $item$$64$$) {
          var $currx$$ = $currItem$$1_curry$$1$$.$_loc$;
          null == $currx$$ && ($currx$$ = 0);
          $currItem$$1_curry$$1$$ = $currItem$$1_curry$$1$$.$_spacing$;
          null == $currItem$$1_curry$$1$$ && ($currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
          $x$$302$$ >= $currx$$ && ($x$$302$$ <= $currx$$ + $currWidth$$ && $y$$269$$ >= $currItem$$1_curry$$1$$ && $y$$269$$ <= $currItem$$1_curry$$1$$ + $currHeight$$) && ($y$$269$$ = $currItem$$1_curry$$1$$ + $currHeight$$ + $hOffset$$2$$, $item$$64$$.$_spacing$ = $y$$269$$, $y$$269$$ = (0,D.$JSCompiler_StaticMethods_calculateSpacing$$)($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$64$$, $index$$250$$))
        }
        $maxOverflowValue$$ < $y$$269$$ + $currHeight$$ && ($maxOverflowValue$$ = $y$$269$$ + $currHeight$$)
      }
    }
    $maxOverflowValue$$ > $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $maxOverflowValue$$ + D.$DvtTimelineStyleUtils$$.$getBubbleSpacing$());
    return $y$$269$$
  }
};
D.$JSCompiler_StaticMethods_calculateDurationSize$$ = function $$JSCompiler_StaticMethods_calculateDurationSize$$$($JSCompiler_StaticMethods_calculateDurationSize$self$$, $item$$65$$, $index$$251$$) {
  if(!(null == $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$ || 0 == $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$.length)) {
    var $startTime$$8$$ = $item$$65$$.$_startTime$, $endTime$$8_y$$270$$ = $item$$65$$.$_endTime$;
    if($endTime$$8_y$$270$$ && $endTime$$8_y$$270$$ != $startTime$$8$$) {
      $endTime$$8_y$$270$$ = $item$$65$$.$_durationLevel$;
      null == $endTime$$8_y$$270$$ && ($endTime$$8_y$$270$$ = 1);
      for(var $i$$885$$ = 0;$i$$885$$ < $index$$251$$;$i$$885$$++) {
        var $currItem$$2_curry$$2$$ = $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$[$i$$885$$];
        if($currItem$$2_curry$$2$$ != $item$$65$$) {
          var $currStartTime$$1$$ = $currItem$$2_curry$$2$$.$_startTime$, $currEndTime$$1$$ = $currItem$$2_curry$$2$$.$_endTime$;
          $currEndTime$$1$$ && $currEndTime$$1$$ != $currStartTime$$1$$ && ($currItem$$2_curry$$2$$ = $currItem$$2_curry$$2$$.$_durationLevel$, null == $currItem$$2_curry$$2$$ && ($currItem$$2_curry$$2$$ = 1), $startTime$$8$$ >= $currStartTime$$1$$ && ($startTime$$8$$ <= $currEndTime$$1$$ && $endTime$$8_y$$270$$ == $currItem$$2_curry$$2$$) && ($endTime$$8_y$$270$$ = $currItem$$2_curry$$2$$ + 1, $item$$65$$.$_durationLevel$ = $endTime$$8_y$$270$$, $endTime$$8_y$$270$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationSize$$)($JSCompiler_StaticMethods_calculateDurationSize$self$$, 
          $item$$65$$, $index$$251$$)))
        }
      }
      $endTime$$8_y$$270$$ > $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_maxDurationSize$ && ($JSCompiler_StaticMethods_calculateDurationSize$self$$.$_maxDurationSize$ = $endTime$$8_y$$270$$);
      return $endTime$$8_y$$270$$
    }
  }
};
D.$DvtTimelineSeries$$.prototype.$prepareDurations$ = function $$DvtTimelineSeries$$$$$prepareDurations$$() {
  for(var $i$$886$$ = 0;$i$$886$$ < this.$_items$.length;$i$$886$$++) {
    var $node$$316$$ = this.$_items$[$i$$886$$], $durationLevel$$inline_8980_startTime$$9$$ = $node$$316$$.$_startTime$, $endTime$$9$$ = $node$$316$$.$_endTime$;
    $endTime$$9$$ && $endTime$$9$$ != $durationLevel$$inline_8980_startTime$$9$$ && ($durationLevel$$inline_8980_startTime$$9$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationSize$$)(this, $node$$316$$, this.$_items$.length), $node$$316$$.$_durationLevel$ = $durationLevel$$inline_8980_startTime$$9$$, $node$$316$$.$_durationSize$ = 22 + 10 * $node$$316$$.$_durationLevel$ - 5, null == $node$$316$$.$_durationFillColor$ && ($node$$316$$.$_durationFillColor$ = this.$_colors$[this.$_colorCount$], this.$_colorCount$++, 
    this.$_colorCount$ == this.$_colors$.length && (this.$_colorCount$ = 0)))
  }
};
D.$DvtTimelineSeries$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$DvtTimelineSeries$$.prototype.$getEmptyText$ = (0,D.$JSCompiler_get$$)("$_emptyText$");
D.$DvtTimelineSeriesActionEvent$$ = function $$DvtTimelineSeriesActionEvent$$$($action$$30$$, $itemId$$14$$) {
  D.$DvtTimelineSeriesActionEvent$$.$superclass$.constructor.call(this, "action", $action$$30$$, $itemId$$14$$)
};
(0,D.$goog$exportPath_$$)("DvtTimelineSeriesActionEvent", D.$DvtTimelineSeriesActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesActionEvent$$, D.$DvtActionEvent$$, "DvtTimelineSeriesActionEvent");
D.$DvtTimelineSeriesItem$$ = function $$DvtTimelineSeriesItem$$$($context$$634$$, $id$$314$$) {
  this.Init($context$$634$$, $id$$314$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesItem$$, D.$DvtContainer$$, "DvtTimelineSeriesItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeriesItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$635$$, $id$$315$$) {
  D.$DvtTimelineSeriesItem$$.$superclass$.Init.call(this, $context$$635$$, "g", $id$$315$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($isSelected$$3$$) {
  this.$_isSelected$ != $isSelected$$3$$ && ((this.$_isSelected$ = $isSelected$$3$$) ? this.$_isShowingHoverEffect$ ? this.$applyState$("asel") : this.$applyState$("sel") : this.$applyState$("en"))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($isFocused$$2$$) {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = !0, this.$_isSelected$ && $isFocused$$2$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("hl"))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($isFocused$$3$$) {
  this.$_isSelected$ && $isFocused$$3$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("en");
  this.$_isShowingHoverEffect$ = !1
};
D.$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($bubbleFillColor_state$$103$$) {
  var $feeler$$1_item$$69$$ = this.$_node$, $duration$$109_itemElem$$ = $feeler$$1_item$$69$$.$_displayable$;
  if(null != $duration$$109_itemElem$$) {
    var $bubble$$ = $duration$$109_itemElem$$.$getChildAt$(0), $bubbleInner$$ = $bubble$$.$getChildAt$(0), $duration$$109_itemElem$$ = $feeler$$1_item$$69$$.$_durationBar$;
    if("asel" == $bubbleFillColor_state$$103$$) {
      $bubbleFillColor_state$$103$$ = D.$DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$69$$);
      var $bubbleStroke_bubbleStrokeColor$$ = D.$DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$69$$), $bubbleStrokeWidth$$ = D.$DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = D.$DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$()
    }else {
      "sel" == $bubbleFillColor_state$$103$$ ? ($bubbleFillColor_state$$103$$ = D.$DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$69$$), $bubbleStroke_bubbleStrokeColor$$ = D.$DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$69$$), $bubbleStrokeWidth$$ = D.$DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = D.$DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$()) : "hl" == $bubbleFillColor_state$$103$$ ? ($bubbleFillColor_state$$103$$ = 
      D.$DvtTimelineStyleUtils$$.$getItemHoverFillColor$($feeler$$1_item$$69$$), $bubbleStroke_bubbleStrokeColor$$ = D.$DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$($feeler$$1_item$$69$$), $bubbleStrokeWidth$$ = D.$DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = D.$DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$()) : ($bubbleFillColor_state$$103$$ = D.$DvtTimelineStyleUtils$$.$getItemFillColor$($feeler$$1_item$$69$$), $bubbleStroke_bubbleStrokeColor$$ = 
      D.$DvtTimelineStyleUtils$$.$getItemStrokeColor$($feeler$$1_item$$69$$), $bubbleStrokeWidth$$ = D.$DvtTimelineStyleUtils$$.$getItemStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = D.$DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$())
    }
    var $bubbleInnerStrokeWidth$$ = D.$DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$(), $bubbleStroke_bubbleStrokeColor$$ = new D.$DvtSolidStroke$$($bubbleStroke_bubbleStrokeColor$$, 1, $bubbleStrokeWidth$$), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = new D.$DvtSolidStroke$$($bubbleInnerStroke_bubbleInnerStrokeColor$$, 1, $bubbleInnerStrokeWidth$$);
    $bubble$$.$setSolidFill$($bubbleFillColor_state$$103$$);
    $bubble$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $bubbleInner$$.$setStroke$($bubbleInnerStroke_bubbleInnerStrokeColor$$);
    ($feeler$$1_item$$69$$ = $feeler$$1_item$$69$$.$_feeler$) && $feeler$$1_item$$69$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $duration$$109_itemElem$$ && $duration$$109_itemElem$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$)
  }
};
D.$DvtTimelineSeriesItemRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesItemRenderer$$, D.$DvtObj$$, "DvtTimelineSeriesItemRenderer");
D.$DvtTimelineSeriesItemRenderer$$.$renderItem$ = function $$DvtTimelineSeriesItemRenderer$$$$renderItem$$($item$$70$$, $series$$29$$, $container$$201$$, $overflowOffset$$, $frAnimationElems$$, $mvAnimator$$) {
  $item$$70$$.$_content$ ? (D.$DvtTimelineSeriesItemRenderer$$.$_renderBubble$($item$$70$$, $series$$29$$, $container$$201$$, $frAnimationElems$$), D.$DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$70$$, $series$$29$$, $overflowOffset$$, null)) : ($series$$29$$.$_hasMvAnimations$ = !0, D.$DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$70$$, $series$$29$$, $overflowOffset$$, $mvAnimator$$));
  $series$$29$$.$isVertical$() || ($item$$70$$.$_feeler$ && $series$$29$$.$_allowUpdates$ ? D.$DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($item$$70$$, $series$$29$$, $overflowOffset$$, $mvAnimator$$) : D.$DvtTimelineSeriesItemRenderer$$.$_renderFeeler$($item$$70$$, $series$$29$$, $container$$201$$.$feelers$, $overflowOffset$$, $frAnimationElems$$))
};
D.$DvtTimelineSeriesItemRenderer$$.$initializeItem$ = function $$DvtTimelineSeriesItemRenderer$$$$initializeItem$$($item$$71$$, $series$$30$$) {
  $item$$71$$.$_displayable$ && $series$$30$$.$_allowUpdates$ ? D.$DvtTimelineSeriesItemRenderer$$.$_updateBubble$($item$$71$$, $series$$30$$) : D.$DvtTimelineSeriesItemRenderer$$.$_createBubble$($item$$71$$, $series$$30$$)
};
D.$DvtTimelineSeriesItemRenderer$$.$_createBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_createBubble$$($item$$72$$, $series$$31$$) {
  var $content$$10_spacing$$2$$ = (0,D.$JSCompiler_StaticMethods_calculateSpacing$$)($series$$31$$, $item$$72$$, $series$$31$$.$_items$.length);
  $item$$72$$.$_spacing$ = $content$$10_spacing$$2$$;
  $content$$10_spacing$$2$$ = D.$DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$($item$$72$$, $series$$31$$);
  $series$$31$$.$addChild$($content$$10_spacing$$2$$);
  var $dim$$88$$ = $content$$10_spacing$$2$$.$getDimensions$();
  $series$$31$$.removeChild($content$$10_spacing$$2$$);
  $item$$72$$.$setWidth$($dim$$88$$.$w$ + 10);
  $item$$72$$.$setHeight$($dim$$88$$.$h$ + 10);
  $item$$72$$.$_content$ = $content$$10_spacing$$2$$
};
D.$DvtTimelineSeriesItemRenderer$$.$_renderBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderBubble$$($item$$73$$, $series$$32$$, $container$$202$$, $animationElems$$) {
  var $bubbleContainer_context$$636$$ = $series$$32$$.$getCtx$(), $bubbleArray_isRTL$$52$$ = (0,D.$DvtAgent$isRightToLeft$$)($bubbleContainer_context$$636$$), $id$$316$$ = $item$$73$$.getId(), $content$$11$$ = $item$$73$$.$_content$;
  $item$$73$$.$_content$ = null;
  var $bubble$$1_nodeWidth$$4$$ = $item$$73$$.getWidth(), $innerBubbleArray_nodeHeight$$7$$ = $item$$73$$.getHeight(), $bubbleId_innerBubble$$ = "_bubble_" + $id$$316$$;
  if($series$$32$$.$isVertical$()) {
    var $offset$$35$$ = $innerBubbleArray_nodeHeight$$7$$ / 2, $startOffset$$3$$ = $offset$$35$$ - 6, $endOffset$$4$$ = $offset$$35$$ + 6;
    !$bubbleArray_isRTL$$52$$ && $series$$32$$.$_isInverted$ || $bubbleArray_isRTL$$52$$ && !$series$$32$$.$_isInverted$ ? ($bubbleArray_isRTL$$52$$ = [0, 0, 0, $startOffset$$3$$, -6, $offset$$35$$, 0, $endOffset$$4$$, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $startOffset$$3$$, -4, $offset$$35$$, 2, $endOffset$$4$$, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 
    $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2]) : ($bubbleArray_isRTL$$52$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $endOffset$$4$$, $bubble$$1_nodeWidth$$4$$ + 6, $offset$$35$$, $bubble$$1_nodeWidth$$4$$, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 
    2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $endOffset$$4$$, $bubble$$1_nodeWidth$$4$$ + 4, $offset$$35$$, $bubble$$1_nodeWidth$$4$$ - 2, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2])
  }else {
    $offset$$35$$ = $bubbleArray_isRTL$$52$$ ? $bubble$$1_nodeWidth$$4$$ - D.$DvtTimelineStyleUtils$$.$getBubbleOffset$() : D.$DvtTimelineStyleUtils$$.$getBubbleOffset$(), $startOffset$$3$$ = $offset$$35$$ - 6, $endOffset$$4$$ = $offset$$35$$ + 6, $series$$32$$.$_isInverted$ ? ($bubbleArray_isRTL$$52$$ = [0, 0, $startOffset$$3$$, 0, $offset$$35$$, -6, $endOffset$$4$$, 0, $bubble$$1_nodeWidth$$4$$, 0, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, 0, $innerBubbleArray_nodeHeight$$7$$, 
    0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, $startOffset$$3$$, 2, $offset$$35$$, -4, $endOffset$$4$$, 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, 2]) : ($bubbleArray_isRTL$$52$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$, $offset$$35$$, $innerBubbleArray_nodeHeight$$7$$ + 6, $endOffset$$4$$, $innerBubbleArray_nodeHeight$$7$$, 
    $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $offset$$35$$, $innerBubbleArray_nodeHeight$$7$$ + 4, $endOffset$$4$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2])
  }
  $bubble$$1_nodeWidth$$4$$ = new D.$DvtPolygon$$($bubbleContainer_context$$636$$, $bubbleArray_isRTL$$52$$, $bubbleId_innerBubble$$);
  $bubbleId_innerBubble$$ = new D.$DvtPolygon$$($bubbleContainer_context$$636$$, $innerBubbleArray_nodeHeight$$7$$, $bubbleId_innerBubble$$ + "_i");
  $bubbleId_innerBubble$$.$setSolidFill$(D.$DvtTimelineStyleUtils$$.$getItemInnerFillColor$());
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($content$$11$$, 5, 5);
  $bubble$$1_nodeWidth$$4$$.$addChild$($bubbleId_innerBubble$$);
  $bubble$$1_nodeWidth$$4$$.$addChild$($content$$11$$);
  $bubbleContainer_context$$636$$ = new D.$DvtTimelineSeriesItem$$($bubbleContainer_context$$636$$, "_bt_" + $id$$316$$);
  $animationElems$$ && ($bubbleContainer_context$$636$$.$setAlpha$(0), $animationElems$$.push($bubbleContainer_context$$636$$));
  $bubbleContainer_context$$636$$.$addChild$($bubble$$1_nodeWidth$$4$$);
  D.$DvtTimeUtils$$.$supportsTouch$() && D.$DvtToolkitUtils$$.$setAttrNullNS$($bubbleContainer_context$$636$$.$_elem$, "id", $bubbleContainer_context$$636$$.$_id$);
  $bubbleContainer_context$$636$$.$_node$ = $item$$73$$;
  $item$$73$$.$_displayable$ = $bubbleContainer_context$$636$$;
  $bubbleContainer_context$$636$$.$applyState$("en");
  0 <= $item$$73$$.$_loc$ && $container$$202$$.$addChild$($bubbleContainer_context$$636$$);
  $bubbleContainer_context$$636$$.$setAriaRole$("group");
  $item$$73$$.$_updateAriaLabel$();
  $series$$32$$.$_callbackObj$.$EventManager$.$associate$($bubbleContainer_context$$636$$, $item$$73$$)
};
D.$DvtTimelineSeriesItemRenderer$$.$_displayBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_displayBubble$$($bubbleContainer$$1_item$$74$$, $series$$33$$, $overflowOffset$$1$$, $animator$$138$$) {
  var $isRTL$$53_transX$$7$$ = (0,D.$DvtAgent$isRightToLeft$$)($series$$33$$.$getCtx$()), $loc$$1$$ = $bubbleContainer$$1_item$$74$$.$_loc$, $nodeWidth$$5$$ = $bubbleContainer$$1_item$$74$$.getWidth(), $nodeHeight$$8_transY$$ = $bubbleContainer$$1_item$$74$$.getHeight(), $spacing$$3$$ = $bubbleContainer$$1_item$$74$$.$_spacing$;
  $bubbleContainer$$1_item$$74$$ = $bubbleContainer$$1_item$$74$$.$_displayable$;
  $series$$33$$.$isVertical$() ? ($nodeHeight$$8_transY$$ = $loc$$1$$ - $nodeHeight$$8_transY$$ / 2, $isRTL$$53_transX$$7$$ && $series$$33$$.$_isInverted$ || !$isRTL$$53_transX$$7$$ && !$series$$33$$.$_isInverted$ ? $isRTL$$53_transX$$7$$ = $series$$33$$.$_size$ - ($nodeWidth$$5$$ + $series$$33$$.$_initialSpacing$) + $overflowOffset$$1$$ : ($isRTL$$53_transX$$7$$ = $series$$33$$.$_initialSpacing$, $overflowOffset$$1$$ = 0)) : ($isRTL$$53_transX$$7$$ = $isRTL$$53_transX$$7$$ ? $series$$33$$.$_length$ - 
  $loc$$1$$ - $nodeWidth$$5$$ + D.$DvtTimelineStyleUtils$$.$getBubbleOffset$() : $loc$$1$$ - D.$DvtTimelineStyleUtils$$.$getBubbleOffset$(), $series$$33$$.$_isInverted$ ? ($overflowOffset$$1$$ = 0, $nodeHeight$$8_transY$$ = $spacing$$3$$) : $nodeHeight$$8_transY$$ = $series$$33$$.$Height$ - $spacing$$3$$ - $nodeHeight$$8_transY$$ + $overflowOffset$$1$$);
  $animator$$138$$ ? ($series$$33$$.$isVertical$() ? $bubbleContainer$$1_item$$74$$.$setTranslateX$($bubbleContainer$$1_item$$74$$.$getTranslateX$() + $series$$33$$.$_canvasOffsetX$ + $overflowOffset$$1$$) : $bubbleContainer$$1_item$$74$$.$setTranslateY$($bubbleContainer$$1_item$$74$$.$getTranslateY$() + $series$$33$$.$_canvasOffsetY$ + $overflowOffset$$1$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$138$$, "typeNumber", $bubbleContainer$$1_item$$74$$, $bubbleContainer$$1_item$$74$$.$getTranslateX$, 
  $bubbleContainer$$1_item$$74$$.$setTranslateX$, $isRTL$$53_transX$$7$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$138$$, "typeNumber", $bubbleContainer$$1_item$$74$$, $bubbleContainer$$1_item$$74$$.$getTranslateY$, $bubbleContainer$$1_item$$74$$.$setTranslateY$, $nodeHeight$$8_transY$$)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bubbleContainer$$1_item$$74$$, $isRTL$$53_transX$$7$$, $nodeHeight$$8_transY$$)
};
D.$DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$ = function $$DvtTimelineSeriesItemRenderer$$$$_getBubbleContent$$($item$$75$$, $series$$34$$) {
  var $context$$638$$ = $series$$34$$.$getCtx$(), $isRTL$$54$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$638$$), $title$$21_width$$181$$ = $item$$75$$.$getTitle$(), $desc$$29_descText$$ = $item$$75$$.$_desc$, $thumbImage_thumbnail$$ = $item$$75$$.$_thumbnail$, $container$$203$$ = new D.$DvtContainer$$($context$$638$$), $offsetX$$11$$ = 0, $offsetY$$8$$ = 0;
  if($isRTL$$54$$) {
    $title$$21_width$$181$$ && ($titleText$$ = new D.$DvtOutputText$$($context$$638$$, $title$$21_width$$181$$, 0, $offsetY$$8$$), $titleText$$.$setCSSStyle$(D.$DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$75$$)), $offsetX$$11$$ = $titleText$$.$measureDimensions$().$w$ + 2, $offsetY$$8$$ = 15, $container$$203$$.$addChild$($titleText$$)), $desc$$29_descText$$ && ($desc$$29_descText$$ = new D.$DvtOutputText$$($context$$638$$, $desc$$29_descText$$, 0, $offsetY$$8$$), $desc$$29_descText$$.$setCSSStyle$(D.$DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$75$$)), 
    $title$$21_width$$181$$ = $desc$$29_descText$$.$measureDimensions$().$w$ + 2, 0 != $offsetX$$11$$ && $title$$21_width$$181$$ != $offsetX$$11$$ ? $title$$21_width$$181$$ > $offsetX$$11$$ ? ($titleText$$.$setX$($title$$21_width$$181$$ - $offsetX$$11$$), $offsetX$$11$$ = $title$$21_width$$181$$) : $desc$$29_descText$$.$setX$($offsetX$$11$$ - $title$$21_width$$181$$) : $offsetX$$11$$ = $title$$21_width$$181$$, $container$$203$$.$addChild$($desc$$29_descText$$)), $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = 
    new D.$DvtImage$$($context$$638$$, $thumbImage_thumbnail$$, $offsetX$$11$$, 0, D.$DvtTimelineStyleUtils$$.$getThumbnailWidth$(), D.$DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$(!1), $container$$203$$.$addChild$($thumbImage_thumbnail$$))
  }else {
    $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = new D.$DvtImage$$($context$$638$$, $thumbImage_thumbnail$$, 0, 0, D.$DvtTimelineStyleUtils$$.$getThumbnailWidth$(), D.$DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$(!1), $container$$203$$.$addChild$($thumbImage_thumbnail$$), $offsetX$$11$$ = D.$DvtTimelineStyleUtils$$.$getThumbnailWidth$() + 2);
    if($title$$21_width$$181$$) {
      var $titleText$$ = new D.$DvtOutputText$$($context$$638$$, $title$$21_width$$181$$, $offsetX$$11$$, $offsetY$$8$$);
      $titleText$$.$setCSSStyle$(D.$DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$75$$));
      $offsetY$$8$$ = 15;
      $container$$203$$.$addChild$($titleText$$)
    }
    $desc$$29_descText$$ && ($desc$$29_descText$$ = new D.$DvtOutputText$$($context$$638$$, $desc$$29_descText$$, $offsetX$$11$$, $offsetY$$8$$), $desc$$29_descText$$.$setCSSStyle$(D.$DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$75$$)), $container$$203$$.$addChild$($desc$$29_descText$$))
  }
  return $container$$203$$
};
D.$DvtTimelineSeriesItemRenderer$$.$_updateBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateBubble$$($item$$76$$, $series$$35$$) {
  var $spacing$$4$$ = (0,D.$JSCompiler_StaticMethods_calculateSpacing$$)($series$$35$$, $item$$76$$, $series$$35$$.$_items$.length);
  $item$$76$$.$_spacing$ = $spacing$$4$$
};
D.$DvtTimelineSeriesItemRenderer$$.$_renderFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderFeeler$$($item$$77$$, $feelerX$$1_series$$36$$, $container$$204_feelerWidth_stroke$$120$$, $feelerHeight_overflowOffset$$2$$, $animationElems$$1_feelerColor$$) {
  var $context$$639_feeler$$2$$ = $feelerX$$1_series$$36$$.$getCtx$(), $isRTL$$55$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$639_feeler$$2$$), $id$$317$$ = $item$$77$$.getId(), $loc$$2$$ = $item$$77$$.$_loc$, $spacing$$5$$ = $item$$77$$.$_spacing$;
  if($feelerX$$1_series$$36$$.$_isInverted$) {
    $feelerY$$ = $item$$77$$.$_durationSize$, $feelerHeight_overflowOffset$$2$$ = $spacing$$5$$
  }else {
    var $feelerY$$ = $feelerX$$1_series$$36$$.$Height$ + $feelerHeight_overflowOffset$$2$$ - $item$$77$$.$_durationSize$;
    $feelerHeight_overflowOffset$$2$$ = $feelerX$$1_series$$36$$.$Height$ - $spacing$$5$$ + $feelerHeight_overflowOffset$$2$$
  }
  $feelerX$$1_series$$36$$ = $isRTL$$55$$ ? $feelerX$$1_series$$36$$.$_length$ - $loc$$2$$ : $loc$$2$$;
  $context$$639_feeler$$2$$ = new D.$DvtLine$$($context$$639_feeler$$2$$, $feelerX$$1_series$$36$$, $feelerY$$, $feelerX$$1_series$$36$$, $feelerHeight_overflowOffset$$2$$, "_feeler_" + $id$$317$$);
  $animationElems$$1_feelerColor$$ && ($context$$639_feeler$$2$$.$setAlpha$(0), $animationElems$$1_feelerColor$$.push($context$$639_feeler$$2$$));
  $container$$204_feelerWidth_stroke$$120$$.$addChild$($context$$639_feeler$$2$$);
  $container$$204_feelerWidth_stroke$$120$$ = D.$DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$1_feelerColor$$ = D.$DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$77$$);
  $container$$204_feelerWidth_stroke$$120$$ = new D.$DvtSolidStroke$$($animationElems$$1_feelerColor$$, 1, $container$$204_feelerWidth_stroke$$120$$);
  $context$$639_feeler$$2$$.$setStroke$($container$$204_feelerWidth_stroke$$120$$);
  $context$$639_feeler$$2$$.$_node$ = $item$$77$$;
  $item$$77$$.$_feeler$ = $context$$639_feeler$$2$$
};
D.$DvtTimelineSeriesItemRenderer$$.$_updateFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateFeeler$$($feelerX$$2_item$$78$$, $series$$37$$, $overflowOffset$$3$$, $animator$$139$$) {
  if($series$$37$$.$isVertical$()) {
    $feelerX$$2_item$$78$$.$_feeler$ = null
  }else {
    var $isRTL$$56$$ = (0,D.$DvtAgent$isRightToLeft$$)($series$$37$$.$getCtx$()), $feeler$$3$$ = $feelerX$$2_item$$78$$.$_feeler$;
    if($series$$37$$.$_isInverted$) {
      $overflowOffset$$3$$ = 0, $feelerY$$1$$ = $feelerX$$2_item$$78$$.$_durationSize$, $feelerHeight$$1$$ = $feelerX$$2_item$$78$$.$_spacing$
    }else {
      var $feelerY$$1$$ = $series$$37$$.$Height$ + $overflowOffset$$3$$ - $feelerX$$2_item$$78$$.$_durationSize$, $feelerHeight$$1$$ = $series$$37$$.$Height$ - $feelerX$$2_item$$78$$.$_spacing$ + $overflowOffset$$3$$
    }
    $feelerX$$2_item$$78$$ = $isRTL$$56$$ ? $series$$37$$.$_length$ - $feelerX$$2_item$$78$$.$_loc$ : $feelerX$$2_item$$78$$.$_loc$;
    $animator$$139$$ ? ($feeler$$3$$.$setY1$($feeler$$3$$.$getY1$() + $series$$37$$.$_canvasOffsetY$ + $overflowOffset$$3$$), $feeler$$3$$.$setY2$($feeler$$3$$.$getY2$() + $series$$37$$.$_canvasOffsetY$ + $overflowOffset$$3$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$139$$, "typeNumber", $feeler$$3$$, $feeler$$3$$.$getX1$, $feeler$$3$$.$setX1$, $feelerX$$2_item$$78$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$139$$, "typeNumber", $feeler$$3$$, $feeler$$3$$.$getY1$, $feeler$$3$$.$setY1$, 
    $feelerY$$1$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$139$$, "typeNumber", $feeler$$3$$, $feeler$$3$$.$getX2$, $feeler$$3$$.$setX2$, $feelerX$$2_item$$78$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$139$$, "typeNumber", $feeler$$3$$, $feeler$$3$$.$getY2$, $feeler$$3$$.$setY2$, $feelerHeight$$1$$)) : ($feeler$$3$$.$setX1$($feelerX$$2_item$$78$$), $feeler$$3$$.$setY1$($feelerY$$1$$), $feeler$$3$$.$setX2$($feelerX$$2_item$$78$$), $feeler$$3$$.$setY2$($feelerHeight$$1$$))
  }
};
D.$DvtTimelineSeriesItemRenderer$$.$renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$renderDuration$$($item$$79$$, $series$$38$$, $container$$205$$, $overflowOffset$$4$$, $frAnimationElems$$1$$, $mvAnimator$$1$$) {
  $item$$79$$.$_durationBar$ ? D.$DvtTimelineSeriesItemRenderer$$.$_updateDuration$($item$$79$$, $series$$38$$, $overflowOffset$$4$$, $mvAnimator$$1$$) : D.$DvtTimelineSeriesItemRenderer$$.$_renderDuration$($item$$79$$, $series$$38$$, $container$$205$$, $overflowOffset$$4$$, $frAnimationElems$$1$$)
};
D.$DvtTimelineSeriesItemRenderer$$.$_renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderDuration$$($item$$80$$, $series$$39$$, $container$$206$$, $feelerStroke$$1_feelerWidth$$1_overflowOffset$$5$$, $animationElems$$2_feelerColor$$1$$) {
  var $context$$641_duration$$110$$ = $series$$39$$.$getCtx$(), $isRTL$$57$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$641_duration$$110$$), $endLoc_endTime$$11_width$$182$$ = $item$$80$$.$_endTime$, $loc$$3_transX$$8$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$39$$.$_start$, $series$$39$$.$_end$, $item$$80$$.$_startTime$, $series$$39$$.$_length$), $durationId$$2$$ = "_duration_" + $item$$80$$.getId(), $durationSize$$ = 22 + 10 * $item$$80$$.$_durationLevel$, $endLoc_endTime$$11_width$$182$$ = 
  D.$DvtTimeUtils$$.$getDatePosition$($series$$39$$.$_start$, $series$$39$$.$_end$, $endLoc_endTime$$11_width$$182$$, $series$$39$$.$_length$);
  $series$$39$$.$isVertical$() ? (!$isRTL$$57$$ && !$series$$39$$.$_isInverted$ || $isRTL$$57$$ && $series$$39$$.$_isInverted$ ? $context$$641_duration$$110$$ = new D.$DvtRect$$($context$$641_duration$$110$$, $series$$39$$.$_size$ - $durationSize$$ + 5, $loc$$3_transX$$8$$, $durationSize$$, $endLoc_endTime$$11_width$$182$$ - $loc$$3_transX$$8$$, $durationId$$2$$) : ($context$$641_duration$$110$$ = new D.$DvtRect$$($context$$641_duration$$110$$, -5, $loc$$3_transX$$8$$, $durationSize$$, $endLoc_endTime$$11_width$$182$$ - 
  $loc$$3_transX$$8$$, $durationId$$2$$), $feelerStroke$$1_feelerWidth$$1_overflowOffset$$5$$ = 0), $context$$641_duration$$110$$.$setTranslateX$($feelerStroke$$1_feelerWidth$$1_overflowOffset$$5$$), $context$$641_duration$$110$$.$setY$($loc$$3_transX$$8$$), $context$$641_duration$$110$$.$setWidth$($durationSize$$), $context$$641_duration$$110$$.$setHeight$($endLoc_endTime$$11_width$$182$$ - $loc$$3_transX$$8$$)) : ($endLoc_endTime$$11_width$$182$$ -= $loc$$3_transX$$8$$, $loc$$3_transX$$8$$ = $isRTL$$57$$ ? 
  $series$$39$$.$_length$ - $loc$$3_transX$$8$$ - $endLoc_endTime$$11_width$$182$$ : $loc$$3_transX$$8$$, $series$$39$$.$_isInverted$ ? ($context$$641_duration$$110$$ = new D.$DvtRect$$($context$$641_duration$$110$$, $loc$$3_transX$$8$$, -5, $endLoc_endTime$$11_width$$182$$, $durationSize$$, $durationId$$2$$), $context$$641_duration$$110$$.$setTranslateY$(0)) : ($context$$641_duration$$110$$ = new D.$DvtRect$$($context$$641_duration$$110$$, $loc$$3_transX$$8$$, $series$$39$$.$_size$ - $durationSize$$ + 
  5, $endLoc_endTime$$11_width$$182$$, $durationSize$$, $durationId$$2$$), $context$$641_duration$$110$$.$setTranslateY$($feelerStroke$$1_feelerWidth$$1_overflowOffset$$5$$)));
  $animationElems$$2_feelerColor$$1$$ && ($context$$641_duration$$110$$.$setAlpha$(0), $animationElems$$2_feelerColor$$1$$.push($context$$641_duration$$110$$));
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($context$$641_duration$$110$$, 5);
  $context$$641_duration$$110$$.$setSolidFill$($item$$80$$.$_durationFillColor$);
  $feelerStroke$$1_feelerWidth$$1_overflowOffset$$5$$ = D.$DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$2_feelerColor$$1$$ = D.$DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$80$$);
  $feelerStroke$$1_feelerWidth$$1_overflowOffset$$5$$ = new D.$DvtSolidStroke$$($animationElems$$2_feelerColor$$1$$, 1, $feelerStroke$$1_feelerWidth$$1_overflowOffset$$5$$);
  $context$$641_duration$$110$$.$setStroke$($feelerStroke$$1_feelerWidth$$1_overflowOffset$$5$$);
  $context$$641_duration$$110$$.$_node$ = $item$$80$$;
  $series$$39$$.$_callbackObj$.$EventManager$.$associate$($context$$641_duration$$110$$, $item$$80$$);
  $container$$206$$.$addChild$($context$$641_duration$$110$$);
  $item$$80$$.$_durationBar$ = $context$$641_duration$$110$$
};
D.$DvtTimelineSeriesItemRenderer$$.$_updateDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateDuration$$($durationTransY_item$$81$$, $series$$40$$, $overflowOffset$$6$$, $animator$$140$$) {
  var $durationX_isRTL$$58$$ = (0,D.$DvtAgent$isRightToLeft$$)($series$$40$$.$getCtx$()), $duration$$111$$ = $durationTransY_item$$81$$.$_durationBar$;
  if(null != $duration$$111$$) {
    var $durationHeight_loc$$4$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$40$$.$_start$, $series$$40$$.$_end$, $durationTransY_item$$81$$.$_startTime$, $series$$40$$.$_length$), $durationSize$$1$$ = 22 + 10 * $durationTransY_item$$81$$.$_durationLevel$, $endLoc$$1_width$$183$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$40$$.$_start$, $series$$40$$.$_end$, $durationTransY_item$$81$$.$_endTime$, $series$$40$$.$_length$);
    if($series$$40$$.$isVertical$()) {
      $durationTransY_item$$81$$ = 0;
      !$durationX_isRTL$$58$$ && !$series$$40$$.$_isInverted$ || $durationX_isRTL$$58$$ && $series$$40$$.$_isInverted$ ? $durationX_isRTL$$58$$ = $series$$40$$.$_size$ - $durationSize$$1$$ + 5 : ($durationX_isRTL$$58$$ = -5, $overflowOffset$$6$$ = 0);
      var $durationTransX$$ = $overflowOffset$$6$$, $durationY$$1$$ = $durationHeight_loc$$4$$, $durationWidth$$ = $durationSize$$1$$, $durationHeight_loc$$4$$ = $endLoc$$1_width$$183$$ - $durationHeight_loc$$4$$
    }else {
      $durationTransX$$ = 0, $endLoc$$1_width$$183$$ -= $durationHeight_loc$$4$$, $durationX_isRTL$$58$$ = $durationX_isRTL$$58$$ ? $series$$40$$.$_length$ - $durationHeight_loc$$4$$ - $endLoc$$1_width$$183$$ : $durationHeight_loc$$4$$, $series$$40$$.$_isInverted$ ? ($durationTransY_item$$81$$ = $overflowOffset$$6$$ = 0, $durationY$$1$$ = -5) : ($durationTransY_item$$81$$ = $overflowOffset$$6$$, $durationY$$1$$ = $series$$40$$.$_size$ - $durationSize$$1$$ + 5), $durationWidth$$ = $endLoc$$1_width$$183$$, 
      $durationHeight_loc$$4$$ = $durationSize$$1$$
    }
    $animator$$140$$ ? ($series$$40$$.$isVertical$() ? $duration$$111$$.$setTranslateX$($duration$$111$$.$getTranslateX$() + $series$$40$$.$_canvasOffsetX$ + $overflowOffset$$6$$) : $duration$$111$$.$setTranslateY$($duration$$111$$.$getTranslateY$() + $series$$40$$.$_canvasOffsetY$ + $overflowOffset$$6$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$140$$, "typeNumber", $duration$$111$$, $duration$$111$$.$getTranslateX$, $duration$$111$$.$setTranslateX$, $durationTransX$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$140$$, 
    "typeNumber", $duration$$111$$, $duration$$111$$.$getTranslateY$, $duration$$111$$.$setTranslateY$, $durationTransY_item$$81$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$140$$, "typeNumber", $duration$$111$$, $duration$$111$$.$getX$, $duration$$111$$.$setX$, $durationX_isRTL$$58$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$140$$, "typeNumber", $duration$$111$$, $duration$$111$$.$getY$, $duration$$111$$.$setY$, $durationY$$1$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$140$$, 
    "typeNumber", $duration$$111$$, $duration$$111$$.getWidth, $duration$$111$$.$setWidth$, $durationWidth$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$140$$, "typeNumber", $duration$$111$$, $duration$$111$$.getHeight, $duration$$111$$.$setHeight$, $durationHeight_loc$$4$$)) : ($duration$$111$$.$setTranslateX$($durationTransX$$), $duration$$111$$.$setTranslateY$($durationTransY_item$$81$$), $duration$$111$$.$setX$($durationX_isRTL$$58$$), $duration$$111$$.$setY$($durationY$$1$$), $duration$$111$$.$setWidth$($durationWidth$$), 
    $duration$$111$$.$setHeight$($durationHeight_loc$$4$$))
  }
};
D.$DvtTimelineSeriesNode$$ = function $$DvtTimelineSeriesNode$$$($timeline$$17$$, $series$$41$$, $props$$17$$) {
  this.Init($timeline$$17$$, $series$$41$$, $props$$17$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesNode$$, D.$DvtObj$$, "DvtTimelineSeriesNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeriesNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($timeline$$18$$, $seriesIndex$$125$$, $props$$18$$) {
  this.$_timeline$ = $timeline$$18$$;
  this.$_seriesIndex$ = $seriesIndex$$125$$;
  this.$_series$ = $timeline$$18$$.$_series$[$seriesIndex$$125$$];
  this.$_id$ = $props$$18$$.id;
  this.$_rowKey$ = $props$$18$$.$rowKey$;
  this.$_startTime$ = (0,window.parseInt)($props$$18$$.startTime);
  $props$$18$$.$endTime$ && (this.$_endTime$ = (0,window.parseInt)($props$$18$$.$endTime$));
  this.$_title$ = $props$$18$$.title;
  this.$_desc$ = $props$$18$$.$desc$;
  this.$_thumbnail$ = $props$$18$$.$thumbnail$;
  this.$_style$ = $props$$18$$.style;
  this.$_data$ = $props$$18$$.data;
  this.$_action$ = $props$$18$$.action;
  this.$_durationFillColor$ = $props$$18$$.$durationFillColor$;
  this.$_durationSize$ = 0
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.$getStyle$ = (0,D.$JSCompiler_get$$)("$_style$");
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return null != this.$_endTime$ ? "Start Time: " + (new window.Date(this.$_startTime$)).toLocaleString() + "; End Time: " + (new window.Date(this.$_endTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$ : "Time: " + (new window.Date(this.$_startTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_w$");
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_w$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_h$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_h$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$814$$) {
  var $keyboardHandler$$9_navigableItems$$9$$ = this.$_timeline$.$EventManager$.$KeyboardHandler$;
  if($event$$814$$.type == D.$DvtMouseEvent$CLICK$$ || $keyboardHandler$$9_navigableItems$$9$$.$isMultiSelectEvent$($event$$814$$)) {
    return this
  }
  if($keyboardHandler$$9_navigableItems$$9$$.$isNavigationEvent$($event$$814$$)) {
    for(var $keyboardHandler$$9_navigableItems$$9$$ = [], $i$$889$$ = 0;$i$$889$$ < this.$_timeline$.$_series$.length;$i$$889$$++) {
      $keyboardHandler$$9_navigableItems$$9$$.push(this.$_timeline$.$_series$[$i$$889$$].$_items$)
    }
    return(0,D.$DvtTimelineKeyboardHandler$getNextNavigable$$)(this, $event$$814$$, $keyboardHandler$$9_navigableItems$$9$$)
  }
  return null
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$63$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$63$$)
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$showHoverEffect$();
  (0,D.$JSCompiler_StaticMethods_updateScrollForItemNavigation$$)(this.$_timeline$, this)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$19$$ = [];
  this.$isSelectable$() && $states$$19$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getLabel$(), $states$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = (0,D.$JSCompiler_set$$)("$_isSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_get$$)("$_isSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$) {
  this.$_isSelected$ = $JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$;
  this.$_displayable$.$setSelected$($JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$);
  this.$_updateAriaLabel$();
  if(this.$_timeline$.$_hasOverview$ && this.$_timeline$.$_overview$) {
    if($JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$) {
      $JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$ = this.$_timeline$.$_overview$;
      var $drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$ = this.getId(), $drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$, $drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$);
      null != $drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$ && (0,D.$JSCompiler_StaticMethods_addSelectedMarker$$)($JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$, $drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$)
    }else {
      if($JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$ = this.$_timeline$.$_overview$, $drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$ = this.getId(), $drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$, 
      $drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$), null != $drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$ && null != $JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$.$_selectedMarkers$) {
        for(var $index$$inline_11558$$ = -1, $i$$inline_11559$$ = 0;$i$$inline_11559$$ < $JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$.$_selectedMarkers$.length;$i$$inline_11559$$++) {
          if($drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$ == $JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$.$_selectedMarkers$[$i$$inline_11559$$]) {
            $index$$inline_11558$$ = $i$$inline_11559$$;
            break
          }
        }
        -1 != $index$$inline_11558$$ && ($JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$.$applyState$($drawable$$inline_9011_drawable$$inline_9015_itemId$$inline_9010_itemId$$inline_9014$$, "_"), $JSCompiler_StaticMethods_selSelectItem$self$$inline_9009_JSCompiler_StaticMethods_selUnselectItem$self$$inline_9013_isSelected$$4$$.$_selectedMarkers$.splice($index$$inline_11558$$, 1))
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($JSCompiler_StaticMethods_highlightItem$self$$inline_9017_ignoreOverview$$) {
  this.$_displayable$.$showHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_highlightItem$self$$inline_9017_ignoreOverview$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_highlightItem$self$$inline_9017_ignoreOverview$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_9019_itemId$$inline_9018$$ = this.getId(), $drawable$$inline_9019_itemId$$inline_9018$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_highlightItem$self$$inline_9017_ignoreOverview$$, $drawable$$inline_9019_itemId$$inline_9018$$);
    null != $drawable$$inline_9019_itemId$$inline_9018$$ && (0,D.$JSCompiler_StaticMethods_highlightMarker$$)($JSCompiler_StaticMethods_highlightItem$self$$inline_9017_ignoreOverview$$, $drawable$$inline_9019_itemId$$inline_9018$$)
  }
  this.$_timeline$.$_isVertical$ && (this.$_index$ || (this.$_index$ = this.$_series$.$_blocks$[0].$getChildIndex$(this.$_displayable$)), this.$_series$.$_blocks$[0].$addChild$(this.$_displayable$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_9021_ignoreOverview$$1$$) {
  this.$_displayable$.$hideHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_unhighlightItem$self$$inline_9021_ignoreOverview$$1$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_unhighlightItem$self$$inline_9021_ignoreOverview$$1$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_9023_itemId$$inline_9022$$ = this.getId(), $drawable$$inline_9023_itemId$$inline_9022$$ = (0,D.$JSCompiler_StaticMethods_getDrawableById$$)($JSCompiler_StaticMethods_unhighlightItem$self$$inline_9021_ignoreOverview$$1$$, $drawable$$inline_9023_itemId$$inline_9022$$);
    null != $drawable$$inline_9023_itemId$$inline_9022$$ && (0,D.$JSCompiler_StaticMethods_unhighlightMarker$$)($JSCompiler_StaticMethods_unhighlightItem$self$$inline_9021_ignoreOverview$$1$$, $drawable$$inline_9023_itemId$$inline_9022$$)
  }
  this.$_timeline$.$_isVertical$ && (this.$_index$ && !this.$_isSelected$) && this.$_series$.$_blocks$[0].$addChildAt$(this.$_displayable$, this.$_index$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$DvtTimelineSeriesParser$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesParser$$, D.$DvtObj$$, "DvtTimelineSeriesParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineSeriesParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$287$$, $oldItems$$1$$) {
  var $itemArray$$inline_9027$$ = [], $ret$$102_seriesItems$$inline_9028$$ = $options$$287$$.items;
  if($ret$$102_seriesItems$$inline_9028$$) {
    for(var $j$$inline_9029$$ = 0;$j$$inline_9029$$ < $ret$$102_seriesItems$$inline_9028$$.length;$j$$inline_9029$$++) {
      $itemArray$$inline_9027$$.push($ret$$102_seriesItems$$inline_9028$$[$j$$inline_9029$$])
    }
  }
  this.$_startTime$ = new window.Date($options$$287$$.start);
  this.$_endTime$ = new window.Date($options$$287$$.end);
  $ret$$102_seriesItems$$inline_9028$$ = this.$ParseRootAttributes$();
  $ret$$102_seriesItems$$inline_9028$$.$inlineStyle$ = $options$$287$$.style;
  $ret$$102_seriesItems$$inline_9028$$.scale = $options$$287$$.scale;
  $ret$$102_seriesItems$$inline_9028$$.$timeAxis$ = $options$$287$$.timeAxis;
  $ret$$102_seriesItems$$inline_9028$$.label = $options$$287$$.label;
  $ret$$102_seriesItems$$inline_9028$$.$emptyText$ = $options$$287$$.emptyText;
  $ret$$102_seriesItems$$inline_9028$$.$isIRAnimationEnabled$ = "auto" == $options$$287$$.animationOnDisplay;
  $ret$$102_seriesItems$$inline_9028$$.$isDCAnimationEnabled$ = "auto" == $options$$287$$.animationOnDataChange;
  $ret$$102_seriesItems$$inline_9028$$.$items$ = this.$_parseDataNode$($options$$287$$.timeline, $options$$287$$.index, $itemArray$$inline_9027$$, $oldItems$$1$$);
  $ret$$102_seriesItems$$inline_9028$$.$rtl$ = "false";
  return $ret$$102_seriesItems$$inline_9028$$
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$() {
  var $ret$$103$$ = {};
  $ret$$103$$.$origStart$ = this.$_startTime$;
  $ret$$103$$.$origEnd$ = this.$_endTime$;
  $ret$$103$$.orientation = "horizontal";
  $ret$$103$$.start = this.$_startTime$.getTime();
  $ret$$103$$.end = this.$_endTime$.getTime();
  return $ret$$103$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($timeline$$19$$, $seriesIndex$$126$$, $data$$111$$, $oldItems$$2$$) {
  var $treeNodes$$1$$ = [], $series$$42$$ = $timeline$$19$$.$_series$[$seriesIndex$$126$$];
  if($data$$111$$) {
    for(var $i$$890$$ = 0;$i$$890$$ < $data$$111$$.length;$i$$890$$++) {
      var $props$$19_startTime$$12$$ = this.$ParseNodeAttributes$($data$$111$$[$i$$890$$]);
      if($props$$19_startTime$$12$$) {
        if($series$$42$$.$_allowUpdates$) {
          var $item$$83_props$$inline_9031$$;
          a: {
            $item$$83_props$$inline_9031$$ = $props$$19_startTime$$12$$;
            var $add$$1_index$$252_items$$inline_9032$$ = $oldItems$$2$$;
            if($add$$1_index$$252_items$$inline_9032$$) {
              for(var $i$$inline_9033_j$$128$$ = 0;$i$$inline_9033_j$$128$$ < $add$$1_index$$252_items$$inline_9032$$.length;$i$$inline_9033_j$$128$$++) {
                var $item$$inline_9034$$ = $add$$1_index$$252_items$$inline_9032$$[$i$$inline_9033_j$$128$$];
                if($item$$83_props$$inline_9031$$.id == $item$$inline_9034$$.getId() && $item$$83_props$$inline_9031$$.title == $item$$inline_9034$$.$getTitle$() && $item$$83_props$$inline_9031$$.$desc$ == $item$$inline_9034$$.$_desc$ && $item$$83_props$$inline_9031$$.$thumbnail$ == $item$$inline_9034$$.$_thumbnail$) {
                  $item$$83_props$$inline_9031$$ = $item$$inline_9034$$;
                  break a
                }
              }
            }
            $item$$83_props$$inline_9031$$ = void 0
          }
          $item$$83_props$$inline_9031$$ ? ($add$$1_index$$252_items$$inline_9032$$ = D.$DvtArrayUtils$$.$getIndex$($oldItems$$2$$, $item$$83_props$$inline_9031$$), $oldItems$$2$$.splice($add$$1_index$$252_items$$inline_9032$$, 1), $item$$83_props$$inline_9031$$.$_spacing$ = null, $item$$83_props$$inline_9031$$.$_durationLevel$ = null, $item$$83_props$$inline_9031$$.$_loc$ = null, $item$$83_props$$inline_9031$$.$setSelected$(!1), $item$$83_props$$inline_9031$$.$_startTime$ = $props$$19_startTime$$12$$.startTime, 
          $item$$83_props$$inline_9031$$.$_endTime$ = $props$$19_startTime$$12$$.$endTime$) : ($item$$83_props$$inline_9031$$ = new D.$DvtTimelineSeriesNode$$($timeline$$19$$, $seriesIndex$$126$$, $props$$19_startTime$$12$$), $item$$83_props$$inline_9031$$.$setSelectable$(!0))
        }else {
          $item$$83_props$$inline_9031$$ = new D.$DvtTimelineSeriesNode$$($timeline$$19$$, $seriesIndex$$126$$, $props$$19_startTime$$12$$), $item$$83_props$$inline_9031$$.$setSelectable$(!0)
        }
        $props$$19_startTime$$12$$ = $item$$83_props$$inline_9031$$.$_startTime$;
        $add$$1_index$$252_items$$inline_9032$$ = !0;
        for($i$$inline_9033_j$$128$$ = 0;$i$$inline_9033_j$$128$$ < $treeNodes$$1$$.length;$i$$inline_9033_j$$128$$++) {
          if($props$$19_startTime$$12$$ < $treeNodes$$1$$[$i$$inline_9033_j$$128$$].$_startTime$) {
            $treeNodes$$1$$.splice($i$$inline_9033_j$$128$$, 0, $item$$83_props$$inline_9031$$);
            $add$$1_index$$252_items$$inline_9032$$ = !1;
            break
          }
        }
        $add$$1_index$$252_items$$inline_9032$$ && $treeNodes$$1$$.push($item$$83_props$$inline_9031$$)
      }
    }
  }
  return $treeNodes$$1$$
};
D.$JSCompiler_prototypeAlias$$.getDate = function $$JSCompiler_prototypeAlias$$$getDate$($date$$17$$) {
  return null == $date$$17$$ ? null : $date$$17$$.getTime ? $date$$17$$.getTime() : (0,window.isNaN)($date$$17$$) ? (new window.Date($date$$17$$)).getTime() + 0 : $date$$17$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($data$$112$$) {
  var $ret$$104$$ = {};
  $ret$$104$$.id = $data$$112$$.id;
  $ret$$104$$.$rowKey$ = $ret$$104$$.id;
  $ret$$104$$.startTime = this.getDate($data$$112$$.start);
  $ret$$104$$.$endTime$ = this.getDate($data$$112$$.end);
  if(($ret$$104$$.$endTime$ ? $ret$$104$$.$endTime$ : $ret$$104$$.startTime) < this.$_startTime$.getTime() || $ret$$104$$.startTime > this.$_endTime$.getTime()) {
    return null
  }
  $ret$$104$$.title = $data$$112$$.title;
  $ret$$104$$.$desc$ = $data$$112$$.description;
  $ret$$104$$.$thumbnail$ = $data$$112$$.thumbnail;
  $ret$$104$$.data = $data$$112$$;
  $ret$$104$$.style = $data$$112$$.style;
  $ret$$104$$.action = $data$$112$$.action;
  $ret$$104$$.$durationFillColor$ = $data$$112$$.durationFillColor;
  return $ret$$104$$
};
D.$DvtTimelineSeriesRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineSeriesRenderer$$, D.$DvtObj$$, "DvtTimelineSeriesRenderer");
D.$DvtTimelineSeriesRenderer$$.$renderSeries$ = function $$DvtTimelineSeriesRenderer$$$$renderSeries$$($series$$43$$, $block$$1_width$$184$$, $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$) {
  D.$DvtTimelineSeriesRenderer$$.$_renderBackground$($series$$43$$, $block$$1_width$$184$$, $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$);
  D.$DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$($series$$43$$);
  D.$DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$($series$$43$$, $series$$43$$.$_canvas$);
  D.$DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$($series$$43$$);
  if(!(null == $series$$43$$.$_items$ || 0 == $series$$43$$.$_items$.length)) {
    if(0 == $series$$43$$.$_blocks$.length) {
      $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$ = $series$$43$$.$getCtx$();
      $block$$1_width$$184$$ = new D.$DvtContainer$$($context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$, "itemBlock_" + $series$$43$$.$_fetchStartPos$ + "_" + $series$$43$$.$_fetchEndPos$);
      $block$$1_width$$184$$.$startPos$ = $series$$43$$.$_fetchStartPos$;
      $block$$1_width$$184$$.$endPos$ = $series$$43$$.$_fetchEndPos$;
      var $feelerBlock_i$$inline_9053$$ = new D.$DvtContainer$$($context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$, "feelers");
      $block$$1_width$$184$$.$addChild$($feelerBlock_i$$inline_9053$$);
      $block$$1_width$$184$$.$feelers$ = $feelerBlock_i$$inline_9053$$;
      $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$ = new D.$DvtContainer$$($context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$, "durations");
      $block$$1_width$$184$$.$addChild$($context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$);
      $block$$1_width$$184$$.$durations$ = $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$;
      $series$$43$$.$_canvas$.$addChild$($block$$1_width$$184$$);
      $series$$43$$.$_blocks$.push($block$$1_width$$184$$)
    }else {
      $block$$1_width$$184$$ = $series$$43$$.$_blocks$[0]
    }
    $series$$43$$.$prepareDurations$($series$$43$$.$_items$);
    $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$ = $series$$43$$.$_items$;
    $series$$43$$.$_initialSpacing$ = $series$$43$$.$isVertical$() ? 20 * (0 < $series$$43$$.$_maxDurationSize$ ? 1 : 0) + D.$DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$43$$.$_maxDurationSize$ : 20 + D.$DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$43$$.$_maxDurationSize$;
    $series$$43$$.$_layoutItems$ = [];
    for($feelerBlock_i$$inline_9053$$ = 0;$feelerBlock_i$$inline_9053$$ < $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$.length;$feelerBlock_i$$inline_9053$$++) {
      var $item$$inline_9054$$ = $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$[$feelerBlock_i$$inline_9053$$], $loc$$inline_9055$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$43$$.$_start$, $series$$43$$.$_end$, $item$$inline_9054$$.$_startTime$, $series$$43$$.$_length$), $add$$inline_9058_endTime$$inline_9056_span$$inline_9057$$ = $item$$inline_9054$$.$_endTime$;
      $add$$inline_9058_endTime$$inline_9056_span$$inline_9057$$ && $add$$inline_9058_endTime$$inline_9056_span$$inline_9057$$ != $item$$inline_9054$$.$_startTime$ && ($add$$inline_9058_endTime$$inline_9056_span$$inline_9057$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$43$$.$_start$, $series$$43$$.$_end$, $add$$inline_9058_endTime$$inline_9056_span$$inline_9057$$, $series$$43$$.$_length$) - $loc$$inline_9055$$, $loc$$inline_9055$$ += window.Math.min(D.$DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), 
      $add$$inline_9058_endTime$$inline_9056_span$$inline_9057$$ / 2));
      $item$$inline_9054$$.$_loc$ = $loc$$inline_9055$$;
      for(var $add$$inline_9058_endTime$$inline_9056_span$$inline_9057$$ = !0, $j$$inline_9059$$ = 0;$j$$inline_9059$$ < $series$$43$$.$_layoutItems$.length;$j$$inline_9059$$++) {
        if($loc$$inline_9055$$ < $series$$43$$.$_layoutItems$[$j$$inline_9059$$].$_loc$) {
          $series$$43$$.$_layoutItems$.splice($j$$inline_9059$$, 0, $item$$inline_9054$$);
          $add$$inline_9058_endTime$$inline_9056_span$$inline_9057$$ = !1;
          break
        }
      }
      $add$$inline_9058_endTime$$inline_9056_span$$inline_9057$$ && $series$$43$$.$_layoutItems$.push($item$$inline_9054$$)
    }
    for($feelerBlock_i$$inline_9053$$ = 0;$feelerBlock_i$$inline_9053$$ < $series$$43$$.$_layoutItems$.length;$feelerBlock_i$$inline_9053$$++) {
      $item$$inline_9054$$ = $series$$43$$.$_layoutItems$[$feelerBlock_i$$inline_9053$$], $loc$$inline_9055$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$43$$.$_start$, $series$$43$$.$_end$, $item$$inline_9054$$.$_startTime$, $series$$43$$.$_length$), $loc$$inline_9055$$ < $series$$43$$.$_fetchStartPos$ || $loc$$inline_9055$$ > $series$$43$$.$_fetchEndPos$ || D.$DvtTimelineSeriesItemRenderer$$.$initializeItem$($item$$inline_9054$$, $series$$43$$)
    }
    $series$$43$$.$_isInitialRender$ ? ($series$$43$$.$_frAnimationElems$ = $series$$43$$.$_isIRAnimationEnabled$ ? [] : null, $series$$43$$.$_mvAnimator$ = null, $series$$43$$.$_rmAnimationElems$ = null) : $series$$43$$.$_allowUpdates$ && $series$$43$$.$_isDCAnimationEnabled$ ? ($series$$43$$.$_frAnimationElems$ = [], $series$$43$$.$_mvAnimator$ = new D.$DvtAnimator$$($series$$43$$.$getCtx$(), D.$DvtTimelineStyleUtils$$.$getAnimationDuration$($series$$43$$.$Options$), 0, D.$DvtEasing$cubicInOut$$), 
    $series$$43$$.$_rmAnimationElems$ = []) : ($series$$43$$.$_frAnimationElems$ = null, $series$$43$$.$_mvAnimator$ = null, $series$$43$$.$_rmAnimationElems$ = null);
    $series$$43$$.$_hasMvAnimations$ = !1;
    $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$ = window.Math.max(0, $series$$43$$.$_maxOverflowValue$ - $series$$43$$.$_size$);
    $series$$43$$.$_overflowOffset$ = $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$;
    D.$DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$43$$, $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$);
    $series$$43$$.$_oldItems$ && D.$DvtTimelineSeriesRenderer$$.$_removeItems$($series$$43$$.$_oldItems$, $series$$43$$, $block$$1_width$$184$$, $series$$43$$.$_rmAnimationElems$);
    $series$$43$$.$_oldItems$ = null;
    $series$$43$$.$isVertical$() && $block$$1_width$$184$$.$feelers$.$removeChildren$();
    D.$DvtTimelineSeriesRenderer$$.$_renderItems$($series$$43$$.$_items$, $series$$43$$, $block$$1_width$$184$$, $series$$43$$.$_fetchStartPos$, $series$$43$$.$_fetchEndPos$, $context$$643_durationBlock_height$$162_items$$inline_9052_overflowOffset$$7$$, $series$$43$$.$_frAnimationElems$, $series$$43$$.$_mvAnimator$);
    D.$DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$43$$);
    D.$DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$43$$)
  }
};
D.$DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$ = function $$DvtTimelineSeriesRenderer$$$$updateSeriesForZoom$$($series$$44$$) {
  D.$DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$($series$$44$$.$_items$, $series$$44$$);
  D.$DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$44$$);
  D.$DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$44$$)
};
D.$DvtTimelineSeriesRenderer$$.$_renderBackground$ = function $$DvtTimelineSeriesRenderer$$$$_renderBackground$$($series$$45$$, $width$$185$$, $height$$163$$) {
  if($series$$45$$.$_background$) {
    var $addBackground$$ = !1;
    $series$$45$$.$_background$.$setWidth$($width$$185$$);
    $series$$45$$.$_background$.$setHeight$($height$$163$$)
  }else {
    $addBackground$$ = !0, $series$$45$$.$_background$ = new D.$DvtRect$$($series$$45$$.$getCtx$(), 0, 0, $width$$185$$, $height$$163$$, "bg")
  }
  $series$$45$$.$_background$.$setCSSStyle$($series$$45$$.$_style$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($series$$45$$.$_background$);
  $series$$45$$.$_background$.setCursor("move");
  $addBackground$$ && $series$$45$$.$addChild$($series$$45$$.$_background$)
};
D.$DvtTimelineSeriesRenderer$$.$_adjustBackground$ = function $$DvtTimelineSeriesRenderer$$$$_adjustBackground$$($series$$46$$, $overflowOffset$$8$$) {
  var $isRTL$$59$$ = (0,D.$DvtAgent$isRightToLeft$$)($series$$46$$.$getCtx$());
  0 < $overflowOffset$$8$$ && ($series$$46$$.$isVertical$() ? $series$$46$$.$_background$.$setWidth$($series$$46$$.$_maxOverflowValue$) : $series$$46$$.$_background$.$setHeight$($series$$46$$.$_maxOverflowValue$));
  if($series$$46$$.$isVertical$()) {
    if(!$series$$46$$.$_isInverted$ && !$isRTL$$59$$ || $series$$46$$.$_isInverted$ && $isRTL$$59$$) {
      $series$$46$$.$_background$.$setTranslateX$(-$overflowOffset$$8$$), null != $series$$46$$.$_canvas$ && $series$$46$$.$_canvas$.$setTranslateX$(0 - $overflowOffset$$8$$)
    }
  }else {
    $series$$46$$.$_isInverted$ || ($series$$46$$.$_background$.$setTranslateY$(-$overflowOffset$$8$$), null != $series$$46$$.$_canvas$ && $series$$46$$.$_canvas$.$setTranslateY$(0 - $overflowOffset$$8$$))
  }
};
D.$DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineSeriesRenderer$$$$_renderScrollableCanvas$$($series$$47$$) {
  $series$$47$$.$_canvas$ ? ($series$$47$$.$_canvasOffsetX$ = $series$$47$$.$_canvas$.$getTranslateX$(), $series$$47$$.$_canvasOffsetY$ = $series$$47$$.$_canvas$.$getTranslateY$(), $series$$47$$.$_canvas$.$setTranslateX$(0), $series$$47$$.$_canvas$.$setTranslateY$(0)) : ($series$$47$$.$_canvas$ = new D.$DvtContainer$$($series$$47$$.$getCtx$(), "canvas"), $series$$47$$.$addChild$($series$$47$$.$_canvas$))
};
D.$DvtTimelineSeriesRenderer$$.$_renderItems$ = function $$DvtTimelineSeriesRenderer$$$$_renderItems$$($items$$44$$, $series$$48$$, $container$$207$$, $startPos$$5$$, $endPos$$8$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$) {
  for(var $i$$892$$ = 0;$i$$892$$ < $series$$48$$.$_layoutItems$.length;$i$$892$$++) {
    var $item$$85$$ = $series$$48$$.$_layoutItems$[$i$$892$$], $loc$$6$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$48$$.$_start$, $series$$48$$.$_end$, $item$$85$$.$_startTime$, $series$$48$$.$_length$);
    $loc$$6$$ < $startPos$$5$$ || $loc$$6$$ > $endPos$$8$$ || D.$DvtTimelineSeriesItemRenderer$$.$renderItem$($item$$85$$, $series$$48$$, $container$$207$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$)
  }
  if(D.$DvtTimeUtils$$.$supportsTouch$()) {
    for($i$$892$$ = 0;$i$$892$$ < $series$$48$$.$_layoutItems$.length - 1;$i$$892$$++) {
      $item$$85$$ = $series$$48$$.$_layoutItems$[$i$$892$$], (0,D.$JSCompiler_StaticMethods__setAriaProperty$$)($item$$85$$.$_displayable$, "flowto", "_bt_" + $series$$48$$.$_layoutItems$[$i$$892$$ + 1].getId())
    }
  }
  D.$DvtTimelineSeriesRenderer$$.$_renderDurations$($items$$44$$, $series$$48$$, $container$$207$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$)
};
D.$DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$ = function $$DvtTimelineSeriesRenderer$$$$_updateItemsForZoom$$($items$$45$$, $series$$49$$) {
  if(!(null == $items$$45$$ || 0 == $items$$45$$.length)) {
    var $endPos$$9_i$$893$$ = $series$$49$$.$_fetchEndPos$, $block$$2_item$$86$$ = $series$$49$$.$_blocks$[0];
    $block$$2_item$$86$$.$startPos$ = $series$$49$$.$_fetchStartPos$;
    $block$$2_item$$86$$.$endPos$ = $endPos$$9_i$$893$$;
    $series$$49$$.$prepareDurations$($items$$45$$);
    $series$$49$$.$_initialSpacing$ = $series$$49$$.$isVertical$() ? 20 * (0 < $series$$49$$.$_maxDurationSize$ ? 1 : 0) + D.$DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$49$$.$_maxDurationSize$ : 20 + D.$DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$49$$.$_maxDurationSize$;
    for($endPos$$9_i$$893$$ = 0;$endPos$$9_i$$893$$ < $items$$45$$.length;$endPos$$9_i$$893$$++) {
      var $block$$2_item$$86$$ = $items$$45$$[$endPos$$9_i$$893$$], $span$$1_startTime$$13$$ = $block$$2_item$$86$$.$_startTime$, $itemTime_loc$$7_overflowOffset$$10$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$49$$.$_start$, $series$$49$$.$_end$, $span$$1_startTime$$13$$, $series$$49$$.$_length$), $endTime$$13$$ = $block$$2_item$$86$$.$_endTime$;
      $endTime$$13$$ && $endTime$$13$$ != $span$$1_startTime$$13$$ && ($span$$1_startTime$$13$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$49$$.$_start$, $series$$49$$.$_end$, $endTime$$13$$, $series$$49$$.$_length$) - $itemTime_loc$$7_overflowOffset$$10$$, $itemTime_loc$$7_overflowOffset$$10$$ += window.Math.min(D.$DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $span$$1_startTime$$13$$ / 2));
      $block$$2_item$$86$$.$_loc$ = $itemTime_loc$$7_overflowOffset$$10$$;
      $block$$2_item$$86$$.$_spacing$ = null
    }
    for($endPos$$9_i$$893$$ = 0;$endPos$$9_i$$893$$ < $items$$45$$.length;$endPos$$9_i$$893$$++) {
      $block$$2_item$$86$$ = $items$$45$$[$endPos$$9_i$$893$$], $itemTime_loc$$7_overflowOffset$$10$$ = $block$$2_item$$86$$.$_startTime$, $itemTime_loc$$7_overflowOffset$$10$$ < $series$$49$$.$_start$ || $itemTime_loc$$7_overflowOffset$$10$$ > $series$$49$$.$_end$ || D.$DvtTimelineSeriesItemRenderer$$.$_updateBubble$($block$$2_item$$86$$, $series$$49$$)
    }
    $itemTime_loc$$7_overflowOffset$$10$$ = window.Math.max(0, $series$$49$$.$_maxOverflowValue$ - $series$$49$$.$_size$);
    D.$DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$49$$, $itemTime_loc$$7_overflowOffset$$10$$);
    for($endPos$$9_i$$893$$ = 0;$endPos$$9_i$$893$$ < $items$$45$$.length;$endPos$$9_i$$893$$++) {
      $block$$2_item$$86$$ = $items$$45$$[$endPos$$9_i$$893$$], D.$DvtTimelineSeriesItemRenderer$$.$_displayBubble$($block$$2_item$$86$$, $series$$49$$, $itemTime_loc$$7_overflowOffset$$10$$, null), D.$DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($block$$2_item$$86$$, $series$$49$$, $itemTime_loc$$7_overflowOffset$$10$$, null), D.$DvtTimelineSeriesItemRenderer$$.$_updateDuration$($block$$2_item$$86$$, $series$$49$$, $itemTime_loc$$7_overflowOffset$$10$$, null)
    }
  }
};
D.$DvtTimelineSeriesRenderer$$.$_renderDurations$ = function $$DvtTimelineSeriesRenderer$$$$_renderDurations$$($items$$46$$, $series$$50$$, $container$$208_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$) {
  $container$$208_durationBlock$$1$$ = $container$$208_durationBlock$$1$$.$durations$;
  for(var $i$$894$$ = $series$$50$$.$_maxDurationSize$;0 < $i$$894$$;$i$$894$$--) {
    for(var $j$$129$$ = 0;$j$$129$$ < $items$$46$$.length;$j$$129$$++) {
      var $item$$87$$ = $items$$46$$[$j$$129$$], $startTime$$14$$ = $item$$87$$.$_startTime$, $endTime$$14$$ = $item$$87$$.$_endTime$;
      $endTime$$14$$ && ($endTime$$14$$ != $startTime$$14$$ && $i$$894$$ == $item$$87$$.$_durationLevel$) && D.$DvtTimelineSeriesItemRenderer$$.$renderDuration$($item$$87$$, $series$$50$$, $container$$208_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$)
    }
  }
};
D.$DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTicks$$($series$$51$$) {
  null == $series$$51$$.$_seriesTicks$ ? ($series$$51$$.$_seriesTicks$ = new D.$DvtContainer$$($series$$51$$.$getCtx$()), $series$$51$$.$_canvas$.$addChild$($series$$51$$.$_seriesTicks$)) : ($series$$51$$.$_seriesTicks$.$removeChildren$(), $series$$51$$.$_seriesTicksArray$ = []);
  if($series$$51$$.$_scale$ && $series$$51$$.$_timeAxis$) {
    var $separatorStyle$$1$$ = new D.$DvtCSSStyle$$(D.$DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$());
    if($series$$51$$.$_axisStyleDefaults$) {
      var $separatorColor$$1$$ = $series$$51$$.$_axisStyleDefaults$.separatorColor;
      $separatorColor$$1$$ && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($separatorStyle$$1$$, "color:" + $separatorColor$$1$$ + ";")
    }
    $series$$51$$.$_separatorStroke$ = new D.$DvtSolidStroke$$($separatorStyle$$1$$.$getStyle$("color"));
    $series$$51$$.$_separatorStroke$.$setStyle$(1, 3);
    D.$DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$($series$$51$$, $series$$51$$.$_fetchStartPos$, $series$$51$$.$_fetchEndPos$, $series$$51$$.$_seriesTicks$)
  }
};
D.$DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_updateSeriesTicks$$($series$$52$$) {
  for(var $isRTL$$60$$ = (0,D.$DvtAgent$isRightToLeft$$)($series$$52$$.$getCtx$()), $i$$895$$ = 0;$i$$895$$ < $series$$52$$.$_seriesTicksArray$.length;$i$$895$$++) {
    var $tick$$ = $series$$52$$.$_seriesTicksArray$[$i$$895$$], $pos$$78$$ = !$series$$52$$.$isVertical$() && $isRTL$$60$$ ? $series$$52$$.$_length$ - D.$DvtTimeUtils$$.$getDatePosition$($series$$52$$.$_start$, $series$$52$$.$_end$, $tick$$.time, $series$$52$$.$_length$) : D.$DvtTimeUtils$$.$getDatePosition$($series$$52$$.$_start$, $series$$52$$.$_end$, $tick$$.time, $series$$52$$.$_length$);
    $series$$52$$.$isVertical$() ? ($tick$$.$setX1$(0), $tick$$.$setY1$($pos$$78$$), $tick$$.$setX2$($series$$52$$.$_maxOverflowValue$), $tick$$.$setY2$($pos$$78$$)) : ($tick$$.$setX1$($pos$$78$$), $tick$$.$setY1$(0), $tick$$.$setX2$($pos$$78$$), $tick$$.$setY2$($series$$52$$.$_maxOverflowValue$))
  }
};
D.$DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTimeAxis$$($series$$53$$, $currentDate$$2_startDate$$2_startPos$$7$$, $endPos$$10$$, $container$$209$$) {
  var $isRTL$$61$$ = (0,D.$DvtAgent$isRightToLeft$$)($series$$53$$.$getCtx$()), $start$$54$$ = $series$$53$$.$_start$, $end$$38$$ = $series$$53$$.$_end$;
  $currentDate$$2_startDate$$2_startPos$$7$$ = D.$DvtTimeUtils$$.$getPositionDate$($start$$54$$, $end$$38$$, $currentDate$$2_startDate$$2_startPos$$7$$, $series$$53$$.$_length$);
  $currentDate$$2_startDate$$2_startPos$$7$$ = $series$$53$$.$_timeAxis$.$adjustDate$($currentDate$$2_startDate$$2_startPos$$7$$);
  for(var $currentPos$$3_tickElem$$1$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$54$$, $end$$38$$, $currentDate$$2_startDate$$2_startPos$$7$$, $series$$53$$.$_length$);$currentPos$$3_tickElem$$1$$ < $endPos$$10$$;) {
    var $nextDate$$2$$ = $series$$53$$.$_timeAxis$.$getNextDate$($currentDate$$2_startDate$$2_startPos$$7$$.getTime()), $next_time_pos$$3$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$54$$, $end$$38$$, $nextDate$$2$$, $series$$53$$.$_length$), $pos$$79_y2$$44$$ = !$series$$53$$.$isVertical$() && $isRTL$$61$$ ? $series$$53$$.$_length$ - $currentPos$$3_tickElem$$1$$ : $currentPos$$3_tickElem$$1$$;
    if($series$$53$$.$isVertical$()) {
      var $x1$$57$$ = 0, $y1$$47$$ = $pos$$79_y2$$44$$, $x2$$54$$ = $series$$53$$.$_maxOverflowValue$
    }else {
      $x1$$57$$ = $pos$$79_y2$$44$$, $y1$$47$$ = 0, $x2$$54$$ = $pos$$79_y2$$44$$, $pos$$79_y2$$44$$ = $series$$53$$.$_maxOverflowValue$
    }
    $currentPos$$3_tickElem$$1$$ = $series$$53$$.$addTick$($container$$209$$, $x1$$57$$, $x2$$54$$, $y1$$47$$, $pos$$79_y2$$44$$, $series$$53$$.$_separatorStroke$, "o_tick" + $currentPos$$3_tickElem$$1$$);
    $currentPos$$3_tickElem$$1$$.time = $currentDate$$2_startDate$$2_startPos$$7$$.getTime();
    $series$$53$$.$_seriesTicksArray$.push($currentPos$$3_tickElem$$1$$);
    $currentDate$$2_startDate$$2_startPos$$7$$ = $nextDate$$2$$;
    $currentPos$$3_tickElem$$1$$ = $next_time_pos$$3$$
  }
};
D.$DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_renderReferenceObjects$$($series$$54$$, $container$$210$$) {
  var $context$$647$$ = $series$$54$$.$getCtx$(), $isRTL$$62$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$647$$);
  null == $series$$54$$.$_refObjectsContainer$ && ($series$$54$$.$_refObjectsContainer$ = new D.$DvtContainer$$($context$$647$$), $container$$210$$.$addChild$($series$$54$$.$_refObjectsContainer$));
  var $referenceObjects$$4$$ = $series$$54$$.$_referenceObjects$;
  if($referenceObjects$$4$$) {
    for(var $maxRefObjects$$ = window.Math.min(1, $referenceObjects$$4$$.length), $i$$896$$ = 0;$i$$896$$ < $maxRefObjects$$;$i$$896$$++) {
      var $refObject$$ = $referenceObjects$$4$$[$i$$896$$];
      if($refObject$$) {
        var $pos$$80_ref$$2$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$54$$.$_start$, $series$$54$$.$_end$, $refObject$$, $series$$54$$.$_length$);
        if(0 == $series$$54$$.$_renderedReferenceObjects$.length) {
          $series$$54$$.$isVertical$() ? $pos$$80_ref$$2$$ = new D.$DvtLine$$($context$$647$$, 0, $pos$$80_ref$$2$$, $series$$54$$.$_maxOverflowValue$, $pos$$80_ref$$2$$, "zoomOrder[i]") : ($isRTL$$62$$ && ($pos$$80_ref$$2$$ = $series$$54$$.$_length$ - $pos$$80_ref$$2$$), $pos$$80_ref$$2$$ = new D.$DvtLine$$($context$$647$$, $pos$$80_ref$$2$$, 0, $pos$$80_ref$$2$$, $series$$54$$.$_maxOverflowValue$, "zoomOrder[i]"));
          var $referenceObjectStroke$$ = new D.$DvtSolidStroke$$(D.$DvtTimelineStyleUtils$$.$getReferenceObjectColor$($series$$54$$.$Options$));
          $pos$$80_ref$$2$$.$setStroke$($referenceObjectStroke$$);
          (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($pos$$80_ref$$2$$);
          $pos$$80_ref$$2$$.$date$ = $refObject$$;
          $series$$54$$.$_refObjectsContainer$.$addChild$($pos$$80_ref$$2$$);
          $series$$54$$.$_renderedReferenceObjects$[$i$$896$$] = $pos$$80_ref$$2$$
        }
      }
    }
  }else {
    $series$$54$$.$_refObjectsContainer$.$removeChildren$(), $series$$54$$.$_renderedReferenceObjects$ = []
  }
};
D.$DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_updateReferenceObjects$$($series$$55$$) {
  for(var $isRTL$$63$$ = (0,D.$DvtAgent$isRightToLeft$$)($series$$55$$.$getCtx$()), $i$$897$$ = 0;$i$$897$$ < $series$$55$$.$_renderedReferenceObjects$.length;$i$$897$$++) {
    var $ref$$3$$ = $series$$55$$.$_renderedReferenceObjects$[$i$$897$$], $pos$$81$$ = D.$DvtTimeUtils$$.$getDatePosition$($series$$55$$.$_start$, $series$$55$$.$_end$, $ref$$3$$.$date$, $series$$55$$.$_length$);
    $series$$55$$.$isVertical$() ? ($ref$$3$$.$setX1$(0), $ref$$3$$.$setY1$($pos$$81$$), $ref$$3$$.$setX2$($series$$55$$.$_maxOverflowValue$), $ref$$3$$.$setY2$($pos$$81$$)) : ($isRTL$$63$$ && ($pos$$81$$ = $series$$55$$.$_length$ - $pos$$81$$), $ref$$3$$.$setX1$($pos$$81$$), $ref$$3$$.$setY1$(0), $ref$$3$$.$setX2$($pos$$81$$), $ref$$3$$.$setY2$($series$$55$$.$_maxOverflowValue$))
  }
};
D.$DvtTimelineSeriesRenderer$$.$_removeItems$ = function $$DvtTimelineSeriesRenderer$$$$_removeItems$$($items$$47$$, $series$$56$$, $container$$211$$, $animationElems$$3_i$$898$$) {
  if($animationElems$$3_i$$898$$) {
    D.$DvtTimelineSeriesRenderer$$.$_animateItemRemoval$($items$$47$$, $series$$56$$, $animationElems$$3_i$$898$$)
  }else {
    for($animationElems$$3_i$$898$$ = 0;$animationElems$$3_i$$898$$ < $items$$47$$.length;$animationElems$$3_i$$898$$++) {
      var $item$$88$$ = $items$$47$$[$animationElems$$3_i$$898$$];
      $container$$211$$.removeChild($item$$88$$.$_displayable$);
      $series$$56$$.$isVertical$() || $container$$211$$.$feelers$.removeChild($item$$88$$.$_feeler$);
      var $startTime$$15$$ = $item$$88$$.$_startTime$, $endTime$$15$$ = $item$$88$$.$_endTime$;
      $endTime$$15$$ && $endTime$$15$$ != $startTime$$15$$ && $container$$211$$.$durations$.removeChild($item$$88$$.$_durationBar$)
    }
  }
};
D.$DvtTimelineSeriesRenderer$$.$_animateItemRemoval$ = function $$DvtTimelineSeriesRenderer$$$$_animateItemRemoval$$($items$$48$$, $series$$57$$, $animationElems$$4$$) {
  for(var $i$$899$$ = 0;$i$$899$$ < $items$$48$$.length;$i$$899$$++) {
    var $durationBar$$2_item$$89$$ = $items$$48$$[$i$$899$$], $bubble$$3_feeler$$6_startTime$$16$$ = $durationBar$$2_item$$89$$.$_displayable$;
    $series$$57$$.$isVertical$() ? $bubble$$3_feeler$$6_startTime$$16$$.$setTranslateX$($bubble$$3_feeler$$6_startTime$$16$$.$getTranslateX$() + $series$$57$$.$_canvasOffsetX$ + $series$$57$$.$_overflowOffset$) : $bubble$$3_feeler$$6_startTime$$16$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$16$$.$getTranslateY$() + $series$$57$$.$_canvasOffsetY$ + $series$$57$$.$_overflowOffset$);
    $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$16$$);
    $series$$57$$.$isVertical$() || ($bubble$$3_feeler$$6_startTime$$16$$ = $durationBar$$2_item$$89$$.$_feeler$, $bubble$$3_feeler$$6_startTime$$16$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$16$$.$getTranslateY$() + $series$$57$$.$_canvasOffsetY$ + $series$$57$$.$_overflowOffset$), $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$16$$));
    var $bubble$$3_feeler$$6_startTime$$16$$ = $durationBar$$2_item$$89$$.$_startTime$, $endTime$$16$$ = $durationBar$$2_item$$89$$.$_endTime$;
    $endTime$$16$$ && $endTime$$16$$ != $bubble$$3_feeler$$6_startTime$$16$$ && ($durationBar$$2_item$$89$$ = $durationBar$$2_item$$89$$.$_durationBar$, $series$$57$$.$isVertical$() ? $durationBar$$2_item$$89$$.$setTranslateX$($durationBar$$2_item$$89$$.$getTranslateX$() + $series$$57$$.$_canvasOffsetX$ + $series$$57$$.$_overflowOffset$) : $durationBar$$2_item$$89$$.$setTranslateY$($durationBar$$2_item$$89$$.$getTranslateY$() + $series$$57$$.$_canvasOffsetY$ + $series$$57$$.$_overflowOffset$), $animationElems$$4$$.push($durationBar$$2_item$$89$$))
  }
};
D.$DvtTimelineViewportChangeEvent$$ = function $$DvtTimelineViewportChangeEvent$$$($type$$249$$, $viewportStart$$1$$, $viewportEnd$$1$$, $minorAxisScale$$) {
  D.$DvtTimelineViewportChangeEvent$$.$superclass$.Init.call(this, $type$$249$$);
  this.$_viewportStart$ = $viewportStart$$1$$;
  this.$_viewportEnd$ = $viewportEnd$$1$$;
  this.$_minorAxisScale$ = $minorAxisScale$$
};
(0,D.$goog$exportPath_$$)("DvtTimelineViewportChangeEvent", D.$DvtTimelineViewportChangeEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineViewportChangeEvent$$, D.$DvtBaseComponentEvent$$, "DvtTimelineViewportChangeEvent");
D.$DvtTimelineViewportChangeEvent$$.TYPE = "viewportChange";
D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportStart$ = (0,D.$JSCompiler_get$$)("$_viewportStart$");
D.$DvtTimelineViewportChangeEvent$$.prototype.getViewportStart = D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportStart$;
D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportEnd$ = (0,D.$JSCompiler_get$$)("$_viewportEnd$");
D.$DvtTimelineViewportChangeEvent$$.prototype.getViewportEnd = D.$DvtTimelineViewportChangeEvent$$.prototype.$getViewportEnd$;
D.$DvtTimelineViewportChangeEvent$$.prototype.$getMinorAxisScale$ = (0,D.$JSCompiler_get$$)("$_minorAxisScale$");
D.$DvtTimelineViewportChangeEvent$$.prototype.getMinorAxisScale = D.$DvtTimelineViewportChangeEvent$$.prototype.$getMinorAxisScale$;

  return D;
});